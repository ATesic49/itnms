"use client";

import {
	BriefcaseBusiness,
	CalendarClock,
	Download,
	FileText,
	Megaphone,
	Search,
	SlidersHorizontal,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type AnnouncementStatus = "Aktivan" | "Završen";

type AnnouncementDocument = {
	title: string;
	fileUrl: string;
	fileType: string;
	fileSize?: string;
};

type Announcement = {
	id: string;
	title: string;
	description: string;
	category: string;
	publicationDate: string;
	applicationDeadline?: string;
	year: number;
	status: AnnouncementStatus;
	referenceNumber?: string;
	documents: AnnouncementDocument[];
};

const announcements: Announcement[] = [
	{
		id: "konkurs-istrazivac-2026",
		title: "Konkurs za izbor istraživača saradnika",
		description:
			"Institut raspisuje konkurs za izbor jednog izvršioca u istraživačko zvanje istraživač saradnik, u skladu sa uslovima navedenim u tekstu konkursa.",
		category: "Zapošljavanje",
		publicationDate: "10. jul 2026.",
		applicationDeadline: "25. jul 2026.",
		year: 2026,
		status: "Aktivan",
		referenceNumber: "Broj: 000/2026",
		documents: [
			{
				title: "Tekst konkursa",
				fileUrl: "/documents/konkursi-i-oglasi/konkurs-istrazivac-2026.pdf",
				fileType: "PDF",
				fileSize: "620 KB",
			},
			{
				title: "Obrazac za prijavu",
				fileUrl: "/documents/konkursi-i-oglasi/obrazac-prijave-istrazivac.docx",
				fileType: "DOCX",
				fileSize: "84 KB",
			},
		],
	},
	{
		id: "oglas-strucni-saradnik",
		title: "Oglas za prijem stručnog saradnika",
		description:
			"Oglas za prijem zaposlenog na određeno vreme za potrebe realizacije stručnih i razvojnih aktivnosti Instituta.",
		category: "Zapošljavanje",
		publicationDate: "2. jun 2026.",
		applicationDeadline: "17. jun 2026.",
		year: 2026,
		status: "Završen",
		referenceNumber: "Broj: 000/2026",
		documents: [
			{
				title: "Tekst oglasa",
				fileUrl: "/documents/konkursi-i-oglasi/oglas-strucni-saradnik.pdf",
				fileType: "PDF",
				fileSize: "540 KB",
			},
			{
				title: "Odluka o izboru kandidata",
				fileUrl: "/documents/konkursi-i-oglasi/odluka-strucni-saradnik.pdf",
				fileType: "PDF",
				fileSize: "410 KB",
			},
		],
	},
	{
		id: "javni-poziv-saradnja",
		title: "Javni poziv za iskazivanje interesovanja za saradnju",
		description:
			"Poziv privrednim subjektima i drugim organizacijama za iskazivanje interesovanja za razvojnu i tehnološku saradnju.",
		category: "Javni poziv",
		publicationDate: "15. maj 2025.",
		applicationDeadline: "30. jun 2025.",
		year: 2025,
		status: "Završen",
		documents: [
			{
				title: "Tekst javnog poziva",
				fileUrl: "/documents/konkursi-i-oglasi/javni-poziv-saradnja.pdf",
				fileType: "PDF",
				fileSize: "760 KB",
			},
		],
	},
];

const years = [
	...new Set(announcements.map((announcement) => announcement.year)),
].sort((a, b) => b - a);

const categories = [
	...new Set(announcements.map((announcement) => announcement.category)),
].sort((a, b) => a.localeCompare(b, "sr"));

const statuses: AnnouncementStatus[] = ["Aktivan", "Završen"];

export default function CompetitionsAndAnnouncementsPage() {
	const [query, setQuery] = useState("");
	const [selectedYear, setSelectedYear] = useState("Sve");
	const [selectedCategory, setSelectedCategory] = useState("Sve");
	const [selectedStatus, setSelectedStatus] = useState("Svi");

	const filteredAnnouncements = useMemo(() => {
		const normalizedQuery = query.trim().toLocaleLowerCase("sr");

		return announcements.filter((announcement) => {
			const searchableText = [
				announcement.title,
				announcement.description,
				announcement.category,
				announcement.referenceNumber,
				announcement.publicationDate,
				announcement.applicationDeadline,
			]
				.filter(Boolean)
				.join(" ")
				.toLocaleLowerCase("sr");

			const matchesQuery = searchableText.includes(normalizedQuery);

			const matchesYear =
				selectedYear === "Sve" || announcement.year.toString() === selectedYear;

			const matchesCategory =
				selectedCategory === "Sve" ||
				announcement.category === selectedCategory;

			const matchesStatus =
				selectedStatus === "Svi" || announcement.status === selectedStatus;

			return matchesQuery && matchesYear && matchesCategory && matchesStatus;
		});
	}, [query, selectedYear, selectedCategory, selectedStatus]);

	const filtersActive =
		query !== "" ||
		selectedYear !== "Sve" ||
		selectedCategory !== "Sve" ||
		selectedStatus !== "Svi";

	function clearFilters() {
		setQuery("");
		setSelectedYear("Sve");
		setSelectedCategory("Sve");
		setSelectedStatus("Svi");
	}

	return (
		<>
			<PageHeader
				title="Konkursi i oglasi"
				description="Pregled aktuelnih i završenih konkursa, oglasa, javnih poziva i drugih obaveštenja Instituta."
				breadcrumbs={[
					{
						label: "Dokumenta",
						href: "/dokumenta",
					},
					{
						label: "Konkursi i oglasi",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Javna obaveštenja
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Aktuelni konkursi, oglasi i javni pozivi
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Pregledajte uslove, rokove za prijavu, potrebnu dokumentaciju i
							rezultate prethodno završenih postupaka.
						</p>
					</div>

					<div className="p-5 mt-10 border rounded-2xl border-stone-200 bg-stone-50 md:p-6">
						<div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
							<SlidersHorizontal
								className="w-4 h-4 text-institute-700"
								aria-hidden="true"
							/>
							Pretraga i filteri
						</div>

						<div className="mt-5 grid gap-4 xl:grid-cols-[1fr_170px_220px_180px_auto]">
							<label className="relative block">
								<span className="sr-only">Pretražite konkurse i oglase</span>

								<Search
									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
									aria-hidden="true"
								/>

								<input
									type="search"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
									placeholder="Naziv, opis ili broj objave"
									className="w-full py-3 pl-10 pr-4 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								/>
							</label>

							<select
								value={selectedYear}
								onChange={(event) => setSelectedYear(event.target.value)}
								className={selectClasses}
								aria-label="Godina objavljivanja"
							>
								<option value="Sve">Sve godine</option>

								{years.map((year) => (
									<option
										key={year}
										value={year}
									>
										{year}
									</option>
								))}
							</select>

							<select
								value={selectedCategory}
								onChange={(event) => setSelectedCategory(event.target.value)}
								className={selectClasses}
								aria-label="Vrsta objave"
							>
								<option value="Sve">Sve vrste objava</option>

								{categories.map((category) => (
									<option
										key={category}
										value={category}
									>
										{category}
									</option>
								))}
							</select>

							<select
								value={selectedStatus}
								onChange={(event) => setSelectedStatus(event.target.value)}
								className={selectClasses}
								aria-label="Status objave"
							>
								<option value="Svi">Svi statusi</option>

								{statuses.map((status) => (
									<option
										key={status}
										value={status}
									>
										{status}
									</option>
								))}
							</select>

							<button
								type="button"
								onClick={clearFilters}
								disabled={!filtersActive}
								className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition bg-white border rounded-md border-stone-300 text-stone-700 hover:border-institute-300 hover:text-institute-800 disabled:cursor-not-allowed disabled:opacity-40"
							>
								<X
									className="w-4 h-4"
									aria-hidden="true"
								/>
								Poništi
							</button>
						</div>
					</div>

					<div className="flex items-center justify-between gap-4 mt-8">
						<p className="text-sm text-stone-600">
							Prikazano{" "}
							<span className="font-semibold text-stone-900">
								{filteredAnnouncements.length}
							</span>{" "}
							objava
						</p>

						<p className="text-sm text-stone-500">
							Ukupno: {announcements.length}
						</p>
					</div>

					{filteredAnnouncements.length > 0 ? (
						<div className="mt-6 space-y-6">
							{filteredAnnouncements.map((announcement) => (
								<AnnouncementCard
									key={announcement.id}
									announcement={announcement}
								/>
							))}
						</div>
					) : (
						<EmptyAnnouncementsState onClear={clearFilters} />
					)}
				</Container>
			</Section>
		</>
	);
}

const selectClasses =
	"w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-institute-500 focus:ring-2 focus:ring-institute-100";

type AnnouncementCardProps = {
	announcement: Announcement;
};

function AnnouncementCard({ announcement }: AnnouncementCardProps) {
	return (
		<article
			id={announcement.id}
			className="overflow-hidden transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md"
		>
			<div className="grid lg:grid-cols-[1fr_280px]">
				<div className="p-6 md:p-8">
					<div className="flex flex-wrap items-center gap-3">
						<StatusBadge status={announcement.status} />

						<span className="px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700">
							{announcement.category}
						</span>

						{announcement.referenceNumber && (
							<span className="text-xs font-medium text-stone-500">
								{announcement.referenceNumber}
							</span>
						)}
					</div>

					<div className="flex items-center justify-center w-12 h-12 mt-6 rounded-xl bg-institute-50 text-institute-800">
						{announcement.category === "Zapošljavanje" ? (
							<BriefcaseBusiness
								className="w-6 h-6"
								aria-hidden="true"
							/>
						) : (
							<Megaphone
								className="w-6 h-6"
								aria-hidden="true"
							/>
						)}
					</div>

					<h2 className="mt-5 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
						{announcement.title}
					</h2>

					<p className="max-w-3xl mt-4 text-sm leading-7 text-stone-600 md:text-base">
						{announcement.description}
					</p>

					<div className="mt-7">
						<h3 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
							Dokumenta
						</h3>

						<div className="mt-4 space-y-3">
							{announcement.documents.map((document) => (
								<AnnouncementDocumentLink
									key={document.fileUrl}
									document={document}
								/>
							))}
						</div>
					</div>
				</div>

				<aside className="p-6 border-t border-stone-200 bg-stone-50 md:p-8 lg:border-l lg:border-t-0">
					<AnnouncementInfo
						label="Datum objavljivanja"
						value={announcement.publicationDate}
					/>

					<AnnouncementInfo
						label="Rok za prijavu"
						value={announcement.applicationDeadline ?? "Rok nije naveden"}
						emphasized={announcement.status === "Aktivan"}
					/>

					<AnnouncementInfo
						label="Status postupka"
						value={announcement.status}
					/>
				</aside>
			</div>
		</article>
	);
}

type StatusBadgeProps = {
	status: AnnouncementStatus;
};

function StatusBadge({ status }: StatusBadgeProps) {
	const styles: Record<AnnouncementStatus, string> = {
		Aktivan: "bg-mineral-100 text-mineral-800",
		Završen: "bg-stone-200 text-stone-700",
	};

	return (
		<span
			className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
		>
			{status}
		</span>
	);
}

type AnnouncementInfoProps = {
	label: string;
	value: string;
	emphasized?: boolean;
};

function AnnouncementInfo({
	label,
	value,
	emphasized = false,
}: AnnouncementInfoProps) {
	return (
		<div className="py-5 border-b border-stone-200 first:pt-0 last:border-b-0 last:pb-0">
			<div className="flex items-center gap-2">
				<CalendarClock
					className="w-4 h-4 text-mineral-700"
					aria-hidden="true"
				/>

				<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
					{label}
				</p>
			</div>

			<p
				className={`mt-2 text-sm font-medium leading-6 ${
					emphasized ? "text-institute-800" : "text-stone-800"
				}`}
			>
				{value}
			</p>
		</div>
	);
}

type AnnouncementDocumentLinkProps = {
	document: AnnouncementDocument;
};

function AnnouncementDocumentLink({ document }: AnnouncementDocumentLinkProps) {
	return (
		<a
			href={document.fileUrl}
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

				<p className="mt-1 text-xs text-stone-500">
					{[document.fileType, document.fileSize].filter(Boolean).join(" · ")}
				</p>
			</div>

			<Download
				className="w-5 h-5 transition shrink-0 text-stone-400 group-hover:text-institute-700"
				aria-hidden="true"
			/>
		</a>
	);
}

type EmptyAnnouncementsStateProps = {
	onClear: () => void;
};

function EmptyAnnouncementsState({ onClear }: EmptyAnnouncementsStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađenih objava
			</h2>

			<p className="max-w-lg mx-auto mt-3 text-sm leading-6 text-stone-600">
				Promenite pojam pretrage ili izaberite druge filtere.
			</p>

			<button
				type="button"
				onClick={onClear}
				className="mt-6 rounded-md border border-institute-700 px-5 py-2.5 text-sm font-semibold text-institute-800 transition hover:bg-institute-50"
			>
				Poništi sve filtere
			</button>
		</div>
	);
}
