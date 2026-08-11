import type { StaticImageData } from "next/image";

import slika from "@/public/imgs/IMG_9916.jpg";
import slika2 from "@/public/imgs/IMG_9929.jpg";
import slika3 from "@/public/imgs/IMG_9984.jpg";

export type NewsItem = {
	slug: string;
	title: string;
	excerpt: string;
	content: string[];
	date: string;
	dateISO: string;
	category: string;
	image: string | StaticImageData;
};

export const news: NewsItem[] = [
	{
		slug: "novi-naucnoistrazivacki-projekat",
		title: "Novi naučnoistraživački projekat Instituta",
		excerpt:
			"Institut je započeo realizaciju projekta posvećenog razvoju održivih tehnoloških postupaka i naprednih materijala.",
		content: [
			"Institut za tehnologiju nuklearnih i drugih mineralnih sirovina započeo je realizaciju novog naučnoistraživačkog projekta.",
			"Projekat je posvećen razvoju održivih tehnoloških postupaka, unapređenju procesa prerade mineralnih sirovina i razvoju naprednih materijala.",
			"Tokom realizacije projekta biće sprovedena laboratorijska istraživanja, karakterizacija materijala i ispitivanje mogućnosti njihove buduće industrijske primene.",
		],
		date: "12. jul 2026.",
		dateISO: "2026-07-12",
		category: "Projekti",
		image: slika,
	},
	{
		slug: "strucna-konferencija",
		title: "Učešće istraživača ITNMS-a na stručnoj konferenciji",
		excerpt:
			"Predstavljeni su rezultati istraživanja iz oblasti prerade mineralnih sirovina i zaštite životne sredine.",
		content: [
			"Istraživači Instituta učestvovali su na stručnoj konferenciji posvećenoj savremenim tehnologijama i održivom razvoju.",
			"Tom prilikom predstavljeni su rezultati istraživanja iz oblasti prerade mineralnih sirovina, metalurgije i zaštite životne sredine.",
			"Učešće na konferenciji omogućilo je razmenu iskustava sa predstavnicima drugih naučnoistraživačkih organizacija i privrede.",
		],
		date: "28. jun 2026.",
		dateISO: "2026-06-28",
		category: "Događaji",
		image: slika2,
	},
	{
		slug: "konkurs-za-istrazivace",
		title: "Objavljen novi konkurs za istraživače",
		excerpt:
			"Otvoren je konkurs za angažovanje istraživača na projektima Instituta. Detalji i dokumentacija dostupni su u objavi.",
		content: [
			"Institut je objavio konkurs za angažovanje istraživača na naučnoistraživačkim i razvojnim projektima.",
			"Kandidati treba da dostave potrebnu dokumentaciju u skladu sa uslovima navedenim u tekstu konkursa.",
			"Detaljne informacije o uslovima, rokovima i načinu prijave dostupne su u zvaničnoj konkursnoj dokumentaciji.",
		],
		date: "15. jun 2026.",
		dateISO: "2026-06-15",
		category: "Konkursi",
		image: slika3,
	},
];

export function getNewsHref(item: NewsItem) {
	return `/vesti/${item.slug}`;
}
