"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import logo from "@/public/imgs/Logo ITNMS eng prozirni.png";
import Link from "next/link";
import Button from "./Button";
import Card from "./Card";
const Map = dynamic(() => import("@/app/components/Map"), {
	ssr: false,
});
const Footer = () => {
	return (
		<div className="grid w-full grid-cols-5 gap-16 px-8 py-16 text-gray-200 bg-black font-text">
			<div className="flex flex-col col-span-3 gap-8 ">
				<h2 className="text-4xl font-bold ">Kontaktiraj nas</h2>
				<div className="flex flex-col gap-8 font-prim h-full text-lg w-[30em]">
					<div className="flex gap-4 relative  bg-white z-1 w-[30em] text-lg">
						<p className="absolute text-lg text-gray-500 -translate-y-1/2 font-prim top-1/2 left-4 -z-1">
							Ime i prezime:
						</p>
						<input
							type="text"
							className="w-full p-2 px-4 text-lg text-gray-800 "
						/>
					</div>
					<div
						className="flex gap-4 bg-white z-1 w-[30em] relative group text-lg"
						tabIndex={0}
					>
						<p className="absolute text-lg text-gray-400 duration-200 top-2 left-4 -z-1 group-placeholder-shown:-translate-y-1/2 group-placeholder-shown:text-sm group-placeholder-shown:-top-4 group-placeholder-shown:left-0">
							Email:
						</p>
						<input
							type="text"
							className="w-full p-2 px-4 text-lg text-gray-800 bg-wite"
						/>
					</div>
					<div
						className="flex  bg-white z-1 w-[30em] gap-4 relative group text-lg"
						tabIndex={0}
					>
						<p className="absolute text-lg text-gray-400 duration-200 top-2 left-4 -z-1 group-placeholder-shown:-translate-y-1/2 group-placeholder-shown:text-sm group-placeholder-shown:-top-4 group-placeholder-shown:left-0 ">
							Poruka
						</p>
						<textarea
							className=" w-[30em] text-lg p-2 px-4 text-gray-800"
							name=""
							id=""
						></textarea>
					</div>
					<button className="px-4 py-2 ml-auto text-lg cursor-pointer bg-primary font-text">
						Kontaktiraj nas
					</button>
				</div>
				<Link href="/">
					<Image
						className="w-48 brightness-200"
						src={logo}
						alt=""
					></Image>
				</Link>
			</div>
			<div className="flex items-center justify-center w-full col-span-2 overflow-hidden">
				<Map />
			</div>
		</div>
	);
};

export default Footer;
