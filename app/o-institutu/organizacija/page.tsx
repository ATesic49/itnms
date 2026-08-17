// import { ArrowRight, Network, UsersRound } from "lucide-react";
// import slika from "@/public/imgs/IMG_9970.jpg";
// import { Container } from "@/app/components/Container";
// import { PageHeader } from "@/app/components/PageHeder";
// import { Section } from "@/app/components/Section";
// import Image from "next/image";

// export default function OrganizationPage() {
// 	return (
// 		<>
// 			<PageHeader
// 				title="Organizacija"
// 				description="Pregled organizacione strukture Instituta, njegovih jedinica, sektora i rukovodilaca."
// 				breadcrumbs={[
// 					{
// 						label: "O institutu",
// 						href: "/o-institutu",
// 					},
// 					{
// 						label: "Organizacija",
// 					},
// 				]}
// 			/>

// 			<Section>
// 				<Container>
// 					<div className="grid gap-8 lg:grid-cols-2">
// 						<OrganizationCard
// 							title="Organizaciona šema"
// 							description="Grafički prikaz rukovodstva, sektora, laboratorija i drugih organizacionih jedinica Instituta."
// 							href="/o-institutu/organizacija/organizaciona-sema"
// 							icon={Network}
// 						/>

// 						<OrganizationCard
// 							title="Organizacione jedinice"
// 							description="Pregled svih sektora i jedinica, njihovih oblasti rada, rukovodilaca i zaposlenih."
// 							href="/o-institutu/organizacija/organizacione-jedinice"
// 							icon={UsersRound}
// 						/>
// 					</div>
// 				</Container>
// 			</Section>

// 			<Section background="stone">
// 				<Container>
// 					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
// 						<div>
// 							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
// 								Struktura Instituta
// 							</p>

// 							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
// 								Organizacija naučnog, stručnog i laboratorijskog rada
// 							</h2>

// 							<p className="mt-5 text-base leading-8 text-stone-600">
// 								Organizaciona struktura Instituta omogućava povezivanje
// 								istraživačkih timova, laboratorijskih kapaciteta i stručnih
// 								službi u okviru zajedničkih naučnih i razvojnih aktivnosti.
// 							</p>

// 							<p className="mt-4 text-base leading-8 text-stone-600">
// 								Svaka organizaciona jedinica ima jasno definisane oblasti rada,
// 								odgovorna lica i zaposlene koji učestvuju u projektima,
// 								ispitivanjima i saradnji sa privredom.
// 							</p>
// 						</div>

// 						<div className="overflow-hidden bg-white border shadow-sm rounded-2xl border-stone-200">
// 							<Image
// 								src={slika}
// 								alt="Zaposleni i organizacione jedinice ITNMS-a"
// 								className="object-cover w-full brightness-120 aspect-4/3"
// 							/>
// 						</div>
// 					</div>
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

// type OrganizationCardProps = {
// 	title: string;
// 	description: string;
// 	href: string;
// 	icon: React.ElementType;
// };

// function OrganizationCard({
// 	title,
// 	description,
// 	href,
// 	icon: Icon,
// }: OrganizationCardProps) {
// 	return (
// 		<a
// 			href={href}
// 			className="group flex min-h-[280px] flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
// 		>
// 			<div className="flex items-center justify-center transition h-14 w-14 rounded-xl bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
// 				<Icon
// 					className="h-7 w-7"
// 					aria-hidden="true"
// 				/>
// 			</div>

// 			<h2 className="text-2xl font-semibold tracking-tight transition mt-7 text-stone-900 group-hover:text-institute-800">
// 				{title}
// 			</h2>

// 			<p className="max-w-xl mt-4 text-base leading-7 text-stone-600">
// 				{description}
// 			</p>

