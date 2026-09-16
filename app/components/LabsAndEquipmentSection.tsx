import { ArrowRight, FlaskConical, Microscope, Settings2 } from "lucide-react";
import slika from "@/public/imgs/IMG_9984.jpg";
import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import Image from "next/image";

const featuredItems = [
	{
		title: "Laboratorije",
		description:
			"Pregled laboratorijskih kapaciteta, oblasti ispitivanja i stručnih timova.",
		href: "/usluge/laboratorije",
		icon: FlaskConical,
	},
	{
		title: "Oprema",
		description:
			"Savremeni uređaji za analizu, karakterizaciju i tehnološka ispitivanja.",
		href: "/usluge/oprema",
		icon: Microscope,
	},
];

export function LabsAndEquipmentSection() {
	return (
		<Section background="institute">
			<Container>
				<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
					<div className="relative overflow-hidden bg-white border shadow-sm rounded-2xl border-institute-100">
						<Image
							src={slika}
							alt="Laboratorija Instituta i istraživačka oprema"
							className="object-cover w-full aspect-4/3"
						/>

						<div className="absolute inset-x-0 bottom-0 p-6 pt-24 bg-linear-to-t from-institute-950/85 via-institute-950/30 to-transparent">
							<p className="max-w-lg text-sm leading-6 text-white">
								Laboratorijski i tehnološki kapaciteti namenjeni naučnim
								istraživanjima, razvoju procesa i stručnoj podršci industriji.
							</p>
						</div>
					</div>

					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Kapaciteti Instituta
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Laboratorije, oprema i metode ispitivanja
						</h2>

						<p className="max-w-xl mt-5 text-base leading-7 text-stone-600">
							Institut raspolaže specijalizovanim laboratorijama i opremom za
							ispitivanje mineralnih sirovina, materijala, tehnoloških procesa i
							uticaja na životnu sredinu.
						</p>

						<div className="mt-8 space-y-4">
							{featuredItems.map((item) => {
								const Icon = item.icon;

								return (
									<a
										key={item.href}
										href={item.href}
										className="flex gap-4 p-5 transition bg-white border group rounded-xl border-institute-100 hover:border-institute-300 hover:shadow-sm"
									>
										<div className="flex items-center justify-center transition rounded-lg h-11 w-11 shrink-0 bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
											<Icon
												className="w-5 h-5"
												aria-hidden="true"
											/>
										</div>

										<div className="min-w-0">
											<h3 className="text-lg font-semibold transition text-stone-900 group-hover:text-institute-800">
												{item.title}
											</h3>

											<p className="mt-1 text-sm leading-6 text-stone-600">
												{item.description}
											</p>
										</div>
									</a>
								);
							})}
						</div>

						<a
							href="/usluge/laboratorije"
							className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
						>
							Pogledajte sve laboratorijske kapacitete
							<ArrowRight
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					</div>
				</div>
			</Container>
		</Section>
	);
}
