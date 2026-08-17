import { ArrowRight, FlaskConical, Recycle, Users } from "lucide-react";
import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

const mainActivities = [
	"Ekstraktivna metalurgija",
	"Reciklaža metaličnih sekundarnih sirovina",
];

const developmentActivities = [
	"Nove tehnologije prerade kompleksnih polimetaličnih ruda i koncentrata",
	"Tehnologije prerade međuprodukata metalurgije obojenih metala",
	"Tehnologije dobijanja metalnih i oksidnih prahova",
	"Tehnologije dobijanja soli tehničkog i PA kvaliteta",
];

const hydrometallurgicalProcesses = [
	"Procesi luženja u kiselim sistemima (hloridi, sulfati, nitrati i dr.)",
	"Procesi luženja u alkalnim sistemima (hidroksidi, amonijačne soli i dr.)",
	"Izdvajanje metala iz rastvora (hidroliza, kristalizacija, cementacija)",
];

const pyrometallurgicalProcesses = [
	"Oksidaciono prženje",
	"Redukciono prženje",
	"Disocijacija sulfata i karbonata",
	"Rafinacija metala",
];

const recyclingActivities = [
	"Prerada međuprodukata metalurgije Pb, Zn, Cu i Al",
	"Prerada Pb i Pb legura (akumulatori i dr.)",
	"Prerada Sn i Sn legura (sunđer, šljaka, mulj)",
	"Prerada Cu i Cu-legura (šljake, brusotine, strugotine)",
	"Prerada Zn i Zn legura (šljake, brusotine, strugotine, muljevi)",
	"Prerada Ni i Ni legura (Ni-Cd akumulatori, muljevi, katalizatori, otpadne elektrode)",
	"Prerada sekundarnih sirovina retkih metala (Mo, V i W)",
];

const additionalResearch = [
	"Razvoj hemijskog i elektrohemijskog postupka za istovremenu demineralizaciju i desulfurizaciju uglja",
	"Razvoj i dizajn metalnih sistema i legura primenom savremenih računarskih i eksperimentalnih metoda",
	"Primena računarske simulacije za procese topljenja i livenja metala, ulivnih sistema i odlivaka",
	"Restoracija degradiranih zemljišta i odabir odgovarajućih biljnih vrsta za sanaciju, geobotanička i biogeohemijska istraživanja u sistemu zemljište–biljka, testiranje inovativnih đubriva za rast i razvoj biljnih vrsta, razvoj funkcionalnih materijala i zemljišnih dodataka iz otpadne biomase",
	"Ekstrakcija metala iz kontaminirane biomase hidrometalurškim postupcima, reciklaža nusproizvoda iz prerade kontaminirane biomase i njihova valorizacija",
	"Razvoj biotehnološkog postupka za valorizaciju metala iz nestandardnih sirovina",
	"Sinteza, karakterizacija i funkcionalizacija inovativnih multifunkcionalnih nanomaterijala",
	"Razvoj fotoaktivnih materijala iz otpadne biomase sa primenom u tretmanu otpadnih voda",
];

const employees = [
	{
		name: "dr Branislav Marković",
		position: "Naučni savetnik, pomoćnik direktora",
		slug: "branislav-markovic",
	},
	{
		name: "dr Miroslav Sokić",
		position: "Naučni savetnik",
		slug: "miroslav-sokic",
	},
	{
		name: "dr Dragana Ranđelović",
		position: "Viši naučni saradnik",
		slug: "dragana-randjelovic",
	},
	{
		name: "dr Dušan Milojkov",
		position: "Viši naučni saradnik",
		slug: "dusan-milojkov",
	},
	{
		name: "dr Aleksandar Jovanović",
		position: "Naučni saradnik",
		slug: "aleksandar-jovanovic",
	},
	{
		name: "dr Gvozden Jovanović",
		position: "Naučni saradnik",
		slug: "gvozden-jovanovic",
	},
	{
		name: "dr Nela Petronijević",
		position: "Naučni saradnik",
		slug: "nela-petronijevic",
	},
	{
		name: "Katarina Pantović",
		position: "Istraživač saradnik",
		slug: "katarina-pantovic",
	},
	{
		name: "Gordana Marković",
		position: "Istraživač saradnik",
		slug: "gordana-markovic",
	},
	{
		name: "Dimitrije Anđić",
		position: "Istraživač saradnik",
		slug: "dimitrije-andjic",
	},
	{
		name: "Milica Mišić",
		position: "Istraživač pripravnik",
		slug: "milica-misic",
	},
];

