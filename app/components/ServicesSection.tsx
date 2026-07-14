import {
	ArrowRight,
	Beaker,
	ChartNoAxesCombined,
	Factory,
	FlaskConical,
	Microscope,
	Recycle,
} from "lucide-react";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";

const services = [
	{
		title: "Laboratorijska ispitivanja",
		description:
			"Hemijska, fizička, mineraloška i instrumentalna ispitivanja sirovina i materijala.",
		href: "/usluge/laboratorijska-ispitivanja",
		icon: Microscope,
	},
	{
		title: "Karakterizacija materijala",
		description:
			"Analiza strukture, sastava i svojstava materijala primenom savremenih metoda.",
		href: "/usluge/karakterizacija-materijala",
		icon: Beaker,
	},
	{
		title: "Razvoj tehnoloških procesa",
		description:
			"Razvoj i optimizacija procesa pripreme, prerade i obrade mineralnih sirovina.",
		href: "/usluge/razvoj-tehnoloskih-procesa",
		icon: Factory,
	},
	{
		title: "Poluindustrijska ispitivanja",
		description:
			"Provera tehnoloških rešenja u uslovima koji su bliži realnoj industrijskoj primeni.",
		href: "/usluge/poluindustrijska-ispitivanja",
		icon: FlaskConical,
	},
	{
		title: "Zaštita životne sredine",
		description:
			"Ispitivanja, tretman otpada i razvoj održivih rešenja za industriju i rudarstvo.",
		href: "/usluge/zastita-zivotne-sredine",
		icon: Recycle,
	},
	{
		title: "Stručne studije i konsultacije",
		description:
			"Stručne analize, elaborati, procene i savetodavna podrška za razvoj i unapređenje procesa.",
		href: "/usluge/strucne-studije-i-konsultacije",
		icon: ChartNoAxesCombined,
	},
];

export function ServicesSection() {
	return (
		<Section background="white">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Usluge
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Stručna podrška za industriju i institucije
						</h2>

						<p className="max-w-xl mt-5 text-base leading-7 text-stone-600">
							Institut pruža laboratorijske, razvojne i konsultantske usluge
							prilagođene konkretnim potrebama privrede, nauke i javnog sektora.
						</p>

						<div className="flex flex-col gap-3 mt-8 sm:flex-row lg:flex-col xl:flex-row">
							<a
								href="/usluge"
								className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
							>
								Sve usluge
								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>

							<a
								href="/usluge/posaljite-upit"
								className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition border rounded-md border-institute-700 text-institute-800 hover:bg-institute-50"
							>
								Pošaljite upit
							</a>
						</div>
					</div>

					<div className="grid gap-5 md:grid-cols-2">
						{services.map((service) => {
							const Icon = service.icon;

							return (
								<a
									key={service.href}
									href={service.href}
									className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
								>
									<div className="flex items-center justify-center transition rounded-lg h-11 w-11 bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
										<Icon
											className="w-5 h-5"
											aria-hidden="true"
										/>
									</div>

									<h3 className="mt-5 text-lg font-semibold transition text-stone-900 group-hover:text-institute-800">
										{service.title}
									</h3>

									<p className="mt-3 text-sm leading-6 text-stone-600">
										{service.description}
									</p>

									<span className="inline-flex mt-5 text-sm font-semibold text-institute-700">
										Detaljnije →
									</span>
								</a>
							);
						})}
					</div>
				</div>
			</Container>
		</Section>
	);
}
