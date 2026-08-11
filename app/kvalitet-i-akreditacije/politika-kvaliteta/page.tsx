import {
	BadgeCheck,
	CalendarDays,
	CheckCircle2,
	Download,
	FileText,
	ShieldCheck,
	UserRound,
} from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

const qualityCommitments = [
	{
		title: "Stručnost i pouzdanost",
		description:
			"Obezbeđivanje stručnog, doslednog i pouzdanog sprovođenja svih aktivnosti Instituta.",
	},
	{
		title: "Kompetentnost zaposlenih",
		description:
			"Kontinuirano stručno usavršavanje zaposlenih i razvoj potrebnih znanja i veština.",
	},
	{
		title: "Nepristrasnost",
		description:
			"Sprovođenje ispitivanja, analiza i stručnih aktivnosti na nezavisan i nepristrasan način.",
	},
	{
		title: "Poverljivost podataka",
		description:
			"Zaštita poverljivih informacija korisnika, partnera i drugih zainteresovanih strana.",
	},
	{
		title: "Usaglašenost sa standardima",
		description:
			"Primena relevantnih zakona, standarda, metoda, procedura i drugih zahteva.",
	},
	{
		title: "Kontinuirano unapređenje",
		description:
			"Praćenje rezultata rada, analiza procesa i sprovođenje mera za stalno poboljšavanje sistema kvaliteta.",
	},
];

