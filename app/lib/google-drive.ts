import "server-only";

import { google } from "googleapis";

function getOAuthClient() {
	const clientId = process.env.GOOGLE_DRIVE_CLIENT_ID;
	const clientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
	const redirectUri = process.env.GOOGLE_DRIVE_REDIRECT_URI;

	if (!clientId || !clientSecret || !redirectUri) {
		throw new Error("Nedostaju Google Drive OAuth promenljive.");
	}

	return new google.auth.OAuth2(clientId, clientSecret, redirectUri);
}

export function getGoogleDriveClient() {
	const refreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;

	if (!refreshToken) {
		throw new Error("Nedostaje GOOGLE_DRIVE_REFRESH_TOKEN.");
	}

	const auth = getOAuthClient();

	auth.setCredentials({
		refresh_token: refreshToken,
	});

	return google.drive({
		version: "v3",
		auth,
	});
}

export function getGoogleDriveOAuthClient() {
	return getOAuthClient();
}
