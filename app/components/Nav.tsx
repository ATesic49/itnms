"use client";
import { localizeHref } from "@/app/lib/language/localizeHref";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import simbol from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";
import NavKarta from "./NavKarta";
import MobileNav from "./MobileNav";
import { getDictionary, type Language } from "@/app/lib/language/dictionary";
import { usePathname, useRouter } from "next/navigation";
import {
	reverseRouteTranslations,
	routeTranslations,
} from "@/app/lib/language/routes";
const Nav = () => {
	const [open, setOpen] = useState(0);
	const [searchOpen, setSearchOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
	const language: Language = isEnglish ? "en" : "sr";

	const t = getDictionary(language);
	// function changeLanguage(language: "sr" | "en") {
	// 	const search = window.location.search;
	// 	const hash = window.location.hash;

	// 	let newPath = pathname;

	// 	if (language === "en") {
	// 		if (isEnglish) return;

	// 		newPath = routeTranslations[pathname] ?? `/en${pathname}`;
	// 	}

	// 	if (language === "sr") {
	// 		if (!isEnglish) return;

	// 		newPath =
	// 			reverseRouteTranslations[pathname] ??
	// 			(pathname.replace(/^\/en/, "") || "/");
	// 	}

	// 	router.push(`${newPath}${search}${hash}`);
	// }
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
					<MobileNav />
				</div>

				{/* DESKTOP */}
				<div className="hidden lg:block ">
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
									aria-label="Pretraži sajt"
								>
									<Search className="w-4 h-4" />
									{t.nav.search}
								</button>

								{/* <div className="flex items-center gap-2">
									<Link
										href="/"
										className="font-semibold"
									>
										SR
									</Link>

									<span className="text-stone-400">|</span>

									<Link
										href="/en"
										className="transition text-stone-300 hover:text-white"
									>
										EN
									</Link>
								</div> */}
								<div className="flex items-center gap-2">
									<button
										type="button"
										onClick={() => changeLanguage("sr")}
										className={
											!isEnglish
												? "font-semibold"
												: "opacity-60 hover:opacity-100"
										}
									>
										SR
									</button>

									<span>/</span>

									<button
										type="button"
										onClick={() => changeLanguage("en")}
										className={
											isEnglish
												? "font-semibold"
												: "opacity-60 hover:opacity-100"
										}
									>
										EN
									</button>
								</div>
							</div>
						</div>
					</div>

					<div
						className={`flex border-b px-3 py-2 text-sm font-medium
					text-stone-700 transition border-stone-200
					 backdrop-blur justify-between items-center
					gap-8 pl-8 duration-200
					
					${open ? "bg-institute-50" : "bg-white/95"}
					`}
						onMouseLeave={() => setOpen(0)}
					>
						<div className="flex items-center gap-2">
							<Link
								className="w-16"
								href={localizeHref("/", isEnglish)}
							>
								<Image
									src={simbol}
									alt="ITNMS"
								/>
							</Link>

							<Link
								className="w-26"
								href={localizeHref("/", isEnglish)}
							>
								<Image
									src={text}
									alt="ITNMS"
								/>
							</Link>
						</div>

						<div
							className={`flex gap-8 font-text text-md uppercase relative px-16 py-4 ${
								open ? "text-institute-500" : "text-gray-800"
							}`}
						>
							<NavKarta
								open={open}
								language={language}
							/>

							<Link
								href={localizeHref("/o-institutu", isEnglish)}
								onMouseOver={() => setOpen(1)}
								className={`${open == 1 && "text-gray-800"}`}
							>
								{t.nav.about}
							</Link>

							<Link
								href={localizeHref("/istrazivaci", isEnglish)}
								className={"hover:text-gray-800"}
								onMouseOver={() => setOpen(0)}
							>
								{t.nav.employees}
							</Link>

							<Link
								href={localizeHref("/projekti", isEnglish)}
								className={`${open == 3 && "text-gray-800"}`}
								onMouseOver={() => setOpen(3)}
							>
								{t.nav.projects}
							</Link>

							<Link
								onMouseOver={() => setOpen(0)}
								target="_blank"
								className="flex items-start gap-1 hover:text-gray-800"
								href="https://ritnms.itnms.ac.rs/"
							>
								RITNMS
								<ExternalLink className="w-3 h-4" />
							</Link>

							<Link
								onMouseOver={() => setOpen(0)}
								href={localizeHref("/usluge", isEnglish)}
								// onMouseOver={() => setOpen(4)}
								className={`${open == 4 && "text-gray-800"} hover:text-gray-800`}
							>
								{t.nav.services}
							</Link>

							<Link
								href={localizeHref("/kontakt", isEnglish)}
								className={`${open == 8 && "text-gray-800"} hover:text-gray-800`}
							>
								{t.nav.contact}
							</Link>
						</div>
					</div>
				</div>
			</div>
			<SearchOverlay
				open={searchOpen}
				onClose={() => setSearchOpen(false)}
			/>
		</>
	);
};

export default Nav;
