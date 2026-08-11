"use client";

import {
	Archive,
	Download,
	FileText,
	Search,
	SlidersHorizontal,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type ArchiveCategory =
	| "Akta"
	| "Pravilnici"
	| "Izveštaji"
	| "Konkursi i oglasi"
	| "Dokumenta Naučnog veća"
	| "Ostalo";

type ArchivedDocument = {
	id: string;
	title: string;
	description?: string;
	category: ArchiveCategory;
	year: number;
	publicationDate?: string;
	archivalReason?: string;
	documentNumber?: string;
	fileUrl: string;
	fileType: string;
	fileSize?: string;
};

const archivedDocuments: ArchivedDocument[] = [
	{
		id: "statut-2018",
		title: "Prethodna verzija Statuta Instituta",
		description:
			"Arhivirana verzija Statuta koja je zamenjena novijim važećim dokumentom.",
		category: "Akta",
		year: 2018,
		publicationDate: "20. jun 2018.",
		archivalReason: "Dokument više nije na snazi",
		documentNumber: "Broj: 000/2018",
		fileUrl: "/documents/arhiva/statut-instituta-2018.pdf",
		fileType: "PDF",
		fileSize: "1,8 MB",
	},
	{
		id: "pravilnik-o-radu-2019",
		title: "Prethodna verzija Pravilnika o radu",
		description:
			"Pravilnik koji je prestao da važi nakon usvajanja nove verzije dokumenta.",
		category: "Pravilnici",
		year: 2019,
		publicationDate: "5. mart 2019.",
		archivalReason: "Zamenjen novim pravilnikom",
		fileUrl: "/documents/arhiva/pravilnik-o-radu-2019.pdf",
		fileType: "PDF",
		fileSize: "1,4 MB",
	},
	{
		id: "godisnji-izvestaj-2022",
		title: "Godišnji izveštaj o radu za 2022. godinu",
		description:
			"Pregled naučnih, stručnih i organizacionih aktivnosti Instituta tokom 2022. godine.",
		category: "Izveštaji",
		year: 2023,
		publicationDate: "31. mart 2023.",
		archivalReason: "Stariji izveštajni period",
		fileUrl: "/documents/arhiva/godisnji-izvestaj-2022.pdf",
		fileType: "PDF",
		fileSize: "3,7 MB",
	},
	{
		id: "konkurs-istrazivac-2024",
		title: "Konkurs za izbor istraživača iz 2024. godine",
		description:
			"Završen konkurs sa pratećom dokumentacijom i objavljenom odlukom.",
		category: "Konkursi i oglasi",
		year: 2024,
		publicationDate: "10. septembar 2024.",
		archivalReason: "Postupak je završen",
		fileUrl: "/documents/arhiva/konkurs-istrazivac-2024.pdf",
		fileType: "PDF",
		fileSize: "680 KB",
	},
	{
		id: "odluka-naucnog-veca-2023",
		title: "Odluka Naučnog veća iz 2023. godine",
		description: "Arhivirana odluka Naučnog veća iz prethodnog perioda.",
		category: "Dokumenta Naučnog veća",
		year: 2023,
		publicationDate: "14. novembar 2023.",
		archivalReason: "Stariji dokument",
		documentNumber: "Broj: 000/2023",
		fileUrl: "/documents/arhiva/odluka-naucnog-veca-2023.pdf",
		fileType: "PDF",
		fileSize: "510 KB",
	},
];

const years = [
	...new Set(archivedDocuments.map((document) => document.year)),
].sort((a, b) => b - a);

const categories = [
	...new Set(archivedDocuments.map((document) => document.category)),
].sort((a, b) => a.localeCompare(b, "sr"));

export default function ArchivePage() {
	const [query, setQuery] = useState("");
	const [selectedYear, setSelectedYear] = useState("Sve");
	const [selectedCategory, setSelectedCategory] = useState("Sve");

	const filteredDocuments = useMemo(() => {
		const normalizedQuery = query.trim().toLocaleLowerCase("sr");

		return archivedDocuments.filter((document) => {
			const searchableText = [
				document.title,
				document.description,
				document.category,
				document.archivalReason,
				document.documentNumber,
				document.publicationDate,
			]
				.filter(Boolean)
				.join(" ")
				.toLocaleLowerCase("sr");

			const matchesQuery = searchableText.includes(normalizedQuery);

			const matchesYear =
				selectedYear === "Sve" || document.year.toString() === selectedYear;

			const matchesCategory =
				selectedCategory === "Sve" || document.category === selectedCategory;

			return matchesQuery && matchesYear && matchesCategory;
		});
	}, [query, selectedYear, selectedCategory]);

	const groupedDocuments = useMemo(() => {
		return filteredDocuments.reduce<Record<number, ArchivedDocument[]>>(
			(groups, document) => {
				if (!groups[document.year]) {
					groups[document.year] = [];
				}

				groups[document.year].push(document);

				return groups;
			},
			{},
		);
	}, [filteredDocuments]);

	const groupedYears = Object.keys(groupedDocuments)
		.map(Number)
		.sort((a, b) => b - a);

	const filtersActive =
		query !== "" || selectedYear !== "Sve" || selectedCategory !== "Sve";

	function clearFilters() {
		setQuery("");
		setSelectedYear("Sve");
		setSelectedCategory("Sve");
	}

	return (
		<>
			<PageHeader
				title="Arhiva"
				description="Pregled starijih dokumenata, prethodnih verzija akata, završenih konkursa i druge arhivske dokumentacije."
				breadcrumbs={[
					{
						label: "Dokumenta",
						href: "/dokumenta",
					},
					{
						label: "Arhiva",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
						<div>
							<div className="max-w-3xl">
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
									Arhivska dokumentacija
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
									Starija i nevažeća dokumenta Instituta
								</h2>

								<p className="mt-4 text-base leading-7 text-stone-600">
									Arhiva sadrži dokumenta koja više nisu aktuelna, prethodne
									verzije akata i pravilnika, starije izveštaje i završene
									konkurse.
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

								<div className="mt-5 grid gap-4 lg:grid-cols-[1fr_180px_250px_auto]">
									<label className="relative block">
										<span className="sr-only">Pretražite arhivu</span>

										<Search
											className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
											aria-hidden="true"
										/>

										<input
											type="search"
											value={query}
											onChange={(event) => setQuery(event.target.value)}
											placeholder="Naziv, opis ili broj dokumenta"
											className="w-full py-3 pl-10 pr-4 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
										/>
									</label>

									<select
										value={selectedYear}
										onChange={(event) => setSelectedYear(event.target.value)}
										className={selectClasses}
										aria-label="Godina dokumenta"
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
										onChange={(event) =>
											setSelectedCategory(event.target.value)
										}
										className={selectClasses}
										aria-label="Kategorija dokumenta"
									>
										<option value="Sve">Sve kategorije</option>

										{categories.map((category) => (
											<option
												key={category}
												value={category}
											>
												{category}
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
									Ukupno: {archivedDocuments.length}
								</p>
							</div>

							{groupedYears.length > 0 ? (
								<div className="mt-10 space-y-12">
									{groupedYears.map((year) => (
										<section key={year}>
											<div className="flex items-center gap-4">
												<h2 className="text-2xl font-semibold tracking-tight text-stone-900">
													{year}
												</h2>

												<div className="flex-1 h-px bg-stone-200" />
											</div>

											<div className="mt-6 space-y-4">
												{groupedDocuments[year].map((document) => (
													<ArchivedDocumentCard
														key={document.id}
														document={document}
													/>
												))}
											</div>
										</section>
									))}
								</div>
							) : (
								<EmptyArchiveState onClear={clearFilters} />
							)}
						</div>

						<aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
							<div className="border rounded-2xl border-stone-200 bg-stone-50 p-7">
								<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
									<Archive
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</div>

								<h2 className="mt-5 text-xl font-semibold text-stone-900">
									Šta se čuva u arhivi?
								</h2>

								<ul className="mt-5 space-y-3 text-sm leading-6 text-stone-600">
									<li className="flex gap-3">
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										Dokumenta koja više nisu važeća
									</li>

									<li className="flex gap-3">
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										Prethodne verzije akata i pravilnika
									</li>

									<li className="flex gap-3">
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										Završeni konkursi i oglasi
									</li>

									<li className="flex gap-3">
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										Stariji izveštaji i odluke
									</li>
								</ul>
							</div>

							<div className="text-white rounded-2xl bg-institute-950 p-7">
								<h2 className="text-lg font-semibold">Važenje dokumenata</h2>

								<p className="mt-3 text-sm leading-6 text-institute-100">
									Dokumenta iz arhive prikazuju se radi informisanja i
									istorijskog pregleda. Za aktuelne obaveze i postupke treba
									koristiti važeće dokumente iz odgovarajuće kategorije.
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

type ArchivedDocumentCardProps = {
	document: ArchivedDocument;
};

function ArchivedDocumentCard({ document }: ArchivedDocumentCardProps) {
	return (
		<article
			id={document.id}
			className="p-6 transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md md:p-7"
		>
			<div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-stone-100 text-stone-700">
					<Archive
						className="w-6 h-6"
						aria-hidden="true"
					/>
				</div>

				<div>
					<div className="flex flex-wrap items-center gap-3">
						<span className="px-3 py-1 text-xs font-semibold rounded-full bg-institute-50 text-institute-800">
							{document.category}
						</span>

						<span className="px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700">
							Arhivirano
						</span>

						{document.documentNumber && (
							<span className="text-xs font-medium text-stone-500">
								{document.documentNumber}
							</span>
						)}
					</div>

					<h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
						{document.title}
					</h3>

					{document.description && (
						<p className="max-w-3xl mt-3 text-sm leading-7 text-stone-600">
							{document.description}
						</p>
					)}

					<div className="flex flex-wrap mt-4 text-sm gap-x-6 gap-y-2 text-stone-500">
						{document.publicationDate && (
							<span>Objavljeno: {document.publicationDate}</span>
						)}

						{document.archivalReason && (
							<span>Razlog arhiviranja: {document.archivalReason}</span>
						)}
					</div>
				</div>

				<a
					href={document.fileUrl}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition border rounded-md border-stone-300 text-stone-700 hover:border-institute-400 hover:bg-institute-50 hover:text-institute-800"
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

type EmptyArchiveStateProps = {
	onClear: () => void;
};

function EmptyArchiveState({ onClear }: EmptyArchiveStateProps) {
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
				Promenite pojam pretrage ili izaberite drugu godinu ili kategoriju.
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
