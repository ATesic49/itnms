import {
	BadgeCheck,
	CalendarDays,
	Download,
	FileCheck2,
	FileText,
	Landmark,
} from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
//Podsetnik: dodaj kontent
type CertificateDocument = {
	title: string;
	href: string;
	fileType?: string;
	fileSize?: string;
};

type Certificate = {
	id: string;
	title: string;
	standard?: string;
	certificateNumber?: string;
	issuedBy: string;
	validFrom?: string;
	validUntil?: string;
	status: "Važeći" | "Istekao" | "Bez roka važenja";
	description: string;
	documents: CertificateDocument[];
};

const certificates: Certificate[] = [
	{
		id: "sertifikat-iso-9001",
		title: "Sertifikat sistema menadžmenta kvalitetom",
		standard: "SRPS ISO 9001",
		certificateNumber: "QMS-0000",
		issuedBy: "Naziv sertifikacionog tela",
		validFrom: "1. januar 2025.",
		validUntil: "31. decembar 2027.",
		status: "Važeći",
		description:
			"Sertifikat potvrđuje da je sistem menadžmenta kvalitetom Instituta uspostavljen i da se primenjuje u skladu sa zahtevima navedenog standarda i definisanim obimom sertifikacije.",
		documents: [
			{
				title: "Sertifikat sistema menadžmenta kvalitetom",
				href: "/documents/sertifikati/sertifikat-iso-9001.pdf",
				fileType: "PDF",
				fileSize: "1,1 MB",
			},
		],
	},
	{
		id: "sertifikat-drugi",
		title: "Naziv sertifikata",
		standard: "Naziv standarda ili oblasti",
		certificateNumber: "CERT-0000",
		issuedBy: "Naziv izdavaoca",
		validFrom: "Datum izdavanja",
		validUntil: "Datum isteka",
		status: "Važeći",
		description:
			"Kratak opis sertifikata, oblasti na koju se odnosi i njegovog značaja za rad Instituta.",
		documents: [
			{
				title: "Dokument sertifikata",
				href: "/documents/sertifikati/drugi-sertifikat.pdf",
				fileType: "PDF",
			},
		],
	},
];

