// "use client";

// import {
// 	Building2,
// 	ChevronDown,
// 	ChevronUp,
// 	ExternalLink,
// 	FlaskConical,
// 	Landmark,
// 	UserRound,
// 	UsersRound,
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// import { Container } from "@/app/components/Container";
// import { PageHeader } from "@/app/components/PageHeder";
// import { Section } from "@/app/components/Section";

// type LeadershipCardProps = {
// 	id: string;
// 	title: string;
// 	name?: string;
// 	description?: string;
// 	href?: string;
// };

// export default function OrganizationPage() {
// 	return (
// 		<>
// 			<PageHeader
// 				title="Organizaciona šema"
// 				description="Organizaciona struktura Instituta za tehnologiju nuklearnih i drugih mineralnih sirovina."
// 				breadcrumbs={[
// 					{
// 						label: "O Institutu",
// 						href: "/o-institutu",
// 					},
// 					{
// 						label: "Organizaciona šema",
// 					},
// 				]}
// 			/>

// 			<Section>
// 				<Container>
// 					<div className="pt-2 pb-10 overflow-x-auto">
// 						<div className="mx-auto min-w-[1050px] max-w-7xl">
// 							{/* UPRAVNI ODBOR */}

// 							<div className="flex justify-center">
// 								<OrganizationLink
// 									title="Upravni odbor"
// 									podnaslov=""
// 									href="/o-institutu/upravni-odbor"
// 									variant="primary"
// 								/>
// 							</div>

// 							<VerticalLine />

// 							{/* DIREKTOR */}

// 							<div className="flex justify-center">
// 								<LeadershipCard
// 									id="direktor"
// 									title="Direktor Instituta"
// 									name=""
// 									description="Ovde može da stoji kratak opis direktora, naučno zvanje, oblast rada i druge relevantne informacije."
// 									href="/istrazivaci-i-zaposleni/rukovodstvo"
// 								/>
// 							</div>

// 							<VerticalLine height="h-10" />

// 							{/* GLAVNA HORIZONTALNA GRANA */}

// 							<div className="w-2/3 h-px mx-auto bg-stone-300" />

// 							<div className="grid grid-cols-3 gap-16">
// 								<div className="flex justify-center">
// 									<VerticalLine />
// 								</div>

// 								<div className="flex justify-center">
// 									<VerticalLine />
// 								</div>

// 								<div className="flex justify-center">
// 									<VerticalLine />
// 								</div>
// 							</div>

// 							{/* TRI POMOĆNIKA */}

// 							<div className="grid items-start grid-cols-3 gap-8">
// 								{/* PRVA GRANA */}

// 								<div>
// 									<LeadershipCard
// 										id="pomocnik-mineralne"
// 										title="Pomoćnik direktora"
// 										name="Za pripremu mineralnih sirovina"
// 										description="Podaci o pomoćniku direktora, naučno zvanje, oblast rada i kontakt."
// 										href="/istrazivaci-i-zaposleni/rukovodstvo"
// 									/>

// 									<VerticalLine />

// 									<OrganizationLink
// 										title="Sektor "
// 										podnaslov="Za pripremu mineralnih sirovina i neorgansku tehnologiju"
// 										href="/organizacione-jedinice/sektor-priprema-mineralnih-sirovina"
// 										variant="sector"
// 									/>

// 									<VerticalLine />

// 									<div className="w-4/5 h-px mx-auto bg-stone-300" />

// 									<div className="grid grid-cols-3 gap-2">
// 										<div className="flex justify-center">
// 											<VerticalLine />
// 										</div>

// 										<div className="flex justify-center">
// 											<VerticalLine />
// 										</div>

// 										<div className="flex justify-center">
// 											<VerticalLine />
// 										</div>
// 									</div>

// 									<div className="grid grid-cols-3 gap-2">
// 										<OrganizationLink
// 											title="Centar "
// 											podnaslov="Za pripremu mineralnih sirovina"
// 											href="/organizacione-jedinice/centar-priprema-mineralnih-sirovina"
// 										/>

// 										<OrganizationLink
// 											title="Centar "
// 											podnaslov="Za razvoj novih materijala"
// 											href="/organizacione-jedinice/centar-razvoj-novih-materijala"
// 										/>

