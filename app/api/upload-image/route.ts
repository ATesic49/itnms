import { Readable } from "node:stream";

import { NextResponse } from "next/server";
import { getGoogleDriveClient } from "@/app/lib/google-drive";
import { requireAdmin } from "@/app/lib/requireAdmin";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function sanitizeFilename(filename: string): string {
	const extension = filename.split(".").pop()?.toLowerCase();

	const baseName = filename
		.replace(/\.[^/.]+$/, "")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/gi, "dj")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

	const uniquePart = crypto.randomUUID();

	return `${baseName || "slika"}-${uniquePart}.${extension || "jpg"}`;
}

export async function POST(request: Request) {
	try {
		const admin = await requireAdmin();

		if (!admin.authorized) {
			return NextResponse.json(
				{
					message:
						admin.status === 401
							? "Morate biti prijavljeni."
							: "Nemate dozvolu za upload.",
				},
				{
					status: admin.status,
				},
			);
		}

		const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

		if (!folderId) {
			throw new Error("Nedostaje GOOGLE_DRIVE_FOLDER_ID.");
		}

		const formData = await request.formData();
		const file = formData.get("image");

		if (!(file instanceof File)) {
			return NextResponse.json(
				{
					message: "Slika nije poslata.",
				},
				{
					status: 400,
				},
			);
		}

		if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
			return NextResponse.json(
				{
					message: "Dozvoljeni formati su JPG, PNG i WebP.",
				},
				{
					status: 400,
				},
			);
		}

		if (file.size > MAX_FILE_SIZE) {
			return NextResponse.json(
				{
					message: "Slika može imati najviše 5 MB.",
				},
				{
					status: 400,
				},
			);
		}

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const drive = getGoogleDriveClient();

		const uploadedFile = await drive.files.create({
			requestBody: {
				name: sanitizeFilename(file.name),
				parents: [folderId],
			},
			media: {
				mimeType: file.type,
				body: Readable.from(buffer),
			},
			fields: "id,name,mimeType,size",
		});

		const fileId = uploadedFile.data.id;

		if (!fileId) {
			throw new Error("Google Drive nije vratio ID fajla.");
		}

		await drive.permissions.create({
			fileId,
			requestBody: {
				type: "anyone",
				role: "reader",
			},
		});

		const imageUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;

		const previewUrl = `https://drive.google.com/file/d/${fileId}/view`;

		return NextResponse.json(
			{
				message: "Slika je uspešno postavljena na Google Drive.",
				fileId,
				imageUrl,
				previewUrl,
				filename: uploadedFile.data.name,
			},
			{
				status: 201,
			},
		);
	} catch (error) {
		console.error("Greška pri uploadu na Google Drive:", error);

		return NextResponse.json(
			{
				message: "Upload slike na Google Drive nije uspeo.",
			},
			{
				status: 500,
			},
		);
	}
}
