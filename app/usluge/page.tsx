import {
	ArrowRight,
	Beaker,
	ClipboardList,
	FlaskConical,
	Microscope,
} from "lucide-react";
//Podsetnik: Cele usluge popricaj sa Sonjom
import slika from "@/public/imgs/IMG_9941.jpg";
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import Image from "next/image";
import UnderConstructionPage from "../components/UIzradi";

const serviceSections = [
	{
		title: "Oblasti usluga",
		description:
			"Pregled laboratorijskih, razvojnih, tehnoloških i konsultantskih usluga Instituta.",
		href: "/usluge/oblasti-usluga",
		icon: Beaker,
	},
	{
		title: "Laboratorije",
		description:
			"Pregled laboratorijskih kapaciteta, oblasti ispitivanja i odgovornih stručnih timova.",
		href: "/usluge/laboratorije",
		icon: FlaskConical,
	},
	{
		title: "Oprema",
		description:
			"Pregled uređaja i opreme za analizu, karakterizaciju i tehnološka ispitivanja.",
		href: "/usluge/oprema",
		icon: Microscope,
	},
	{
		title: "Pošaljite upit",
		description:
			"Kontaktirajte Institut u vezi sa konkretnom uslugom, analizom, ispitivanjem ili saradnjom.",
		href: "/usluge/posaljite-upit",
		icon: ClipboardList,
	},
];

export default function ServicesPage() {
	return (
		<>
			{/* <PageHeader
				title="Usluge"
				description="Laboratorijske, razvojne i stručne usluge za potrebe privrede, naučnih organizacija i javnog sektora."
				breadcrumbs={[
					{
						label: "Usluge",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Stručna podrška
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Znanje, laboratorije i tehnološka podrška na jednom mestu
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								Institut pruža usluge laboratorijskih ispitivanja,
								karakterizacije materijala, razvoja i optimizacije procesa,
								poluindustrijskih ispitivanja i stručnog savetovanja.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Usluge se realizuju u saradnji sa odgovarajućim organizacionim
								jedinicama, laboratorijama i stručnim timovima Instituta.
							</p>

							<a
								href="/usluge/posaljite-upit"
								className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md mt-7 bg-institute-800 hover:bg-institute-900"
							>
								Pošaljite konkretan upit
								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={slika}
								alt="Laboratorijska i stručna usluga ITNMS-a"
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
							Pregled usluga
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Izaberite oblast koja vas zanima
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Pristupite oblastima usluga, laboratorijama, opremi ili pošaljite
							upit stručnom timu Instituta.
						</p>
					</div>

					<div className="grid gap-6 mt-12 md:grid-cols-2">
						{serviceSections.map((item) => {
							const Icon = item.icon;

							return (
								<a
									key={item.href}
									href={item.href}
									className="flex flex-col p-8 transition bg-white border shadow-sm group min-h-70 rounded-2xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
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

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Niste sigurni koja vam je usluga potrebna?
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Opišite problem, uzorak ili vrstu ispitivanja, a odgovarajući
								stručni tim Instituta će vas kontaktirati.
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
			</Section> */}
			<UnderConstructionPage />
		</>
	);
}