export default function MetallurgicalTechnologiesCenterPage() {
	return (
		<>
			<PageHeader
				title="Centar za metalurške tehnologije"
				description="Fundamentalna, razvojna i primenjena istraživanja u oblasti ekstraktivne metalurgije i reciklaže metaličnih sekundarnih sirovina."
				breadcrumbs={[
					{
						label: "O Institutu",
						href: "/o-institutu",
					},
					{
						label: "Organizacione jedinice",
						href: "/o-institutu/organizacija",
					},
					{
						label: "Centar za metalurške tehnologije",
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
									Oblasti istraživanja
								</h2>

								<p className="max-w-4xl mt-5 text-base leading-8 text-stone-600">
									Delatnost Centra za metalurške tehnologije obuhvata
									fundamentalna, razvojna i primenjena istraživanja u oblasti
									ekstraktivne metalurgije i reciklaže metaličnih sekundarnih
									sirovina.
								</p>

								<div className="grid gap-4 mt-8 md:grid-cols-2">
									{mainActivities.map((activity) => (
										<div
											key={activity}
											className="flex items-start gap-4 p-5 border rounded-xl border-stone-200 bg-stone-50"
										>
											<div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-institute-50 text-institute-800">
												<FlaskConical className="w-5 h-5" />
											</div>

											<p className="font-semibold leading-6 text-stone-800">
												{activity}
											</p>
										</div>
									))}
								</div>
							</section>

							<ContentSection title="Ekstraktivna metalurgija">
								<p>
									Fundamentalna istraživanja obuhvataju fenomene prenosa mase i
									energije u heterogenim metalurškim sistemima, termodinamičku
									analizu i izučavanje mehanizama i kinetike procesa na granici
									faza.
								</p>

								<p>
									Razvojna i primenjena istraživanja realizuju se kroz razvoj
									tehnologija i tehničko-tehnoloških rešenja za dobijanje
									obojenih, retkih i plemenitih metala iz standardnih i
									nestandardnih primarnih sirovina.
								</p>

								<BulletList items={developmentActivities} />

								<p>
									Za njihovu uspešnu realizaciju koriste se hidrometalurški i
									pirometalurški procesi.
								</p>
							</ContentSection>

							<div className="grid gap-6 mt-8 lg:grid-cols-2">
								<ProcessCard
									title="Hidrometalurški procesi"
									description="Procesi se mogu odvijati pri standardnom i povišenom pritisku, za šta Centar poseduje adekvatnu opremu."
									items={hydrometallurgicalProcesses}
								/>

								<ProcessCard
									title="Pirometalurški procesi"
									description="Procesi se realizuju u metalurškim pećima na povišenim temperaturama."
									items={pyrometallurgicalProcesses}
								/>
							</div>

							<ContentSection title="Reciklaža sekundarnih sirovina">
								<p>
									Istraživanja obuhvataju razvoj tehnologija i
									tehničko-tehnoloških rešenja za preradu i izdvajanje korisnih
									komponenti iz sekundarnih i nestandardnih metaličnih sirovina
									do metala, legura i metalnih jedinjenja.
								</p>

								<BulletList items={recyclingActivities} />
							</ContentSection>

							<ContentSection title="Ostala istraživanja">
								<BulletList items={additionalResearch} />
							</ContentSection>

							<section className="mt-16">
								<div className="flex items-center gap-3">
									<div className="flex items-center justify-center w-11 h-11 rounded-xl bg-mineral-100 text-mineral-800">
										<Users className="w-5 h-5" />
									</div>

									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
											Tim
										</p>

										<h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900">
											Saradnici u centru
										</h2>
									</div>
								</div>

								<div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
									{employees.map((employee) => (
										<Link
											key={employee.slug}
											href={`/istrazivaci-i-zaposleni/istrazivaci/${employee.slug}?zaposleni=true`}
											className="group flex min-h-32 flex-col justify-between rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
										>
											<div>
												<h3 className="font-semibold text-stone-900 group-hover:text-institute-800">
													{employee.name}
												</h3>

												<div className="flex flex-col mt-2 text-sm leading-6 text-stone-600">
													{employee.position.split(",").map((position, i) => (
														<p
															className="capitalize"
															key={i}
														>
															{position}
														</p>
													))}
												</div>
											</div>

											<span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-institute-700">
												Profil
												<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
											</span>
										</Link>
									))}
								</div>
							</section>
						</main>

						<aside>
							<div className="sticky p-6 border top-28 rounded-2xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
									Centar
								</p>

								<h2 className="mt-3 text-xl font-semibold text-stone-900">
									Centar za metalurške tehnologije
								</h2>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										Glavne oblasti
									</p>

									<ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
										<li>Ekstraktivna metalurgija</li>
										<li>Reciklaža metaličnih sekundarnih sirovina</li>
									</ul>
								</div>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-sm text-stone-600">Broj saradnika</p>

									<p className="mt-1 text-3xl font-semibold text-institute-800">
										{employees.length}
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

function ProcessCard({
	title,
	description,
	items,
}: {
	title: string;
	description: string;
	items: string[];
}) {
	return (
		<div className="p-6 border shadow-sm rounded-2xl border-stone-200 bg-stone-50">
			<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-institute-50 text-institute-800">
				<Recycle className="w-5 h-5" />
			</div>

			<h3 className="mt-5 text-xl font-semibold text-stone-900">{title}</h3>

			<p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>

			<BulletList items={items} />
		</div>
	);
}
