// import {
// 	ArrowRight,
// 	Atom,
// 	Factory,
// 	FlaskConical,
// 	Leaf,
// 	Microscope,
// 	Pickaxe,
// } from "lucide-react";
// import slika1 from "@/public/imgs/IMG_9984.jpg";
// import slika2 from "@/public/imgs/IMG_9924.jpg";
// import slika3 from "@/public/imgs/IMG_9954.jpg";
// import { Container } from "@/app/components/Container";
// import { PageHeader } from "@/app/components/PageHeder";
// import { Section } from "@/app/components/Section";
// import Image, { StaticImageData } from "next/image";

// type WorkArea = {
// 	id: string;
// 	title: string;
// 	description: string;
// 	activities: string[];
// 	image: string | StaticImageData;
// 	icon: React.ElementType;
// 	servicesUrl?: string;
// 	projectsUrl?: string;
// };

// const workAreas: WorkArea[] = [
// 	{
// 		id: "priprema-mineralnih-sirovina",
// 		title: "Priprema mineralnih sirovina",
// 		description:
// 			"Istraživanje i razvoj postupaka pripreme, obogaćivanja i prerade mineralnih sirovina za potrebe nauke i industrije.",
// 		activities: [
// 			"Karakterizacija mineralnih sirovina",
// 			"Usitnjavanje, klasiranje i koncentracija",
// 			"Razvoj tehnoloških postupaka",
// 			"Laboratorijska i poluindustrijska ispitivanja",
// 		],
// 		image: slika2,
// 		icon: Pickaxe,
// 		servicesUrl: "/usluge/oblasti-usluga#mineralne-sirovine",
// 		projectsUrl: "/projekti/naucni",
// 	},
// 	{
// 		id: "metalurgija",
// 		title: "Metalurgija",
// 		description:
// 			"Razvoj i optimizacija metalurških procesa, ispitivanje sirovina i materijala i unapređenje tehnoloških postupaka.",
// 		activities: [
// 			"Pirometalurški i hidrometalurški procesi",
// 			"Dobijanje i prerada metala",
// 			"Ispitivanje tehnoloških parametara",
// 			"Optimizacija industrijskih procesa",
// 		],
// 		image: slika3,
// 		icon: Factory,
// 		servicesUrl: "/usluge/oblasti-usluga#metalurgija",
// 		projectsUrl: "/projekti/naucni",
// 	},
// 	{
// 		id: "materijali",
// 		title: "Materijali i hemijsko inženjerstvo",
// 		description:
// 			"Razvoj, sinteza, karakterizacija i primena savremenih materijala i hemijsko-tehnoloških procesa.",
// 		activities: [
// 			"Razvoj novih materijala",
// 			"Hemijska i fizička karakterizacija",
// 			"Ispitivanje strukture i svojstava",
// 			"Razvoj i optimizacija hemijskih procesa",
// 		],
// 		image: slika2,
// 		icon: Atom,
// 		servicesUrl: "/usluge/oblasti-usluga#materijali",
// 		projectsUrl: "/projekti/naucni",
// 	},
// 	{
// 		id: "zastita-zivotne-sredine",
// 		title: "Zaštita životne sredine",
// 		description:
// 			"Ispitivanje uticaja industrijskih i rudarskih aktivnosti i razvoj održivih postupaka tretmana otpada i otpadnih tokova.",
// 		activities: [
// 			"Karakterizacija industrijskog otpada",
// 			"Tretman otpadnih voda i čvrstog otpada",
// 			"Izdvajanje korisnih komponenti",
// 			"Razvoj ekološki prihvatljivih tehnologija",
// 		],
// 		image: slika2,
// 		icon: Leaf,
// 		servicesUrl: "/usluge/oblasti-usluga#zastita-zivotne-sredine",
// 		projectsUrl: "/projekti/naucni",
// 	},
// 	{
// 		id: "laboratorijska-ispitivanja",
// 		title: "Laboratorijska ispitivanja",
// 		description:
// 			"Hemijska, fizička, mineraloška i instrumentalna ispitivanja sirovina, materijala i tehnoloških proizvoda.",
// 		activities: [
// 			"Hemijske analize",
// 			"Mineraloška i strukturna ispitivanja",
// 			"Instrumentalne metode",
// 			"Ispitivanja prema standardima",
// 		],
// 		image: slika3,
// 		icon: Microscope,
// 		servicesUrl: "/usluge/laboratorije",
// 	},
// 	{
// 		id: "industrijska-saradnja",
// 		title: "Razvoj tehnologija i industrijska saradnja",
// 		description:
// 			"Primena naučnih i stručnih znanja kroz razvoj procesa, studije, konsultantske usluge i saradnju sa privredom.",
// 		activities: [
// 			"Razvoj tehnoloških rešenja",
// 			"Poluindustrijska ispitivanja",
// 			"Stručne studije i elaborati",
// 			"Konsultantska i razvojna podrška",
// 		],
// 		image: slika3,
// 		icon: FlaskConical,
// 		servicesUrl: "/usluge",
// 		projectsUrl: "/projekti",
// 	},
// ];

