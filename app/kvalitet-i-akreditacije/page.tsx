import {
	ArrowRight,
	BadgeCheck,
	ClipboardCheck,
	FileCheck2,
	ListChecks,
	ShieldCheck,
} from "lucide-react";
//Podsetnik promeni foter da linkovi idu dobro, i nav bar
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import slika from "@/public/imgs/IMG_9928.jpg";
import Image from "next/image";
const qualitySections = [
	{
		title: "Sistem kvaliteta",
		description:
			"Pregled načina upravljanja kvalitetom, odgovornosti, procedura i kontinuiranog unapređenja rada Instituta.",
		href: "/kvalitet-i-akreditacije/sistem-kvaliteta",
		icon: ShieldCheck,
	},
	{
		title: "Akreditacije",
		description:
			"Pregled važećih akreditacija, obima akreditacije i zvaničnih dokumenata.",
		href: "/kvalitet-i-akreditacije/akreditacije",
		icon: BadgeCheck,
	},

	{
		title: "Sertifikati",
		description:
			"Pregled sertifikata i drugih potvrda koje se odnose na sistem rada i stručne kapacitete Instituta.",
		href: "/kvalitet-i-akreditacije/sertifikati",
		icon: FileCheck2,
	},
	{
		title: "Politika kvaliteta",
		description:
			"Zvanična politika kvaliteta i osnovna opredeljenja Instituta u oblasti pouzdanosti, stručnosti i unapređenja rada.",
		href: "/kvalitet-i-akreditacije/politika-kvaliteta",
		icon: ClipboardCheck,
	},
];

const qualityPrinciples = [
	"Pouzdanost rezultata ispitivanja",
	"Kompetentnost stručnog osoblja",
	"Primena važećih standarda i procedura",
	"Nepristrasnost i poverljivost",
	"Kontinuirano unapređenje sistema rada",
	"Odgovorno postupanje prema korisnicima usluga",
];

export default function QualityAndAccreditationsPage() {
	return (
		<>
			<PageHeader
				title="Kvalitet i akreditacije"
				description="Pregled sistema kvaliteta, akreditacija, metoda ispitivanja, sertifikata i zvanične politike kvaliteta Instituta."
				breadcrumbs={[
					{
						label: "Kvalitet i akreditacije",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Pouzdanost i stručnost
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Sistem rada zasnovan na standardima i proverljivim postupcima
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								Institut primenjuje sistem kvaliteta kojim se uređuju
								laboratorijska ispitivanja, stručne procedure, odgovornosti
								zaposlenih i način upravljanja dokumentacijom.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Akreditacije i sertifikati potvrđuju osposobljenost Instituta za
								obavljanje određenih ispitivanja i pružanje pouzdanih,
								nepristrasnih i sledljivih rezultata.
							</p>

							<a
								href="/kvalitet-i-akreditacije/akreditacije"
								className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md mt-7 bg-institute-800 hover:bg-institute-900"
							>
								Pogledajte akreditacije
								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={slika}
								alt="Laboratorijski rad i kontrola kvaliteta u ITNMS-u"
								className="object-cover w-full aspect-4/3"
							/>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Dokumentacija i standardi
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Pregled sistema kvaliteta
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Izaberite oblast da biste pristupili informacijama o sistemu
							kvaliteta, akreditacijama, metodama i sertifikatima Instituta.
						</p>
					</div>

					<div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
						{qualitySections.map((item) => {
							const Icon = item.icon;

							return (
								<a
									key={item.href}
									href={item.href}
									className="group flex min-h-71.25 flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
								>
									<div className="flex items-center justify-center transition h-14 w-14 rounded-xl bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
										<Icon
											className="h-7 w-7"
											aria-hidden="true"
										/>
									</div>

									<h3 className="text-2xl font-semibold tracking-tight transition mt-7 text-stone-900 group-hover:text-institute-800">
										{item.title}
									</h3>

									<p className="mt-4 text-base leading-7 text-stone-600">
										{item.description}
									</p>

									<span className="inline-flex items-center gap-2 pt-8 mt-auto text-sm font-semibold text-institute-700">
										Otvorite stranicu
										<ArrowRight
											className="w-4 h-4 transition-transform group-hover:translate-x-1"
											aria-hidden="true"
										/>
									</span>
								</a>
							);
						})}
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Osnovna opredeljenja
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Principi kvaliteta
							</h2>

							<p className="max-w-xl mt-4 text-base leading-7 text-stone-600">
								Sistem kvaliteta treba da podrži stručan, dosledan i
								transparentan rad svih laboratorija i organizacionih jedinica.
							</p>
						</div>

						<div className="border rounded-2xl border-stone-200 bg-stone-50 p-7 md:p-9">
							<ul className="grid gap-4 sm:grid-cols-2">
								{qualityPrinciples.map((principle) => (
									<li
										key={principle}
										className="flex items-start gap-3 p-4 bg-white border rounded-xl border-stone-200"
									>
										<span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mineral-100 text-mineral-800">
											<ClipboardCheck
												className="h-3.5 w-3.5"
												aria-hidden="true"
											/>
										</span>

										<span className="text-sm font-medium leading-6 text-stone-700">
											{principle}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Potrebne su vam informacije o konkretnoj metodi?
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pregledajte akreditovane metode prema standardu, oblasti
								ispitivanja i nadležnoj laboratoriji.
							</p>
						</div>

						<a
							href="/kvalitet-i-akreditacije/akreditovane-metode"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Akreditovane metode
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
