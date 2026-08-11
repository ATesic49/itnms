import { getGoogleDriveOAuthClient } from "@/app/lib/google-drive";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const url = new URL(request.url);
		const code = url.searchParams.get("code");

		if (!code) {
			return NextResponse.json(
				{
					message: "Google nije vratio authorization code.",
				},
				{
					status: 400,
				},
			);
		}

		const auth = getGoogleDriveOAuthClient();

		const { tokens } = await auth.getToken(code);

		console.log("GOOGLE_DRIVE_REFRESH_TOKEN:", tokens.refresh_token);

		return NextResponse.json({
			message:
				"Google Drive je povezan. Kopiraj refresh token iz terminala u .env.local.",
		});
	} catch (error) {
		console.error("Greška pri povezivanju Google Drive-a:", error);

		return NextResponse.json(
			{
				message: "Povezivanje sa Google Drive-om nije uspelo.",
			},
			{
				status: 500,
			},
		);
	}
}
