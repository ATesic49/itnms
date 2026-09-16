import "server-only";

import { headers } from "next/headers";

export type Language = "sr" | "en";

export async function getLanguage(): Promise<Language> {
	const requestHeaders = await headers();

	return requestHeaders.get("x-site-language") === "en" ? "en" : "sr";
}
