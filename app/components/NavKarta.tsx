import Image from "next/image";
import React from "react";
import logo from "@/public/imgs/load.jpg";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
//9987
import zaposleni from "@/public/imgs/IMG_9917.jpg";
import projekti from "@/public/imgs/IMG_9987.jpg";
import usluge from "@/public/imgs/IMG_0083.jpg";
import kvalitet from "@/public/imgs/IMG_0090.jpg";
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
				{ ime: "Naučno Veće", link: "o-institutu/naucno-vece" },
				{
					ime: "Delatnosti i Oblasti Rada",
					link: "o-institutu/delatnosti-i-oblasti-rada",
				},

				// { ime: "Akta ITNMS-a", link: "akta" },
			],
			slika: logo,
			text: "Institut star preko 100 godina...",
		},
		{
			naslov: "Ljudi koji znanje pretvaraju u rezultate.",
			linkovi: [
				// { ime: "Svi zaposleni", link: "istrazivaci-i-zaposleni/svi-zaposleni" },
				{
					ime: "Spisak Istraživača",
					link: "istrazivaci-i-zaposleni/istrazivaci",
				},
				{
					ime: "Rukovodstvo",
					link: "istrazivaci-i-zaposleni/rukovodstvo",
				},
				// { ime: "Pretraži zaposlenog", link: "pretrazi-zaposlenog" },
			],
			slika: zaposleni,
			text: "Istražite naš tim",
		},
		{
			naslov: "Svi naši projekti na jednom mestu",
			linkovi: [
				{ ime: "Naučni projekti", link: "projekti/naucni" },
				{
					ime: "Industrijski projekti",
					link: "projekti/industrijski-projekti",
				},
				// { ime: "Fond za nauku", link: "projekti/fond-za-nauku" },
				// { ime: "Međunarodni projekti", link: "projekti/medjunarodni" },
				// { ime: "Nacionalni projekti", link: "projekti/nacionalni" },
			],
			slika: projekti,
			text: "Pogledajte projekte koji oblikuju budućnost",
		},

		{
			naslov: "Usluge",
			linkovi: [
				{ ime: "Oblasti usluga", link: "usluge/oblasti-usluga" },
				{ ime: "Laboratorije", link: "usluge/laboratorije" },
				{ ime: "Oprema", link: "usluge/oprema" },
				{ ime: "Pošaljite upit", link: "usluge/posaljite-upit" },
			],
			slika: usluge,
			text: "Sve naše usluge na jednom mestu",
		},
		{
			naslov: "Kvalitet i Akreditacije",
			linkovi: [
				{
					ime: "Sistem kvaliteta",
					link: "kvalitet-i-akreditacije/sistem-kvaliteta",
				},
				{ ime: "Akreditacije", link: "kvalitet-i-akreditacije/akreditacije" },
				{
					ime: "Akreditovane metode",
					link: "kvalitet-i-akreditacije/akreditovane-metode",
				},
				{
					ime: "Sertifikati",
					link: "kvalitet-i-akreditacije/sertifikati",
				},
				{
					ime: "Politika Kvaliteta",
					link: "kvalitet-i-akreditacije/politika-kvaliteta",
				},
			],
			slika: kvalitet,
			text: "",
		},
		{
			naslov: "Institut sa bogatom istorijom",
			linkovi: [
				{ ime: "Istorijat", link: "istorijat" },
				{ ime: "Organizacija", link: "organizacija" },
				{ ime: "Spisak Istraživača", link: "spisak-istrazivaca" },
			],
			slika: kvalitet,
			text: "Lorem Ipsum dolor sit amet",
		},
	];
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					exit={{ y: -2, opacity: 0, transitionDuration: 100 }}
					className={` ${open ? "opacity-100" : "opacity-0"} duration-200 absolute grid  grid-cols-5 p-8 right-0 min-h-[80vh]  top-[calc(100%)] bg-institute-50 left-0  `}
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
							className="object-cover object-left aspect-video "
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
