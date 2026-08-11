import { ArrowRight, CalendarDays } from "lucide-react";
import logo from "@/public/imgs/load3.jpg";
import logo2 from "@/public/imgs/IMG_0127.jpg";
import logo3 from "@/public/imgs/IMG_0132.jpg";
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import Image from "next/image";
import akreditacija1 from "@/public/imgs/akreditacija_2016_1.jpg";
import akreditacija2 from "@/public/imgs/akreditacija_2016_2.jpg";
import akreditacija3 from "@/public/imgs/akreditacija_2016_3.jpg";
import Link from "next/link";
import Button from "@/app/components/Button";
//Podsetnik: dodaj da se akreditacje vide kada kliknes na njih. Dodaj opis.
type TimelineItem = {
	year: string;
	title: string;
	description: string;
};

const timeline: TimelineItem[] = [
	{
		year: "1948.",
		title: "Osnivanje Instituta",
		description:
			"Уредбом Владе ФНРЈ основана је институција из које ће се касније развити данашњи ИТНМС..",
	},
	{
		year: "1955.",
		title: "Дефинисање делатности",
		description:
			"Институт добија назив Институт за технологију нуклеарних минералних сировина и усмерава рад на технолошка испитивања и истраживање минералних сировина.",
	},
	{
		year: "1966.",
		title: "Формирање ИТНМС-а",
		description:
			"Поделом Завода за нуклеарне сировине формиран је Институт за технологију нуклеарних и других минералних сировина.",
	},
	{
		year: "1968.",
		title: "Проширење области рада zavoda u dva dela",
		description:
			"Институт се окреће директној сарадњи са привредом и проширује делатност на неметаличне сировине, обојене и ретке метале, заштиту животне средине, инжењеринг и консалтинг.",
	},
	{
		year: "1991.",
		title: "Статус научног института",
		description:
			"ИТНМС се региструје као јединствена научноистраживачка организација у статусу научног института.",
	},
	{
		year: "1994.",
		title: "Научна државна установа",
		description:
			"Институт је регистрован као научна државна установа, у складу са Законом о научноистраживачком раду.",
	},
	{
		year: "1999.",
		title: "Упис у судски регистар",
		description:
			"ИТНМС је уписан у судски регистар, уз касније проширење делатности 2003. године.",
	},
	{
		year: "2007.",
		title: "Прва акредитација",
		description:
			"Институт је акредитован за обављање научноистраживачке делатности од општег интереса.",
	},
	{
		year: "2016.",
		title: "Обнова акредитације",
		description:
			"ИТНМС успешно обнавља акредитацију и наставља развој научне, истраживачке и стручне делатности.",
	},
];

const historicalImages = [
	{
		src: logo,
		alt: "Arhivska fotografija Instituta",
		caption: "Prva fotografija instituta ",
	},
	{
		src: logo2,
		alt: "Laboratorija Instituta u ranijem periodu",
		caption: "Fontana u dvorištu instituta",
	},
	{
		src: logo3,
		alt: "Zaposleni Instituta na arhivskoj fotografiji",
		caption: "Fotografija instituta u moderno doba.",
	},
];

