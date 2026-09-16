"use client";

import { ChevronDown, ExternalLink, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { localizeHref } from "@/app/lib/language/localizeHref";
import simbol from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";
import SearchOverlay from "./SearchOverlay";

type MobileSection = {
	title: string;
	href?: string;
	links?: {
		name: string;
		href: string;
	}[];
};

const sections: MobileSection[] = [
	{
		title: "O Institutu",
		href: "/o-institutu",
		links: [
			{
				name: "Istorijat",
				href: "/o-institutu/istorijat",
			},
			{
				name: "O ITNMS-u",
				href: "/o-institutu/o-itnms-u",
			},
			{
				name: "Organizacija",
				href: "/o-institutu/organizacija",
			},
			{
				name: "Rukovodstvo",
				href: "/o-institutu/rukovodstvo",
			},
			{
				name: "Naučno Veće",
				href: "/o-institutu/naucno-vece",
			},
			{
				name: "Delatnosti i oblasti rada",
				href: "/o-institutu/delatnosti-i-oblasti-rada",
			},
		],
	},
	{
		title: "Istraživači / Zaposleni",
		href: "/istrazivaci",
	},
	{
		title: "Projekti",
		href: "/projekti",
		links: [
			{
				name: "Naučni projekti",
				href: "/projekti/naucni",
			},
			{
				name: "Industrijski projekti",
				href: "/projekti/industrijski-projekti",
			},
		],
	},
	{
		title: "Usluge",
		href: "/usluge",
		links: [
			{
				name: "Oblasti usluga",
				href: "/usluge/oblasti-usluga",
			},
			{
				name: "Laboratorije",
				href: "/usluge/laboratorije",
			},
			{
				name: "Oprema",
				href: "/usluge/oprema",
			},
			{
				name: "Pošaljite upit",
				href: "/usluge/posaljite-upit",
			},
		],
	},
	{
		title: "Kvalitet i akreditacije",
		href: "/kvalitet-i-akreditacije",
		links: [
			{
				name: "Sistem kvaliteta",
				href: "/kvalitet-i-akreditacije/sistem-kvaliteta",
			},
			{
				name: "Akreditacije",
				href: "/kvalitet-i-akreditacije/akreditacije",
			},

			{
				name: "Sertifikati",
				href: "/kvalitet-i-akreditacije/sertifikati",
			},
			{
				name: "Politika kvaliteta",
				href: "/kvalitet-i-akreditacije/politika-kvaliteta",
			},
		],
	},
];

export default function MobileNav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [openSection, setOpenSection] = useState<number | null>(null);
	const [searchOpen, setSearchOpen] = useState(false);
	function closeMenu() {
		setMenuOpen(false);
		setOpenSection(null);
	}

	function toggleSection(index: number) {
		setOpenSection((current) => (current === index ? null : index));
	}
	const pathname = usePathname();

	const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
	return (
		<>
			<header className="flex items-center justify-between px-4 py-3 bg-white border-b border-stone-200">
				<Link
					href="/"
					onClick={closeMenu}
					className="flex items-center gap-2"
				>
					<Image
						src={simbol}
						alt="ITNMS"
						className="h-auto w-11"
					/>

					<Image
						src={text}
						alt="Institut ITNMS"
						className="w-24 h-auto"
					/>
				</Link>

				<button
					type="button"
					onClick={() => setMenuOpen((current) => !current)}
					className="flex items-center justify-center rounded-lg w-11 h-11 text-institute-900 hover:bg-institute-50"
					aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
				>
					{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</header>

			{menuOpen && (
				<div className="absolute left-0 right-0 z-50 overflow-y-auto bg-white border-b shadow-xl top-full max-h-[calc(100vh-68px)] border-stone-200">
					<nav className="px-4 py-5">
						<div className="space-y-1">
							{sections.map((section, index) => {
								const isOpen = openSection === index;

								return (
									<div
										key={section.title}
										className="border-b border-stone-100"
									>
										<div className="flex items-center">
											<Link
												href={section.href ?? "#"}
												onClick={closeMenu}
												className="flex-1 py-4 text-sm font-semibold uppercase text-stone-800"
											>
												{section.title}
											</Link>

											{section.links && (
												<button
													type="button"
													onClick={() => toggleSection(index)}
													className="flex items-center justify-center w-12 h-12 text-stone-600"
													aria-label={`Otvori ${section.title}`}
												>
													<ChevronDown
														className={`w-5 h-5 transition-transform ${
															isOpen ? "rotate-180" : ""
														}`}
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
															href={link.href}
															onClick={closeMenu}
															className="px-4 py-2.5 text-sm text-stone-600 transition hover:bg-institute-50 hover:text-institute-800"
														>
															{link.name}
														</Link>
													))}
												</div>
											</div>
										)}
									</div>
								);
							})}

							<Link
								href="https://ritnms.itnms.ac.rs/"
								target="_blank"
								onClick={closeMenu}
								className="flex items-center gap-2 py-4 text-sm font-semibold uppercase border-b text-stone-800 border-stone-100"
							>
								RITNMS
								<ExternalLink className="w-4 h-4" />
							</Link>

							<Link
								href="/kontakt"
								onClick={closeMenu}
								className="block py-4 text-sm font-semibold uppercase border-b text-stone-800 border-stone-100"
							>
								Kontakt
							</Link>
						</div>

						<div className="pt-6 mt-6 border-t border-stone-200">
							<button
								type="button"
								onClick={() => {
									setMenuOpen(false);
									setSearchOpen(true);
								}}
								className="flex items-center w-full gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-stone-50 text-stone-700"
							>
								<Search className="w-4 h-4" />
								Pretraga
							</button>

							<div className="flex items-center gap-3 mt-5">
								<Link
									href="/"
									onClick={closeMenu}
									className="font-semibold text-institute-800"
								>
									SR
								</Link>

								<span className="text-stone-300">|</span>

								<a
									href="/en"
									onClick={closeMenu}
									className="text-stone-500"
								>
									EN
								</a>
							</div>

							<div className="flex flex-col gap-2 pt-5 mt-5 text-sm border-t border-stone-200 text-stone-600">
								<a href="mailto:itnms@itnms.ac.rs">itnms@itnms.ac.rs</a>

								<a href="tel:+381113691722">+381 11 3691 722</a>
							</div>
						</div>
					</nav>
				</div>
			)}
			<SearchOverlay
				open={searchOpen}
				onClose={() => setSearchOpen(false)}
			/>
		</>
	);
}
