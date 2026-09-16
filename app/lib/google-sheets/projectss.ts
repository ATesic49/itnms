import "server-only";

import Papa from "papaparse";

import { type Project } from "@/app/types/projects";

export type ProjectLanguage = "sr" | "en";

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

	status?: string;
};

function createProjectSlug(projectName: string, acronym: string): string {
	return `${projectName}-${acronym}`
		.toLocaleLowerCase("sr")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "dj")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

function getLocalizedValue(
	serbianValue: string | undefined,
	englishValue: string | undefined,
	lang: ProjectLanguage,
): string | undefined {
	const sr = serbianValue?.trim();
	const en = englishValue?.trim();

	if (lang === "en") {
		return en || sr || undefined;
	}

	return sr || undefined;
}

function mapRowToProject(
	row: ParsedSheetRow,
	lang: ProjectLanguage,
): Project | null {
	const srProjectName = row["naziv projekta"]?.trim() ?? "";

	if (!srProjectName) {
		return null;
	}

	const srAcronym = row.akronim?.trim() ?? "";

	const projectName =
		getLocalizedValue(
			row["naziv projekta"],
			row["naziv projekta[eng]"],
			lang,
		) ?? srProjectName;

	const akronim =
		getLocalizedValue(row.akronim, row["akronim[eng]"], lang) ?? "";

	return {
		projectName,

		akronim,

		timSaradnika: row["tim saradnika iz itnms"]?.trim() || "",

		apstrakt: getLocalizedValue(row.apstrakt, row["apstrakt[eng]"], lang) ?? "",

		/*
		 * Status ne prevodimo ovde.
		 * U Sheet-u ostaje npr. "Aktivan" / "Završen",
		 * a ProjectPageContent prevodi samo prikaz.
		 */
		status: row.status?.trim() || "",

		link: row["link ka projektu"]?.trim() || undefined,

		nio: getLocalizedValue(
			row["nio koje učestvuju"],
			row["nio koje ucestvuju[eng]"],
			lang,
		),

		finansijer: getLocalizedValue(row.finansijer, row["finansijer[eng]"], lang),

		/*
		 * Period je isti u oba jezika.
		 */
		period: row["period trajanja"]?.trim() || undefined,

		/*
		 * Slug namerno pravimo od SR vrednosti,
		 * kako se ne bi menjao kada promenimo jezik.
		 */
		slug: createProjectSlug(srProjectName, srAcronym),
	};
}

function getStartYear(period?: string): number {
	if (!period) {
		return 0;
	}

	const match = period.match(/\d{4}/);

	return match ? Number(match[0]) : 0;
}

export async function getProjects(
	lang: ProjectLanguage = "sr",
): Promise<Project[]> {
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

	const parsed = Papa.parse<ParsedSheetRow>(csvText, {
		header: true,
		skipEmptyLines: true,

		transformHeader: (header) => header.trim().toLocaleLowerCase("sr"),
	});

	if (parsed.errors.length > 0) {
		console.error("Greške pri obradi Google Sheeta:", parsed.errors);

		throw new Error("Podaci projekata nisu pravilno formatirani.");
	}

	return parsed.data
		.map((row) => mapRowToProject(row, lang))
		.filter((project): project is Project => project !== null)
		.sort(
			(first, second) =>
				getStartYear(second.period) - getStartYear(first.period),
		);
}
