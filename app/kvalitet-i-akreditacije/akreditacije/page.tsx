import {
	BadgeCheck,
	CalendarDays,
	Download,
	ExternalLink,
	FileText,
	Landmark,
} from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
//Podsetnik: dodaj akreditacije
import { Section } from "@/app/components/Section";

type AccreditationDocument = {
	title: string;
	href: string;
	fileType?: string;
	fileSize?: string;
};

type Accreditation = {
	id: string;
	title: string;
	accreditationNumber: string;
	issuedBy: string;
	standard: string;
	validFrom: string;
	validUntil: string;
	status: "Važeća" | "Istekla" | "U postupku obnove";
	description: string;
	scopeSummary: string[];
	registryUrl?: string;
	documents: AccreditationDocument[];
};

const accreditations: Accreditation[] = [
	{
		id: "laboratorija-za-ispitivanje",
		title: "Akreditacija laboratorije za ispitivanje",
		accreditationNumber: "01-000",
		issuedBy: "Akreditaciono telo Srbije",
		standard: "SRPS ISO/IEC 17025",
		validFrom: "1. januar 2025.",
		validUntil: "31. decembar 2028.",
		status: "Važeća",
		description:
			"Akreditacijom se potvrđuje kompetentnost laboratorije za obavljanje ispitivanja u oblastima definisanim zvaničnim obimom akreditacije.",
		scopeSummary: [
			"Hemijska ispitivanja",
			"Mineraloška ispitivanja",
			"Fizička ispitivanja",
			"Ispitivanje mineralnih sirovina i materijala",
		],
		registryUrl: "https://www.ats.rs",
		documents: [
			{
				title: "Sertifikat o akreditaciji",
				href: "/documents/akreditacije/sertifikat-01-000.pdf",
				fileType: "PDF",
				fileSize: "1,2 MB",
			},
			{
				title: "Obim akreditacije",
				href: "/documents/akreditacije/obim-akreditacije-01-000.pdf",
				fileType: "PDF",
				fileSize: "2,4 MB",
			},
		],
	},
	{
		id: "druga-akreditacija",
		title: "Naziv druge akreditacije",
		accreditationNumber: "00-000",
		issuedBy: "Naziv akreditacionog tela",
		standard: "Naziv standarda",
		validFrom: "Datum početka",
		validUntil: "Datum isteka",
		status: "U postupku obnove",
		description:
			"Kratak opis akreditacije, područja na koje se odnosi i značaja za rad Instituta.",
		scopeSummary: [
			"Oblast akreditacije",
			"Druga oblast",
			"Vrsta ispitivanja ili usluge",
		],
		documents: [
			{
				title: "Dokument o akreditaciji",
				href: "/documents/akreditacije/dokument-akreditacije.pdf",
				fileType: "PDF",
			},
		],
	},
];

