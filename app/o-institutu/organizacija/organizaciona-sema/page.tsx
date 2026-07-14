import { ArrowRight, Download, Network } from "lucide-react";
//Podsetnik: pitaj Sonju za organizacionu semu
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type OrgNode = {
	title: string;
	subtitle?: string;
};

const leadership: OrgNode[] = [
	{
		title: "Direktor Instituta",
		subtitle: "Ime i prezime",
	},
];

const sectors: OrgNode[] = [
	{
		title: "Sektor za pripremu mineralnih sirovina",
		subtitle: "Rukovodilac sektora",
	},
	{
		title: "Sektor za metalurgiju",
		subtitle: "Rukovodilac sektora",
	},
	{
		title: "Sektor za materijale i hemijsko inženjerstvo",
		subtitle: "Rukovodilac sektora",
	},
	{
		title: "Sektor za zaštitu životne sredine",
		subtitle: "Rukovodilac sektora",
	},
];

const supportUnits: OrgNode[] = [
	{
		title: "Služba za pravne i opšte poslove",
	},
	{
		title: "Finansijsko-računovodstvena služba",
	},
	{
		title: "Služba za kvalitet",
	},
];

export default function OrganizationChartPage() {
	return (
		<>
			<PageHeader
				title="Organizaciona šema"
				description="Grafički prikaz rukovodstva, sektora, stručnih službi i drugih organizacionih jedinica Instituta."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "Organizacija",
						href: "/o-institutu/organizacija",
					},
					{
						label: "Organizaciona šema",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Struktura Instituta
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Pregled organizacionih nivoa
							</h2>

							<p className="mt-4 text-base leading-7 text-stone-600">
								Šema prikazuje odnos između rukovodstva, naučnoistraživačkih
								sektora i stručnih službi Instituta.
							</p>
						</div>

						<a
							href="/documents/organizaciona-sema-itnms.pdf"
							download
							className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition border rounded-md shrink-0 border-institute-700 text-institute-800 hover:bg-institute-50"
						>
							<Download
								className="w-4 h-4"
								aria-hidden="true"
							/>
							Preuzmite PDF
						</a>
					</div>

					<div className="pb-4 mt-12 overflow-x-auto">
						<div className="min-w-[980px] rounded-2xl border border-stone-200 bg-stone-50 p-8 md:p-10">
							<div className="flex justify-center">
								{leadership.map((node) => (
									<OrganizationNode
										key={node.title}
										title={node.title}
										subtitle={node.subtitle}
										variant="primary"
									/>
								))}
							</div>

							<div
								className="w-px h-12 mx-auto bg-stone-300"
								aria-hidden="true"
							/>

							<div className="relative">
								<div
									className="absolute left-[12.5%] right-[12.5%] top-0 h-px bg-stone-300"
									aria-hidden="true"
								/>

								<div className="grid grid-cols-4 gap-5 pt-8">
									{sectors.map((sector) => (
										<div
											key={sector.title}
											className="relative"
										>
											<div
												className="absolute w-px h-8 -translate-x-1/2 -top-8 left-1/2 bg-stone-300"
												aria-hidden="true"
											/>

											<OrganizationNode
												title={sector.title}
												subtitle={sector.subtitle}
											/>
										</div>
									))}
								</div>
							</div>

							<div
								className="w-px h-10 mx-auto mt-10 bg-stone-300"
								aria-hidden="true"
							/>

							<div className="relative">
								<div
									className="absolute left-[16.5%] right-[16.5%] top-0 h-px bg-stone-300"
									aria-hidden="true"
								/>

								<div className="grid grid-cols-3 gap-6 pt-8">
									{supportUnits.map((unit) => (
										<div
											key={unit.title}
											className="relative"
										>
											<div
												className="absolute w-px h-8 -translate-x-1/2 -top-8 left-1/2 bg-stone-300"
												aria-hidden="true"
											/>

											<OrganizationNode
												title={unit.title}
												subtitle={unit.subtitle}
												variant="support"
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<p className="mt-4 text-sm leading-6 text-stone-500">
						Na manjim ekranima šema se može pomerati horizontalno. Nazive,
						redosled i odnose jedinica zameni zvaničnom organizacionom šemom.
					</p>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
								<Network
									className="w-6 h-6"
									aria-hidden="true"
								/>
							</div>

							<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Detaljan pregled organizacionih jedinica
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pogledajte oblasti rada, rukovodioce, zaposlene i povezane
								laboratorije svake organizacione jedinice.
							</p>
						</div>

						<a
							href="/o-institutu/organizacija/organizacione-jedinice"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Organizacione jedinice
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

type OrganizationNodeProps = {
	title: string;
	subtitle?: string;
	variant?: "primary" | "default" | "support";
};

function OrganizationNode({
	title,
	subtitle,
	variant = "default",
}: OrganizationNodeProps) {
	const variantClasses = {
		primary: "border-institute-800 bg-institute-800 text-white shadow-md",
		default: "border-institute-200 bg-white text-stone-900 shadow-sm",
		support: "border-mineral-200 bg-mineral-50 text-stone-900 shadow-sm",
	};

	return (
		<div
			className={`flex min-h-[120px] flex-col items-center justify-center rounded-xl border p-5 text-center ${variantClasses[variant]}`}
		>
			<h3 className="text-sm font-semibold leading-6">{title}</h3>

			{subtitle && (
				<p
					className={`mt-2 text-xs leading-5 ${
						variant === "primary" ? "text-institute-100" : "text-stone-500"
					}`}
				>
					{subtitle}
				</p>
			)}
		</div>
	);
}
