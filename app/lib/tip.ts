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
