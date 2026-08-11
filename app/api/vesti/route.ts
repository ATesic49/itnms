import { getGoogleSheetsClient } from "@/app/lib/google-sheets/googleSheets";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/requireAdmin";

type CreateNewsBody = {
	title?: unknown;
	excerpt?: unknown;
	category?: unknown;
	date?: unknown;
	content?: unknown;
	imageUrl?: unknown;
	imageFileId?: unknown;
};

function getRequiredString(value: unknown, fieldName: string): string {
	if (typeof value !== "string") {
		throw new Error(`Polje "${fieldName}" mora biti string.`);
	}

	const cleanedValue = value.trim();

	if (!cleanedValue) {
		throw new Error(`Polje "${fieldName}" je obavezno.`);
	}

	return cleanedValue;
}

export async function POST(request: Request) {
	try {
		const admin = await requireAdmin();
		if (!admin.authorized) {
			return NextResponse.json(
				{
					success: false,
					message:
						admin.status === 401
							? "Morate biti prijavljeni."
							: "Nemate dozvolu za ovu akciju.",
				},
				{
					status: admin.status,
				},
			);
		}
		const body = (await request.json()) as CreateNewsBody;

		console.log("Primljeni podaci za vest:", body);

		const title = getRequiredString(body.title, "title");

		const excerpt = getRequiredString(body.excerpt, "excerpt");

		const category = getRequiredString(body.category, "category");

		const date = getRequiredString(body.date, "date");

		const content = getRequiredString(body.content, "content");

		const imageUrl = getRequiredString(body.imageUrl, "imageUrl");

		const imageFileId = getRequiredString(body.imageFileId, "imageFileId");

		const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

		if (!spreadsheetId) {
			throw new Error("Nedostaje GOOGLE_SHEETS_ID u .env.local fajlu.");
		}

		const sheets = getGoogleSheetsClient();

		const response = await sheets.spreadsheets.values.append({
			spreadsheetId,

			// Vesti = naziv taba
			// A:G = kolone u koje upisujemo
			range: "Vesti!A:G",

			// Google tretira datum i ostale vrednosti
			// kao da su unete ručno
			valueInputOption: "USER_ENTERED",

			// Dodaj novi red
			insertDataOption: "INSERT_ROWS",

			requestBody: {
				values: [
					[title, excerpt, category, date, content, imageUrl, imageFileId],
				],
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Vest je uspešno dodata u Google Sheets.",
				updatedRange: response.data.updates?.updatedRange,
			},
			{
				status: 201,
			},
		);
	} catch (error) {
		console.error("Greška pri dodavanju vesti:", error);

		const message =
			error instanceof Error ? error.message : "Nepoznata greška.";

		return NextResponse.json(
			{
				success: false,
				message,
			},
			{
				status: 500,
			},
		);
	}
}
