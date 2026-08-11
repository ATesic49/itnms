import "server-only";

import { google } from "googleapis";

import { getGoogleOAuthClient } from "@/app/lib/googleAuth";

export function getGoogleSheetsClient() {
	const auth = getGoogleOAuthClient();

	return google.sheets({
		version: "v4",
		auth,
	});
}