// 										<OrganizationLink
// 											title="Centar"
// 											podnaslov="Za neorganske tehnologije"
// 											href="/organizacione-jedinice/centar-neorganske-tehnologije"
// 										/>
// 									</div>
// 								</div>

// 								{/* DRUGA GRANA */}

// 								<div>
// 									<LeadershipCard
// 										id="pomocnik-metalurgija"
// 										title="Pomoćnik direktora"
// 										name="Za metalurške tehnologije i zaštitu životne sredine"
// 										description="Podaci o pomoćniku direktora, naučno zvanje, oblast rada i kontakt."
// 										href="/istrazivaci-i-zaposleni/rukovodstvo"
// 									/>

// 									<VerticalLine />

// 									<div className="w-3/4 h-px mx-auto bg-stone-300" />

// 									<div className="grid grid-cols-2">
// 										<div className="flex justify-center">
// 											<VerticalLine />
// 										</div>

// 										<div className="flex justify-center">
// 											<VerticalLine />
// 										</div>
// 									</div>

// 									<div className="grid grid-cols-2 gap-4">
// 										<OrganizationLink
// 											title="Centar"
// 											podnaslov="Za metalurške tehnologije"
// 											href="/organizacione-jedinice/centar-metalurske-tehnologije"
// 										/>

// 										<OrganizationLink
// 											title="Centar "
// 											podnaslov="Za zaštitu životne sredine"
// 											href="/organizacione-jedinice/centar-zastita-zivotne-sredine"
// 										/>
// 									</div>

// 									{/* SPAJANJE DVA CENTRA */}

// 									<div className="grid grid-cols-2">
// 										<div className="flex justify-center">
// 											<VerticalLine />
// 										</div>

// 										<div className="flex justify-center">
// 											<VerticalLine />
// 										</div>
// 									</div>

// 									<div className="w-1/2 h-px mx-auto bg-stone-300" />

// 									<VerticalLine />

// 									<div className="mx-auto max-w-[240px]">
// 										<OrganizationLink
// 											title="Centar "
// 											podnaslov="Za proizvodnju"
// 											href="/organizacione-jedinice/centar-proizvodnja"
// 											variant="important"
// 										/>
// 									</div>
// 								</div>

// 								{/* TREĆA GRANA */}

// 								<div>
// 									<LeadershipCard
// 										id="pomocnik-nauka"
// 										title="Pomoćnik direktora"
// 										name="Za nauku, razvoj i međunarodnu saradnju"
// 										description="Podaci o pomoćniku direktora, naučno zvanje, oblast rada i međunarodna saradnja."
// 										href="/istrazivaci-i-zaposleni/rukovodstvo"
// 									/>

// 									<VerticalLine />

// 									<OrganizationLink
// 										title="Centralna laboratorija za ispitivanja"
// 										podnaslov=""
// 										href="/organizacione-jedinice/centralna-laboratorija"
// 										variant="sector"
// 									/>
// 								</div>
// 							</div>

// 							{/* ZAJEDNIČKA GRANA ZA SLUŽBE */}

// 							<div className="mt-16">
// 								<div className="grid grid-cols-3">
// 									<div className="flex justify-center">
// 										<div className="w-px h-8 bg-stone-300" />
// 									</div>

// 									<div className="flex justify-center">
// 										<div className="w-px h-8 bg-stone-300" />
// 									</div>

// 									<div className="flex justify-center">
// 										<div className="w-px h-8 bg-stone-300" />
// 									</div>
// 								</div>

// 								<div className="w-2/3 h-px mx-auto bg-stone-300" />

// 								<VerticalLine />

// 								<p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
// 									Zajedničke službe Instituta
// 								</p>

// 								<div className="grid grid-cols-3 gap-6">
// 									<OrganizationLink
// 										title="Služba "
// 										podnaslov="Za ekonomske i finansijske poslove"
// 										href="/organizacione-jedinice/ekonomski-finansijski-poslovi"
// 										variant="service"
// 									/>

// 									<OrganizationLink
// 										title="Služba"
// 										podnaslov="Za administrativne, opšte i poslove tehničkog održavanja"
// 										href="/organizacione-jedinice/administrativni-poslovi"
// 										variant="service"
// 									/>

