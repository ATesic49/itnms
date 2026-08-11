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
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type ServiceArea = {
	id: string;
	title: string;
	description: string;
	examples: string[];
	icon: React.ElementType;
	href?: string;
};

const serviceAreas: ServiceArea[] = [
	{
		id: "laboratorijska-ispitivanja",
		title: "Laboratorijska ispitivanja",
		description:
			"Hemijska, fizička, mineraloška i instrumentalna ispitivanja sirovina, materijala i tehnoloških proizvoda.",
		examples: [
			"Hemijske analize",
			"Mineraloška ispitivanja",
			"Fizičko-mehanička svojstva",
			"Instrumentalne metode",
		],
		icon: Microscope,
	},
	{
		id: "karakterizacija-materijala",
		title: "Karakterizacija materijala",
		description:
			"Ispitivanje sastava, strukture i svojstava materijala primenom odgovarajućih laboratorijskih metoda.",
		examples: [
			"Strukturna analiza",
			"Analiza površine",
			"Ispitivanje sastava",
			"Procena tehnoloških svojstava",
		],
		icon: Beaker,
	},
	{
		id: "razvoj-tehnoloskih-procesa",
		title: "Razvoj tehnoloških procesa",
		description:
			"Razvoj i optimizacija procesa pripreme, prerade i obrade mineralnih sirovina i materijala.",
		examples: [
			"Razvoj postupka",
			"Optimizacija parametara",
			"Laboratorijska verifikacija",
			"Tehnološke preporuke",
		],
		icon: Factory,
	},
	{
		id: "poluindustrijska-ispitivanja",
		title: "Poluindustrijska ispitivanja",
		description:
			"Provera razvijenih procesa i tehnoloških rešenja u uslovima približenim industrijskoj primeni.",
		examples: [
			"Pilot ispitivanja",
			"Provera tehnološke izvodljivosti",
			"Testiranje procesa",
			"Priprema za industrijsko uvođenje",
		],
		icon: FlaskConical,
	},
	{
		id: "zastita-zivotne-sredine",
		title: "Zaštita životne sredine",
		description:
			"Ispitivanje otpada i razvoj održivih rešenja za tretman industrijskih i rudarskih tokova.",
		examples: [
			"Karakterizacija otpada",
			"Tretman otpadnih voda",
			"Izdvajanje korisnih komponenti",
			"Procena mogućnosti ponovne upotrebe",
		],
		icon: Recycle,
	},
	{
		id: "strucne-studije",
		title: "Stručne studije i konsultacije",
		description:
			"Stručne analize, elaborati, procene i savetodavna podrška za razvoj i unapređenje procesa.",
		examples: [
			"Stručne studije",
			"Tehnološke analize",
			"Konsultantska podrška",
			"Procena i unapređenje procesa",
		],
		icon: ChartNoAxesCombined,
	},
];

export default function ServiceAreasPage() {
	return (
		<>
			<PageHeader
				title="Oblasti usluga"
				description="Pregled laboratorijskih, razvojnih, tehnoloških i konsultantskih usluga Instituta."
				breadcrumbs={[
					{
						label: "Usluge",
						href: "/usluge",
					},
					{
						label: "Oblasti usluga",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Stručne usluge
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Pregled dostupnih oblasti usluga
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Usluge se realizuju kroz saradnju laboratorija, istraživačkih
							timova i odgovarajućih organizacionih jedinica Instituta.
						</p>
					</div>

					<div className="grid gap-6 mt-12 lg:grid-cols-2">
						{serviceAreas.map((service) => (
							<ServiceAreaCard
								key={service.id}
								service={service}
							/>
						))}
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Imate konkretan uzorak ili problem?
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pošaljite opis zahteva, vrstu uzorka i očekivani rezultat, a
								stručni tim Instituta će proceniti odgovarajuću uslugu.
							</p>
						</div>

						<a
							href="/usluge/posaljite-upit"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Pošaljite upit
							<ArrowRight
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					</div>
				</Container>
			</Section>
		</>
	);
}

type ServiceAreaCardProps = {
	service: ServiceArea;
};

function ServiceAreaCard({ service }: ServiceAreaCardProps) {
	const Icon = service.icon;

	return (
		<article
			id={service.id}
			className="transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 p-7 hover:border-institute-300 hover:shadow-md md:p-8"
		>
			<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
				<Icon
					className="w-6 h-6"
					aria-hidden="true"
				/>
			</div>

			<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
				{service.title}
			</h2>

			<p className="mt-4 text-base leading-7 text-stone-600">
				{service.description}
			</p>

			<ul className="grid gap-3 mt-6 sm:grid-cols-2">
				{service.examples.map((example) => (
					<li
						key={example}
						className="flex items-start gap-3 text-sm leading-6 text-stone-700"
					>
						<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
						{example}
					</li>
				))}
			</ul>

			<div className="flex flex-wrap gap-5 mt-7">
				<a
					href={`/usluge/posaljite-upit?oblast=${service.id}`}
					className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
				>
					Pošaljite upit za ovu oblast
					<ArrowRight
						className="w-4 h-4"
						aria-hidden="true"
					/>
				</a>

				<a
					href="/usluge/laboratorije"
					className="inline-flex items-center gap-2 text-sm font-semibold transition text-mineral-700 hover:text-mineral-900"
				>
					Povezane laboratorije
					<ArrowRight
						className="w-4 h-4"
						aria-hidden="true"
					/>
				</a>
			</div>
		</article>
	);
}
