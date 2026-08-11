"use client";

import {
	CalendarDays,
	Download,
	FileCheck2,
	FileText,
	Search,
	SlidersHorizontal,
	UsersRound,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type CouncilDocumentType =
	| "Odluka"
	| "Zapisnik"
	| "Materijal za sednicu"
	| "Izveštaj"
	| "Drugo";

type CouncilDocument = {
	id: string;
	title: string;
	description?: string;
	documentType: CouncilDocumentType;
	sessionNumber?: string;
	sessionDate?: string;
	publicationDate: string;
	year: number;
	documentNumber?: string;
	fileUrl: string;
	fileType: string;
	fileSize?: string;
};

const councilDocuments: CouncilDocument[] = [
	{
		id: "odluka-izbor-zvanje-2026",
		title: "Odluka o izboru u istraživačko zvanje",
		description:
			"Odluka Naučnog veća doneta nakon razmatranja izveštaja komisije i ispunjenosti uslova za izbor u istraživačko zvanje.",
		documentType: "Odluka",
		sessionNumber: "12. sednica",
		sessionDate: "10. jun 2026.",
		publicationDate: "12. jun 2026.",
		year: 2026,
		documentNumber: "Broj: 000/2026",
		fileUrl: "/documents/naucno-vece/odluka-o-izboru-u-zvanje-2026.pdf",
		fileType: "PDF",
		fileSize: "520 KB",
	},
	{
		id: "zapisnik-sednica-11-2026",
		title: "Zapisnik sa 11. sednice Naučnog veća",
		description:
			"Zapisnik sa sednice Naučnog veća sa pregledom razmatranih tačaka dnevnog reda i donetih zaključaka.",
		documentType: "Zapisnik",
		sessionNumber: "11. sednica",
		sessionDate: "15. maj 2026.",
		publicationDate: "20. maj 2026.",
		year: 2026,
		fileUrl: "/documents/naucno-vece/zapisnik-11-sednica-2026.pdf",
		fileType: "PDF",
		fileSize: "840 KB",
	},
	{
		id: "materijal-sednica-10-2026",
		title: "Materijal za 10. sednicu Naučnog veća",
		description:
			"Materijal pripremljen za razmatranje tačaka dnevnog reda na sednici Naučnog veća.",
		documentType: "Materijal za sednicu",
		sessionNumber: "10. sednica",
		sessionDate: "8. april 2026.",
		publicationDate: "4. april 2026.",
		year: 2026,
		fileUrl: "/documents/naucno-vece/materijal-10-sednica-2026.pdf",
		fileType: "PDF",
		fileSize: "2,3 MB",
	},
	{
		id: "izvestaj-komisije-2025",
		title: "Izveštaj komisije za izbor u naučno zvanje",
		description:
			"Izveštaj komisije sa ocenom naučnoistraživačkog rada kandidata i predlogom za izbor u odgovarajuće zvanje.",
		documentType: "Izveštaj",
		publicationDate: "18. decembar 2025.",
		year: 2025,
		documentNumber: "Broj: 000/2025",
		fileUrl: "/documents/naucno-vece/izvestaj-komisije-2025.pdf",
		fileType: "PDF",
		fileSize: "1,4 MB",
	},
];

const years = [
	...new Set(councilDocuments.map((document) => document.year)),
].sort((a, b) => b - a);

const documentTypes: CouncilDocumentType[] = [
	"Odluka",
	"Zapisnik",
	"Materijal za sednicu",
	"Izveštaj",
	"Drugo",
];

export default function ScientificCouncilDocumentsPage() {
	const [query, setQuery] = useState("");
	const [selectedYear, setSelectedYear] = useState("Sve");
	const [selectedType, setSelectedType] = useState("Sve");

	const filteredDocuments = useMemo(() => {
		const normalizedQuery = query.trim().toLocaleLowerCase("sr");

		return councilDocuments.filter((document) => {
			const searchableText = [
				document.title,
				document.description,
				document.documentType,
				document.sessionNumber,
				document.sessionDate,
				document.publicationDate,
				document.documentNumber,
			]
				.filter(Boolean)
				.join(" ")
				.toLocaleLowerCase("sr");

			const matchesQuery = searchableText.includes(normalizedQuery);

			const matchesYear =
				selectedYear === "Sve" || document.year.toString() === selectedYear;

			const matchesType =
				selectedType === "Sve" || document.documentType === selectedType;

			return matchesQuery && matchesYear && matchesType;
		});
	}, [query, selectedYear, selectedType]);

	const filtersActive =
		query !== "" || selectedYear !== "Sve" || selectedType !== "Sve";

	function clearFilters() {
		setQuery("");
		setSelectedYear("Sve");
		setSelectedType("Sve");
	}

	return (
		<>
			<PageHeader
				title="Dokumenta Naučnog veća"
				description="Pregled odluka, zapisnika, izveštaja, materijala za sednice i drugih dokumenata Naučnog veća."
				breadcrumbs={[
					{
						label: "Dokumenta",
						href: "/dokumenta",
					},
					{
						label: "Dokumenta Naučnog veća",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
						<div>
							<div className="max-w-3xl">
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
									Rad Naučnog veća
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
									Odluke, zapisnici i materijali
								</h2>

								<p className="mt-4 text-base leading-7 text-stone-600">
									Dokumenta su razvrstana prema vrsti, godini objavljivanja i
									sednici na koju se odnose.
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

								<div className="mt-5 grid gap-4 lg:grid-cols-[1fr_180px_240px_auto]">
									<label className="relative block">
										<span className="sr-only">
											Pretražite dokumenta Naučnog veća
										</span>

										<Search
											className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
											aria-hidden="true"
										/>

										<input
											type="search"
											value={query}
											onChange={(event) => setQuery(event.target.value)}
											placeholder="Naziv, sednica ili broj dokumenta"
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
										value={selectedType}
										onChange={(event) => setSelectedType(event.target.value)}
										className={selectClasses}
										aria-label="Vrsta dokumenta"
									>
										<option value="Sve">Sve vrste dokumenata</option>

										{documentTypes.map((type) => (
											<option
												key={type}
												value={type}
											>
												{type}
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
										{filteredDocuments.length}
									</span>{" "}
									dokumenata
								</p>

								<p className="text-sm text-stone-500">
									Ukupno: {councilDocuments.length}
								</p>
							</div>

							{filteredDocuments.length > 0 ? (
								<div className="mt-6 space-y-5">
									{filteredDocuments.map((document) => (
										<CouncilDocumentCard
											key={document.id}
											document={document}
										/>
									))}
								</div>
							) : (
								<EmptyCouncilDocumentsState onClear={clearFilters} />
							)}
						</div>

						<aside className="lg:sticky lg:top-32 lg:self-start">
							<div className="border rounded-2xl border-stone-200 bg-stone-50 p-7">
								<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
									<UsersRound
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</div>

								<h2 className="mt-5 text-xl font-semibold text-stone-900">
									Naučno veće
								</h2>

								<p className="mt-3 text-sm leading-6 text-stone-600">
									Informacije o sastavu, nadležnostima i organizaciji rada
									Naučnog veća dostupne su u sekciji „O institutu“.
								</p>

								<a
									href="/o-institutu/naucno-vece"
									className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
								>
									Otvorite stranicu Naučnog veća
									<FileCheck2
										className="w-4 h-4"
										aria-hidden="true"
									/>
								</a>
							</div>

							<div className="mt-6 text-white rounded-2xl bg-institute-950 p-7">
								<h2 className="text-lg font-semibold">
									Napomena o objavljivanju
								</h2>

								<p className="mt-3 text-sm leading-6 text-institute-100">
									Objavljuju se samo dokumenta koja su namenjena javnosti i koja
									ne sadrže zaštićene ili poverljive podatke.
								</p>
							</div>
						</aside>
					</div>
				</Container>
			</Section>
		</>
	);
}

const selectClasses =
	"w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-institute-500 focus:ring-2 focus:ring-institute-100";

type CouncilDocumentCardProps = {
	document: CouncilDocument;
};

function CouncilDocumentCard({ document }: CouncilDocumentCardProps) {
	return (
		<article
			id={document.id}
			className="p-6 transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md md:p-7"
		>
			<div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-institute-50 text-institute-800">
					<FileCheck2
						className="w-6 h-6"
						aria-hidden="true"
					/>
				</div>

				<div>
					<div className="flex flex-wrap items-center gap-3">
						<DocumentTypeBadge type={document.documentType} />

						<span className="text-xs font-medium text-stone-500">
							{document.year}
						</span>

						{document.documentNumber && (
							<span className="text-xs font-medium text-stone-500">
								{document.documentNumber}
							</span>
						)}
					</div>

					<h2 className="mt-3 text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
						{document.title}
					</h2>

					{document.description && (
						<p className="max-w-3xl mt-3 text-sm leading-7 text-stone-600">
							{document.description}
						</p>
					)}

					<div className="flex flex-wrap mt-5 text-sm gap-x-6 gap-y-3 text-stone-600">
						{document.sessionNumber && (
							<div className="flex items-center gap-2">
								<UsersRound
									className="w-4 h-4 text-mineral-700"
									aria-hidden="true"
								/>
								{document.sessionNumber}
							</div>
						)}

						{document.sessionDate && (
							<div className="flex items-center gap-2">
								<CalendarDays
									className="w-4 h-4 text-mineral-700"
									aria-hidden="true"
								/>
								Sednica održana: {document.sessionDate}
							</div>
						)}

						<div className="flex items-center gap-2">
							<CalendarDays
								className="w-4 h-4 text-mineral-700"
								aria-hidden="true"
							/>
							Objavljeno: {document.publicationDate}
						</div>
					</div>
				</div>

				<a
					href={document.fileUrl}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition border rounded-md border-institute-700 text-institute-800 hover:bg-institute-50"
				>
					<Download
						className="w-4 h-4"
						aria-hidden="true"
					/>
					Preuzmite
				</a>
			</div>

			<div className="flex items-center gap-2 pt-4 mt-5 text-xs border-t border-stone-200 text-stone-500 md:ml-18">
				<FileText
					className="w-4 h-4"
					aria-hidden="true"
				/>

				{[document.fileType, document.fileSize].filter(Boolean).join(" · ")}
			</div>
		</article>
	);
}

type DocumentTypeBadgeProps = {
	type: CouncilDocumentType;
};

function DocumentTypeBadge({ type }: DocumentTypeBadgeProps) {
	const styles: Record<CouncilDocumentType, string> = {
		Odluka: "bg-mineral-100 text-mineral-800",
		Zapisnik: "bg-institute-100 text-institute-800",
		"Materijal za sednicu": "bg-amber-100 text-amber-800",
		Izveštaj: "bg-stone-200 text-stone-700",
		Drugo: "bg-stone-100 text-stone-700",
	};

	return (
		<span
			className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[type]}`}
		>
			{type}
		</span>
	);
}

type EmptyCouncilDocumentsStateProps = {
	onClear: () => void;
};

function EmptyCouncilDocumentsState({
	onClear,
}: EmptyCouncilDocumentsStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađenih dokumenata
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
