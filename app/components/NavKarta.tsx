import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import logo from "@/public/imgs/load.jpg";
import zaposleni from "@/public/imgs/IMG_9917.jpg";
import projekti from "@/public/imgs/IMG_9987.jpg";
import usluge from "@/public/imgs/IMG_0083.jpg";
import kvalitet from "@/public/imgs/IMG_0090.jpg";

import { localizeHref } from "../lib/language/localizeHref";

type Language = "sr" | "en";

type MenuContent = {
	aboutMenu: {
		naslov: string;
		history: string;
		aboutItNms: string;
		organization: string;
		management: string;
		scientificCouncil: string;
	};

	employeesMenu: {
		naslov: string;
		researchers: string;
	};

	projectsMenu: {
		naslov: string;
		scientific: string;
		industrial: string;
	};
};

type NavKartaProps = {
	open: number;
	language: Language;
	content: MenuContent;
};

type MenuItem = {
	naslov: string;
	linkovi: {
		ime: string;
		link: string;
	}[];
	slika: StaticImageData;
	text: string;
};

export default function NavKarta({ open, language, content }: NavKartaProps) {
	const isEnglish = language === "en";

	const kontent: MenuItem[] = [
		{
			naslov: content.aboutMenu.naslov,
			linkovi: [
				{
					ime: content.aboutMenu.history,
					link: "istorijat",
				},
				{
					ime: content.aboutMenu.aboutItNms,
					link: "o-itnmsu",
				},
				{
					ime: content.aboutMenu.organization,
					link: "organizaciona-sema",
				},
				{
					ime: "Akta ITNMS-a",
					link: "akta",
				},
			],
			slika: logo,
			text: "",
		},

		{
			naslov: content.aboutMenu.naslov,
			linkovi: [
				{
					ime: content.aboutMenu.history,
					link: "o-institutu/istorijat",
				},
				{
					ime: content.aboutMenu.aboutItNms,
					link: "o-institutu/o-itnms-u",
				},
				{
					ime: content.aboutMenu.organization,
					link: "o-institutu/organizacija",
				},
				{
					ime: content.aboutMenu.management,
					link: "o-institutu/rukovodstvo",
				},
				{
					ime: content.aboutMenu.scientificCouncil,
					link: "o-institutu/naucno-vece",
				},
			],
			slika: logo,
			text: isEnglish
				? "Discover the Institute, its history and organization."
				: "Upoznajte Institut, njegovu istoriju i organizaciju.",
		},

		{
			naslov: content.employeesMenu.naslov,
			linkovi: [
				{
					ime: content.employeesMenu.researchers,
					link: "istrazivaci",
				},
			],
			slika: zaposleni,
			text: isEnglish ? "Discover our research team." : "Istražite naš tim.",
		},

		{
			naslov: content.projectsMenu.naslov,
			linkovi: [
				{
					ime: content.projectsMenu.scientific,
					link: "projekti/naucni",
				},
				{
					ime: content.projectsMenu.industrial,
					link: "projekti/industrijski-projekti",
				},
			],
			slika: projekti,
			text: isEnglish
				? "Explore projects shaping the future."
				: "Pogledajte projekte koji oblikuju budućnost.",
		},

		{
			naslov: isEnglish ? "Services" : "Usluge",
			linkovi: [],
			slika: usluge,
			text: isEnglish
				? "Explore all our services."
				: "Sve naše usluge na jednom mestu.",
		},

		{
			naslov: isEnglish
				? "Quality and Accreditations"
				: "Kvalitet i Akreditacije",
			linkovi: [
				{
					ime: isEnglish ? "Quality System" : "Sistem kvaliteta",
					link: "kvalitet-i-akreditacije/sistem-kvaliteta",
				},
				{
					ime: isEnglish ? "Accreditations" : "Akreditacije",
					link: "kvalitet-i-akreditacije/akreditacije",
				},
				{
					ime: isEnglish ? "Certificates" : "Sertifikati",
					link: "kvalitet-i-akreditacije/sertifikati",
				},
				{
					ime: isEnglish ? "Quality Policy" : "Politika kvaliteta",
					link: "kvalitet-i-akreditacije/politika-kvaliteta",
				},
			],
			slika: kvalitet,
			text: "",
		},

		{
			naslov: isEnglish
				? "An Institute with a Rich History"
				: "Institut sa bogatom istorijom",
			linkovi: [
				{
					ime: isEnglish ? "History" : "Istorijat",
					link: "istorijat",
				},
				{
					ime: isEnglish ? "Organization" : "Organizacija",
					link: "organizacija",
				},
				{
					ime: isEnglish ? "Researchers" : "Spisak istraživača",
					link: "spisak-istrazivaca",
				},
			],
			slika: kvalitet,
			text: "",
		},
	];

	if (!open || !kontent[open]) {
		return null;
	}

	const current = kontent[open];

	return (
		<div className="absolute left-0 right-0 top-full grid min-h-[80vh] grid-cols-5 bg-institute-50 p-8">
			<div className="flex flex-col col-span-3 row-span-3 gap-4 py-4 pr-8 uppercase text-institute-700">
				<h2 className="pb-4 text-2xl underline text-institute-600 underline-offset-8">
					{current.naslov}
				</h2>

				{current.linkovi.map((item) => (
					<Link
						key={item.link}
						href={localizeHref(`/${item.link}`, isEnglish)}
						className="cursor-pointer hover:underline"
					>
						{item.ime}
					</Link>
				))}
			</div>

			<div className="flex flex-col w-full col-span-2 row-span-2 gap-4 py-4 text-base normal-case text-institute-600">
				<Image
					src={current.slika}
					alt=""
					className="object-cover object-left w-full aspect-video"
					sizes="(min-width: 1280px) 480px, 40vw"
					quality={70}
				/>

				{current.text && <p>{current.text}</p>}
			</div>
		</div>
	);
}
