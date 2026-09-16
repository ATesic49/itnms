// import { NextRequest, NextResponse } from "next/server";

// export function proxy(request: NextRequest) {
// 	const { pathname } = request.nextUrl;

// 	if (pathname === "/en" || pathname.startsWith("/en/")) {
// 		const url = request.nextUrl.clone();

// 		/*
// 		 * /en                  -> /
// 		 * /en/o-institutu     -> /o-institutu
// 		 * /en/projekti/naucni -> /projekti/naucni
// 		 */
// 		url.pathname = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "");

// 		const requestHeaders = new Headers(request.headers);

// 		/*
// 		 * Kasnije će stranice preko ovog
// 		 * znati da treba da prikazuju EN sadržaj.
// 		 */
// 		requestHeaders.set("x-site-language", "en");

// 		return NextResponse.rewrite(url, {
// 			request: {
// 				headers: requestHeaders,
// 			},
// 		});
// 	}

// 	/*
// 	 * Srpska verzija.
// 	 */
// 	const requestHeaders = new Headers(request.headers);

// 	requestHeaders.set("x-site-language", "sr");

// 	return NextResponse.next({
// 		request: {
// 			headers: requestHeaders,
// 		},
// 	});
// }

// export const config = {
// 	matcher: [
// 		/*
// 		 * Ne diramo Next interne fajlove, API i statičke fajlove.
// 		 */
// 		"/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
// 	],
// };

import { NextRequest, NextResponse } from "next/server";

import { reverseRouteTranslations } from "@/app/lib/language/routes";

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const requestHeaders = new Headers(request.headers);

	/*
	 * ENGLESKI URL
	 */
	if (pathname === "/en" || pathname.startsWith("/en/")) {
		requestHeaders.set("x-site-language", "en");

		const url = request.nextUrl.clone();

		const internalPath = reverseRouteTranslations[pathname];

		if (internalPath) {
			url.pathname = internalPath;

			return NextResponse.rewrite(url, {
				request: {
					headers: requestHeaders,
				},
			});
		}

		/*
		 * Privremeni fallback:
		 *
		 * /en/neka-ruta
		 * -> /neka-ruta
		 */
		url.pathname = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "");

		return NextResponse.rewrite(url, {
			request: {
				headers: requestHeaders,
			},
		});
	}

	/*
	 * SRPSKI
	 */
	requestHeaders.set("x-site-language", "sr");

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
