import {
	ArrowRight,
	Building2,
	History,
	Landmark,
	Network,
	Scale,
	Users,
} from "lucide-react";
import slika from "@/public/imgs/IMG_9906.jpg";
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import Image from "next/image";

const aboutSections = [
	{
		title: "O ITNMS-u",
		description:
			"Osnovne informacije o Institutu, njegovoj ulozi, misiji i naučnoistraživačkim delatnostima.",
		href: "/o-institutu/o-itnms-u",
		icon: Building2,
	},
	{
		title: "Istorijat",
		description:
			"Razvoj Instituta od osnivanja do danas i najvažnije etape njegovog rada.",
		href: "/o-institutu/istorijat",
		icon: History,
	},
	{
		title: "Organizacija",
		description:
			"Organizaciona šema, sektori, laboratorije i druge organizacione jedinice.",
		href: "/o-institutu/organizacija",
		icon: Network,
	},
	{
		title: "Rukovodstvo",
		description:
			"Pregled rukovodstva Instituta i odgovornih lica organizacionih jedinica.",
		href: "/o-institutu/rukovodstvo",
		icon: Users,
	},
	{
		title: "Naučno veće",
		description:
			"Sastav Naučnog veća, zapisnici sa sednica i prateća dokumentacija.",
		href: "/o-institutu/naucno-vece",
		icon: Landmark,
	},
	{
		title: "Delatnosti i oblasti rada",
		description:
			"Pregled naučnih, razvojnih i stručnih oblasti kojima se Institut bavi.",
		href: "/o-institutu/delatnosti-i-oblasti-rada",
		icon: Scale,
	},
];

export default function AboutInstitutePage() {
	return (
		<>
			<PageHeader
				title="O institutu"
				description="Institut za tehnologiju nuklearnih i drugih mineralnih sirovina bavi se naučnoistraživačkim radom, razvojem tehnologija i stručnim uslugama za potrebe nauke i industrije."
				breadcrumbs={[
					{
						label: "O institutu",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								O ITNMS-u
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Naučnoistraživačka institucija sa dugom tradicijom
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								ITNMS razvija znanja, metode i tehnološka rešenja u oblastima
								mineralnih sirovina, materijala, metalurgije, hemijskog
								inženjerstva i zaštite životne sredine.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Institut povezuje fundamentalna i primenjena istraživanja sa
								potrebama privrede, državnih institucija i domaćih i
								međunarodnih partnera.
							</p>

							<a
								href="/o-institutu/o-itnms-u"
								className="inline-flex items-center gap-2 text-sm font-semibold transition mt-7 text-institute-700 hover:text-institute-900"
							>
								Pročitajte više o Institutu
								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								loading="eager"
								src={slika}
								alt="Zgrada Instituta ITNMS"
								className="aspect-[4/3] w-full object-cover"
							/>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Struktura Instituta
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Informacije o radu i organizaciji
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Izaberite oblast da biste saznali više o istorijatu, organizaciji,
							rukovodstvu i naučnim telima Instituta.
						</p>
					</div>

					<div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
						{aboutSections.map((item) => {
							const Icon = item.icon;

							return (
								<a
									key={item.href}
									href={item.href}
									className="group flex min-h-[245px] flex-col rounded-xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
								>
									<div className="flex items-center justify-center w-12 h-12 transition rounded-lg bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
										<Icon
											className="w-6 h-6"
											aria-hidden="true"
										/>
									</div>

									<h3 className="mt-6 text-xl font-semibold transition text-stone-900 group-hover:text-institute-800">
										{item.title}
									</h3>

									<p className="mt-3 text-sm leading-6 text-stone-600">
										{item.description}
									</p>

									<span className="pt-6 mt-auto text-sm font-semibold text-institute-700">
										Otvorite stranicu →
									</span>
								</a>
							);
						})}
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Upoznajte istraživačke timove Instituta
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pogledajte profile zaposlenih, naučna zvanja, oblasti
								interesovanja i projekte na kojima učestvuju.
							</p>
						</div>

						<a
							href="/istrazivaci-i-zaposleni"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Istraživači i zaposleni
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
