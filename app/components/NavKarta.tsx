import Image from "next/image";
import React from "react";
import logo from "@/public/imgs/load.jpg";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
//9987
import zaposleni from "@/public/imgs/IMG_9917.jpg";
import projekti from "@/public/imgs/IMG_9987.jpg";
const NavKarta = ({ open }: { open: number }) => {
	const kontent = [
		{
			naslov: "Institut sa bogatom istorijom",
			linkovi: [
				{ ime: "Istorijat", link: "istorijat" },
				{ ime: "O ITNMS-u", link: "o-itnmsu" },
				{ ime: "Organizacija", link: "organizaciona-sema" },
				{ ime: "Organizacija", link: "organizaciona-sema" },
				{ ime: "Akta ITNMS-a", link: "akta" },
			],
			slika: logo,
			text: "Lorem Ipsum dolor sit amet",
		},
		{
			naslov: "Institut sa bogatom istorijom",
			linkovi: [
				{ ime: "Istorijat", link: "o-institutu/istorijat" },
				{ ime: "O ITNMS-u", link: "o-institutu/o-itnms-u" },
				{ ime: "Organizacija", link: "o-institutu/organizacija" },
				{ ime: "Rukovodstvo", link: "o-institutu/rukovodstvo" },
				{ ime: "Akta ITNMS-a", link: "akta" },
			],
			slika: logo,
			text: "Institut star preko 100 godina...",
		},
		{
			naslov: "Ljudi koji čine magiju stvarnom...",
			linkovi: [
				{ ime: "Svi zaposleni", link: "zaposleni" },
				{ ime: "Spisak Istraivača", link: "istrazivaci" },
				{ ime: "Rukovodstvo", link: "spisak-istrazivaca" },
				{ ime: "Pretraži zaposlenog", link: "pretrazi-zaposlenog" },
			],
			slika: zaposleni,
			text: "Istraži zrposlene koji rade ovde...",
		},
		{
			naslov: "Svi naši projekti na jednom mestu",
			linkovi: [
				{ ime: "Naučni projekti", link: "projekti" },
				{ ime: "Industrijski projekti", link: "industrijski-projekti" },
				{ ime: "Fond za nauku", link: "projekti/fond-za-nauku" },
				{ ime: "Međunarodni projekti", link: "projekti/medjunarodni" },
				{ ime: "Nacionalni projekti", link: "projekti/nacionalni" },
			],
			slika: projekti,
			text: "Ovde su projekti koje ljudi rade za projekte...",
		},

		{
			naslov: "Institut sa bogatom istorijom",
			linkovi: [
				{ ime: "Istorijat", link: "istorijat" },
				{ ime: "Organizacija", link: "organizacija" },
				{ ime: "Spisak Istraživača", link: "spisak-istrazivaca" },
			],
			slika: logo,
			text: "Lorem Ipsum dolor sit amet",
		},
		{
			naslov: "Institut sa bogatom istorijom",
			linkovi: [
				{ ime: "Istorijat", link: "istorijat" },
				{ ime: "Organizacija", link: "organizacija" },
				{ ime: "Spisak Istraživača", link: "spisak-istrazivaca" },
			],
			slika: logo,
			text: "Lorem Ipsum dolor sit amet",
		},
		{
			naslov: "Institut sa bogatom istorijom",
			linkovi: [
				{ ime: "Istorijat", link: "istorijat" },
				{ ime: "Organizacija", link: "organizacija" },
				{ ime: "Spisak Istraživača", link: "spisak-istrazivaca" },
			],
			slika: logo,
			text: "Lorem Ipsum dolor sit amet",
		},
	];
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					exit={{ y: -2, opacity: 0, transitionDuration: 100 }}
					className={` ${open ? "opacity-100" : "opacity-0"} duration-200 absolute grid  grid-cols-5 p-8 right-0 min-h-[80vh]  top-[calc(100%+8px)] bg-institute-50 left-0  `}
				>
					<div className="flex flex-col col-span-3 row-span-3 gap-4 py-4 pr-8 uppercase text-institute-700 text- ">
						<h2 className="pb-4 text-2xl underline text-institute-600 underline-offset-8">
							{kontent[open].naslov}
						</h2>
						{kontent[open].linkovi.map((li, index) => {
							return (
								<Link
									key={index}
									href={`/${li.link}`}
									className="cursor-pointer hover:underline"
								>
									{li.ime}
								</Link>
							);
						})}
					</div>
					<div className="flex flex-col w-full col-span-2 row-span-2 gap-4 py-4 text-base normal-case text-institute-600">
						<Image
							className="object-cover object-left aspect-video brightness-150"
							src={kontent[open].slika}
							alt=""
						></Image>
						<p>{kontent[open].text}</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default NavKarta;
