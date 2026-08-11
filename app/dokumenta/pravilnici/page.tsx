"use client";

import {
	Download,
	FileCog,
	FileText,
	Search,
	SlidersHorizontal,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type RegulationStatus = "Važeći" | "Van snage" | "Izmenjen i dopunjen";

type Regulation = {
	id: string;
	title: string;
	description?: string;
	category: string;
	documentNumber?: string;
	adoptionDate: string;
	year: number;
	status: RegulationStatus;
	fileUrl: string;
	fileType: string;
	fileSize?: string;
};

const regulations: Regulation[] = [
	{
		id: "pravilnik-o-radu",
		title: "Pravilnik o radu",
		description:
			"Pravilnik kojim se uređuju prava, obaveze i odgovornosti zaposlenih i poslodavca.",
		category: "Radni odnosi",
		documentNumber: "Broj: 000/2026",
		adoptionDate: "15. januar 2026.",
		year: 2026,
		status: "Važeći",
		fileUrl: "/documents/pravilnici/pravilnik-o-radu.pdf",
		fileType: "PDF",
		fileSize: "1,8 MB",
	},
	{
		id: "pravilnik-o-sistematizaciji",
		title: "Pravilnik o organizaciji i sistematizaciji poslova",
		description:
			"Dokument kojim se uređuju organizacione jedinice, radna mesta, uslovi za obavljanje poslova i odgovornosti zaposlenih.",
		category: "Organizacija",
		documentNumber: "Broj: 000/2025",
		adoptionDate: "20. septembar 2025.",
		year: 2025,
		status: "Važeći",
		fileUrl:
			"/documents/pravilnici/pravilnik-o-organizaciji-i-sistematizaciji.pdf",
		fileType: "PDF",
		fileSize: "2,6 MB",
	},
	{
		id: "pravilnik-o-zastiti-podataka",
		title: "Pravilnik o zaštiti podataka o ličnosti",
		description:
			"Pravilnik kojim se uređuju postupci obrade, čuvanja i zaštite podataka o ličnosti.",
		category: "Zaštita podataka",
		adoptionDate: "12. maj 2024.",
		year: 2024,
		status: "Važeći",
		fileUrl: "/documents/pravilnici/pravilnik-o-zastiti-podataka.pdf",
		fileType: "PDF",
		fileSize: "940 KB",
	},
	{
		id: "prethodni-pravilnik-o-radu",
		title: "Prethodna verzija Pravilnika o radu",
		description: "Arhivirana verzija pravilnika koja više nije na snazi.",
		category: "Radni odnosi",
		adoptionDate: "5. mart 2019.",
		year: 2019,
		status: "Van snage",
		fileUrl: "/documents/pravilnici/pravilnik-o-radu-2019.pdf",
		fileType: "PDF",
		fileSize: "1,4 MB",
	},
];

const years = [...new Set(regulations.map((item) => item.year))].sort(
	(a, b) => b - a,
);

const categories = [...new Set(regulations.map((item) => item.category))].sort(
	(a, b) => a.localeCompare(b, "sr"),
);

const statuses: RegulationStatus[] = [
	"Važeći",
	"Izmenjen i dopunjen",
	"Van snage",
];

export default function RegulationsPage() {
	const [query, setQuery] = useState("");
	const [selectedYear, setSelectedYear] = useState("Sve");
	const [selectedCategory, setSelectedCategory] = useState("Sve");
	const [selectedStatus, setSelectedStatus] = useState("Svi");

	const filteredRegulations = useMemo(() => {
		const normalizedQuery = query.trim().toLocaleLowerCase("sr");

		return regulations.filter((regulation) => {
			const searchableText = [
				regulation.title,
				regulation.description,
				regulation.category,
				regulation.documentNumber,
				regulation.adoptionDate,
			]
				.filter(Boolean)
				.join(" ")
				.toLocaleLowerCase("sr");

			const matchesQuery = searchableText.includes(normalizedQuery);

			const matchesYear =
				selectedYear === "Sve" || regulation.year.toString() === selectedYear;

			const matchesCategory =
				selectedCategory === "Sve" || regulation.category === selectedCategory;

			const matchesStatus =
				selectedStatus === "Svi" || regulation.status === selectedStatus;

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
				title="Pravilnici"
				description="Pregled važećih i arhiviranih pravilnika Instituta."
				breadcrumbs={[
					{
						label: "Dokumenta",
						href: "/dokumenta",
					},
					{
						label: "Pravilnici",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Interna dokumentacija
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Pravila i procedure rada Instituta
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Pravilnicima se uređuju organizacija, radni odnosi, odgovornosti,
							postupci i druge oblasti značajne za funkcionisanje Instituta.
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

						<div className="mt-5 grid gap-4 xl:grid-cols-[1fr_170px_220px_210px_auto]">
							<label className="relative block">
								<span className="sr-only">Pretražite pravilnike</span>

								<Search
									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
									aria-hidden="true"
								/>

								<input
									type="search"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
									placeholder="Naziv, oblast ili broj dokumenta"
									className="w-full py-3 pl-10 pr-4 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								/>
							</label>

							<select
								value={selectedYear}
								onChange={(event) => setSelectedYear(event.target.value)}
								className={selectClasses}
								aria-label="Godina usvajanja"
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
								aria-label="Oblast pravilnika"
							>
								<option value="Sve">Sve oblasti</option>

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
								aria-label="Status pravilnika"
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
								{filteredRegulations.length}
							</span>{" "}
							pravilnika
						</p>

						<p className="text-sm text-stone-500">
							Ukupno: {regulations.length}
						</p>
					</div>

					{filteredRegulations.length > 0 ? (
						<div className="mt-6 space-y-4">
							{filteredRegulations.map((regulation) => (
								<RegulationCard
									key={regulation.id}
									regulation={regulation}
								/>
							))}
						</div>
					) : (
						<EmptyRegulationsState onClear={clearFilters} />
					)}
				</Container>
			</Section>
		</>
	);
}

const selectClasses =
	"w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-institute-500 focus:ring-2 focus:ring-institute-100";

type RegulationCardProps = {
	regulation: Regulation;
};

function RegulationCard({ regulation }: RegulationCardProps) {
	return (
		<article
			id={regulation.id}
			className="p-6 transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md md:p-7"
		>
			<div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-institute-50 text-institute-800">
					<FileCog
						className="w-6 h-6"
						aria-hidden="true"
					/>
				</div>

				<div>
					<div className="flex flex-wrap items-center gap-3">
						<StatusBadge status={regulation.status} />

						<span className="px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700">
							{regulation.category}
						</span>

						<span className="text-xs font-medium text-stone-500">
							{regulation.year}
						</span>
					</div>

					<h2 className="mt-3 text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
						{regulation.title}
					</h2>

					{regulation.description && (
						<p className="max-w-3xl mt-3 text-sm leading-7 text-stone-600">
							{regulation.description}
						</p>
					)}

					<div className="flex flex-wrap mt-4 text-sm gap-x-6 gap-y-2 text-stone-500">
						<span>Usvojeno: {regulation.adoptionDate}</span>

						{regulation.documentNumber && (
							<span>{regulation.documentNumber}</span>
						)}
					</div>
				</div>

				<a
					href={regulation.fileUrl}
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

				{[regulation.fileType, regulation.fileSize].filter(Boolean).join(" · ")}
			</div>
		</article>
	);
}

type StatusBadgeProps = {
	status: RegulationStatus;
};

function StatusBadge({ status }: StatusBadgeProps) {
	const styles: Record<RegulationStatus, string> = {
		Važeći: "bg-mineral-100 text-mineral-800",
		"Izmenjen i dopunjen": "bg-institute-100 text-institute-800",
		"Van snage": "bg-stone-200 text-stone-700",
	};

	return (
		<span
			className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
		>
			{status}
		</span>
	);
}

type EmptyRegulationsStateProps = {
	onClear: () => void;
};

function EmptyRegulationsState({ onClear }: EmptyRegulationsStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađenih pravilnika
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