export default function QualityPolicyPage() {
	return (
		<>
			<PageHeader
				title="Politika kvaliteta"
				description="Osnovna opredeljenja Instituta u oblasti kvaliteta, stručnosti, nepristrasnosti i kontinuiranog unapređenja."
				breadcrumbs={[
					{
						label: "Kvalitet i akreditacije",
						href: "/kvalitet-i-akreditacije",
					},
					{
						label: "Politika kvaliteta",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
						<article>
							<div className="max-w-3xl">
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
									Zvanično opredeljenje
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
									Posvećenost kvalitetu, pouzdanosti i stručnom radu
								</h2>

								<p className="mt-5 text-base leading-8 text-stone-600">
									Institut je opredeljen da svoje naučnoistraživačke,
									laboratorijske, razvojne i stručne aktivnosti obavlja
									pouzdano, nepristrasno i u skladu sa važećim zahtevima,
									standardima i dobrom stručnom praksom.
								</p>
							</div>

							<div className="mt-10 bg-white border shadow-sm rounded-2xl border-stone-200 p-7 md:p-10">
								<div className="flex items-center justify-center h-14 w-14 rounded-xl bg-institute-50 text-institute-800">
									<ShieldCheck
										className="h-7 w-7"
										aria-hidden="true"
									/>
								</div>

								<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
									Politika kvaliteta Instituta
								</h2>

								<div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
									<p>
										Institut za tehnologiju nuklearnih i drugih mineralnih
										sirovina posvećen je ostvarivanju visokog nivoa kvaliteta u
										naučnoistraživačkom radu, laboratorijskim ispitivanjima,
										razvoju tehnoloških rešenja i pružanju stručnih usluga.
									</p>

									<p>
										Aktivnosti Instituta sprovode se primenom odgovarajućih
										standarda, metoda, procedura i savremenih stručnih saznanja,
										uz poštovanje načela nepristrasnosti, poverljivosti i
										profesionalne odgovornosti.
									</p>

									<p>
										Rukovodstvo Instituta obezbeđuje potrebne resurse,
										odgovarajuće uslove rada i kontinuirano stručno usavršavanje
										zaposlenih, sa ciljem održavanja i unapređenja njihove
										kompetentnosti.
									</p>

									<p>
										Institut se obavezuje da prati potrebe korisnika, partnera i
										drugih zainteresovanih strana, da pravovremeno reaguje na
										njihove zahteve i da stalno unapređuje efikasnost sistema
										kvaliteta.
									</p>

									<p>
										Svi zaposleni odgovorni su za razumevanje, primenu i
										unapređenje politike kvaliteta u okviru svojih poslova,
										ovlašćenja i odgovornosti.
									</p>
								</div>

								<div className="mt-8 border-t border-stone-200 pt-7">
									<p className="text-sm italic leading-7 text-stone-500">
										Ovaj tekst je predložena struktura. Pre objavljivanja ga
										treba zameniti ili uskladiti sa zvanično usvojenim tekstom
										politike kvaliteta Instituta.
									</p>
								</div>
							</div>
						</article>

						<aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
							<div className="border rounded-2xl border-stone-200 bg-stone-50 p-7">
								<h2 className="text-xl font-semibold text-stone-900">
									Podaci o dokumentu
								</h2>

								<div className="mt-6">
									<DocumentInfo
										icon={CalendarDays}
										label="Datum usvajanja"
									>
										1. januar 2026.
									</DocumentInfo>

									<DocumentInfo
										icon={UserRound}
										label="Odgovorno lice"
									>
										Direktor Instituta
									</DocumentInfo>

									<DocumentInfo
										icon={FileText}
										label="Oznaka dokumenta"
									>
										PK-01
									</DocumentInfo>

									<DocumentInfo
										icon={BadgeCheck}
										label="Status"
									>
										Važeći dokument
									</DocumentInfo>
								</div>
							</div>

							<a
								href="/documents/kvalitet/politika-kvaliteta.pdf"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-4 p-6 text-white transition group rounded-2xl bg-institute-950 hover:bg-institute-900"
							>
								<div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-white/10">
									<FileText
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</div>

								<div className="flex-1 min-w-0">
									<p className="font-semibold">Politika kvaliteta</p>

									<p className="mt-1 text-xs text-institute-200">
										PDF dokument
									</p>
								</div>

								<Download
									className="h-5 w-5 shrink-0 text-institute-200 transition-transform group-hover:translate-y-0.5"
									aria-hidden="true"
								/>
							</a>
						</aside>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Ključna opredeljenja
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Principi na kojima se zasniva politika kvaliteta
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Politika kvaliteta primenjuje se kroz svakodnevni rad, odgovornost
							zaposlenih i upravljanje svim ključnim procesima Instituta.
						</p>
					</div>

					<div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
						{qualityCommitments.map((commitment) => (
							<article
								key={commitment.title}
								className="bg-white border shadow-sm rounded-2xl border-stone-200 p-7"
							>
								<div className="flex items-center justify-center rounded-full h-11 w-11 bg-mineral-100 text-mineral-800">
									<CheckCircle2
										className="w-5 h-5"
										aria-hidden="true"
									/>
								</div>

								<h3 className="mt-5 text-xl font-semibold tracking-tight text-stone-900">
									{commitment.title}
								</h3>

								<p className="mt-3 text-sm leading-7 text-stone-600">
									{commitment.description}
								</p>
							</article>
						))}
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<div className="grid gap-8 rounded-2xl border border-stone-200 bg-stone-50 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Saznajte više o sistemu kvaliteta
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pogledajte organizaciju sistema, ključne procese, akreditacije i
								metode koje Institut primenjuje.
							</p>
						</div>

						<a
							href="/kvalitet-i-akreditacije/sistem-kvaliteta"
							className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Sistem kvaliteta
						</a>
					</div>
				</Container>
			</Section>
		</>
	);
}

type DocumentInfoProps = {
	icon: React.ElementType;
	label: string;
	children: React.ReactNode;
};

function DocumentInfo({ icon: Icon, label, children }: DocumentInfoProps) {
	return (
		<div className="py-5 border-b border-stone-200 first:pt-0 last:border-b-0 last:pb-0">
			<div className="flex items-center gap-2">
				<Icon
					className="w-4 h-4 text-mineral-700"
					aria-hidden="true"
				/>

				<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
					{label}
				</p>
			</div>

			<div className="mt-2 text-sm font-medium leading-6 text-stone-800">
				{children}
			</div>
		</div>
	);
}
//Podsetnik: opciono
