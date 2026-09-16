import {
	Archive,
	ArrowRight,
	FileBarChart,
	FileCheck2,
	FileCog,
	FolderArchive,
	Gavel,
	Megaphone,
} from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

const documentCategories = [
	{
		title: "Akta",
		description:
			"Osnivačka, statutorna i druga opšta akta kojima se uređuju položaj, organizacija i rad Instituta.",
		href: "/dokumenta/akta",
		icon: Gavel,
	},

	{
		title: "Izveštaji",
		description:
			"Godišnji, stručni, finansijski i drugi javno dostupni izveštaji Instituta.",
		href: "/dokumenta/izvestaji",
		icon: FileBarChart,
	},
	{
		title: "Konkursi i oglasi",
		description:
			"Aktuelni i završeni konkursi, oglasi za zapošljavanje, nabavke i druga javna obaveštenja.",
		href: "/dokumenta/konkursi-i-oglasi",
		icon: Megaphone,
	},
	{
		title: "Dokumenta Naučnog veća",
		description:
			"Odluke, zapisnici, materijali i druga dokumenta povezana sa radom Naučnog veća.",
		href: "/dokumenta/naucno-vece",
		icon: FileCheck2,
	},
	{
		title: "Arhiva",
		description:
			"Prethodno objavljena dokumenta, razvrstana prema kategoriji i godini objavljivanja.",
		href: "/dokumenta/arhiva",
		icon: FolderArchive,
	},
];

const documentPrinciples = [
	"Jasno razvrstavanje prema vrsti dokumenta",
	"Prikaz datuma objavljivanja i važenja",
	"Mogućnost preuzimanja originalnog dokumenta",
	"Odvajanje važećih dokumenata od arhiviranih",
];

export default function DocumentsPage() {
	return (
		<>
			<PageHeader
				title="Dokumenta"
				description="Pregled javno dostupnih akata, pravilnika, izveštaja, konkursa, dokumenata Naučnog veća i arhivske građe."
				breadcrumbs={[
					{
						label: "Dokumenta",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Javni dokumenti
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Dokumentacija Instituta na jednom mestu
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								Ova sekcija omogućava pristup javno dostupnim dokumentima
								Instituta, razvrstanim prema vrsti i oblasti na koju se odnose.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Svaki dokument treba da sadrži jasan naziv, datum objavljivanja,
								oznaku kategorije i datoteku u originalnom obliku.
							</p>

							<a
								href="/dokumenta/konkursi-i-oglasi"
								className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md mt-7 bg-institute-800 hover:bg-institute-900"
							>
								Aktuelni konkursi i oglasi
								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>
						</div>

						<div className="p-8 border shadow-sm rounded-2xl border-stone-200 bg-stone-50 md:p-10">
							<div className="flex items-center justify-center h-14 w-14 rounded-xl bg-institute-50 text-institute-800">
								<Archive
									className="h-7 w-7"
									aria-hidden="true"
								/>
							</div>

							<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
								Organizacija dokumenata
							</h2>

							<ul className="mt-6 space-y-4">
								{documentPrinciples.map((principle) => (
									<li
										key={principle}
										className="flex items-start gap-3 text-sm leading-6 text-stone-700"
									>
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										{principle}
									</li>
								))}
							</ul>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Kategorije
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Izaberite vrstu dokumenta
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Dokumenti su raspoređeni prema nameni, vrsti i periodu
							objavljivanja.
						</p>
					</div>

					<div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
						{documentCategories.map((category) => {
							const Icon = category.icon;

							return (
								<a
									key={category.href}
									href={category.href}
									className="group flex min-h-72.5 flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
								>
									<div className="flex items-center justify-center transition h-14 w-14 rounded-xl bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
										<Icon
											className="h-7 w-7"
											aria-hidden="true"
										/>
									</div>

									<h3 className="text-2xl font-semibold tracking-tight transition mt-7 text-stone-900 group-hover:text-institute-800">
										{category.title}
									</h3>

									<p className="mt-4 text-base leading-7 text-stone-600">
										{category.description}
									</p>

									<span className="inline-flex items-center gap-2 pt-8 mt-auto text-sm font-semibold text-institute-700">
										Pregledajte dokumenta
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
					<div className="grid gap-8 rounded-2xl border border-stone-200 bg-stone-50 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Tražite stariji dokument?
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Dokumenti koji više nisu aktuelni ili su zamenjeni novijim
								verzijama dostupni su u arhivi.
							</p>
						</div>

						<a
							href="/dokumenta/arhiva"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition bg-white border rounded-md border-institute-700 text-institute-800 hover:bg-institute-50"
						>
							Otvorite arhivu
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
