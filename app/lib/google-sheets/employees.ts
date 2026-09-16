import "server-only";

import Papa from "papaparse";

import { researchPositions, type Employee } from "@/app/types/employee";

export type EmployeeLanguage = "sr" | "en";

export function createEmployeeSlug(firstName: string, lastName: string) {
	return `${firstName}-${lastName}`
		.toLocaleLowerCase("sr")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "dj")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export function isResearchPosition(position: string): boolean {
	return researchPositions.includes(
		position as (typeof researchPositions)[number],
	);
}

type EmployeeSheetRow = {
	ime?: string;
	prezime?: string;

	"naučno zvanje"?: string;
	"oblast interesovanja"?: string;
	"akademsko obrazovanje"?: string;

	"naučno zvanje[eng]"?: string;
	"oblast interesovanja[eng]"?: string;
	"akademsko obrazovanje[eng]"?: string;

	"pozicija/position"?: string;

	"orcid link"?: string;
	"enauka link"?: string;
	"skopus link"?: string;
	"imejl adresa"?: string;
};

function getLocalizedValue(
	serbianValue: string | undefined,
	englishValue: string | undefined,
	lang: EmployeeLanguage,
): string | undefined {
	const sr = serbianValue?.trim();
	const en = englishValue?.trim();

	if (lang === "en") {
		return en || sr || undefined;
	}

	return sr || undefined;
}

function mapRowToEmployee(
	row: EmployeeSheetRow,
	lang: EmployeeLanguage,
): Employee | null {
	const firstName = row.ime?.trim() ?? "";
	const lastName = row.prezime?.trim() ?? "";

	if (!firstName || !lastName) {
		return null;
	}

	const position = row["pozicija/position"]?.trim() || "Zaposleni";

	return {
		firstName,
		lastName,

		// Poziciju ne prevodimo.
		position,

		naucnoZvanje: getLocalizedValue(
			row["naučno zvanje"],
			row["naučno zvanje[eng]"],
			lang,
		),

		oblastInteresovanja: getLocalizedValue(
			row["oblast interesovanja"],
			row["oblast interesovanja[eng]"],
			lang,
		),

		akademskoObrazovanje: getLocalizedValue(
			row["akademsko obrazovanje"],
			row["akademsko obrazovanje[eng]"],
			lang,
		),

		email: row["imejl adresa"]?.trim() || undefined,

		orcidLink: row["orcid link"]?.trim() || undefined,

		enaukaLink: row["enauka link"]?.trim() || undefined,

		skopusLink: row["skopus link"]?.trim() || undefined,

		slug: createEmployeeSlug(firstName, lastName),

		jeIstrazivac: isResearchPosition(position),
	};
}

export async function getEmployees(
	lang: EmployeeLanguage = "sr",
): Promise<Employee[]> {
	const csvUrl = process.env.GOOGLE_SHEETS_EMPLOYEES_CSV_URL;

	if (!csvUrl) {
		throw new Error(
			"Nedostaje GOOGLE_SHEETS_EMPLOYEES_CSV_URL u .env.local fajlu.",
		);
	}

	const response = await fetch(csvUrl, {
		next: {
			revalidate: 300,
			tags: ["employees"],
		},
	});

	if (!response.ok) {
		throw new Error(`Google Sheets zahtev nije uspeo: ${response.status}`);
	}

	const csvText = await response.text();

	const parsed = Papa.parse<EmployeeSheetRow>(csvText, {
		header: true,
		skipEmptyLines: true,

		transformHeader: (header) => header.trim().toLocaleLowerCase("sr"),
	});

	if (parsed.errors.length > 0) {
		console.error("Greške pri obradi Google Sheeta:", parsed.errors);

		throw new Error("Podaci zaposlenih nisu pravilno formatirani.");
	}

	return parsed.data
		.map((row) => mapRowToEmployee(row, lang))
		.filter((employee): employee is Employee => employee !== null)
		.sort((first, second) =>
			first.lastName.localeCompare(
				second.lastName,
				lang === "en" ? "en" : "sr",
			),
		);
}
