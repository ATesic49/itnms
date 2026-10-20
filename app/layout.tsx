import type { Metadata } from "next";

import { Source_Serif_4, Source_Sans_3 } from "next/font/google";

import "./globals.css";
import bg from "@/public/imgs/fascikla.png";
import Nav from "./components/Nav";
import Footer1 from "./components/Footer1";

import { getDictionary } from "./lib/language/dictionary";
import { getLanguage } from "./lib/language/getLanguage";
import Image from "next/image";

const naslov = Source_Serif_4({
	variable: "--font-naslov",
	subsets: ["cyrillic", "latin"],
	display: "swap",
});

const text = Source_Sans_3({
	variable: "--font-text",
	subsets: ["cyrillic", "latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default:
			"ITNMS – Institut za tehnologiju nuklearnih i drugih mineralnih sirovina",
		template: "%s | ITNMS",
	},
	description:
		"Institut za tehnologiju nuklearnih i drugih mineralnih sirovina – naučnoistraživački rad, razvoj tehnologija, laboratorijska ispitivanja i saradnja sa privredom.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	return (
		<html
			lang={lang === "en" ? "en" : "sr"}
			className={`${naslov.variable} ${text.variable} h-full antialiased`}
		>
			<body className="flex flex-col min-h-full">
				<Nav
					lang={lang}
					content={dict.nav}
				/>
				<Image
					src={bg}
					alt=""
					className="fixed w-full opacity-50 -z-10 oboji"
				></Image>
				{children}

				<Footer1
					content={dict.footer}
					lang={lang}
				/>
			</body>
		</html>
	);
}