export default function CertificatesPage() {
	return (
		<>
			<PageHeader
				title="Sertifikati"
				description="Pregled sertifikata, potvrda, perioda važenja i zvaničnih dokumenata Instituta."
				breadcrumbs={[
					{
						label: "Kvalitet i akreditacije",
						href: "/kvalitet-i-akreditacije",
					},
					{
						label: "Sertifikati",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Potvrde sistema rada
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Sertifikati Instituta
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Na ovoj stranici prikazani su sertifikati i druge zvanične potvrde
							koje se odnose na sistem upravljanja, stručne kapacitete i oblasti
							rada Instituta.
						</p>
					</div>

					{certificates.length > 0 ? (
						<div className="grid gap-6 mt-12 xl:grid-cols-2">
							{certificates.map((certificate) => (
								<CertificateCard
									key={certificate.id}
									certificate={certificate}
								/>
							))}
						</div>
					) : (
						<EmptyCertificatesState />
					)}
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<div>
							<div className="flex items-center justify-center h-14 w-14 rounded-xl bg-institute-50 text-institute-800">
								<BadgeCheck
									className="h-7 w-7"
									aria-hidden="true"
								/>
							</div>

							<h2 className="mt-6 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Razlika između akreditacije i sertifikacije
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								Sertifikacija uglavnom potvrđuje usklađenost sistema, proizvoda
								ili procesa sa određenim zahtevima standarda.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Akreditacija potvrđuje kompetentnost organizacije za obavljanje
								konkretnih aktivnosti navedenih u zvaničnom obimu akreditacije.
							</p>
						</div>

						<div className="grid gap-5 sm:grid-cols-2">
							<ComparisonCard
								title="Sertifikacija"
								items={[
									"Odnosi se na usklađenost sa standardom",
									"Može obuhvatiti sistem upravljanja",
									"Potvrđuje primenu definisanih zahteva",
								]}
							/>

							<ComparisonCard
								title="Akreditacija"
								items={[
									"Potvrđuje tehničku kompetentnost",
									"Odnosi se na definisan obim aktivnosti",
									"Povezana je sa konkretnim metodama i ispitivanjima",
								]}
							/>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Pogledajte i važeće akreditacije
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Akreditacije i obim akreditacije sadrže podatke o potvrđenoj
								kompetentnosti za konkretna ispitivanja i metode.
							</p>
						</div>

						<a
							href="/kvalitet-i-akreditacije/akreditacije"
							className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Pogledajte akreditacije
						</a>
					</div>
				</Container>
			</Section>
		</>
	);
}

type CertificateCardProps = {
	certificate: Certificate;
};

function CertificateCard({ certificate }: CertificateCardProps) {
	return (
		<article
			id={certificate.id}
			className="overflow-hidden transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md"
		>
			<div className="p-6 border-b border-stone-200 md:p-8">
				<div className="flex flex-wrap items-center gap-3">
					<StatusBadge status={certificate.status} />

					{certificate.standard && (
						<span className="px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700">
							{certificate.standard}
						</span>
					)}
				</div>

				<div className="flex items-center justify-center mt-6 h-13 w-13 rounded-xl bg-institute-50 text-institute-800">
					<FileCheck2
						className="w-6 h-6"
						aria-hidden="true"
					/>
				</div>

				<h2 className="mt-5 text-2xl font-semibold tracking-tight text-stone-900">
					{certificate.title}
				</h2>

				<p className="mt-4 text-sm leading-7 text-stone-600">
					{certificate.description}
				</p>
			</div>

			<div className="p-6 md:p-8">
				<div className="grid gap-5 sm:grid-cols-2">
					{certificate.certificateNumber && (
						<CertificateInfo
							icon={FileText}
							label="Broj sertifikata"
						>
							{certificate.certificateNumber}
						</CertificateInfo>
					)}

					<CertificateInfo
						icon={Landmark}
						label="Izdavalac"
					>
						{certificate.issuedBy}
					</CertificateInfo>

					{(certificate.validFrom || certificate.validUntil) && (
						<CertificateInfo
							icon={CalendarDays}
							label="Period važenja"
						>
							{certificate.validFrom && (
								<span className="block">{certificate.validFrom}</span>
							)}

							{certificate.validUntil && (
								<span className="block">{certificate.validUntil}</span>
							)}
						</CertificateInfo>
					)}
				</div>

				<div className="pt-6 border-t mt-7 border-stone-200">
					<h3 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
						Dokumenta
					</h3>

					<div className="mt-4 space-y-3">
						{certificate.documents.map((document) => (
							<CertificateDocumentLink
								key={document.href}
								document={document}
							/>
						))}
					</div>
				</div>
			</div>
		</article>
	);
}

type StatusBadgeProps = {
	status: Certificate["status"];
};

function StatusBadge({ status }: StatusBadgeProps) {
	const styles = {
		Važeći: "bg-mineral-100 text-mineral-800",
		Istekao: "bg-stone-200 text-stone-700",
		"Bez roka važenja": "bg-institute-100 text-institute-800",
	};

	return (
		<span
			className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
		>
			{status}
		</span>
	);
}

type CertificateInfoProps = {
	icon: React.ElementType;
	label: string;
	children: React.ReactNode;
};

function CertificateInfo({
	icon: Icon,
	label,
	children,
}: CertificateInfoProps) {
	return (
		<div className="p-4 rounded-xl bg-stone-50">
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

type CertificateDocumentLinkProps = {
	document: CertificateDocument;
};

function CertificateDocumentLink({ document }: CertificateDocumentLinkProps) {
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

type ComparisonCardProps = {
	title: string;
	items: string[];
};

function ComparisonCard({ title, items }: ComparisonCardProps) {
	return (
		<article className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200">
			<h3 className="text-xl font-semibold text-stone-900">{title}</h3>

			<ul className="mt-5 space-y-3">
				{items.map((item) => (
					<li
						key={item}
						className="flex items-start gap-3 text-sm leading-6 text-stone-600"
					>
						<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
						{item}
					</li>
				))}
			</ul>
		</article>
	);
}

function EmptyCertificatesState() {
	return (
		<div className="px-6 mt-12 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<FileCheck2
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Trenutno nema objavljenih sertifikata
			</h2>

			<p className="max-w-lg mx-auto mt-3 text-sm leading-6 text-stone-600">
				Sertifikati i prateća dokumentacija biće prikazani nakon objavljivanja.
			</p>
		</div>
	);
}
