import Papa from "papaparse";

import type { Language } from "@/app/lib/language/dictionary";

export type IndustrialProjectCategory =
	| "mining-project"
	| "technical-control"
	| "elaborate"
	| "study";

export type IndustrialProject = {
	id: string;
	category: IndustrialProjectCategory;
	title: string;
	investor?: string;
	period?: string;
	sortYear?: number;
	note?: string;
};

type IndustrialProjectRow = {
	id?: string;
	kategorija?: string;
	naziv?: string;
	"naziv[eng]"?: string;
	investitor?: string;
	period?: string;
	godinaSort?: string;
	napomena?: string;
	"napomena[eng]"?: string;
};

function normalizeCategory(value?: string): IndustrialProjectCategory | null {
	switch (value?.trim()) {
		case "mining-project":
			return "mining-project";

		case "technical-control":
			return "technical-control";

		case "elaborate":
			return "elaborate";

		case "study":
			return "study";

		default:
			return null;
	}
}

export async function getIndustrialProjects(
	lang: Language,
): Promise<IndustrialProject[]> {
	const url = process.env.INDUSTRIAL_PROJECTS_SHEET_URL;

	if (!url) {
		throw new Error("INDUSTRIAL_PROJECTS_SHEET_URL nije definisan.");
	}

	const response = await fetch(url, {
		next: {
			revalidate: 300,
			tags: ["industrial-projects"],
		},
	});

	if (!response.ok) {
		throw new Error(
			`Greška pri učitavanju industrijskih projekata: ${response.status}`,
		);
	}

	const csv = await response.text();

	const parsed = Papa.parse<IndustrialProjectRow>(csv, {
		header: true,
		skipEmptyLines: true,
		transformHeader: (header) => header.trim(),
	});

	if (parsed.errors.length > 0) {
		console.error(
			"Greške pri parsiranju industrijskih projekata:",
			parsed.errors,
		);
	}

	return parsed.data
		.flatMap((row): IndustrialProject[] => {
			const category = normalizeCategory(row.kategorija);

			if (!category) {
				return [];
			}

			const srTitle = row.naziv?.trim() ?? "";

			const enTitle = row["naziv[eng]"]?.trim();

			const srNote = row.napomena?.trim();

			const enNote = row["napomena[eng]"]?.trim();

			const id = row.id?.trim() ?? "";

			if (!id || !srTitle) {
				return [];
			}

			return [
				{
					id,
					category,

					title: lang === "en" ? enTitle || srTitle : srTitle,

					investor: row.investitor?.trim() || undefined,

					period: row.period?.trim() || undefined,

					sortYear:
						row.godinaSort && !Number.isNaN(Number(row.godinaSort))
							? Number(row.godinaSort)
							: undefined,

					note:
						lang === "en" ? enNote || srNote || undefined : srNote || undefined,
				},
			];
		})
		.sort((a, b) => (b.sortYear ?? 0) - (a.sortYear ?? 0));
}
