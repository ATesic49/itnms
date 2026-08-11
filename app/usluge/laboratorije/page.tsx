import { ArrowRight, FlaskConical, Mail, UserRound } from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import lab1 from "@/public/imgs/IMG_9953.jpg";
import lab2 from "@/public/imgs/IMG_9998.jpg";
import lab3 from "@/public/imgs/IMG_9953.jpg";
import Image, { StaticImageData } from "next/image";
type Laboratory = {
	id: string;
	name: string;
	description: string;
	image: string | StaticImageData;
	manager: string;
	email?: string;
	testingAreas: string[];
	equipmentUrl?: string;
};

const laboratories: Laboratory[] = [
	{
		id: "instrumentalna-ispitivanja",
		name: "Laboratorija za instrumentalna ispitivanja",
		description:
			"Laboratorija vrši instrumentalna ispitivanja sirovina, materijala i tehnoloških proizvoda primenom savremenih analitičkih metoda.",
		image: lab1,
		manager: "Ime i prezime",
		email: "laboratorija@itnms.ac.rs",
		testingAreas: [
			"Hemijska analiza",
			"Mineraloška karakterizacija",
			"Strukturna ispitivanja",
			"Analiza sastava materijala",
		],
		equipmentUrl: "/usluge/oprema#instrumentalna-ispitivanja",
	},
	{
		id: "mineralne-sirovine",
		name: "Laboratorija za pripremu mineralnih sirovina",
		description:
			"Laboratorijska ispitivanja procesa usitnjavanja, klasiranja, koncentracije i tehnološke pripreme mineralnih sirovina.",
		image: lab2,
		manager: "Ime i prezime",
		email: "minerali@itnms.ac.rs",
		testingAreas: [
			"Priprema uzoraka",
			"Usitnjavanje i klasiranje",
			"Koncentracija mineralnih sirovina",
			"Laboratorijska tehnološka ispitivanja",
		],
		equipmentUrl: "/usluge/oprema#mineralne-sirovine",
	},
	{
		id: "metalurgija",
		name: "Laboratorija za metalurška ispitivanja",
		description:
			"Ispitivanje metalurških procesa, tehnoloških parametara i svojstava materijala.",
		image: lab3,
		manager: "Ime i prezime",
		email: "metalurgija@itnms.ac.rs",
		testingAreas: [
			"Metalurški procesi",
			"Ispitivanje tehnoloških parametara",
			"Priprema i obrada uzoraka",
			"Razvoj i optimizacija procesa",
		],
		equipmentUrl: "/usluge/oprema#metalurgija",
	},
];

export default function LaboratoriesPage() {
	return (
		<>
			<PageHeader
				title="Laboratorije"
				description="Pregled laboratorijskih kapaciteta, oblasti ispitivanja, stručnih timova i kontakata."
				breadcrumbs={[
					{
						label: "Usluge",
						href: "/usluge",
					},
					{
						label: "Laboratorije",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Laboratorijski kapaciteti
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Specijalizovane laboratorije Instituta
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Laboratorije Instituta pružaju podršku naučnoistraživačkim
							projektima, razvoju tehnologija i stručnim uslugama za potrebe
							industrije i drugih institucija.
						</p>
					</div>

					<div className="mt-12 space-y-8">
						{laboratories.map((laboratory, index) => (
							<LaboratoryCard
								key={laboratory.id}
								laboratory={laboratory}
								imageOnLeft={index % 2 === 0}
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
								Niste sigurni kojoj laboratoriji da se obratite?
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pošaljite opis uzorka, potrebnog ispitivanja ili tehnološkog
								problema, a Institut će proslediti upit odgovarajućem timu.
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

type LaboratoryCardProps = {
	laboratory: Laboratory;
	imageOnLeft: boolean;
};

function LaboratoryCard({ laboratory, imageOnLeft }: LaboratoryCardProps) {
	return (
		<article
			id={laboratory.id}
			className="overflow-hidden bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200"
		>
			<div className="grid lg:grid-cols-[0.95fr_1.05fr]">
				<div
					className={`bg-stone-100 ${
						imageOnLeft ? "lg:order-1" : "lg:order-2"
					}`}
				>
					<Image
						src={laboratory.image}
						alt={laboratory.name}
						className="object-cover w-full h-full min-h-90"
					/>
				</div>

				<div
					className={`flex flex-col justify-center p-7 md:p-10 ${
						imageOnLeft ? "lg:order-2" : "lg:order-1"
					}`}
				>
					<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
						<FlaskConical
							className="w-6 h-6"
							aria-hidden="true"
						/>
					</div>

					<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
						{laboratory.name}
					</h2>

					<p className="mt-4 text-base leading-7 text-stone-600">
						{laboratory.description}
					</p>

					<div className="mt-6">
						<h3 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
							Oblasti ispitivanja
						</h3>

						<ul className="grid gap-3 mt-4 sm:grid-cols-2">
							{laboratory.testingAreas.map((area) => (
								<li
									key={area}
									className="flex items-start gap-3 text-sm leading-6 text-stone-700"
								>
									<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
									{area}
								</li>
							))}
						</ul>
					</div>

					<div className="grid gap-4 p-5 mt-7 rounded-xl bg-stone-50 sm:grid-cols-2">
						<div className="flex items-start gap-3">
							<UserRound
								className="mt-0.5 h-4 w-4 shrink-0 text-mineral-700"
								aria-hidden="true"
							/>

							<div>
								<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
									Rukovodilac
								</p>

								<p className="mt-1 text-sm font-medium text-stone-800">
									{laboratory.manager}
								</p>
							</div>
						</div>

						{laboratory.email && (
							<div className="flex items-start gap-3">
								<Mail
									className="mt-0.5 h-4 w-4 shrink-0 text-mineral-700"
									aria-hidden="true"
								/>

								<div className="min-w-0">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										Kontakt
									</p>

									<a
										href={`mailto:${laboratory.email}`}
										className="block mt-1 text-sm font-medium break-all transition text-institute-700 hover:text-institute-900"
									>
										{laboratory.email}
									</a>
								</div>
							</div>
						)}
					</div>

					<div className="flex flex-wrap gap-5 mt-7">
						{laboratory.equipmentUrl && (
							<a
								href={laboratory.equipmentUrl}
								className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
							>
								Pogledajte opremu
								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>
						)}

						<a
							href={`/usluge/posaljite-upit?laboratorija=${laboratory.id}`}
							className="inline-flex items-center gap-2 text-sm font-semibold transition text-mineral-700 hover:text-mineral-900"
						>
							Pošaljite upit laboratoriji
							<ArrowRight
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					</div>
				</div>
			</div>
		</article>
	);
}