// 			<span className="inline-flex items-center gap-2 pt-8 mt-auto text-sm font-semibold text-institute-700">
// 				Otvorite stranicu
// 				<ArrowRight
// 					className="w-4 h-4 transition-transform group-hover:translate-x-1"
// 					aria-hidden="true"
// 				/>
// 			</span>
// 		</a>
// 	);
// }

// import { ArrowRight, Download, Network } from "lucide-react";
// //Podsetnik: pitaj Sonju za organizacionu semu
// import { Container } from "@/app/components/Container";
// import { PageHeader } from "@/app/components/PageHeder";
// import { Section } from "@/app/components/Section";

// type OrgNode = {
// 	title: string;
// 	subtitle?: string;
// };

// const upravni: OrgNode[] = [
// 	{
// 		title: "Upravni odbor",
// 	},
// ];
// const leadership: OrgNode[] = [
// 	{
// 		title: "Direktor Instituta",
// 		subtitle: "Ime i prezime",
// 	},
// ];

// const sectors: OrgNode[] = [
// 	{
// 		title: "Sektor za pripremu mineralnih sirovina",
// 		subtitle: "Rukovodilac sektora",
// 	},
// 	{
// 		title: "Sektor za metalurgiju",
// 		subtitle: "Rukovodilac sektora",
// 	},
// 	{
// 		title: "Sektor za materijale i hemijsko inženjerstvo",
// 		subtitle: "Rukovodilac sektora",
// 	},
// 	{
// 		title: "Sektor za zaštitu životne sredine",
// 		subtitle: "Rukovodilac sektora",
// 	},
// ];

// const supportUnits: OrgNode[] = [
// 	{
// 		title: "Služba za pravne i opšte poslove",
// 	},
// 	{
// 		title: "Finansijsko-računovodstvena služba",
// 	},
// 	{
// 		title: "Služba za kvalitet",
// 	},
// ];

// export default function OrganizationChartPage() {
// 	return (
// 		<>
// 			<PageHeader
// 				title="Organizaciona šema"
// 				description="Grafički prikaz rukovodstva, sektora, stručnih službi i drugih organizacionih jedinica Instituta."
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
// 						label: "Organizaciona šema",
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
// 								Pregled organizacionih nivoa
// 							</h2>

// 							<p className="mt-4 text-base leading-7 text-stone-600">
// 								Šema prikazuje odnos između rukovodstva, naučnoistraživačkih
// 								sektora i stručnih službi Instituta.
// 							</p>
// 						</div>

// 						<a
// 							href="/documents/organizaciona-sema-itnms.pdf"
// 							download
// 							className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition border rounded-md shrink-0 border-institute-700 text-institute-800 hover:bg-institute-50"
// 						>
// 							<Download
// 								className="w-4 h-4"
// 								aria-hidden="true"
// 							/>
// 							Preuzmite PDF
// 						</a>
// 					</div>

// 					<div className="pb-4 mt-12 overflow-x-auto">
// 						<div className="min-w-[980px] rounded-2xl border border-stone-200 bg-stone-50 p-8 md:p-10">
// 							<div className="flex justify-center">
// 								{upravni.map((node) => (
// 									<OrganizationNode
// 										key={node.title}
// 										title={node.title}
// 										subtitle={node.subtitle}
// 										variant="primary"
// 									/>
// 								))}
// 							</div>
// 							<div
// 								className="w-px h-12 mx-auto bg-stone-300"
// 								aria-hidden="true"
// 							/>
// 							<div className="flex justify-center">
// 								{leadership.map((node) => (
// 									<OrganizationNode
// 										key={node.title}
// 										title={node.title}
// 										subtitle={node.subtitle}
// 										variant="primary"
// 									/>
// 								))}
// 							</div>

// 							<div
// 								className="w-px h-12 mx-auto bg-stone-300"
// 								aria-hidden="true"
// 							/>

// 							<div className="relative">
// 								<div
// 									className="absolute left-[12.5%] right-[12.5%] top-0 h-px bg-stone-300"
// 									aria-hidden="true"
// 								/>

