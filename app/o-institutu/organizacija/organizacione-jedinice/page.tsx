// import {
// 	ArrowRight,
// 	Building2,
// 	FlaskConical,
// 	ShieldCheck,
// 	Users,
// } from "lucide-react";

// import { Container } from "@/app/components/Container";
// import { PageHeader } from "@/app/components/PageHeder";
// import { Section } from "@/app/components/Section";

// type OrganizationalUnit = {
// 	title: string;
// 	description: string;
// 	manager?: string;
// 	type: "sector" | "laboratory" | "service";
// 	href: string;
// };

// const units: OrganizationalUnit[] = [
// 	{
// 		title: "Sektor za pripremu mineralnih sirovina",
// 		description:
// 			"Istraživanja i razvoj procesa pripreme, obogaćivanja i prerade mineralnih sirovina.",
// 		manager: "Ime i prezime",
// 		type: "sector",
// 		href: "/o-institutu/organizacija/organizacione-jedinice/priprema-mineralnih-sirovina",
// 	},
// 	{
// 		title: "Sektor za metalurgiju",
// 		description:
// 			"Razvoj i optimizacija metalurških procesa, ispitivanje materijala i tehnoloških postupaka.",
// 		manager: "Ime i prezime",
// 		type: "sector",
// 		href: "/o-institutu/organizacija/organizacione-jedinice/metalurgija",
// 	},
// 	{
// 		title: "Sektor za materijale i hemijsko inženjerstvo",
// 		description:
// 			"Razvoj, karakterizacija i primena savremenih materijala i hemijsko-tehnoloških procesa.",
// 		manager: "Ime i prezime",
// 		type: "sector",
// 		href: "/o-institutu/organizacija/organizacione-jedinice/materijali-i-hemijsko-inzenjerstvo",
// 	},
// 	{
// 		title: "Laboratorija za instrumentalna ispitivanja",
// 		description:
// 			"Analitička i instrumentalna ispitivanja sirovina, materijala i uzoraka.",
// 		manager: "Ime i prezime",
// 		type: "laboratory",
// 		href: "/o-institutu/organizacija/organizacione-jedinice/instrumentalna-ispitivanja",
// 	},
// 	{
// 		title: "Služba za kvalitet",
// 		description:
// 			"Podrška sistemu kvaliteta, akreditacijama i primeni odgovarajućih standarda.",
// 		manager: "Ime i prezime",
// 		type: "service",
// 		href: "/o-institutu/organizacija/organizacione-jedinice/sluzba-za-kvalitet",
// 	},
// 	{
// 		title: "Služba za pravne i opšte poslove",
// 		description:
// 			"Pravni, administrativni i opšti poslovi od značaja za funkcionisanje Instituta.",
// 		manager: "Ime i prezime",
// 		type: "service",
// 		href: "/o-institutu/organizacija/organizacione-jedinice/pravni-i-opsti-poslovi",
// 	},
// ];

// const typeLabels = {
// 	sector: "Sektor",
// 	laboratory: "Laboratorija",
// 	service: "Stručna služba",
// };

// const typeStyles = {
// 	sector: "bg-institute-50 text-institute-800",
// 	laboratory: "bg-mineral-50 text-mineral-800",
// 	service: "bg-stone-100 text-stone-700",
// };

// export default function OrganizationalUnitsPage() {
// 	return (
// 		<>
// 			<PageHeader
// 				title="Organizacione jedinice"
// 				description="Pregled sektora, laboratorija i stručnih službi Instituta, njihovih oblasti rada i odgovornih lica."
// 				breadcrumbs={[
// 					{
// 						label: "O institutu",
// 						href: "/o-institutu",
// 					},
// 					{
// 						label: "Organizacija",
// 						href: "/o-institutu/organizacija",
// 					},
// 					{
// 						label: "Organizacione jedinice",
// 					},
// 				]}
// 			/>

// 			<Section>
// 				<Container>
// 					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
// 						<div className="max-w-3xl">
// 							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
// 								Struktura Instituta
// 							</p>

