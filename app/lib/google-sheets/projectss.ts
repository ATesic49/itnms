import "server-only";

import Papa from "papaparse";

import { researchPositions, type Employee } from "@/app/types/employee";
import { parse } from "path";
import { Project } from "@/app/types/projects";
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

type ParsedSheetRow = {
	"naziv projekta"?: string;
	akronim?: string;
	"tim saradnika iz itnms"?: string;
	apstrakt?: string;
	"link ka projektu"?: string;
	"nio koje učestvuju"?: string;
	finansijer?: string;
	"period trajanja"?: string;
	"naziv projekta[eng]"?: string;
	"akronim[eng]"?: string;
	"apstrakt[eng]"?: string;
	"nio koje ucestvuju[eng]"?: string;
	"finansijer[eng]"?: string;
	status: string;
};

function normalizeBoolean(value?: string): boolean {
	const normalizedValue = value?.trim().toLocaleLowerCase("sr");

	return ["da", "true", "1", "yes"].includes(normalizedValue ?? "");
}
export function isZavrsen(value: string): boolean {
	return value.includes("-");
}
function mapRowToEmployee(row: ParsedSheetRow, index: number): Project | null {
	const zavrsenLiJe = isZavrsen(row["period trajanja"]?.trim() || "a");
	return {
		projectName: row["naziv projekta"]?.trim() || "Zaposleni",
		akronim: row.akronim?.trim() || "",
		timSaradnika: row["tim saradnika iz itnms"]?.trim() || "",
		apstrakt: row.apstrakt?.trim() || "",
		status: row.status.trim(),
		link: row["link ka projektu"]?.trim() || undefined,
		nio: row["nio koje učestvuju"]?.trim() || undefined,
		finansijer: row["finansijer"]?.trim() || undefined,
		period: row["period trajanja"]?.trim() || undefined,
		slug: createEmployeeSlug(
			row["naziv projekta"]?.trim() || "",
			row.akronim?.trim() || "",
		),
	};
}

export async function getProjects(): Promise<Project[]> {
	const csvUrl = process.env.GOOGLE_SHEETS_PROJECTS_CSV_URL;

	if (!csvUrl) {
		throw new Error(
			"Nedostaje GOOGLE_SHEETS_PROJECTS_CSV_URL u .env.local fajlu.",
		);
	}

	const response = await fetch(csvUrl, {
		next: {
			revalidate: 300,
			tags: ["projectss"],
		},
	});

	if (!response.ok) {
		throw new Error(`Google Sheets zahtev nije uspeo: ${response.status}`);
	}

	const csvText = await response.text();
	// const parsed = Papa.parse(csvText);
	// console.log("pocetak", parsed.data[0], "text");
	// console.log(parsed.data[0], "parsed");
	// return "a";
	const parsed = Papa.parse<ParsedSheetRow>(csvText, {
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
		.filter((employee): employee is Project => employee !== null)
		.sort((first, second) => {
			return first?.projectName.localeCompare(second?.projectName, "sr");
		});
}
