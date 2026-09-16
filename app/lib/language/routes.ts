export const routeTranslations: Record<string, string> = {
	"/": "/en",

	"/o-institutu": "/en/about",
	"/o-institutu/istorijat": "/en/about/history",
	"/o-institutu/o-itnms-u": "/en/about/itnms",
	"/o-institutu/organizacija": "/en/about/organization",
	"/o-institutu/rukovodstvo": "/en/about/management",
	"/o-institutu/naucno-vece": "/en/about/scientific-council",
	"/o-institutu/delatnosti-i-oblasti-rada": "/en/about/activities",

	"/istrazivaci": "/en/researchers",

	"/projekti": "/en/projects",
	"/projekti/naucni": "/en/projects/scientific",
	"/projekti/industrijski-projekti": "/en/projects/industrial",

	// "/usluge": "/en/services",
	// "/usluge/oblasti-usluga": "/en/services/areas",
	// "/usluge/laboratorije": "/en/services/laboratories",
	// "/usluge/oprema": "/en/services/equipment",
	// "/usluge/posaljite-upit": "/en/services/send-inquiry",

	"/kontakt": "/en/contact",
};
export const reverseRouteTranslations = Object.fromEntries(
	Object.entries(routeTranslations).map(([sr, en]) => [en, sr]),
);