// 							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
// 								Sektori, laboratorije i stručne službe
// 							</h2>

// 							<p className="mt-4 text-base leading-7 text-stone-600">
// 								Svaka organizaciona jedinica ima definisane oblasti rada,
// 								odgovorna lica i zaposlene uključene u naučne, stručne i
// 								razvojne aktivnosti.
// 							</p>
// 						</div>

// 						<a
// 							href="/o-institutu/organizacija/organizaciona-sema"
// 							className="inline-flex items-center self-start gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900 lg:self-auto"
// 						>
// 							Pogledajte organizacionu šemu
// 							<ArrowRight
// 								className="w-4 h-4"
// 								aria-hidden="true"
// 							/>
// 						</a>
// 					</div>

// 					<div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
// 						{units.map((unit) => (
// 							<OrganizationalUnitCard
// 								key={unit.href}
// 								unit={unit}
// 							/>
// 						))}
// 					</div>
// 				</Container>
// 			</Section>

// 			<Section background="stone">
// 				<Container>
// 					<div className="grid gap-8 md:grid-cols-3">
// 						<SummaryCard
// 							icon={Building2}
// 							value="3"
// 							label="naučnoistraživačka sektora"
// 						/>

// 						<SummaryCard
// 							icon={FlaskConical}
// 							value="1"
// 							label="specijalizovana laboratorija"
// 						/>

// 						<SummaryCard
// 							icon={ShieldCheck}
// 							value="2"
// 							label="stručne službe"
// 						/>
// 					</div>
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

// type OrganizationalUnitCardProps = {
// 	unit: OrganizationalUnit;
// };

// function OrganizationalUnitCard({ unit }: OrganizationalUnitCardProps) {
// 	return (
// 		<article className="group flex min-h-[310px] flex-col rounded-xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-institute-300 hover:shadow-md">
// 			<span
// 				className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${typeStyles[unit.type]}`}
// 			>
// 				{typeLabels[unit.type]}
// 			</span>

// 			<h3 className="mt-5 text-xl font-semibold tracking-tight transition text-stone-900 group-hover:text-institute-800">
// 				{unit.title}
// 			</h3>

// 			<p className="mt-4 text-sm leading-6 text-stone-600">
// 				{unit.description}
// 			</p>

// 			{unit.manager && (
// 				<div className="flex items-start gap-3 p-4 mt-5 rounded-lg bg-stone-50">
// 					<Users
// 						className="mt-0.5 h-4 w-4 shrink-0 text-mineral-700"
// 						aria-hidden="true"
// 					/>

// 					<div>
// 						<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
// 							Rukovodilac
// 						</p>

// 						<p className="mt-1 text-sm font-medium text-stone-800">
// 							{unit.manager}
// 						</p>
// 					</div>
// 				</div>
// 			)}

// 			<a
// 				href={unit.href}
// 				className="inline-flex items-center gap-2 mt-auto text-sm font-semibold transition pt-7 text-institute-700 hover:text-institute-900"
// 			>
// 				Detaljnije o jedinici
// 				<ArrowRight
// 					className="w-4 h-4 transition-transform group-hover:translate-x-1"
// 					aria-hidden="true"
// 				/>
// 			</a>
// 		</article>
// 	);
// }

// type SummaryCardProps = {
// 	icon: React.ElementType;
// 	value: string;
// 	label: string;
// };

// function SummaryCard({ icon: Icon, value, label }: SummaryCardProps) {
// 	return (
// 		<div className="flex items-center gap-4 p-6 bg-white border shadow-sm rounded-xl border-stone-200">
// 			<div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-institute-50 text-institute-800">
// 				<Icon
// 					className="w-6 h-6"
// 					aria-hidden="true"
// 				/>
// 			</div>

// 			<div>
// 				<p className="text-2xl font-semibold tracking-tight text-stone-900">
// 					{value}
// 				</p>

// 				<p className="mt-1 text-sm leading-5 text-stone-600">{label}</p>
// 			</div>
// 		</div>
// 	);
// }
