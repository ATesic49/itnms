import "server-only";

import Papa from "papaparse";

import { researchPositions, type Employee } from "@/app/types/employee";
import { parse } from "path";
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
	"orcid link"?: string;
	"enauka link"?: string;
	"skopus link"?: string;
	"imejl adresa"?: string;
	"akademsko obrazovanje"?: string;
	naučnoZvanje_eng?: string;
	oblastInteresovanja_eng?: string;
	akademskoObrazovanje_eng?: string;
	"pozicija/position"?: string;
};

function normalizeBoolean(value?: string): boolean {
	const normalizedValue = value?.trim().toLocaleLowerCase("sr");

	return ["da", "true", "1", "yes"].includes(normalizedValue ?? "");
}

// function createSlug(firstName: string, lastName: string): string {
// 	return `${firstName}-${lastName}`
// 		.toLocaleLowerCase("sr")
// 		.normalize("NFD")
// 		.replace(/[\u0300-\u036f]/g, "")
// 		.replace(/đ/g, "dj")
// 		.replace(/[^a-z0-9]+/g, "-")
// 		.replace(/^-|-$/g, "");
// }

function mapRowToEmployee(
	row: EmployeeSheetRow,
	index: number,
): Employee | null {
	const firstName = row.ime?.trim() ?? "";
	const lastName = row.prezime?.trim() ?? "";

	if (!firstName || !lastName) {
		return null;
	}

	return {
		firstName,
		lastName,
		position: row["pozicija/position"]?.trim() || "Zaposleni",
		oblastInteresovanja: row["oblast interesovanja"]?.trim() || undefined,
		akademskoObrazovanje: row["akademsko obrazovanje"]?.trim() || undefined,
		naucnoZvanje: row["naučno zvanje"]?.trim() || undefined,
		email: row["imejl adresa"]?.trim() || undefined,
		orcidLink: row["orcid link"]?.trim() || undefined,
		enaukaLink: row["enauka link"]?.trim() || undefined,
		skopusLink: row["skopus link"]?.trim() || undefined,
		slug: createEmployeeSlug(firstName, lastName),
		jeIstrazivac: isResearchPosition(row["pozicija/position"]?.trim() || ""),
	};
}

export async function getEmployees(): Promise<Employee[]> {
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
	// const parsed = Papa.parse(csvText);
	// console.log("pocetak", parsed.data[0], "text");
	const parsed = Papa.parse<EmployeeSheetRow>(csvText, {
		header: true,
		skipEmptyLines: true,
		transformHeader: (header) => header.trim().toLocaleLowerCase("sr"),
	});
	if (parsed.errors.length > 0) {
		console.error("Greške pri obradi Google Sheeta:", parsed.errors);

		throw new Error("Podaci zaposlenih nisu pravilno formatirani.");
	}
	// console.log(parsed.data);
	return parsed.data
		.map(mapRowToEmployee)
		.filter((employee): employee is Employee => employee !== null)
		.sort((first, second) => {
			return first.lastName.localeCompare(second.lastName, "sr");
		});
}