// export default function ActivitiesAndWorkAreasPage() {
// 	return (
// 		<>
// 			<PageHeader
// 				title="Delatnosti i oblasti rada"
// 				description="Pregled naučnih, razvojnih i stručnih oblasti kojima se Institut bavi."
// 				breadcrumbs={[
// 					{
// 						label: "O institutu",
// 						href: "/o-institutu",
// 					},
// 					{
// 						label: "Delatnosti i oblasti rada",
// 					},
// 				]}
// 			/>

// 			<Section>
// 				<Container>
// 					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
// 						<div>
// 							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
// 								Nauka i primena
// 							</p>

// 							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
// 								Povezane naučne, tehnološke i stručne delatnosti
// 							</h2>

// 							<p className="mt-5 text-base leading-8 text-stone-600">
// 								Rad Instituta obuhvata fundamentalna i primenjena istraživanja,
// 								razvoj tehnoloških postupaka, laboratorijska ispitivanja i
// 								stručnu podršku za potrebe privrede i javnog sektora.
// 							</p>

// 							<p className="mt-4 text-base leading-8 text-stone-600">
// 								Oblasti rada međusobno su povezane kroz projekte, laboratorije,
// 								istraživačke timove i saradnju sa domaćim i međunarodnim
// 								partnerima.
// 							</p>
// 						</div>

// 						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
// 							<Image
// 								src={slika1}
// 								alt="Istraživački i laboratorijski rad u ITNMS-u"
// 								className="object-cover w-full aspect-4/3"
// 							/>
// 						</div>
// 					</div>
// 				</Container>
// 			</Section>

// 			<Section background="stone">
// 				<Container>
// 					<div className="max-w-3xl">
// 						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
// 							Oblasti rada
// 						</p>

// 						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
// 							Glavne oblasti stručnosti Instituta
// 						</h2>
// 					</div>

// 					<div className="mt-12 space-y-8">
// 						{workAreas.map((area, index) => (
// 							<WorkAreaSection
// 								key={area.id}
// 								area={area}
// 								imageOnLeft={index % 2 === 0}
// 							/>
// 						))}
// 					</div>
// 				</Container>
// 			</Section>

// 			<Section background="institute">
// 				<Container>
// 					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
// 						<div>
// 							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
// 								Potrebna vam je stručna ili laboratorijska usluga?
// 							</h2>

// 							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
// 								Pogledajte dostupne usluge, laboratorijske kapacitete i opremu
// 								Instituta ili pošaljite konkretan upit.
// 							</p>
// 						</div>

// 						<div className="flex flex-col gap-3 sm:flex-row">
// 							<a
// 								href="/usluge"
// 								className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
// 							>
// 								Pregled usluga
// 								<ArrowRight
// 									className="w-4 h-4"
// 									aria-hidden="true"
// 								/>
// 							</a>

// 							<a
// 								href="/usluge/posaljite-upit"
// 								className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition border rounded-md border-institute-700 text-institute-800 hover:bg-institute-50"
// 							>
// 								Pošaljite upit
// 							</a>
// 						</div>
// 					</div>
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

// type WorkAreaSectionProps = {
// 	area: WorkArea;
// 	imageOnLeft: boolean;
// };

// function WorkAreaSection({ area, imageOnLeft }: WorkAreaSectionProps) {
// 	const Icon = area.icon;

// 	return (
// 		<article
// 			id={area.id}
// 			className="overflow-hidden bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200"
// 		>
// 			<div className="grid lg:grid-cols-2">
// 				<div
// 					className={`bg-stone-100 ${
// 						imageOnLeft ? "lg:order-1" : "lg:order-2"
// 					}`}
// 				>
// 					<Image
// 						src={area.image}
// 						width={960}
// 						height={960}
// 						alt={area.title}
// 						className="object-cover w-full h-full min-h-80"
// 					/>
// 				</div>

// 				<div
// 					className={`flex flex-col justify-center p-7 md:p-10 ${
// 						imageOnLeft ? "lg:order-2" : "lg:order-1"
// 					}`}
// 				>
// 					<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
// 						<Icon
// 							className="w-6 h-6"
// 							aria-hidden="true"
// 						/>
// 					</div>

// 					<h3 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
// 						{area.title}
// 					</h3>

// 					<p className="mt-4 text-base leading-7 text-stone-600">
// 						{area.description}
// 					</p>

// 					<ul className="grid gap-3 mt-6 sm:grid-cols-2">
// 						{area.activities.map((activity) => (
// 							<li
// 								key={activity}
// 								className="flex items-start gap-3 text-sm leading-6 text-stone-700"
// 							>
// 								<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
// 								{activity}
// 							</li>
// 						))}
// 					</ul>

// 					<div className="flex flex-wrap gap-5 mt-8">
// 						{area.servicesUrl && (
// 							<a
// 								href={area.servicesUrl}
// 								className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
// 							>
// 								Povezane usluge
// 								<ArrowRight
// 									className="w-4 h-4"
// 									aria-hidden="true"
// 								/>
// 							</a>
// 						)}

// 						{area.projectsUrl && (
// 							<a
// 								href={area.projectsUrl}
// 								className="inline-flex items-center gap-2 text-sm font-semibold transition text-mineral-700 hover:text-mineral-900"
// 							>
// 								Povezani projekti
// 								<ArrowRight
// 									className="w-4 h-4"
// 									aria-hidden="true"
// 								/>
// 							</a>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</article>
// 	);
// }
