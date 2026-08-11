import {
	ArrowRight,
	Factory,
	FlaskConical,
	Lightbulb,
	Microscope,
	Network,
	Target,
} from "lucide-react";
import slika from "@/public/imgs/IMG_0001.jpg";
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import Image from "next/image";

const principles = [
	{
		title: "Naučnoistraživački rad",
		description:
			"Razvoj znanja, metoda i tehnoloških postupaka u oblastima kojima se Institut bavi.",
		icon: Microscope,
	},
	{
		title: "Primenjena istraživanja",
		description:
			"Usmeravanje naučnih rezultata ka praktičnim rešenjima i potrebama privrede.",
		icon: Lightbulb,
	},
	{
		title: "Saradnja sa industrijom",
		description:
			"Stručna podrška kompanijama kroz ispitivanja, razvoj procesa i konsultantske usluge.",
		icon: Factory,
	},
	{
		title: "Međuinstitucionalna saradnja",
		description:
			"Povezivanje sa domaćim i međunarodnim naučnoistraživačkim organizacijama.",
		icon: Network,
	},
];

const workAreas = [
	"Priprema i prerada mineralnih sirovina",
	"Metalurgija i procesno inženjerstvo",
	"Materijali i hemijsko inženjerstvo",
	"Zaštita životne sredine",
	"Laboratorijska i instrumentalna ispitivanja",
	"Razvoj i optimizacija tehnoloških procesa",
];

export default function AboutItnmsPage() {
	return (
		<>
			<PageHeader
				title="O ITNMS-u"
				description="Osnovne informacije o Institutu, njegovoj ulozi, delatnostima i načinu povezivanja naučnih istraživanja sa potrebama privrede."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "O ITNMS-u",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Institut
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Nauka i tehnologija u službi razvoja
							</h2>

							<div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
								<p>
									Institut za tehnologiju nuklearnih i drugih mineralnih
									sirovina je naučnoistraživačka organizacija koja se bavi
									razvojem i primenom znanja u oblastima mineralnih sirovina,
									materijala, metalurgije, hemijskog inženjerstva i zaštite
									životne sredine.
								</p>

								<p>
									Delatnost Instituta obuhvata fundamentalna i primenjena
									istraživanja, razvoj tehnoloških postupaka, laboratorijska
									ispitivanja, stručne studije i saradnju sa privredom i drugim
									naučnoistraživačkim organizacijama.
								</p>

								<p>
									Stručni timovi Instituta povezuju naučne rezultate sa
									konkretnim industrijskim i društvenim potrebama, sa ciljem
									razvoja efikasnijih, pouzdanijih i održivijih tehnologija.
								</p>
							</div>
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={slika}
								alt="Prostor Instituta ITNMS"
								className="aspect-[4/3] w-full object-cover"
							/>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="p-8 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-10">
							<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
								<Target
									className="w-6 h-6"
									aria-hidden="true"
								/>
							</div>

							<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
								Misija
							</h2>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Misija Instituta je razvoj naučnih i tehnoloških rešenja,
								unapređenje stručnih znanja i njihova primena u oblastima od
								značaja za privredu, industriju i zaštitu životne sredine.
							</p>
						</div>

						<div className="p-8 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-10">
							<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-mineral-50 text-mineral-800">
								<FlaskConical
									className="w-6 h-6"
									aria-hidden="true"
								/>
							</div>

							<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
								Vizija
							</h2>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Vizija Instituta je da bude prepoznat kao pouzdan
								naučnoistraživački i razvojni partner, sposoban da odgovori na
								savremene tehnološke, industrijske i ekološke izazove.
							</p>
						</div>
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Način rada
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Nauka povezana sa praktičnom primenom
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Institut kombinuje istraživački rad, laboratorijske kapacitete i
							saradnju sa privredom kroz nekoliko osnovnih pravaca.
						</p>
					</div>

					<div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-4">
						{principles.map((item) => {
							const Icon = item.icon;

							return (
								<article
									key={item.title}
									className="p-6 bg-white border shadow-sm rounded-xl border-stone-200"
								>
									<div className="flex items-center justify-center rounded-lg h-11 w-11 bg-institute-50 text-institute-800">
										<Icon
											className="w-5 h-5"
											aria-hidden="true"
										/>
									</div>

									<h3 className="mt-5 text-lg font-semibold text-stone-900">
										{item.title}
									</h3>

									<p className="mt-3 text-sm leading-6 text-stone-600">
										{item.description}
									</p>
								</article>
							);
						})}
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Oblasti delovanja
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Glavne naučne i stručne oblasti
							</h2>

							<p className="max-w-xl mt-4 text-base leading-7 text-stone-600">
								Rad Instituta obuhvata povezane oblasti istraživanja,
								tehnološkog razvoja i stručnih usluga.
							</p>

							<a
								href="/o-institutu/delatnosti-i-oblasti-rada"
								className="inline-flex items-center gap-2 text-sm font-semibold transition mt-7 text-institute-700 hover:text-institute-900"
							>
								Detaljan pregled oblasti rada
								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>
						</div>

						<div className="bg-white border shadow-sm rounded-2xl border-institute-100 p-7 md:p-9">
							<ul className="grid gap-4 sm:grid-cols-2">
								{workAreas.map((area) => (
									<li
										key={area}
										className="flex items-start gap-3 p-4 border rounded-lg border-stone-100 bg-stone-50"
									>
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />

										<span className="text-sm font-medium leading-6 text-stone-700">
											{area}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<div className="grid gap-8 rounded-2xl bg-institute-950 p-8 text-white md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
								Saznajte više o razvoju Instituta
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-institute-100">
								Pogledajte istorijat, organizaciju i najvažnije etape razvoja
								ITNMS-a.
							</p>
						</div>

						<a
							href="/o-institutu/istorijat"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition bg-white rounded-md text-institute-950 hover:bg-institute-50"
						>
							Istorijat Instituta
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
