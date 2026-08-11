// import { getGoogleDriveOAuthClient } from "@/app/lib/google-drive";
// import { NextResponse } from "next/server";

// export async function GET() {
// 	const auth = getGoogleDriveOAuthClient();

// 	const authorizationUrl = auth.generateAuthUrl({
// 		access_type: "offline",
// 		prompt: "consent",
// 		scope: ["https://www.googleapis.com/auth/drive.file"],
// 	});

// 	return NextResponse.redirect(authorizationUrl);
// }
// import { getGoogleDriveOAuthClient } from "@/app/lib/google-drive";
// import { NextResponse } from "next/server";

// export async function GET() {
// 	const auth = getGoogleDriveOAuthClient();

// 	const authorizationUrl = auth.generateAuthUrl({
// 		access_type: "offline",
// 		prompt: "consent",
// 		scope: [
// 			"https://www.googleapis.com/auth/drive.file",
// 			"https://www.googleapis.com/auth/spreadsheets",
// 		],
// 	});

// 	return NextResponse.redirect(authorizationUrl);
// }

import { NextResponse } from "next/server";

import { getGoogleOAuthClient } from "@/app/lib/googleAuth";

export async function GET() {
	const auth = getGoogleOAuthClient();

	const authorizationUrl = auth.generateAuthUrl({
		access_type: "offline",
		prompt: "consent",
		scope: [
			"https://www.googleapis.com/auth/spreadsheets",
			"https://www.googleapis.com/auth/drive.file",
		],
	});

	return NextResponse.redirect(authorizationUrl);
}
