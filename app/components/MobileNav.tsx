"use client";

import { ChevronDown, ExternalLink, Menu, Search, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { localizeHref } from "@/app/lib/language/localizeHref";

import simbol from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";

type Language = "sr" | "en";

type MobileSection = {
	title: {
		sr: string;
		en: string;
	};
	href?: string;
	links?: {
		name: {
			sr: string;
			en: string;
		};
		href: string;
	}[];
};

const sections: MobileSection[] = [
	{
		title: {
			sr: "O Institutu",
			en: "About the Institute",
		},
		href: "/o-institutu",
		links: [
			{
				name: {
					sr: "Istorijat",
					en: "History",
				},
				href: "/o-institutu/istorijat",
			},
			{
				name: {
					sr: "O ITNMS-u",
					en: "About ITNMS",
				},
				href: "/o-institutu/o-itnms-u",
			},
			{
				name: {
					sr: "Organizacija",
					en: "Organization",
				},
				href: "/o-institutu/organizacija",
			},
			{
				name: {
					sr: "Rukovodstvo",
					en: "Management",
				},
				href: "/o-institutu/rukovodstvo",
			},
			{
				name: {
					sr: "Naučno veće",
					en: "Scientific Council",
				},
				href: "/o-institutu/naucno-vece",
			},
			{
				name: {
					sr: "Delatnosti i oblasti rada",
					en: "Activities and areas of work",
				},
				href: "/o-institutu/delatnosti-i-oblasti-rada",
			},
		],
	},
	{
		title: {
			sr: "Istraživači / Zaposleni",
			en: "Researchers / Employees",
		},
		href: "/istrazivaci",
	},
	{
		title: {
			sr: "Projekti",
			en: "Projects",
		},
		href: "/projekti",
		links: [
			{
				name: {
					sr: "Naučni projekti",
					en: "Scientific projects",
				},
				href: "/projekti/naucni",
			},
			{
				name: {
					sr: "Industrijski projekti",
					en: "Industrial projects",
				},
				href: "/projekti/industrijski-projekti",
			},
		],
	},
	{
		title: {
			sr: "Usluge",
			en: "Services",
		},
		href: "/usluge",
		links: [
			{
				name: {
					sr: "Oblasti usluga",
					en: "Service areas",
				},
				href: "/usluge/oblasti-usluga",
			},
			{
				name: {
					sr: "Laboratorije",
					en: "Laboratories",
				},
				href: "/usluge/laboratorije",
			},
			{
				name: {
					sr: "Oprema",
					en: "Equipment",
				},
				href: "/usluge/oprema",
			},
			{
				name: {
					sr: "Pošaljite upit",
					en: "Send an inquiry",
				},
				href: "/usluge/posaljite-upit",
			},
		],
	},
	{
		title: {
			sr: "Kvalitet i akreditacije",
			en: "Quality and accreditations",
		},
		href: "/kvalitet-i-akreditacije",
		links: [
			{
				name: {
					sr: "Sistem kvaliteta",
					en: "Quality system",
				},
				href: "/kvalitet-i-akreditacije/sistem-kvaliteta",
			},
			{
				name: {
					sr: "Akreditacije",
					en: "Accreditations",
				},
				href: "/kvalitet-i-akreditacije/akreditacije",
			},
			{
				name: {
					sr: "Sertifikati",
					en: "Certificates",
				},
				href: "/kvalitet-i-akreditacije/sertifikati",
			},
			{
				name: {
					sr: "Politika kvaliteta",
					en: "Quality policy",
				},
				href: "/kvalitet-i-akreditacije/politika-kvaliteta",
			},
		],
	},
];

type MobileNavProps = {
	lang: Language;
	onSearch: () => void;
	onChangeLanguage: (language: Language) => void;
};

export default function MobileNav({
	lang,
	onSearch,
	onChangeLanguage,
}: MobileNavProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	const [openSection, setOpenSection] = useState<number | null>(null);

	const isEnglish = lang === "en";

	function closeMenu() {
		setMenuOpen(false);
		setOpenSection(null);
	}

	function toggleSection(index: number) {
		setOpenSection((current) => (current === index ? null : index));
	}

	function localizedHref(href: string) {
		return localizeHref(href, isEnglish);
	}

	return (
		<>
			<header className="flex items-center justify-between px-4 py-3 bg-white border-b border-stone-200">
				<Link
					href={localizedHref("/")}
					onClick={closeMenu}
					className="flex items-center gap-2"
					aria-label={isEnglish ? "ITNMS homepage" : "Početna stranica ITNMS"}
				>
					<Image
						src={simbol}
						alt=""
						className="h-auto w-11"
						sizes="44px"
					/>

					<Image
						src={text}
						alt=""
						className="w-24 h-auto"
						sizes="96px"
					/>
				</Link>

				<button
					type="button"
					onClick={() => setMenuOpen((current) => !current)}
					className="flex items-center justify-center transition rounded-lg h-11 w-11 text-institute-900 hover:bg-institute-50"
					aria-label={
						menuOpen
							? isEnglish
								? "Close menu"
								: "Zatvori meni"
							: isEnglish
								? "Open menu"
								: "Otvori meni"
					}
					aria-expanded={menuOpen}
				>
					{menuOpen ? (
						<X
							className="w-6 h-6"
							aria-hidden="true"
						/>
					) : (
						<Menu
							className="w-6 h-6"
							aria-hidden="true"
						/>
					)}
				</button>
			</header>

			{menuOpen && (
				<div className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-68px)] overflow-y-auto border-b border-stone-200 bg-white shadow-xl">
					<nav className="px-4 py-5">
						<div className="space-y-1">
							{sections.map((section, index) => {
								const isOpen = openSection === index;

								const title = section.title[lang];

								return (
									<div
										key={section.href ?? title}
										className="border-b border-stone-100"
									>
										<div className="flex items-center">
											{section.href ? (
												<Link
													href={localizedHref(section.href)}
													onClick={closeMenu}
													className="flex-1 py-4 text-sm font-semibold uppercase text-stone-800"
												>
													{title}
												</Link>
											) : (
												<span className="flex-1 py-4 text-sm font-semibold uppercase text-stone-800">
													{title}
												</span>
											)}

											{section.links && (
												<button
													type="button"
													onClick={() => toggleSection(index)}
													className="flex items-center justify-center w-12 h-12 text-stone-600"
													aria-label={
														isOpen
															? isEnglish
																? `Close ${title}`
																: `Zatvori ${title}`
															: isEnglish
																? `Open ${title}`
																: `Otvori ${title}`
													}
													aria-expanded={isOpen}
												>
													<ChevronDown
														className={`h-5 w-5 transition-transform ${
															isOpen ? "rotate-180" : ""
														}`}
														aria-hidden="true"
													/>
												</button>
											)}
										</div>

										{isOpen && section.links && (
											<div className="pb-4 pl-4">
												<div className="flex flex-col gap-1 border-l-2 border-institute-100">
													{section.links.map((link) => (
														<Link
															key={link.href}
															href={localizedHref(link.href)}
															onClick={closeMenu}
															className="px-4 py-2.5 text-sm text-stone-600 transition hover:bg-institute-50 hover:text-institute-800"
														>
															{link.name[lang]}
														</Link>
													))}
												</div>
											</div>
										)}
									</div>
								);
							})}

							<a
								href="https://ritnms.itnms.ac.rs/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={closeMenu}
								className="flex items-center gap-2 py-4 text-sm font-semibold uppercase border-b border-stone-100 text-stone-800"
							>
								RITNMS
								<ExternalLink
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>

							<Link
								href={localizedHref("/kontakt")}
								onClick={closeMenu}
								className="block py-4 text-sm font-semibold uppercase border-b border-stone-100 text-stone-800"
							>
								{isEnglish ? "Contact" : "Kontakt"}
							</Link>
						</div>

						<div className="pt-6 mt-6 border-t border-stone-200">
							<button
								type="button"
								onClick={() => {
									closeMenu();
									onSearch();
								}}
								className="flex items-center w-full gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-stone-50 text-stone-700"
							>
								<Search
									className="w-4 h-4"
									aria-hidden="true"
								/>

								{isEnglish ? "Search" : "Pretraga"}
							</button>

							<div className="flex items-center gap-3 mt-5">
								<button
									type="button"
									onClick={() => {
										closeMenu();

										onChangeLanguage("sr");
									}}
									className={
										!isEnglish
											? "font-semibold text-institute-800"
											: "text-stone-500"
									}
								>
									SR
								</button>

								<span className="text-stone-300">|</span>

								<button
									type="button"
									onClick={() => {
										closeMenu();

										onChangeLanguage("en");
									}}
									className={
										isEnglish
											? "font-semibold text-institute-800"
											: "text-stone-500"
									}
								>
									EN
								</button>
							</div>

							<div className="flex flex-col gap-2 pt-5 mt-5 text-sm border-t border-stone-200 text-stone-600">
								<a href="mailto:itnms@itnms.ac.rs">itnms@itnms.ac.rs</a>

								<a href="tel:+381113691722">+381 11 3691 722</a>
							</div>
						</div>
					</nav>
				</div>
			)}
		</>
	);
}