export default function AccreditationsPage() {
	return (
		<>
			<PageHeader
				title="Akreditacije"
				description="Pregled važećih akreditacija, standarda, obima akreditacije i zvaničnih dokumenata Instituta."
				breadcrumbs={[
					{
						label: "Kvalitet i akreditacije",
						href: "/kvalitet-i-akreditacije",
					},
					{
						label: "Akreditacije",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
						<div>
							<div className="max-w-3xl">
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
									Potvrđena kompetentnost
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
									Važeće akreditacije Instituta
								</h2>

								<p className="mt-4 text-base leading-7 text-stone-600">
									Akreditacijom se zvanično potvrđuje da organizacija ispunjava
									zahteve odgovarajućeg standarda i da je kompetentna za
									aktivnosti navedene u obimu akreditacije.
								</p>
							</div>

							<div className="mt-10 space-y-8">
								{accreditations.map((accreditation) => (
									<AccreditationCard
										key={accreditation.id}
										accreditation={accreditation}
									/>
								))}
							</div>
						</div>

						<aside className="lg:sticky lg:top-32 lg:self-start">
							<div className="border rounded-2xl border-stone-200 bg-stone-50 p-7">
								<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
									<BadgeCheck
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</div>

								<h2 className="mt-5 text-xl font-semibold text-stone-900">
									Važna napomena
								</h2>

								<p className="mt-3 text-sm leading-6 text-stone-600">
									Akreditacija se odnosi isključivo na aktivnosti i metode koje
									su navedene u zvaničnom obimu akreditacije.
								</p>

								<p className="mt-3 text-sm leading-6 text-stone-600">
									Za proveru konkretne metode koristite stranicu „Akreditovane
									metode“ ili otvorite važeći obim akreditacije.
								</p>

								<a
									href="/kvalitet-i-akreditacije/akreditovane-metode"
									className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
								>
									Pregledajte metode
									<ExternalLink
										className="w-4 h-4"
										aria-hidden="true"
									/>
								</a>
							</div>
						</aside>
					</div>
				</Container>
			</Section>
		</>
	);
}

type AccreditationCardProps = {
	accreditation: Accreditation;
};

function AccreditationCard({ accreditation }: AccreditationCardProps) {
	return (
		<article
			id={accreditation.id}
			className="overflow-hidden bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200"
		>
			<div className="p-6 border-b border-stone-200 md:p-8">
				<div className="flex flex-wrap items-center gap-3">
					<StatusBadge status={accreditation.status} />

					<span className="px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700">
						{accreditation.standard}
					</span>
				</div>

				<h2 className="mt-5 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
					{accreditation.title}
				</h2>

				<p className="max-w-3xl mt-4 text-base leading-7 text-stone-600">
					{accreditation.description}
				</p>
			</div>

			<div className="grid lg:grid-cols-[1fr_300px]">
				<div className="p-6 md:p-8">
					<h3 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
						Sažetak obima akreditacije
					</h3>

					<ul className="grid gap-3 mt-5 sm:grid-cols-2">
						{accreditation.scopeSummary.map((item) => (
							<li
								key={item}
								className="flex items-start gap-3 text-sm leading-6 text-stone-700"
							>
								<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
								{item}
							</li>
						))}
					</ul>

					{accreditation.registryUrl && (
						<a
							href={accreditation.registryUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 text-sm font-semibold transition mt-7 text-institute-700 hover:text-institute-900"
						>
							Proverite u registru akreditacionog tela
							<ExternalLink
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					)}

					<div className="mt-8">
						<h3 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
							Dokumenta
						</h3>

						<div className="mt-4 space-y-3">
							{accreditation.documents.map((document) => (
								<DocumentLink
									key={document.href}
									document={document}
								/>
							))}
						</div>
					</div>
				</div>

				<aside className="p-6 border-t border-stone-200 bg-stone-50 md:p-8 lg:border-l lg:border-t-0">
					<InfoItem
						icon={FileText}
						label="Broj akreditacije"
					>
						{accreditation.accreditationNumber}
					</InfoItem>

					<InfoItem
						icon={Landmark}
						label="Akreditaciono telo"
					>
						{accreditation.issuedBy}
					</InfoItem>

					<InfoItem
						icon={CalendarDays}
						label="Period važenja"
					>
						<span className="block">{accreditation.validFrom}</span>
						<span className="block">{accreditation.validUntil}</span>
					</InfoItem>
				</aside>
			</div>
		</article>
	);
}

type StatusBadgeProps = {
	status: Accreditation["status"];
};

function StatusBadge({ status }: StatusBadgeProps) {
	const styles = {
		Važeća: "bg-mineral-100 text-mineral-800",
		Istekla: "bg-stone-200 text-stone-700",
		"U postupku obnove": "bg-amber-100 text-amber-800",
	};

	return (
		<span
			className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
		>
			{status}
		</span>
	);
}

type InfoItemProps = {
	icon: React.ElementType;
	label: string;
	children: React.ReactNode;
};

function InfoItem({ icon: Icon, label, children }: InfoItemProps) {
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

type DocumentLinkProps = {
	document: AccreditationDocument;
};

function DocumentLink({ document }: DocumentLinkProps) {
	return (
		<a
			href={document.href}
			target="_blank"
			rel="noreferrer"
			className="flex items-center gap-4 p-4 transition border group rounded-xl border-stone-200 bg-stone-50 hover:border-institute-300 hover:bg-institute-50"
		>
			<div className="flex items-center justify-center bg-white rounded-lg shadow-sm h-11 w-11 shrink-0 text-institute-800">
				<FileText
					className="w-5 h-5"
					aria-hidden="true"
				/>
			</div>

			<div className="flex-1 min-w-0">
				<p className="font-semibold transition text-stone-900 group-hover:text-institute-800">
					{document.title}
				</p>

				{(document.fileType || document.fileSize) && (
					<p className="mt-1 text-xs text-stone-500">
						{[document.fileType, document.fileSize].filter(Boolean).join(" · ")}
					</p>
				)}
			</div>

			<Download
				className="w-5 h-5 transition shrink-0 text-stone-400 group-hover:text-institute-700"
				aria-hidden="true"
			/>
		</a>
	);
}
