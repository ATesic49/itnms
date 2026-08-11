export type CreateNewsData = {
	title: string;
	excerpt: string;
	category: string;
	date: string;
	content: string;
	imageUrl: string;
	imageFileId: string;
};
export type NewsItem = {
	dateISO: string;
	title: string;
	excerpt: string;
	category: string;
	date: string;
	content: string;
	imageUrl: string;
	imageFileId: string;
	slug: string;
};

export type NewsSheetRow = {
	title?: string;
	excerpt?: string;
	category?: string;
	date?: string;
	content?: string;
	imageUrl?: string;
	imageFileId?: string;
};