const AkreditacijaImages = [
	{
		src: akreditacija1,
		alt: "Arhivska fotografija Instituta",
		caption: "Akreditacija, strana 1.",
		link: "/imgs/akreditacija_2016_1.jpg",
	},
	{
		src: akreditacija2,
		alt: "Laboratorija Instituta u ranijem periodu",
		caption: "Akreditacija, strana 2.",
		link: "/imgs/akreditacija_2016_2.jpg",
	},
	{
		src: akreditacija3,
		alt: "Zaposleni Instituta na arhivskoj fotografiji",
		caption: "Akreditacija, strana 3.",
		link: "/imgs/akreditacija_2016_3.jpg",
	},
];
export default function HistoryPage() {
	return (
		<>
			<PageHeader
				title="Istorijat"
				description="Razvoj Instituta, najvažnije etape njegovog rada i doprinos nauci, tehnologiji i industriji."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "Istorijat",
					},
				]}
			/>

			{/* Uvod */}
			<Section>
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Razvoj Instituta
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Decenije naučnog, stručnog i tehnološkog razvoja
							</h2>

							<div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
								<p>
									Razvoj ITNMS-a obeležen je kontinuitetom naučnoistraživačkog
									rada, proširivanjem stručnih oblasti i unapređenjem
									laboratorijskih i tehnoloških kapaciteta.
								</p>

								<p>
									U nastavku su hronološki predstavljene ključne etape koje su
									oblikovale organizaciju, delatnosti i današnju ulogu
									Instituta.
								</p>
							</div>
						</div>

						<figure className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={logo}
								alt="Arhivska fotografija zgrade Instituta"
								className="object-cover w-full aspect-video"
							/>

							<figcaption className="px-5 py-4 text-sm leading-6 bg-white border-t border-stone-200 text-stone-500">
								Arhivska fotografija Instituta slikana juna 1948. godine.
							</figcaption>
						</figure>
					</div>
				</Container>
			</Section>

			{/* Vremenska linija */}
			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Ključne etape
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Institut kroz vreme
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Najvažniji događaji i razvojne faze izdvojeni iz zvaničnog
							istorijata Instituta.
						</p>
					</div>

					<div className="relative mt-12">
						<div
							className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-stone-300 md:block"
							aria-hidden="true"
						/>

						<ol className="space-y-8">
							{timeline.map((item, index) => (
								<TimelineEntry
									key={`${item.year}-${item.title}`}
									item={item}
									index={index}
								/>
							))}
						</ol>
					</div>
				</Container>
			</Section>

			{/* Pun istorijat */}
			<Section>
				<Container>
					<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
						<article className="max-w-4xl">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Zvanični istorijat
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Istorijat Instituta
							</h2>

							<div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
								<p>
									Institut za tehnologiju nuklearnih i drugih mineralnih
									sirovina osnovan je 1948. god. Uredbom Vlade FNRJ. Pomenutom
									Uredbom od 27. marta 1948. god. osnovana je Uprava za
									koordinaciju rada naučnih instituta, pri Predsedništvu iste
									vlade. Iza ovog uopštenog naziva nije se moglo naslutiti da je
									osnovni cilj Uprave razvoj nuklearne tehnologije u našoj
									zemlji. U oktobru 1952. god. Uprava se seli u ulicu Franše
									d'Epere-a 86 (gde se ITNMS i danas nalazi), istovremeno, na
									osnovu nove uredbe, Uprava menja naziv u Uprava za rudarska
									istrživanja i rudarske studije. Sa preseljenjem, Upravi su
									pripojena dva instituta koja su radila u zgradi u Ul. Franše
									d'Epere-a: Savezni institut za metalurgiju (prenet u
									nadležnost Vlade NR Srbije 1951. god.) i Naučnoistraživački
									institut Ministarstva industrije NR Srbije. U aprilu 1953.
									god. Uprava menja naziv u Zavod za geološko-rudarska i
									tehnološka istraživanja.
								</p>

								<p>
									Juna 1955. god. Savezno izvršno veće ukida Zavod i donosi
									Rešenje o osnivanju Instituta za tehnologiju nuklearnih
									sirovina. Rešenjem se utvrđuje da je zadatak Instituta vršenje
									tehnoloških ispitivanja i istraživanja mineralnih, prvenstveno
									nuklearnih sirovina. Time se jasno definišu strogo namenska
									istraživanja na izdvajanju urana iz domaćih mineralnih i
									nekonvencionalnih sirovina, dobijanje nuklearno čistih soli i
									jedinjenja uranijuma pogodnih za dalju preradu, kao i razvoj
									reaktorskih materijala. Zahvaljujući zamahu geološko-rudarskih
									istraživanja, Institut je bio nosilac istraživanja
									koncentracije i prerade ruda obojenih, plemenitih i retkih
									metala.
								</p>
								<p>
									Dalje transformacije u poslovanju odigravaju se od 1961. do
									1966. god. Uredbom iz 1961. god. formira se Zavod za nuklearne
									sirovine, čime se prvi put u našoj javnosti pojavljuje reč
									nuklearni kao delatnost, do tada strogo čuvana.
								</p>
								<p>
									Najzad u januaru 1966. god. Zavod za nuklearne sirovine se
									deli u dva dela i jasno se profiliše Institut za tehnologiju
									nuklearnih i drugih mineralnih sirovina. Rasformiranjem
									Savezne komisije za nuklearnu energiju (1968. god.) praktično
									se odustaje od zajedničkog nuklearnog programa u zemlji, što
									zbog prestanka finansiranja dovodi do ozbiljnih potresa u
									Institutu. Pravo osnivača preuzima Izvršno veće SR Srbije.
									Novonastale okolnosti dovode do nove programske koncepcije
									koja se bazira na uspostavljanju direktne saradnje sa
									privredom, proširenju delatnosti u oblast nemetaličnih
									sirovina, obojenih i retkih metala, zaštite životne sredine,
									inženjerizaciji tehničko-tehnoloških rešenja, konsaltinga i
									inženjeringa. Poseban napor je uložen u očuvanju primata u
									domenu analitičke hemije i karakterizacije uopšte.
								</p>
								<p>
									U periodu 1970-1985. godine izvršen je čitav niz
									transformacija unutrašnje organizacije, što kao posledica
									izmene zakonskih propisa, što u traganju za efikasnijom
									organizacijom istraživačkog rada. Posle transformacije na
									četiri osnovne organizacije udruženog rada iz 1977. god. u
									1985. god. formirane su dve celine. Te dve celine su bile OOUR
									Institut za pripremu mineralnih sirovina i OOUR Institut za
									metalurgiju i tehnologiju.
								</p>
								<p>
									1991. god. ITNMS se registruje kao jedinstvena
									naučnoistraživačka organizacija u statusu naučnog instituta.
									Prema Zakonu o naučnoistraživačkom radu iz 1993. god. Institut
									je registrovan u statusu naučne državne ustanove (Rešenje
									Ministarstva za nauku i tehnologiju Republike Srbije br.
									660-2-199/93 od 1.4.1994. god.).
								</p>
								<p>
									U skladu sa Zakonom o klasifikaciji delatnosti i registru
									jedinica razvrstavanja ITNMS je upisan u sudski registar,
									registarskog uloška br 5-329-00, od 10.2.1999. sa proširenjem
									delatnosti od 27.05.2003.
								</p>
								<p>
									ITNMS je je akreditovan 12.03.2007.godine od strane
									Ministarstva nauke i zaštite životne sredine, Rešenjem o
									ispunjenosti uslova za obavljanje naučnoistraživačke
									delatnosti od opšteg interesa, br.110-00-34/24.
								</p>
								<p>
									ITNMS je reakreditovana naučno istraživačka organizacija -
									istraživačko razvojni institut, shodno Rešenju Ministra
									prosvete, nauke i tehnološkog razvoja br. 612-00-00303/2013-17
									od 11.02.2013. kojim je uvrđeno da ITNMS ispunjava uslove
									propisane zakonom da obavlja naučnoistraživačku delatnost radi
									ostvarivanja opšteg interesa, a na osnovu pozitivne Odluke
									Odbora za akreditaciju naučnoistraživačkih organizacija
									br.640-01-1/13 od 14.06.2011. godine.
								</p>
								<p>
									ITNMS je reakreditovana naučno istraživačka organizacija -
									istraživačko razvojni institut, shodno Rešenju Ministra
									prosvete, nauke i tehnološkog razvoja br. 660-01-019/2016-14
									od 03.02.2016. kojim je uvrđeno da ITNMS ispunjava uslove
									propisane zakonom da obavlja naučnoistraživačku delatnost radi
									ostvarivanja opšteg interesa, a na osnovu pozitivne Odluke
									Odbora za akreditaciju naučnoistraživačkih organizacija
									br.660-01-00013/18 od 12.01.2016. godine.
								</p>
								<div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
									{AkreditacijaImages.map((image, q) => {
										const ime = image.link.replaceAll("/imgs/a", "A");

										return (
											<figure
												key={q}
												className="overflow-hidden bg-white border shadow-sm rounded-xl border-institute-100"
											>
												<Image
													src={image.src}
													alt={image.alt}
													className="object-contain w-full "
												/>

												<figcaption className="px-5 py-4 text-sm leading-6 text-stone-500">
													{image.caption}
													<Link
														download={ime}
														className="inline-flex items-center gap-2 text-sm font-semibold text-institute-700 hover:text-institute-900"
														href={image.link}
													>
														Preuzmi sliku ovde{" "}
														<ArrowRight
															className="w-4 h-4 transition-transform group-hover:translate-x-1"
															aria-hidden="true"
														/>
													</Link>
												</figcaption>
											</figure>
										);
									})}
								</div>
								{/* <h3 className="pt-4 text-2xl font-semibold tracking-tight text-stone-900">
									Naziv istorijskog perioda
								</h3>

								<p>
									Ovde unesite odgovarajući deo postojećeg istorijata za ovaj
									period.
								</p>

								<p>
									Nastavite sa originalnim sadržajem dok ceo istorijat ne bude
									prenet na stranicu.
								</p> */}
							</div>
						</article>

						<aside className="lg:sticky lg:top-32 lg:self-start">
							<div className="p-6 border rounded-xl border-stone-200 bg-stone-50">
								<div className="flex items-center justify-center rounded-lg h-11 w-11 bg-institute-100 text-institute-800">
									<CalendarDays
										className="w-5 h-5"
										aria-hidden="true"
									/>
								</div>

								<h2 className="mt-5 text-lg font-semibold text-stone-900">
									Povezane stranice
								</h2>

								<div className="flex flex-col gap-3 mt-4">
									<a
										href="/o-institutu/organizacija"
										className="inline-flex items-center justify-between gap-3 text-sm font-medium transition text-stone-700 hover:text-institute-800"
									>
										Organizacija
										<ArrowRight
											className="w-4 h-4"
											aria-hidden="true"
										/>
									</a>

									<a
										href="/o-institutu/delatnosti-i-oblasti-rada"
										className="inline-flex items-center justify-between gap-3 text-sm font-medium transition text-stone-700 hover:text-institute-800"
									>
										Delatnosti i oblasti rada
										<ArrowRight
											className="w-4 h-4"
											aria-hidden="true"
										/>
									</a>

									<a
										href="/istrazivaci-i-zaposleni"
										className="inline-flex items-center justify-between gap-3 text-sm font-medium transition text-stone-700 hover:text-institute-800"
									>
										Istraživači i zaposleni
										<ArrowRight
											className="w-4 h-4"
											aria-hidden="true"
										/>
									</a>
								</div>
							</div>
						</aside>
					</div>
				</Container>
			</Section>

			{/* Galerija */}
			<Section background="institute">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Arhiva
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Fotografije iz istorije Instituta
						</h2>
					</div>

					<div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
						{historicalImages.map((image, q) => (
							<figure
								key={q}
								className="overflow-hidden bg-white border shadow-sm rounded-xl border-institute-100"
							>
								<Image
									src={image.src}
									alt={image.alt}
									className="object-cover w-full aspect-4/3"
								/>

								<figcaption className="px-5 py-4 text-sm leading-6 text-stone-600">
									{image.caption}
								</figcaption>
							</figure>
						))}
					</div>
				</Container>
			</Section>
		</>
	);
}

type TimelineEntryProps = {
	item: TimelineItem;
	index: number;
};

function TimelineEntry({ item, index }: TimelineEntryProps) {
	return (
		<li className="relative md:grid md:grid-cols-[40px_140px_1fr] md:gap-6">
			<div
				className="relative items-center justify-center hidden w-10 h-10 text-xs font-semibold text-white border-4 rounded-full z- border-stone-50 bg-institute-800 md:flex"
				aria-hidden="true"
			>
				{index + 1}
			</div>

			<p className="text-lg font-semibold text-institute-800">{item.year}</p>

			<div className="p-6 mt-3 bg-white border shadow-sm rounded-xl border-stone-200 md:mt-0">
				<h3 className="text-xl font-semibold tracking-tight text-stone-900">
					{item.title}
				</h3>

				<p className="mt-3 text-sm leading-7 text-stone-600">
					{item.description}
				</p>
			</div>
		</li>
	);
}
