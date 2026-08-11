import "server-only";

import { google } from "googleapis";

export function getGoogleOAuthClient() {
	const clientId = process.env.GOOGLE_DRIVE_CLIENT_ID;
	const clientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
	const redirectUri = process.env.GOOGLE_DRIVE_REDIRECT_URI;
	const refreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;

	if (!clientId || !clientSecret || !redirectUri || !refreshToken) {
		throw new Error("Nedostaju Google OAuth environment promenljive.");
	}

	const auth = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

	auth.setCredentials({
		refresh_token: refreshToken,
	});

	return auth;
}
