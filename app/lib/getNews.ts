import "server-only";

import { createSlug } from "@/app/lib/createSlug";
import type { NewsItem, NewsSheetRow } from "@/app/types/news";
import { getGoogleSheetsClient } from "./google-sheets/googleSheets";
function formatGoogleSheetsDate(value?: string): string {
	if (!value) {
		return "";
	}

	const serialNumber = Number(value);

	// Ako već stiže kao "2026-08-03" ili "3.8.2026.",
	// samo ga vrati bez promene.
	if (Number.isNaN(serialNumber)) {
		return value.trim();
	}

	const millisecondsPerDay = 24 * 60 * 60 * 1000;

	// Google Sheets / Excel serijski datum počinje od 30.12.1899.
	const date = new Date(
		Date.UTC(1899, 11, 30) + serialNumber * millisecondsPerDay,
	);

	return new Intl.DateTimeFormat("sr-RS", {
		day: "numeric",
		month: "numeric",
		year: "numeric",
		timeZone: "UTC",
	}).format(date);
}

function normalizeGoogleSheetsDate(value?: string): {
	displayDate: string;
	dateISO: string;
} {
	if (!value) {
		return {
			displayDate: "",
			dateISO: "",
		};
	}

	const serialNumber = Number(value);

	if (!Number.isNaN(serialNumber)) {
		const millisecondsPerDay = 24 * 60 * 60 * 1000;

		const date = new Date(
			Date.UTC(1899, 11, 30) + serialNumber * millisecondsPerDay,
		);

		return {
			displayDate: new Intl.DateTimeFormat("sr-RS", {
				day: "numeric",
				month: "numeric",
				year: "numeric",
				timeZone: "UTC",
			}).format(date),

			dateISO: date.toISOString().slice(0, 10),
		};
	}

	const trimmedValue = value.trim();

	return {
		displayDate: trimmedValue,
		dateISO: trimmedValue,
	};
}

export async function getNews(): Promise<NewsItem[]> {
	const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

	if (!spreadsheetId) {
		throw new Error("Nedostaje GOOGLE_SHEETS_ID u .env.local fajlu.");
	}

	const sheets = getGoogleSheetsClient();

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range: "Vesti!A2:G",
	});

	const rows = response.data.values ?? [];

	return rows
		.map((row): NewsSheetRow => {
			const [title, excerpt, category, date, content, imageUrl, imageFileId] =
				row;

			return {
				title,
				excerpt,
				category,
				date,
				content,
				imageUrl,
				imageFileId,
			};
		})
		.filter((row) => row.title && row.excerpt && row.category && row.date)
		.map((row): NewsItem => {
			const title = row.title!.trim();
			const { displayDate, dateISO } = normalizeGoogleSheetsDate(row.date);

			return {
				title,
				excerpt: row.excerpt?.trim() ?? "",
				category: row.category?.trim() ?? "",
				date: displayDate,
				dateISO,
				content: row.content?.trim() ?? "",
				imageUrl: row.imageUrl?.trim() ?? "",
				imageFileId: row.imageFileId?.trim() ?? "",
				slug: createSlug(title),
			};
		})
		.sort((first, second) => {
			const firstDate = new Date(first.date).getTime();
			const secondDate = new Date(second.date).getTime();

			if (Number.isNaN(firstDate) || Number.isNaN(secondDate)) {
				return 0;
			}

			// return secondDate - firstDate;
			return second.dateISO.localeCompare(first.dateISO);
		});
}
