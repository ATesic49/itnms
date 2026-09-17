"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Search } from "lucide-react";

import { localizeHref } from "@/app/lib/language/localizeHref";
import {
	reverseRouteTranslations,
	routeTranslations,
} from "@/app/lib/language/routes";

import simbol from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";

import NavKarta from "./NavKarta";
import MobileNav from "./MobileNav";

const SearchOverlay = dynamic(() => import("./SearchOverlay"), {
	ssr: false,
});

type NavContent = {
	search: string;
	about: string;
	employees: string;
	projects: string;
	services: string;
	contact: string;

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

type NavProps = {
	lang: "sr" | "en";
	content: NavContent;
};

export default function Nav({ lang, content }: NavProps) {
	const [open, setOpen] = useState(0);
	const [searchOpen, setSearchOpen] = useState(false);

	const pathname = usePathname();

	const isEnglish = lang === "en";

	function changeLanguage(language: "sr" | "en") {
		const search = window.location.search;

		const hash = window.location.hash;

		let newPath = pathname;

		if (language === "en") {
			if (isEnglish) return;

			newPath = routeTranslations[pathname] ?? `/en${pathname}`;
		}

		if (language === "sr") {
			if (!isEnglish) return;

			newPath =
				reverseRouteTranslations[pathname] ??
				(pathname.replace(/^\/en/, "") || "/");
		}

		window.location.href = `${newPath}${search}${hash}`;
	}

	return (
		<>
			<div className="sticky top-0 z-50 font-text">
				{/* MOBILE */}

				<div className="lg:hidden">
					<MobileNav
						lang={lang}
						onSearch={() => setSearchOpen(true)}
						onChangeLanguage={changeLanguage}
					/>
				</div>

				{/* DESKTOP */}

				<div className="hidden lg:block">
					<div className="text-sm text-white bg-institute-950">
						<div className="flex items-center justify-between px-6 py-2 mx-auto max-w-7xl lg:px-8">
							<div className="flex items-center gap-6">
								<a
									href="mailto:itnms@itnms.ac.rs"
									className="transition hover:text-institute-200"
								>
									itnms@itnms.ac.rs
								</a>

								<a
									href="tel:+381113691722"
									className="transition hover:text-institute-200"
								>
									+381 11 3691 722
								</a>
							</div>

							<div className="flex items-center gap-5">
								<button
									type="button"
									onClick={() => setSearchOpen(true)}
									className="flex items-center gap-2 transition hover:text-institute-200"
									aria-label={isEnglish ? "Search website" : "Pretraži sajt"}
								>
									<Search
										className="w-4 h-4"
										aria-hidden="true"
									/>

									{content.search}
								</button>

								<div className="flex items-center gap-2">
									<button
										type="button"
										onClick={() => changeLanguage("sr")}
										className={
											!isEnglish
												? "font-semibold"
												: "opacity-60 transition hover:opacity-100"
										}
										aria-current={!isEnglish ? "page" : undefined}
									>
										SR
									</button>

									<span aria-hidden="true">/</span>

									<button
										type="button"
										onClick={() => changeLanguage("en")}
										className={
											isEnglish
												? "font-semibold"
												: "opacity-60 transition hover:opacity-100"
										}
										aria-current={isEnglish ? "page" : undefined}
									>
										EN
									</button>
								</div>
							</div>
						</div>
					</div>

					<div
						className={`flex items-center justify-between gap-8 border-b border-stone-200 px-3 py-2 pl-8 text-sm font-medium text-stone-700 backdrop-blur transition duration-200 ${
							open ? "bg-institute-50" : "bg-white/95"
						}`}
						onMouseLeave={() => setOpen(0)}
					>
						<div className="flex items-center gap-2">
							<Link
								className="w-16"
								href={localizeHref("/", isEnglish)}
								aria-label={
									isEnglish ? "ITNMS homepage" : "Početna stranica ITNMS"
								}
							>
								<Image
									src={simbol}
									alt=""
									sizes="64px"
									className="w-full h-auto"
								/>
							</Link>

							<Link
								className="w-26"
								href={localizeHref("/", isEnglish)}
								aria-label={
									isEnglish ? "ITNMS homepage" : "Početna stranica ITNMS"
								}
							>
								<Image
									src={text}
									alt=""
									sizes="104px"
									className="w-full h-auto"
								/>
							</Link>
						</div>

						<div
							className={`relative flex gap-8 px-16 py-4 font-text text-md uppercase ${
								open ? "text-institute-500" : "text-gray-800"
							}`}
						>
							<NavKarta
								open={open}
								language={lang}
								content={{
									aboutMenu: content.aboutMenu,
									employeesMenu: content.employeesMenu,
									projectsMenu: content.projectsMenu,
								}}
							/>

							<Link
								href={localizeHref("/o-institutu", isEnglish)}
								onMouseOver={() => setOpen(1)}
								className={open === 1 ? "text-gray-800" : undefined}
							>
								{content.about}
							</Link>

							<Link
								href={localizeHref("/istrazivaci", isEnglish)}
								className="hover:text-gray-800"
								onMouseOver={() => setOpen(0)}
							>
								{content.employees}
							</Link>

							<Link
								href={localizeHref("/projekti", isEnglish)}
								className={open === 3 ? "text-gray-800" : undefined}
								onMouseOver={() => setOpen(3)}
							>
								{content.projects}
							</Link>

							<a
								onMouseOver={() => setOpen(0)}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-start gap-1 hover:text-gray-800"
								href="https://ritnms.itnms.ac.rs/"
							>
								RITNMS
								<ExternalLink
									className="w-3 h-4"
									aria-hidden="true"
								/>
							</a>

							<Link
								onMouseOver={() => setOpen(0)}
								href={localizeHref("/usluge", isEnglish)}
								className="hover:text-gray-800"
							>
								{content.services}
							</Link>

							<Link
								href={localizeHref("/kontakt", isEnglish)}
								className="hover:text-gray-800"
							>
								{content.contact}
							</Link>
						</div>
					</div>
				</div>
			</div>

			{searchOpen && (
				<SearchOverlay
					open
					onClose={() => setSearchOpen(false)}
				/>
			)}
		</>
	);
}
