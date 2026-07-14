"use client";

import React, { useState } from "react";
import logo from "@/public/imgs/ITNMS1.png";
import Image from "next/image";
import Link from "next/link";
import simbol from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";
import NavKarta from "./NavKarta";
import { Search } from "lucide-react";
const Nav = () => {
	const [open, setOpen] = useState(0);

	return (
		<div className="sticky top-0 z-10 font-text">
			<div className="hidden text-sm text-white bg-institute-950 lg:block">
				<div className="flex items-center justify-between px-6 py-2 mx-auto max-w-7xl lg:px-8">
					<div className="flex items-center gap-6">
						<a
							href="mailto:office@itnms.ac.rs"
							className="transition hover:text-institute-200"
						>
							office@itnms.ac.rs
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
							aria-label="Pretraži sajt"
						>
							<Search className="w-4 h-4" />
							Pretraga
						</button>

						<div className="flex items-center gap-2">
							<a
								href="/"
								className="font-semibold"
							>
								SR
							</a>

							<span className="text-stone-400">|</span>

							<a
								href="/en"
								className="transition text-stone-300 hover:text-white"
							>
								EN
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`flex  border-b  px-3 py-2
                  text-sm font-medium text-stone-700
                  transition
                  hover:bg-institute-50
                  hover:text-institute-800 border-stone-200 bg-white/95 backdrop-blur justify-between items-center  gap-8 pl-8  ${open && "bg-black "} duration-200`}
				onMouseLeave={() => setOpen(0)}
			>
				<div className="flex items-center gap-2 justify-cetner">
					<Link
						className="w-16"
						href={"/"}
					>
						<Image
							className={` duraiton-200 `}
							src={simbol}
							alt="ITNMS"
						/>
					</Link>
					<Link
						className="w-26"
						href={"/"}
					>
						<Image
							className={` duraiton-200 `}
							src={text}
							alt="ITNMS"
						/>
					</Link>
				</div>
				<div
					onMouseLeave={() => setOpen(0)}
					className={`flex gap-8 font-text text-md  uppercase relative px-16 py-4 ${open ? "text-institute-500" : "text-gray-800"}`}
				>
					<NavKarta open={open}></NavKarta>

					<Link
						className="hover:text-gray-800"
						href={"/o-institutu"}
						onMouseOver={() => setOpen(1)}
					>
						O Institutu
					</Link>
					<Link
						className=" hover:text-gray-800"
						href={"/"}
						onMouseOver={() => setOpen(2)}
					>
						Istrazivaci/Zaposleni
					</Link>
					<Link
						className=" hover:text-gray-800"
						href={"/projekti"}
						onMouseOver={() => setOpen(3)}
					>
						Projekti
					</Link>
					<Link
						className=" hover:text-gray-800"
						href={"/"}
						onMouseOver={() => setOpen(4)}
					>
						Usluge
					</Link>
					<Link
						className=" hover:text-gray-800"
						href={"/"}
					>
						Kontakt
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
