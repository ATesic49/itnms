export type SearchResultType = "employee" | "project" | "page";

export type SearchResult = {
	id: string;
	type: SearchResultType;

	title: string;
	description?: string;

	href: string;
	searchText?: string;
};
