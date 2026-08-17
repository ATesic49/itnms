import { ArrowRight, Factory, FlaskConical, Recycle } from "lucide-react";
import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

const mainActivities = [
	"Prerada metala hidrometalurškim postupcima",
	"Prerada sekundarnih sirovina i međuprodukata metalurgije",
];

const products = [
	"Proizvodi na bazi kobalta",
	"Proizvodi na bazi nikla",
	"Proizvodi na bazi cinka",
	"Proizvodi na bazi olova",
	"Proizvodi na bazi bakra",
];

const recyclingActivities = [
	"Prerada šljaka i muljeva obojenih metala (Pb, Sn, Cu, Zn, Al i dr.)",
	"Rafinacija obojenih metala i legura",
	"Prerada otpadnih rastvora nikla, kobalta, bakra, molibdena i dr.",
	"Prerada istrošenih Pb i Ni-Cd akumulatora",
	"Prerada istrošenih Ni, Mo i V katalizatora",
	"Prerada međuprodukata obojene metalurgije",
	"Prerada međuprodukata crne metalurgije",
];

export default function ProductionCenterPage() {
	return (
		<>
			<PageHeader
				title="Centar za proizvodnju"
				description="Izrada soli i oksida metala iz primarnih i sekundarnih sirovina."
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
						label: "Centar za proizvodnju",
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
									Proizvodnja i prerada
								</h2>

								<p className="max-w-4xl mt-5 text-base leading-8 text-stone-600">
									Delatnost Centra za eksperimentalnu proizvodnju je izrada soli
									i oksida metala iz primarnih i sekundarnih sirovina.
								</p>

								<div className="grid gap-4 mt-8 md:grid-cols-2">
									{mainActivities.map((activity, index) => (
										<div
											key={activity}
											className="flex items-start gap-4 p-5 border rounded-xl border-stone-200 bg-stone-50"
										>
											<div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-institute-50 text-institute-800">
												{index === 0 ? (
													<FlaskConical className="w-5 h-5" />
												) : (
													<Recycle className="w-5 h-5" />
												)}
											</div>

											<p className="font-semibold leading-6 text-stone-800">
												{activity}
											</p>
										</div>
									))}
								</div>
							</section>

							<ContentSection title="Prerada metala hidrometalurškim postupcima">
								<p>
									Proizvodnja soli i oksida metala tehničkog i p.a. kvaliteta iz
									primarnih i sekundarnih sirovina obuhvata sledeće grupe
									proizvoda:
								</p>

								<div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
									{products.map((product) => (
										<div
											key={product}
											className="flex items-center gap-3 p-4 bg-white border rounded-xl border-stone-200"
										>
											<div className="flex items-center justify-center rounded-lg w-9 h-9 shrink-0 bg-mineral-100 text-mineral-800">
												<Factory className="w-4 h-4" />
											</div>

											<p className="text-sm font-semibold leading-6 text-stone-800">
												{product}
											</p>
										</div>
									))}
								</div>
							</ContentSection>

							<ContentSection title="Prerada sekundarnih sirovina i međuprodukata metalurgije">
								<p>
									Delatnost obuhvata preradu različitih sekundarnih sirovina,
									otpadnih rastvora, istrošenih akumulatora i katalizatora, kao
									i međuprodukata obojene i crne metalurgije.
								</p>

								<BulletList items={recyclingActivities} />
							</ContentSection>
						</main>

						<aside>
							<div className="sticky p-6 border top-28 rounded-2xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
									Centar
								</p>

								<h2 className="mt-3 text-xl font-semibold text-stone-900">
									Centar za proizvodnju
								</h2>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										Glavne oblasti
									</p>

									<ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
										<li>Prerada metala hidrometalurškim postupcima</li>

										<li>
											Prerada sekundarnih sirovina i međuprodukata metalurgije
										</li>
									</ul>
								</div>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										Proizvodi
									</p>

									<p className="mt-2 text-sm leading-6 text-stone-600">
										Soli i oksidi metala tehničkog i p.a. kvaliteta.
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
