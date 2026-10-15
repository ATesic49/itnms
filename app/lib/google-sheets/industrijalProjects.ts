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

type SheetIndustrialProject = {
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

function normalizeCategory(
	value: string | undefined,
): IndustrialProjectCategory {
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
			return "study";
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

	const parsed = Papa.parse<SheetIndustrialProject>(csv, {
		header: true,
		skipEmptyLines: true,
		transformHeader: (header) => header.trim(),
	});

	return parsed.data
		.map((row) => {
			const title =
				lang === "en"
					? row["naziv[eng]"]?.trim() || row.naziv?.trim()
					: row.naziv?.trim();

			const note =
				lang === "en"
					? row["napomena[eng]"]?.trim() || row.napomena?.trim()
					: row.napomena?.trim();

			return {
				id: row.id?.trim() ?? "",

				category: normalizeCategory(row.kategorija),

				title: title ?? "",

				investor: row.investitor?.trim() || undefined,

				period: row.period?.trim() || undefined,

				sortYear: row.godinaSort ? Number(row.godinaSort) : undefined,

				note: note || undefined,
			};
		})
		.filter((project) => project.id && project.title)
		.sort((a, b) => (b.sortYear ?? 0) - (a.sortYear ?? 0));
}
