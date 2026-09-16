import { routeTranslations } from "./routes";

export function localizeHref(href: string, isEnglish: boolean) {
	if (!href) return href;

	if (
		href.startsWith("http://") ||
		href.startsWith("https://") ||
		href.startsWith("mailto:") ||
		href.startsWith("tel:") ||
		href.startsWith("#")
	) {
		return href;
	}

	if (!isEnglish) {
		return href;
	}

	/*
	 * Odvojimo pathname od query/hash dela.
	 */
	const match = href.match(/^([^?#]*)(.*)$/);

	const pathname = match?.[1] ?? href;
	const suffix = match?.[2] ?? "";

	const translated = routeTranslations[pathname];

	if (translated) {
		return `${translated}${suffix}`;
	}

	/*
	 * Fallback za rutu koju još nismo preveli.
	 */
	return `/en${href}`;
}
