import { ArrowRight, FlaskConical } from "lucide-react";
import { Container } from "@/app/components/Container";
import hero2 from "@/public/imgs/IMG_0134.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type HeroSectionProps = {
	lang?: "sr" | "en";
};

export function HeroSection({ lang = "sr" }: HeroSectionProps) {
	const isEnglish = lang === "en";

	return (
		<section className="relative overflow-hidden bg-linear-to-br from-white via-white to-institute-50">
			<Container className="py-16 lg:pt-10 md:py-20 lg:py-28">
				<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
					<div>
						<div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border rounded-full shadow-sm border-institute-200 text-institute-800">
							<FlaskConical
								className="w-4 h-4 text-mineral-700"
								aria-hidden="true"
							/>
							{isEnglish
								? "Science, development and industry collaboration"
								: "Nauka, razvoj i saradnja sa privredom"}
						</div>

						<h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight mt-7 font-naslov text-institute-900 md:text-5xl lg:text-6xl">
							{isEnglish
								? "Institute for Technology of Nuclear and Other Mineral Raw Materials"
								: "Institut za tehnologiju nuklearnih i drugih mineralnih sirovina"}
						</h1>

						<p className="max-w-2xl mt-6 text-lg leading-8 text-stone-600 md:text-xl">
							{isEnglish
								? "Scientific research, technology development and professional services in the fields of mineral raw materials, materials, metallurgy and environmental protection."
								: "Naučnoistraživački rad, razvoj tehnologija i stručne usluge u oblasti mineralnih sirovina, materijala, metalurgije i zaštite životne sredine."}
						</p>

						<div className="flex flex-col gap-3 mt-8 sm:flex-row">
							<Button>
								<Link
									href={
										isEnglish
											? "/en/about/organization"
											: "/o-institutu/organizacija"
									}
									className="inline-flex items-center justify-center gap-2 font-semibold"
								>
									{isEnglish ? "Research centres" : "Centri"}
									<ArrowRight
										className="w-4 h-4"
										aria-hidden="true"
									/>
								</Link>
							</Button>

							<Button tip={2}>
								<Link
									href={isEnglish ? "/en/researchers" : "/istrazivaci"}
									className="inline-flex items-center justify-center gap-2 font-semibold"
								>
									{isEnglish ? "Researchers" : "Istraživači"}
									<ArrowRight
										className="w-4 h-4"
										aria-hidden="true"
									/>
								</Link>
							</Button>
						</div>

						<dl className="grid max-w-xl grid-cols-3 gap-6 pt-8 mt-10 border-t border-stone-200 sm:grid-cols-5">
							<HeroStat
								value="75+"
								label={isEnglish ? "Years of experience" : "Godina iskustva"}
							/>
							<HeroStat
								value="40+"
								label={isEnglish ? "Researchers" : "Istraživača"}
							/>
							<HeroStat
								value="2400+"
								label={
									isEnglish
										? "Scientific publications"
										: "Broj naučnih publikacija"
								}
							/>
							<HeroStat
								value="800+"
								label={
									isEnglish
										? "SCI-indexed publications"
										: "Broj naučnih publikacija na SCI listi"
								}
							/>
							<HeroStat
								value="15%"
								label={
									isEnglish ? "Excellent researchers" : "Izvrsnih istraživača"
								}
							/>
						</dl>
					</div>

					<div className="relative">
						<div className="absolute w-32 h-32 rounded-full -left-6 -top-6 bg-mineral-100 blur-3xl" />
						<div className="absolute w-40 h-40 rounded-full -bottom-10 -right-8 bg-institute-100 blur-3xl" />

						<div className="relative overflow-hidden border shadow-lg mb-36 rounded-2xl border-stone-200 bg-stone-100 aspect-[4/3]">
							<Image
								src={hero2}
								alt={
									isEnglish
										? "ITNMS researchers working in a laboratory"
										: "Istraživači ITNMS-a tokom rada u laboratoriji"
								}
								className="object-cover w-full h-full"
								sizes="(min-width: 1024px) 44vw, 100vw"
								width={1024}
								height={720}
								placeholder="blur"
							/>

							<div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-linear-to-t from-institute-950/80 via-institute-950/30 to-transparent">
								<p className="max-w-md text-sm leading-6 text-white">
									{isEnglish
										? "Modern laboratories, expert teams and the development of technological solutions for science and industry."
										: "Savremene laboratorije, stručni timovi i razvoj tehnoloških rešenja za nauku i industriju."}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

type HeroStatProps = {
	value: string;
	label: string;
};

function HeroStat({ value, label }: HeroStatProps) {
	return (
		<div>
			<dt className="text-sm leading-5 text-institute-400">{label}</dt>
			<dd className="mt-1 text-2xl font-semibold text-mineral-800">{value}</dd>
		</div>
	);
}
