"use client";

import {
	Download,
	FileBarChart,
	FileText,
	Search,
	SlidersHorizontal,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type Report = {
	id: string;
	title: string;
	description?: string;
	category: string;
	period: string;
	publicationDate: string;
	year: number;
	fileUrl: string;
	fileType: string;
	fileSize?: string;
};

const reports: Report[] = [
	{
		id: "godisnji-izvestaj-2025",
		title: "Godišnji izveštaj o radu za 2025. godinu",
		description:
			"Pregled naučnoistraživačkih, stručnih, razvojnih i organizacionih aktivnosti Instituta tokom 2025. godine.",
		category: "Godišnji izveštaj",
		period: "2025. godina",
		publicationDate: "31. mart 2026.",
		year: 2026,
		fileUrl: "/documents/izvestaji/godisnji-izvestaj-2025.pdf",
		fileType: "PDF",
		fileSize: "4,2 MB",
	},
	{
		id: "finansijski-izvestaj-2025",
		title: "Finansijski izveštaj za 2025. godinu",
		description:
			"Pregled finansijskog poslovanja Instituta za navedeni izveštajni period.",
		category: "Finansijski izveštaj",
		period: "2025. godina",
		publicationDate: "28. februar 2026.",
		year: 2026,
		fileUrl: "/documents/izvestaji/finansijski-izvestaj-2025.pdf",
		fileType: "PDF",
		fileSize: "2,8 MB",
	},
	{
		id: "izvestaj-o-naucnom-radu-2024",
		title: "Izveštaj o naučnoistraživačkom radu za 2024. godinu",
		description:
			"Pregled projekata, publikacija, istraživačkih rezultata i drugih naučnih aktivnosti Instituta.",
		category: "Naučnoistraživački izveštaj",
		period: "2024. godina",
		publicationDate: "15. april 2025.",
		year: 2025,
		fileUrl:
			"/documents/izvestaji/izvestaj-o-naucnoistrazivackom-radu-2024.pdf",
		fileType: "PDF",
		fileSize: "3,6 MB",
	},
];

const years = [...new Set(reports.map((report) => report.year))].sort(
	(a, b) => b - a,
);

const categories = [...new Set(reports.map((report) => report.category))].sort(
	(a, b) => a.localeCompare(b, "sr"),
);

export default function ReportsPage() {
	const [query, setQuery] = useState("");
	const [selectedYear, setSelectedYear] = useState("Sve");
	const [selectedCategory, setSelectedCategory] = useState("Sve");

	const filteredReports = useMemo(() => {
		const normalizedQuery = query.trim().toLocaleLowerCase("sr");

		return reports.filter((report) => {
			const searchableText = [
				report.title,
				report.description,
				report.category,
				report.period,
				report.publicationDate,
			]
				.filter(Boolean)
				.join(" ")
				.toLocaleLowerCase("sr");

			const matchesQuery = searchableText.includes(normalizedQuery);

			const matchesYear =
				selectedYear === "Sve" || report.year.toString() === selectedYear;

			const matchesCategory =
				selectedCategory === "Sve" || report.category === selectedCategory;

			return matchesQuery && matchesYear && matchesCategory;
		});
	}, [query, selectedYear, selectedCategory]);

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
				title="Izveštaji"
				description="Pregled godišnjih, finansijskih, naučnoistraživačkih i drugih javno dostupnih izveštaja Instituta."
				breadcrumbs={[
					{
						label: "Dokumenta",
						href: "/dokumenta",
					},
					{
						label: "Izveštaji",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Pregled rada
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Javno dostupni izveštaji Instituta
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Izveštaji pružaju pregled rada, rezultata, aktivnosti i poslovanja
							Instituta u okviru odgovarajućeg izveštajnog perioda.
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

						<div className="mt-5 grid gap-4 lg:grid-cols-[1fr_180px_260px_auto]">
							<label className="relative block">
								<span className="sr-only">Pretražite izveštaje</span>

								<Search
									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
									aria-hidden="true"
								/>

								<input
									type="search"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
									placeholder="Naziv, vrsta ili period izveštaja"
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
								aria-label="Vrsta izveštaja"
							>
								<option value="Sve">Sve vrste izveštaja</option>

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
								{filteredReports.length}
							</span>{" "}
							izveštaja
						</p>

						<p className="text-sm text-stone-500">Ukupno: {reports.length}</p>
					</div>

					{filteredReports.length > 0 ? (
						<div className="grid gap-6 mt-6 lg:grid-cols-2">
							{filteredReports.map((report) => (
								<ReportCard
									key={report.id}
									report={report}
								/>
							))}
						</div>
					) : (
						<EmptyReportsState onClear={clearFilters} />
					)}
				</Container>
			</Section>
		</>
	);
}

const selectClasses =
	"w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-institute-500 focus:ring-2 focus:ring-institute-100";

type ReportCardProps = {
	report: Report;
};

function ReportCard({ report }: ReportCardProps) {
	return (
		<article
			id={report.id}
			className="flex flex-col p-6 transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md md:p-7"
		>
			<div className="flex items-start justify-between gap-5">
				<div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-institute-50 text-institute-800">
					<FileBarChart
						className="w-6 h-6"
						aria-hidden="true"
					/>
				</div>

				<span className="px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700">
					{report.category}
				</span>
			</div>

			<h2 className="mt-6 text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
				{report.title}
			</h2>

			{report.description && (
				<p className="mt-3 text-sm leading-7 text-stone-600">
					{report.description}
				</p>
			)}

			<dl className="grid gap-4 p-5 mt-6 rounded-xl bg-stone-50 sm:grid-cols-2">
				<div>
					<dt className="text-xs font-semibold tracking-wide uppercase text-stone-500">
						Izveštajni period
					</dt>

					<dd className="mt-1 text-sm font-medium text-stone-800">
						{report.period}
					</dd>
				</div>

				<div>
					<dt className="text-xs font-semibold tracking-wide uppercase text-stone-500">
						Datum objavljivanja
					</dt>

					<dd className="mt-1 text-sm font-medium text-stone-800">
						{report.publicationDate}
					</dd>
				</div>
			</dl>

			<div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-auto border-t border-stone-200">
				<div className="flex items-center gap-2 text-xs text-stone-500">
					<FileText
						className="w-4 h-4"
						aria-hidden="true"
					/>

					{[report.fileType, report.fileSize].filter(Boolean).join(" · ")}
				</div>

				<a
					href={report.fileUrl}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center justify-center gap-2 rounded-md border border-institute-700 px-5 py-2.5 text-sm font-semibold text-institute-800 transition hover:bg-institute-50"
				>
					<Download
						className="w-4 h-4"
						aria-hidden="true"
					/>
					Preuzmite
				</a>
			</div>
		</article>
	);
}

type EmptyReportsStateProps = {
	onClear: () => void;
};

function EmptyReportsState({ onClear }: EmptyReportsStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađenih izveštaja
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
