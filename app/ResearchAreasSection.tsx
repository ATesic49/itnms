import {
	Atom,
	Factory,
	FlaskConical,
	Leaf,
	Microscope,
	Pickaxe,
} from "lucide-react";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import Link from "next/link";

const researchAreas = [
	{
		title: "Priprema mineralnih sirovina",
		description:
			"Istraživanje i razvoj postupaka pripreme, obogaćivanja i prerade mineralnih sirovina.",
		href: "/o-institutu/delatnosti-i-oblasti-rada/priprema-mineralnih-sirovina",
		icon: Pickaxe,
	},
	{
		title: "Metalurgija",
		description:
			"Razvoj i optimizacija metalurških procesa, ispitivanje materijala i tehnoloških postupaka.",
		href: "/o-institutu/delatnosti-i-oblasti-rada/metalurgija",
		icon: Factory,
	},
	{
		title: "Materijali i hemijsko inženjerstvo",
		description:
			"Razvoj, karakterizacija i primena savremenih materijala i hemijsko-tehnoloških procesa.",
		href: "/o-institutu/delatnosti-i-oblasti-rada/materijali-i-hemijsko-inzenjerstvo",
		icon: Atom,
	},
	{
		title: "Zaštita životne sredine",
		description:
			"Ispitivanje uticaja na životnu sredinu i razvoj održivih tehnoloških rešenja.",
		href: "/o-institutu/delatnosti-i-oblasti-rada/zastita-zivotne-sredine",
		icon: Leaf,
	},
	{
		title: "Laboratorijska ispitivanja",
		description:
			"Hemijska, fizička, mineraloška i instrumentalna ispitivanja sirovina i materijala.",
		href: "/usluge/laboratorije",
		icon: Microscope,
	},
	{
		title: "Saradnja sa industrijom",
		description:
			"Stručne usluge, razvoj procesa i tehnološka podrška kompanijama i industrijskim partnerima.",
		href: "/projekti/industrijski",
		icon: FlaskConical,
	},
];

export function ResearchAreasSection() {
	return (
		<Section background="white">
			<Container>
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Oblasti rada
						</p>

						<h2 className="max-w-3xl mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Naučna i stručna ekspertiza Instituta
						</h2>
					</div>

					<p className="max-w-2xl text-base leading-7 text-stone-600 lg:text-right">
						Istraživanja, laboratorijska ispitivanja i razvoj tehnoloških
						rešenja za potrebe nauke, industrije i zaštite životne sredine.
					</p>
				</div>

				<div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
					{researchAreas.map((area) => {
						const Icon = area.icon;

						return (
							<Link
								key={area.href}
								href={area.href}
								className="group flex min-h-62.5 flex-col rounded-xl border border-stone-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
							>
								<div className="flex items-center justify-center w-12 h-12 transition rounded-lg bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
									<Icon
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</div>

								<h3 className="mt-6 text-xl font-semibold tracking-tight transition text-stone-900 group-hover:text-institute-800">
									{area.title}
								</h3>

								<p className="mt-3 text-sm leading-6 text-stone-600">
									{area.description}
								</p>

								<span className="pt-6 mt-auto text-sm font-semibold transition text-institute-700 group-hover:text-institute-900">
									Saznajte više →
								</span>
							</Link>
						);
					})}
				</div>
			</Container>
		</Section>
	);
}
