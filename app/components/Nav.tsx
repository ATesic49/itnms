"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import simbol from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";
import NavKarta from "./NavKarta";
import MobileNav from "./MobileNav";
import { usePathname, useRouter } from "next/navigation";
const Nav = () => {
	const [open, setOpen] = useState(0);
	const [searchOpen, setSearchOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
	function changeLanguage(language: "sr" | "en") {
		const search = window.location.search;
		const hash = window.location.hash;

		let newPath = pathname;

		if (language === "en") {
			if (!isEnglish) {
				newPath = pathname === "/" ? "/en" : `/en${pathname}`;
			}
		}

		if (language === "sr") {
			if (isEnglish) {
				newPath = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "");
			}
		}

		router.push(`${newPath}${search}${hash}`);
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
									Pretraga
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
										className={`transition ${
											!isEnglish
												? "font-semibold text-white"
												: "text-institute-200 hover:text-white"
										}`}
									>
										SR
									</button>

									<span className="text-institute-300">/</span>

									<button
										type="button"
										onClick={() => changeLanguage("en")}
										className={`transition ${
											isEnglish
												? "font-semibold text-white"
												: "text-institute-200 hover:text-white"
										}`}
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
								href="/"
							>
								<Image
									src={simbol}
									alt="ITNMS"
								/>
							</Link>

							<Link
								className="w-26"
								href="/"
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
							<NavKarta open={open} />

							<Link
								href="/o-institutu"
								onMouseOver={() => setOpen(1)}
								className={`${open == 1 && "text-gray-800"}`}
							>
								O Institutu
							</Link>

							<Link
								href="/istrazivaci-i-zaposleni"
								className={`${open == 2 && "text-gray-800"}`}
								onMouseOver={() => setOpen(2)}
							>
								Istraživači/Zaposleni
							</Link>

							<Link
								href="/projekti"
								className={`${open == 3 && "text-gray-800"}`}
								onMouseOver={() => setOpen(3)}
							>
								Projekti
							</Link>

							<Link
								target="_blank"
								className="flex items-start gap-1 hover:text-gray-800"
								href="https://ritnms.itnms.ac.rs/"
							>
								RITNMS
								<ExternalLink className="w-3 h-4" />
							</Link>

							<Link
								href="/usluge"
								// onMouseOver={() => setOpen(4)}
								className={`${open == 4 && "text-gray-800"} hover:text-gray-800`}
							>
								Usluge
							</Link>

							<Link
								href="/kontakt"
								className={`${open == 8 && "text-gray-800"} hover:text-gray-800`}
							>
								Kontakt
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
