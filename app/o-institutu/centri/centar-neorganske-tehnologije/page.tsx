import {
	ArrowRight,
	FlaskConical,
	GraduationCap,
	Leaf,
	Microscope,
	Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

const researchAreas = [
	{
		title: "Bioaktivna keramika",
		text: "Sinteza i ispitivanje bioaktivne keramike na bazi hidroksiapatita i kompozita hidroksiapatit/bioaktivno staklo, sa mogućnošću kontrolisane supstitucije specifičnim jonima, za potencijalnu primenu u regeneraciji koštanog tkiva i kao nosača aktivnih komponenata.",
	},
	{
		title: "Bioaktivna fosfatna stakla",
		text: "Proučavanje, sinteza i ispitivanje bioaktivnih fosfatnih stakala i fosfatnih staklo-keramičkih materijala kao neorganskih biomaterijala za primenu u regenerativnoj medicini i povezanim biomedicinskim oblastima.",
	},
	{
		title: "Staklasta eko-đubriva",
		text: "Sinteza i karakterizacija staklastih eko-đubriva sa kontrolisanim oslobađanjem hranljivih elemenata na bazi fosfatnih stakala, uz optimizaciju sastava i ispitivanje njihovog uticaja na poljoprivredne kulture i održivo upravljanje zemljištem.",
	},
	{
		title: "Staklene pene",
		text: "Sinteza i karakterizacija staklenih pena na bazi sekundarnih sirovina, sa ciljem dobijanja visokoporoznih staklastih materijala sa dobrim termoizolacionim svojstvima i primenom principa cirkularne ekonomije.",
	},
];

const characterization = [
	"Ispitivanje strukture i mikrostrukture materijala",
	"Određivanje faznog sastava",
	"Ispitivanje termičkih svojstava",
	"Ispitivanje mehaničkih svojstava",
	"Ispitivanje funkcionalnih svojstava",
	"Optimizacija procesa sinteze",
	"Procena kvaliteta materijala za različite tehnološke i industrijske primene",
];

export default function InorganicTechnologiesCenterPage() {
	return (
		<>
			<PageHeader
				title="Centar za neorganske tehnologije"
				description="Razvoj i unapređenje savremenih neorganskih materijala sa posebnim fokusom na staklaste, keramičke i staklo-keramičke materijale."
				breadcrumbs={[
					{
						label: "O Institutu",
						href: "/o-institutu",
					},
					{
						label: "Organizaciona šema",
						href: "/o-institutu/organizacija",
					},
					{
						label: "Centar za neorganske tehnologije",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-12 xl:grid-cols-[1fr_320px] xl:gap-16">
						<main>
							<section>
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
									Delatnost centra
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
									Savremeni neorganski materijali
								</h2>

								<p className="max-w-4xl mt-5 text-base leading-8 text-stone-600">
									Centar za neorganske tehnologije bavi se razvojem i
									unapređenjem savremenih neorganskih materijala, sa posebnim
									fokusom na staklaste, keramičke i staklo-keramičke materijale.
								</p>

								<p className="max-w-4xl mt-4 text-base leading-8 text-stone-600">
									Kroz interdisciplinarni pristup povezana su fundamentalna
									istraživanja i primenjena rešenja u oblasti sinteze, obrade i
									karakterizacije materijala.
								</p>

								<p className="max-w-4xl mt-4 text-base leading-8 text-stone-600">
									Posebna pažnja posvećena je održivim tehnologijama, korišćenju
									sekundarnih sirovina i razvoju materijala sa širokim
									potencijalom primene u industriji, građevinarstvu,
									poljoprivredi, zaštiti životne sredine i biomedicini.
								</p>
							</section>

							<section className="pt-10 mt-12 border-t border-stone-200">
								<div className="flex items-center gap-3">
									<div className="flex items-center justify-center w-11 h-11 rounded-xl bg-institute-50 text-institute-800">
										<FlaskConical className="w-5 h-5" />
									</div>

									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
											Istraživanja
										</p>

										<h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900">
											Glavne istraživačke oblasti
										</h2>
									</div>
								</div>

								<div className="grid gap-5 mt-8 md:grid-cols-2">
									{researchAreas.map((area, index) => (
										<div
											key={area.title}
											className="p-6 transition border shadow-sm rounded-2xl border-stone-200 bg-stone-50 hover:border-institute-300 hover:shadow-md"
										>
											<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-mineral-100 text-mineral-800">
												{index === 0 && <Microscope className="w-5 h-5" />}

												{index === 1 && <Sparkles className="w-5 h-5" />}

												{index === 2 && <Leaf className="w-5 h-5" />}

												{index === 3 && <FlaskConical className="w-5 h-5" />}
											</div>

											<h3 className="mt-5 text-xl font-semibold text-stone-900">
												{area.title}
											</h3>

											<p className="mt-3 text-sm leading-7 text-stone-600">
												{area.text}
											</p>
										</div>
									))}
								</div>
							</section>

							<ContentSection title="Karakterizacija materijala">
								<p>
									U okviru Centra moguće je sprovesti detaljnu karakterizaciju
									keramičkih, staklastih i staklo-keramičkih materijala.
								</p>

								<p>
									Primena analitičkih metoda omogućava pouzdanu procenu
									kvaliteta materijala, optimizaciju procesa sinteze i razvoj
									materijala prilagođenih različitim tehnološkim i industrijskim
									primenama.
								</p>

								<BulletList items={characterization} />
							</ContentSection>

							<ContentSection title="Saradnja i mentorski rad">
								<div className="flex items-start gap-4">
									<div className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 bg-institute-50 text-institute-800">
										<GraduationCap className="w-5 h-5" />
									</div>

									<div>
										<p>
											Centar ostvaruje saradnju sa univerzitetima i
											istraživačkim institucijama u zemlji i inostranstvu.
										</p>

										<p className="mt-4">
											Jedan od značajnih pravaca razvoja Centra je diseminacija
											naučnih rezultata u akademskoj i srednjoškolskoj
											zajednici, kroz saradnju sa master studentima,
											doktorandima i učenicima srednjih škola, uz razvijen
											mentorski rad.
										</p>
									</div>
								</div>
							</ContentSection>
						</main>

						<aside>
							<div className="sticky p-6 border top-28 rounded-2xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
									Centar
								</p>

								<h2 className="mt-3 text-xl font-semibold text-stone-900">
									Centar za neorganske tehnologije
								</h2>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										Fokus
									</p>

									<ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
										<li>Keramički materijali</li>
										<li>Staklasti materijali</li>
										<li>Staklo-keramički materijali</li>
										<li>Biomaterijali</li>
										<li>Održivi materijali</li>
									</ul>
								</div>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										Primene
									</p>

									<p className="mt-2 text-sm leading-6 text-stone-600">
										Industrija, građevinarstvo, poljoprivreda, zaštita životne
										sredine i biomedicina.
									</p>
								</div>

								<Link
									href="/o-institutu/organizacija"
									className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-institute-700 hover:text-institute-900"
								>
									Organizaciona šema
									<ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</aside>
					</div>
				</Container>
			</Section>
		</>
	);
}

function ContentSection({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="pt-10 mt-12 border-t border-stone-200">
			<h2 className="text-2xl font-semibold tracking-tight text-stone-900">
				{title}
			</h2>

			<div className="mt-5 space-y-5 text-base leading-8 text-stone-600">
				{children}
			</div>
		</section>
	);
}

function BulletList({ items }: { items: string[] }) {
	return (
		<ul className="grid gap-3 mt-5">
			{items.map((item) => (
				<li
					key={item}
					className="flex items-start gap-3"
				>
					<span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-mineral-600" />

					<span>{item}</span>
				</li>
			))}
		</ul>
	);
}