// 									<OrganizationLink
// 										title="Služba"
// 										podnaslov="Za projektovane informacione sisteme i tehničku arhivu"
// 										href="/organizacione-jedinice/sluzba-3"
// 										variant="service"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

// function VerticalLine({ height = "h-7" }: { height?: string }) {
// 	return (
// 		<div
// 			className={`mx-auto w-px ${height} bg-stone-300`}
// 			aria-hidden="true"
// 		/>
// 	);
// }

// type OrganizationLinkProps = {
// 	title: string;
// 	podnaslov: string;
// 	href: string;
// 	variant?: "default" | "primary" | "sector" | "important" | "service";
// };

// function OrganizationLink({
// 	title,
// 	podnaslov,
// 	href,
// 	variant = "default",
// }: OrganizationLinkProps) {
// 	const styles = {
// 		default:
// 			"border-stone-200 bg-white text-stone-800 hover:border-institute-400 hover:bg-institute-50",

// 		primary:
// 			"border-institute-800 bg-institute-800 text-white hover:bg-institute-900",

// 		sector:
// 			"border-mineral-300 bg-mineral-50 text-stone-900 hover:border-mineral-500",

// 		important:
// 			"border-institute-300 bg-institute-50 text-institute-900 hover:bg-institute-100",

// 		service:
// 			"border-stone-300 bg-stone-50 text-stone-800 hover:border-institute-300 hover:bg-white",
// 	};

// 	return (
// 		<Link
// 			className={`flex-col rounded-xl border p-4 text-center text-sm font-semibold leading-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${styles[variant]} group flex min-h-24 items-center justify-center`}
// 			href={href}
// 		>
// 			<div className={`flex w-full items-center justify-center`}>
// 				<div className="ml-auto">{title}</div>

// 				{variant == "primary" ? (
// 					""
// 				) : (
// 					<ExternalLink className=" h-3.5 w-3.5 shrink-0 opacity-0 transition ml-auto group-hover:opacity-60" />
// 				)}
// 			</div>
// 			<span className="text-xs font-normal text-stone-600">{podnaslov}</span>
// 		</Link>
// 	);
// }

// function LeadershipCard({
// 	id,
// 	title,
// 	name,
// 	description,
// 	href,
// }: LeadershipCardProps) {
// 	const [open, setOpen] = useState(false);

// 	return (
// 		<div className="w-fit">
// 			<button
// 				type="button"
// 				onClick={() => setOpen((current) => !current)}
// 				aria-expanded={open}
// 				aria-controls={`${id}-details`}
// 				className={`w-full rounded-2xl border bg-white p-5 text-left shadow-sm transition ${
// 					open
// 						? "border-institute-400 shadow-md"
// 						: "border-stone-200 hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
// 				}`}
// 			>
// 				<div className="flex items-start gap-4">
// 					<div className="flex items-center justify-center h-11 w-11 shrink-0 rounded-xl bg-institute-50 text-institute-800">
// 						<UserRound className="w-5 h-5" />
// 					</div>

// 					<div className="flex-1 min-w-0">
// 						<p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mineral-700">
// 							Rukovodstvo
// 						</p>

// 						<h2 className="mt-2 text-base font-semibold leading-6 text-stone-800">
// 							{title}
// 						</h2>

// 						{name && <p className="mt-2 text-sm text-stone-600">{name}</p>}
// 					</div>

// 					{open ? (
// 						<ChevronUp className="w-5 h-5 shrink-0 text-stone-400" />
// 					) : (
// 						<ChevronDown className="w-5 h-5 shrink-0 text-stone-400" />
// 					)}
// 				</div>
// 			</button>

// 			{open && (
// 				<div
// 					id={`${id}-details`}
// 					className="p-5 mt-2 border rounded-xl border-stone-200 bg-stone-50"
// 				>
// 					{name && <p className="font-semibold text-stone-900">{name}</p>}

// 					{description && (
// 						<p className="mt-3 text-sm leading-6 text-stone-600">
// 							{description}
// 						</p>
// 					)}

// 					{href && (
// 						<Link
// 							href={href}
// 							className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-institute-700 hover:text-institute-900"
// 						>
// 							Više informacija
// 							<ExternalLink className="w-4 h-4" />
// 						</Link>
// 					)}
// 				</div>
// 			)}
// 		</div>
// 	);
// }