// 								<div className="grid grid-cols-4 gap-5 pt-8">
// 									{sectors.map((sector) => (
// 										<div
// 											key={sector.title}
// 											className="relative"
// 										>
// 											<div
// 												className="absolute w-px h-8 -translate-x-1/2 -top-8 left-1/2 bg-stone-300"
// 												aria-hidden="true"
// 											/>

// 											<OrganizationNode
// 												title={sector.title}
// 												subtitle={sector.subtitle}
// 											/>
// 										</div>
// 									))}
// 								</div>
// 							</div>

// 							<div
// 								className="w-px h-10 mx-auto mt-10 bg-stone-300"
// 								aria-hidden="true"
// 							/>

// 							<div className="relative">
// 								<div
// 									className="absolute left-[16.5%] right-[16.5%] top-0 h-px bg-stone-300"
// 									aria-hidden="true"
// 								/>

// 								<div className="grid grid-cols-3 gap-6 pt-8">
// 									{supportUnits.map((unit) => (
// 										<div
// 											key={unit.title}
// 											className="relative"
// 										>
// 											<div
// 												className="absolute w-px h-8 -translate-x-1/2 -top-8 left-1/2 bg-stone-300"
// 												aria-hidden="true"
// 											/>

// 											<OrganizationNode
// 												title={unit.title}
// 												subtitle={unit.subtitle}
// 												variant="support"
// 											/>
// 										</div>
// 									))}
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<p className="mt-4 text-sm leading-6 text-stone-500">
// 						Na manjim ekranima šema se može pomerati horizontalno. Nazive,
// 						redosled i odnose jedinica zameni zvaničnom organizacionom šemom.
// 					</p>
// 				</Container>
// 			</Section>

// 			<Section background="institute">
// 				<Container>
// 					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
// 						<div>
// 							<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
// 								<Network
// 									className="w-6 h-6"
// 									aria-hidden="true"
// 								/>
// 							</div>

// 							<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
// 								Detaljan pregled organizacionih jedinica
// 							</h2>

// 							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
// 								Pogledajte oblasti rada, rukovodioce, zaposlene i povezane
// 								laboratorije svake organizacione jedinice.
// 							</p>
// 						</div>

// 						<a
// 							href="/o-institutu/organizacija/organizacione-jedinice"
// 							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
// 						>
// 							Organizacione jedinice
// 							<ArrowRight
// 								className="w-4 h-4"
// 								aria-hidden="true"
// 							/>
// 						</a>
// 					</div>
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

// type OrganizationNodeProps = {
// 	title: string;
// 	subtitle?: string;
// 	variant?: "primary" | "default" | "support";
// };

// function OrganizationNode({
// 	title,
// 	subtitle,
// 	variant = "default",
// }: OrganizationNodeProps) {
// 	const variantClasses = {
// 		primary: "border-institute-800 bg-institute-800 text-white shadow-md",
// 		default: "border-institute-200 bg-white text-stone-900 shadow-sm",
// 		support: "border-mineral-200 bg-mineral-50 text-stone-900 shadow-sm",
// 	};

// 	return (
// 		<div
// 			className={`flex min-h-[120px] flex-col items-center justify-center rounded-xl border p-5 text-center ${variantClasses[variant]}`}
// 		>
// 			<h3 className="text-sm font-semibold leading-6">{title}</h3>

// 			{subtitle && (
// 				<p
// 					className={`mt-2 text-xs leading-5 ${
// 						variant === "primary" ? "text-institute-100" : "text-stone-500"
// 					}`}
// 				>
// 					{subtitle}
// 				</p>
// 			)}
// 		</div>
// 	);
// }

"use client";

