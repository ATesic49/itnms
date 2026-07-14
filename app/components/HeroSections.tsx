import { ArrowRight, FlaskConical } from "lucide-react";

import { Container } from "@/app/components/Container";
import hero from "@/public/imgs/IMG_99676.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
export function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-institute-50">
			<Container className="py-16 md:py-20 lg:py-28">
				<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
					{/* Tekstualni deo */}
					<div>
						<div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border rounded-full shadow-sm border-institute-200 text-institute-800">
							<FlaskConical
								className="w-4 h-4 text-mineral-700"
								aria-hidden="true"
							/>
							Nauka, razvoj i saradnja sa privredom
						</div>

						<h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight font-naslov mt-7 text-institute-900 md:text-5xl lg:text-6xl">
							Institut za tehnologiju nuklearnih i drugih mineralnih sirovina
						</h1>

						<p className="max-w-2xl mt-6 text-lg leading-8 text-stone-600 md:text-xl">
							Naučnoistraživački rad, razvoj tehnologija i stručne usluge u
							oblasti mineralnih sirovina, materijala, metalurgije i zaštite
							životne sredine.
						</p>

						<div className="flex flex-col gap-3 mt-8 sm:flex-row">
							<Button>
								<Link
									href="/o-institutu"
									className="inline-flex items-center justify-center gap-2 font-semibold "
								>
									O Institutu
									<ArrowRight
										className="w-4 h-4"
										aria-hidden="true"
									/>
								</Link>
							</Button>

							<Button tip={2}>
								<Link
									href="/o-institutu"
									className="inline-flex items-center justify-center gap-2 font-semibold "
								>
									Pogledajte usluge
									<ArrowRight
										className="w-4 h-4"
										aria-hidden="true"
									/>
								</Link>
							</Button>
						</div>

						<dl className="grid max-w-xl grid-cols-2 gap-6 pt-8 mt-10 border-t border-stone-200 sm:grid-cols-3">
							<HeroStat
								value="50+"
								label="godina iskustva"
							/>
							<HeroStat
								value="30+"
								label="istraživača"
							/>
							<HeroStat
								value="10+"
								label="laboratorija"
							/>
						</dl>
					</div>

					{/* Fotografija */}
					<div className="relative">
						<div className="absolute w-32 h-32 rounded-full -left-6 -top-6 bg-mineral-100 blur-3xl" />
						<div className="absolute w-40 h-40 rounded-full -bottom-10 -right-8 bg-institute-100 blur-3xl" />

						<div className="relative overflow-hidden border shadow-lg rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={hero}
								alt="Istraživači ITNMS-a tokom rada u laboratoriji"
								className="object-cover h-full w- aspec-4/3"
							/>

							<div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-institute-950/80 via-institute-950/30 to-transparent">
								<p className="max-w-md text-sm leading-6 text-white">
									Savremene laboratorije, stručni timovi i razvoj tehnoloških
									rešenja za nauku i industriju.
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
