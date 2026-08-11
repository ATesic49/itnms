// "use client";

// import React, { useState } from "react";
// import logo from "@/public/imgs/ITNMS1.png";
// import Image from "next/image";
// import Link from "next/link";
// import simbol from "@/public/imgs/ITNMS_simbol.png";
// import text from "@/public/imgs/ITNMS_text.png";
// import NavKarta from "./NavKarta";
// import { ExternalLink, Search } from "lucide-react";
// const Nav = () => {
// 	const [open, setOpen] = useState(0);

// 	return (
// 		<div className="sticky top-0 z-10 font-text">
// 			<div className="hidden text-sm text-white bg-institute-950 lg:block">
// 				<div className="flex items-center justify-between px-6 py-2 mx-auto max-w-7xl lg:px-8">
// 					<div className="flex items-center gap-6">
// 						<a
// 							href="mailto:itnms@itnms.ac.rs"
// 							className="transition hover:text-institute-200"
// 						>
// 							itnms@itnms.ac.rs
// 						</a>

// 						<a
// 							href="tel:+381113691722"
// 							className="transition hover:text-institute-200"
// 						>
// 							+381 11 3691 722
// 						</a>
// 					</div>

// 					<div className="flex items-center gap-5">
// 						<button
// 							type="button"
// 							className="flex items-center gap-2 transition hover:text-institute-200"
// 							aria-label="Pretraži sajt"
// 						>
// 							<Search className="w-4 h-4" />
// 							Pretraga
// 						</button>

// 						<div className="flex items-center gap-2">
// 							<a
// 								href="/"
// 								className="font-semibold"
// 							>
// 								SR
// 							</a>

// 							<span className="text-stone-400">|</span>

// 							<a
// 								href="/en"
// 								className="transition text-stone-300 hover:text-white"
// 							>
// 								EN
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div
// 				className={`flex  border-b  px-3 py-2
//                   text-sm font-medium text-stone-700
//                   transition
//                   hover:bg-institute-50
//                   hover:text-institute-800 border-stone-200 bg-white/95 backdrop-blur justify-between items-center  gap-8 pl-8  ${open && "bg-black "} duration-200`}
// 				onMouseLeave={() => setOpen(0)}
// 			>
// 				<div className="flex items-center gap-2 justify-cetner">
// 					<Link
// 						className="w-16"
// 						href={"/"}
// 					>
// 						<Image
// 							className={` duraiton-200 `}
// 							src={simbol}
// 							alt="ITNMS"
// 						/>
// 					</Link>
// 					<Link
// 						className="w-26"
// 						href={"/"}
// 					>
// 						<Image
// 							className={` duraiton-200 `}
// 							src={text}
// 							alt="ITNMS"
// 						/>
// 					</Link>
// 				</div>
// 				<div
// 					onMouseLeave={() => setOpen(0)}
// 					className={`flex gap-8 font-text text-md  uppercase relative px-16 py-4  ${open ? "text-institute-500" : "text-gray-800"}`}
// 				>
// 					<NavKarta open={open}></NavKarta>

// 					<Link
// 						className="hover:text-gray-800"
// 						href={"/o-institutu"}
// 						onMouseOver={() => setOpen(1)}
// 					>
// 						O Institutu
// 					</Link>
// 					<Link
// 						className=" hover:text-gray-800"
// 						href={"/istrazivaci-i-zaposleni"}
// 						onMouseOver={() => setOpen(2)}
// 					>
// 						Istrazivaci/Zaposleni
// 					</Link>
// 					<Link
// 						className=" hover:text-gray-800"
// 						href={"/projekti"}
// 						onMouseOver={() => setOpen(3)}
// 					>
// 						Projekti
// 					</Link>
// 					<Link
// 						target="_blank"
// 						className="flex items-start gap-1 hover:text-gray-800"
// 						href={"https://ritnms.itnms.ac.rs/"}
// 					>
// 						RITNMS <ExternalLink className="w-3 h-4.5" />
// 					</Link>
// 					<Link
// 						className=" hover:text-gray-800"
// 						href={"/usluge"}
// 						onMouseOver={() => setOpen(4)}
// 					>
// 						Usluge
// 					</Link>

// 					<Link
// 						className=" hover:text-gray-800"
// 						href={"/kontakt"}
// 					>
// 						Kontakt
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Nav;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";

import simbol from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";
import NavKarta from "./NavKarta";
import MobileNav from "./MobileNav";

const Nav = () => {
	const [open, setOpen] = useState(0);

	return (
		<div className="sticky top-0 z-50 font-text">
			{/* MOBILE */}
			<div className="lg:hidden">
				<MobileNav />
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
								className="flex items-center gap-2 transition hover:text-institute-200"
							>
								<Search className="w-4 h-4" />
								Pretraga
							</button>

							<div className="flex items-center gap-2">
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
							</div>
						</div>
					</div>
				</div>

				<div
					className={`flex border-b px-3 py-2 text-sm font-medium
					text-stone-700 transition border-stone-200
					bg-white/95 backdrop-blur justify-between items-center
					gap-8 pl-8 duration-200`}
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
						>
							O Institutu
						</Link>

						<Link
							href="/istrazivaci-i-zaposleni"
							onMouseOver={() => setOpen(2)}
						>
							Istraživači/Zaposleni
						</Link>

						<Link
							href="/projekti"
							onMouseOver={() => setOpen(3)}
						>
							Projekti
						</Link>

						<Link
							target="_blank"
							className="flex items-start gap-1"
							href="https://ritnms.itnms.ac.rs/"
						>
							RITNMS
							<ExternalLink className="w-3 h-4" />
						</Link>

						<Link
							href="/usluge"
							onMouseOver={() => setOpen(4)}
						>
							Usluge
						</Link>

						<Link href="/kontakt">Kontakt</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
