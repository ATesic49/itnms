"use client";

import {
	Download,
	FileText,
	Gavel,
	Search,
	SlidersHorizontal,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
//Podsetnik: dodaj akta

type InstituteAct = {
	id: string;
	title: string;
	description?: string;
	documentNumber?: string;
	adoptionDate: string;
	year: number;
	status: "Važeći" | "Van snage" | "Izmenjen i dopunjen";
	fileUrl: string;
	fileType: string;
	fileSize?: string;
};

const acts: InstituteAct[] = [
	{
		id: "statut-instituta",
		title: "Statut Instituta",
		description:
			"Osnovni opšti akt kojim se uređuju organizacija, delatnost, upravljanje i druga pitanja od značaja za rad Instituta.",
		documentNumber: "Broj: 000/2026",
		adoptionDate: "15. januar 2026.",
		year: 2026,
		status: "Važeći",
		fileUrl: "/documents/akta/statut-instituta.pdf",
		fileType: "PDF",
		fileSize: "2,1 MB",
	},
	{
		id: "osnivacki-akt",
		title: "Osnivački akt Instituta",
		description:
			"Dokument kojim se uređuju osnivanje, pravni položaj, delatnost i osnovna prava i obaveze Instituta.",
		adoptionDate: "10. mart 2022.",
		year: 2022,
		status: "Važeći",
		fileUrl: "/documents/akta/osnivacki-akt.pdf",
		fileType: "PDF",
		fileSize: "1,4 MB",
	},
	{
		id: "stari-statut",
		title: "Prethodna verzija Statuta Instituta",
		description: "Arhivirana verzija Statuta koja više nije na snazi.",
		adoptionDate: "20. jun 2018.",
		year: 2018,
		status: "Van snage",
		fileUrl: "/documents/akta/statut-2018.pdf",
		fileType: "PDF",
		fileSize: "1,8 MB",
	},
];

const years = [...new Set(acts.map((act) => act.year))].sort((a, b) => b - a);

const statuses: InstituteAct["status"][] = [
	"Važeći",
	"Izmenjen i dopunjen",
	"Van snage",
];

export default function ActsPage() {
	const [query, setQuery] = useState("");
	const [selectedYear, setSelectedYear] = useState("Sve");
	const [selectedStatus, setSelectedStatus] = useState("Svi");

	const filteredActs = useMemo(() => {
		const normalizedQuery = query.trim().toLocaleLowerCase("sr");

		return acts.filter((act) => {
			const searchableText = [
				act.title,
				act.description,
				act.documentNumber,
				act.adoptionDate,
			]
				.filter(Boolean)
				.join(" ")
				.toLocaleLowerCase("sr");

			const matchesQuery = searchableText.includes(normalizedQuery);

			const matchesYear =
				selectedYear === "Sve" || act.year.toString() === selectedYear;

			const matchesStatus =
				selectedStatus === "Svi" || act.status === selectedStatus;

			return matchesQuery && matchesYear && matchesStatus;
		});
	}, [query, selectedYear, selectedStatus]);

	const filtersActive =
		query !== "" || selectedYear !== "Sve" || selectedStatus !== "Svi";

	function clearFilters() {
		setQuery("");
		setSelectedYear("Sve");
		setSelectedStatus("Svi");
	}

	return (
		<>
			<PageHeader
				title="Akta"
				description="Pregled osnivačkih, statutarnih i drugih opštih akata Instituta."
				breadcrumbs={[
					{
						label: "Dokumenta",
						href: "/dokumenta",
					},
					{
						label: "Akta",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Opšta akta Instituta
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Osnovni dokumenti o organizaciji i radu
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Na ovoj stranici nalaze se važeća i arhivirana akta kojima se
							uređuju pravni položaj, organizacija, upravljanje i delatnost
							Instituta.
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

						<div className="mt-5 grid gap-4 lg:grid-cols-[1fr_180px_220px_auto]">
							<label className="relative block">
								<span className="sr-only">Pretražite akta</span>

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
								value={selectedStatus}
								onChange={(event) => setSelectedStatus(event.target.value)}
								className={selectClasses}
								aria-label="Status dokumenta"
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
								{filteredActs.length}
							</span>{" "}
							dokumenata
						</p>

						<p className="text-sm text-stone-500">Ukupno: {acts.length}</p>
					</div>

					{filteredActs.length > 0 ? (
						<div className="mt-6 space-y-4">
							{filteredActs.map((act) => (
								<ActCard
									key={act.id}
									act={act}
								/>
							))}
						</div>
					) : (
						<EmptyActsState onClear={clearFilters} />
					)}
				</Container>
			</Section>
		</>
	);
}

const selectClasses =
	"w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-institute-500 focus:ring-2 focus:ring-institute-100";

type ActCardProps = {
	act: InstituteAct;
};

function ActCard({ act }: ActCardProps) {
	return (
		<article
			id={act.id}
			className="p-6 transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md md:p-7"
		>
			<div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-institute-50 text-institute-800">
					<Gavel
						className="w-6 h-6"
						aria-hidden="true"
					/>
				</div>

				<div>
					<div className="flex flex-wrap items-center gap-3">
						<StatusBadge status={act.status} />

						<span className="text-xs font-medium text-stone-500">
							{act.year}
						</span>
					</div>

					<h2 className="mt-3 text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
						{act.title}
					</h2>

					{act.description && (
						<p className="max-w-3xl mt-3 text-sm leading-7 text-stone-600">
							{act.description}
						</p>
					)}

					<div className="flex flex-wrap mt-4 text-sm gap-x-6 gap-y-2 text-stone-500">
						<span>Usvojeno: {act.adoptionDate}</span>

						{act.documentNumber && <span>{act.documentNumber}</span>}
					</div>
				</div>

				<a
					href={act.fileUrl}
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

				{[act.fileType, act.fileSize].filter(Boolean).join(" · ")}
			</div>
		</article>
	);
}

type StatusBadgeProps = {
	status: InstituteAct["status"];
};

function StatusBadge({ status }: StatusBadgeProps) {
	const styles = {
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

type EmptyActsStateProps = {
	onClear: () => void;
};

function EmptyActsState({ onClear }: EmptyActsStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađenih akata
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