import {
	Building2,
	ChevronDown,
	ChevronUp,
	ExternalLink,
	FlaskConical,
	Landmark,
	UserRound,
	UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type LeadershipCardProps = {
	id: string;
	title: string;
	name?: string;
	dr?: string;
	description?: string;
	href?: string;

	scientificTitle?: string;
	email?: string;
	phone?: string;
	mobile?: string;
	address?: string;
};

export default function OrganizationPage() {
	return (
		<>
			<PageHeader
				title="Organizaciona šema"
				description="Organizaciona struktura Instituta za tehnologiju nuklearnih i drugih mineralnih sirovina."
				breadcrumbs={[
					{
						label: "O Institutu",
						href: "/o-institutu",
					},
					{
						label: "Organizaciona šema",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="pt-2 pb-10 overflow-x-auto">
						<div className="mx-auto min-w-262.5 max-w-7xl">
							{/* UPRAVNI ODBOR */}

							<div className="flex justify-center">
								<OrganizationLink
									title="Upravni odbor"
									podnaslov=""
									href="/o-institutu/upravni-odbor"
									variant="primary"
								/>
							</div>

							<VerticalLine />

							{/* DIREKTOR */}

							<div className="flex justify-center">
								<LeadershipCard
									id="direktor"
									title="Direktor Instituta"
									name=""
									description="Ovde može da stoji kratak opis direktora, naučno zvanje, oblast rada i druge relevantne informacije."
									href="/istrazivaci-i-zaposleni/rukovodstvo"
								/>
							</div>

							<VerticalLine height="h-10" />

							{/* GLAVNA HORIZONTALNA GRANA */}

							<div className="w-2/3 h-px mx-auto bg-stone-300" />

							<div className="grid grid-cols-3 gap-16">
								<div className="flex justify-center">
									<VerticalLine />
								</div>

								<div className="flex justify-center">
									<VerticalLine />
								</div>

								<div className="flex justify-center">
									<VerticalLine />
								</div>
							</div>

							{/* TRI POMOĆNIKA */}

							<div className="grid items-start grid-cols-3 gap-8">
								{/* PRVA GRANA */}

								<div>
									<LeadershipCard
										id="pomocnik-mineralne"
										title="Pomoćnik direktora"
										name="Za pripremu mineralnih sirovina"
										description="Podaci o pomoćniku direktora, naučno zvanje, oblast rada i kontakt."
										href="/istrazivaci-i-zaposleni/rukovodstvo"
									/>

									<VerticalLine />

									<OrganizationLink
										title="Sektor "
										podnaslov="Za pripremu mineralnih sirovina i neorgansku tehnologiju"
										href="/organizacione-jedinice/sektor-priprema-mineralnih-sirovina"
										variant="sector"
									/>

									<VerticalLine />

									<div className="w-4/5 h-px mx-auto bg-stone-300" />

									<div className="grid grid-cols-3 gap-2">
										<div className="flex justify-center">
											<VerticalLine />
										</div>

										<div className="flex justify-center">
											<VerticalLine />
										</div>

										<div className="flex justify-center">
											<VerticalLine />
										</div>
									</div>

									<div className="grid grid-cols-3 gap-2">
										<OrganizationLink
											title="Centar "
											podnaslov="Za pripremu mineralnih sirovina"
											href="/organizacione-jedinice/centar-priprema-mineralnih-sirovina"
										/>

										<OrganizationLink
											title="Centar "
											podnaslov="Za razvoj novih materijala"
											href="/organizacione-jedinice/centar-razvoj-novih-materijala"
										/>

										<OrganizationLink
											title="Centar"
											podnaslov="Za neorganske tehnologije"
											href="centri/centar-neorganske-tehnologije"
										/>
									</div>
								</div>

								{/* DRUGA GRANA */}

								<div>
									<LeadershipCard
										id="pomocnik-metalurgija"
										title="Pomoćnik direktora"
										name="Branislav Marković"
										dr="dr"
										scientificTitle="Naučni savetnik"
										description="Pomoćnik direktora za metalurške tehnologije i zaštitu životne sredine."
										email="b.markovic@itnms.ac.rs"
										phone="+381 11 3691 586"
										mobile="+381 63 348 520"
										address="Franše d’Eperea 86, 11000 Beograd"
										href="/istrazivaci-i-zaposleni/istrazivaci/branislav-markovic"
									/>

									<VerticalLine />

									<div className="w-3/4 h-px mx-auto bg-stone-300" />

									<div className="grid grid-cols-2">
										<div className="flex justify-center">
											<VerticalLine />
										</div>

										<div className="flex justify-center">
											<VerticalLine />
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
										<OrganizationLink
											title="Centar"
											podnaslov="Za metalurške tehnologije"
											href="centri/centar-metalurske-tehnologije"
										/>

										<OrganizationLink
											title="Centar "
											podnaslov="Za zaštitu životne sredine"
											href="/organizacione-jedinice/centar-zastita-zivotne-sredine"
										/>
									</div>

									{/* SPAJANJE DVA CENTRA */}

									<div className="grid grid-cols-2">
										<div className="flex justify-center">
											<VerticalLine />
										</div>

										<div className="flex justify-center">
											<VerticalLine />
										</div>
									</div>

									<div className="w-1/2 h-px mx-auto bg-stone-300" />

									<VerticalLine />

									<div className="mx-auto max-w-60">
										<OrganizationLink
											title="Centar "
											podnaslov="Za proizvodnju"
											href="centri/centar-za-proizvodnju"
											variant="important"
										/>
									</div>
								</div>

								{/* TREĆA GRANA */}

								<div>
									<LeadershipCard
										id="pomocnik-nauka"
										title="Pomoćnik direktora"
										name="Za nauku, razvoj i međunarodnu saradnju"
										description="Podaci o pomoćniku direktora, naučno zvanje, oblast rada i međunarodna saradnja."
										href="/istrazivaci-i-zaposleni/rukovodstvo"
									/>

									<VerticalLine />

									<OrganizationLink
										title="Centralna laboratorija za ispitivanja"
										podnaslov=""
										href="/organizacione-jedinice/centralna-laboratorija"
										variant="sector"
									/>
								</div>
							</div>

							{/* ZAJEDNIČKA GRANA ZA SLUŽBE */}

							<div className="mt-16">
								<div className="grid grid-cols-3">
									<div className="flex justify-center">
										<div className="w-px h-8 bg-stone-300" />
									</div>

									<div className="flex justify-center">
										<div className="w-px h-8 bg-stone-300" />
									</div>

									<div className="flex justify-center">
										<div className="w-px h-8 bg-stone-300" />
									</div>
								</div>

								<div className="w-2/3 h-px mx-auto bg-stone-300" />

								<VerticalLine />

								<p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
									Zajedničke službe Instituta
								</p>

								<div className="grid grid-cols-3 gap-6">
									<OrganizationLink
										title="Služba "
										podnaslov="Za ekonomske i finansijske poslove"
										href="/organizacione-jedinice/ekonomski-finansijski-poslovi"
										variant="service"
									/>

									<OrganizationLink
										title="Služba"
										podnaslov="Za administrativne, opšte i poslove tehničkog održavanja"
										href="/organizacione-jedinice/administrativni-poslovi"
										variant="service"
									/>

									<OrganizationLink
										title="Služba"
										podnaslov="Za projektovane informacione sisteme i tehničku arhivu"
										href="/organizacione-jedinice/sluzba-3"
										variant="service"
									/>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

function VerticalLine({ height = "h-7" }: { height?: string }) {
	return (
		<div
			className={`mx-auto w-px ${height} bg-stone-300`}
			aria-hidden="true"
		/>
	);
}

type OrganizationLinkProps = {
	title: string;
	podnaslov: string;
	href: string;
	variant?: "default" | "primary" | "sector" | "important" | "service";
};

function OrganizationLink({
	title,
	podnaslov,
	href,
	variant = "default",
}: OrganizationLinkProps) {
	const styles = {
		default:
			"border-stone-200 bg-white text-stone-800 hover:border-institute-400 hover:bg-institute-50",

		primary:
			"border-institute-800 bg-institute-800 text-white hover:bg-institute-900",

		sector:
			"border-mineral-300 bg-mineral-50 text-stone-900 hover:border-mineral-500",

		important:
			"border-institute-300 bg-institute-50 text-institute-900 hover:bg-institute-100",

		service:
			"border-stone-300 bg-stone-50 text-stone-800 hover:border-institute-300 hover:bg-white",
	};

	return (
		<Link
			className={`flex-col rounded-xl border p-4 text-center text-sm font-semibold leading-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${styles[variant]} group flex min-h-24 items-center justify-center`}
			href={href}
		>
			<div className={`flex w-full items-center justify-center`}>
				<div className="ml-auto">{title}</div>

				{variant == "primary" ? (
					""
				) : (
					<ExternalLink className=" h-3.5 w-3.5 shrink-0 opacity-0 transition ml-auto group-hover:opacity-60" />
				)}
			</div>
			<span className="text-xs font-normal text-stone-600">{podnaslov}</span>
		</Link>
	);
}

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

function LeadershipCard({
	id,
	title,
	name,
	description,
	href,
	dr,
	scientificTitle,
	email,
	phone,
	mobile,
	address,
}: LeadershipCardProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full">
			<button
				type="button"
				onClick={() => setOpen((current) => !current)}
				aria-expanded={open}
				aria-controls={`${id}-details`}
				className={`w-full rounded-2xl border bg-white p-5 text-left shadow-sm transition ${
					open
						? "border-institute-400 shadow-md"
						: "border-stone-200 hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
				}`}
			>
				<div className="flex items-start gap-4">
					<div className="flex items-center justify-center h-11 w-11 shrink-0 rounded-xl bg-institute-50 text-institute-800">
						<UserRound className="w-5 h-5" />
					</div>

					<div className="flex-1 min-w-0">
						<p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mineral-700">
							Rukovodstvo
						</p>

						<h2 className="mt-2 text-base font-semibold leading-6 text-stone-800">
							{title}
						</h2>

						{name && <p className="mt-2 text-sm text-stone-600">{name}</p>}
					</div>

					{open ? (
						<ChevronUp className="w-5 h-5 shrink-0 text-stone-400" />
					) : (
						<ChevronDown className="w-5 h-5 shrink-0 text-stone-400" />
					)}
				</div>
			</button>

			{open && (
				<div
					id={`${id}-details`}
					className="p-5 mt-2 border rounded-xl border-stone-200 bg-stone-50"
				>
					{name && (
						<p className="font-semibold text-stone-900">
							<span className="text-stone-400">{dr} </span>
							{name}
						</p>
					)}

					{scientificTitle && (
						<p className="mt-1 text-sm font-medium text-institute-700">
							{scientificTitle}
						</p>
					)}

					{description && (
						<p className="mt-3 text-sm leading-6 text-stone-600">
							{description}
						</p>
					)}

					<div className="mt-4 space-y-2 text-sm text-stone-600">
						{email && (
							<a
								href={`mailto:${email}`}
								className="block hover:text-institute-800"
							>
								{email}
							</a>
						)}

						{phone && (
							<a
								href={`tel:${phone.replace(/\s/g, "")}`}
								className="block hover:text-institute-800"
							>
								Tel: {phone}
							</a>
						)}

						{mobile && (
							<a
								href={`tel:${mobile.replace(/\s/g, "")}`}
								className="block hover:text-institute-800"
							>
								Mob: {mobile}
							</a>
						)}

						{address && <p>{address}</p>}
					</div>

					{href && (
						<Link
							href={href}
							className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-institute-700 hover:text-institute-900"
						>
							Više informacija
							<ExternalLink className="w-4 h-4" />
						</Link>
					)}
				</div>
			)}
		</div>
	);
}
