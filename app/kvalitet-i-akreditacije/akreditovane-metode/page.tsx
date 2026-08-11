"use client";

import {
	Building2,
	FileText,
	FlaskConical,
	Search,
	SlidersHorizontal,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";
//Podsetnik: za ovo treba prava baza podataka.
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type AccreditedMethod = {
	id: string;
	methodName: string;
	standard: string;
	field: string;
	material: string;
	laboratory: string;
	accreditationNumber: string;
	note?: string;
};

const methods: AccreditedMethod[] = [
	{
		id: "metoda-001",
		methodName: "Određivanje hemijskog sastava uzorka",
		standard: "SRPS EN ISO 0000:2025",
		field: "Hemijska ispitivanja",
		material: "Mineralne sirovine i tehnološki proizvodi",
		laboratory: "Laboratorija za instrumentalna ispitivanja",
		accreditationNumber: "01-000",
	},
	{
		id: "metoda-002",
		methodName: "Određivanje sadržaja vlage",
		standard: "SRPS ISO 0001:2024",
		field: "Fizička ispitivanja",
		material: "Rude, koncentrati i praškasti materijali",
		laboratory: "Laboratorija za pripremu mineralnih sirovina",
		accreditationNumber: "01-000",
		note: "Metoda se primenjuje u granicama navedenim u važećem obimu akreditacije.",
	},
	{
		id: "metoda-003",
		methodName: "Mineraloška identifikacija faza",
		standard: "Interna dokumentovana metoda IM-03",
		field: "Mineraloška ispitivanja",
		material: "Minerali, rude, jalovina i industrijski materijali",
		laboratory: "Laboratorija za instrumentalna ispitivanja",
		accreditationNumber: "01-000",
	},
	{
		id: "metoda-004",
		methodName: "Određivanje granulometrijskog sastava",
		standard: "SRPS EN 0002:2023",
		field: "Fizička ispitivanja",
		material: "Rastresiti mineralni i građevinski materijali",
		laboratory: "Laboratorija za pripremu mineralnih sirovina",
		accreditationNumber: "01-000",
	},
];

const laboratories = [
	...new Set(methods.map((method) => method.laboratory)),
].sort((a, b) => a.localeCompare(b, "sr"));

const fields = [...new Set(methods.map((method) => method.field))].sort(
	(a, b) => a.localeCompare(b, "sr"),
);

const standards = [...new Set(methods.map((method) => method.standard))].sort(
	(a, b) => a.localeCompare(b, "sr"),
);

export default function AccreditedMethodsPage() {
	const [query, setQuery] = useState("");
	const [selectedLaboratory, setSelectedLaboratory] = useState("Sve");
	const [selectedField, setSelectedField] = useState("Sve");
	const [selectedStandard, setSelectedStandard] = useState("Svi");

	const filteredMethods = useMemo(() => {
		const normalizedQuery = query.trim().toLocaleLowerCase("sr");

		return methods.filter((method) => {
			const searchableText = [
				method.methodName,
				method.standard,
				method.field,
				method.material,
				method.laboratory,
				method.accreditationNumber,
			]
				.join(" ")
				.toLocaleLowerCase("sr");

			const matchesQuery = searchableText.includes(normalizedQuery);

			const matchesLaboratory =
				selectedLaboratory === "Sve" ||
				method.laboratory === selectedLaboratory;

			const matchesField =
				selectedField === "Sve" || method.field === selectedField;

			const matchesStandard =
				selectedStandard === "Svi" || method.standard === selectedStandard;

			return (
				matchesQuery && matchesLaboratory && matchesField && matchesStandard
			);
		});
	}, [query, selectedLaboratory, selectedField, selectedStandard]);

	const filtersActive =
		query !== "" ||
		selectedLaboratory !== "Sve" ||
		selectedField !== "Sve" ||
		selectedStandard !== "Svi";

	function clearFilters() {
		setQuery("");
		setSelectedLaboratory("Sve");
		setSelectedField("Sve");
		setSelectedStandard("Svi");
	}

	return (
		<>
			<PageHeader
				title="Akreditovane metode"
				description="Pretraživ pregled metoda ispitivanja prema oblasti, standardu, materijalu i nadležnoj laboratoriji."
				breadcrumbs={[
					{
						label: "Kvalitet i akreditacije",
						href: "/kvalitet-i-akreditacije",
					},
					{
						label: "Akreditovane metode",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Obim akreditacije
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Pronađite odgovarajuću metodu ispitivanja
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Pretražite metode prema nazivu, standardu, vrsti materijala,
							oblasti ispitivanja ili laboratoriji koja metodu primenjuje.
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

						<div className="mt-5 grid gap-4 xl:grid-cols-[1fr_260px_220px_280px_auto]">
							<label className="relative block">
								<span className="sr-only">Pretražite akreditovane metode</span>

								<Search
									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
									aria-hidden="true"
								/>

								<input
									type="search"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
									placeholder="Naziv metode, standard ili materijal"
									className={inputClasses}
								/>
							</label>

							<select
								value={selectedLaboratory}
								onChange={(event) => setSelectedLaboratory(event.target.value)}
								className={selectClasses}
								aria-label="Laboratorija"
							>
								<option value="Sve">Sve laboratorije</option>

								{laboratories.map((laboratory) => (
									<option
										key={laboratory}
										value={laboratory}
									>
										{laboratory}
									</option>
								))}
							</select>

							<select
								value={selectedField}
								onChange={(event) => setSelectedField(event.target.value)}
								className={selectClasses}
								aria-label="Oblast ispitivanja"
							>
								<option value="Sve">Sve oblasti</option>

								{fields.map((field) => (
									<option
										key={field}
										value={field}
									>
										{field}
									</option>
								))}
							</select>

							<select
								value={selectedStandard}
								onChange={(event) => setSelectedStandard(event.target.value)}
								className={selectClasses}
								aria-label="Standard"
							>
								<option value="Svi">Svi standardi</option>

								{standards.map((standard) => (
									<option
										key={standard}
										value={standard}
									>
										{standard}
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

					<div className="flex flex-wrap items-center justify-between gap-4 mt-8">
						<p className="text-sm text-stone-600">
							Prikazano{" "}
							<span className="font-semibold text-stone-900">
								{filteredMethods.length}
							</span>{" "}
							metoda
						</p>

						<a
							href="/documents/akreditacije/obim-akreditacije.pdf"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
						>
							<FileText
								className="w-4 h-4"
								aria-hidden="true"
							/>
							Otvorite zvanični obim akreditacije
						</a>
					</div>

					{filteredMethods.length > 0 ? (
						<>
							<div className="hidden mt-6 overflow-hidden bg-white border shadow-sm rounded-2xl border-stone-200 lg:block">
								<table className="w-full text-left border-collapse">
									<thead className="bg-stone-100">
										<tr>
											<TableHeading>Metoda</TableHeading>
											<TableHeading>Standard</TableHeading>
											<TableHeading>Oblast</TableHeading>
											<TableHeading>Laboratorija</TableHeading>
										</tr>
									</thead>

									<tbody className="divide-y divide-stone-200">
										{filteredMethods.map((method) => (
											<MethodTableRow
												key={method.id}
												method={method}
											/>
										))}
									</tbody>
								</table>
							</div>

							<div className="mt-6 space-y-5 lg:hidden">
								{filteredMethods.map((method) => (
									<MethodCard
										key={method.id}
										method={method}
									/>
								))}
							</div>
						</>
					) : (
						<EmptyMethodsState onClear={clearFilters} />
					)}
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Niste pronašli potrebnu metodu?
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pošaljite podatke o uzorku i potrebnom ispitivanju kako bi
								stručni tim proverio mogućnost realizacije.
							</p>
						</div>

						<a
							href="/usluge/posaljite-upit"
							className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Pošaljite upit
						</a>
					</div>
				</Container>
			</Section>
		</>
	);
}

const inputClasses =
	"w-full rounded-md border border-stone-300 bg-white py-3 pl-10 pr-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100";

const selectClasses =
	"w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-institute-500 focus:ring-2 focus:ring-institute-100";

type TableHeadingProps = {
	children: React.ReactNode;
};

function TableHeading({ children }: TableHeadingProps) {
	return (
		<th
			scope="col"
			className="px-6 py-4 text-xs font-semibold tracking-wide uppercase text-stone-600"
		>
			{children}
		</th>
	);
}

type MethodProps = {
	method: AccreditedMethod;
};

function MethodTableRow({ method }: MethodProps) {
	return (
		<tr
			id={method.id}
			className="align-top transition scroll-mt-32 hover:bg-stone-50"
		>
			<td className="px-6 py-6">
				<h2 className="max-w-sm font-semibold leading-6 text-stone-900">
					{method.methodName}
				</h2>

				<p className="max-w-sm mt-2 text-sm leading-6 text-stone-600">
					{method.material}
				</p>

				{method.note && (
					<p className="max-w-sm mt-3 text-xs leading-5 text-stone-500">
						{method.note}
					</p>
				)}
			</td>

			<td className="px-6 py-6">
				<span className="inline-flex max-w-xs px-3 py-2 text-sm font-medium leading-5 rounded-md bg-institute-50 text-institute-800">
					{method.standard}
				</span>

				<p className="mt-3 text-xs text-stone-500">
					Akreditacija: {method.accreditationNumber}
				</p>
			</td>

			<td className="px-6 py-6 text-sm leading-6 text-stone-700">
				{method.field}
			</td>

			<td className="px-6 py-6">
				<div className="flex items-start max-w-xs gap-3">
					<Building2
						className="mt-0.5 h-4 w-4 shrink-0 text-mineral-700"
						aria-hidden="true"
					/>

					<span className="text-sm leading-6 text-stone-700">
						{method.laboratory}
					</span>
				</div>
			</td>
		</tr>
	);
}

function MethodCard({ method }: MethodProps) {
	return (
		<article
			id={method.id}
			className="p-6 bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200"
		>
			<div className="flex items-center justify-center rounded-lg h-11 w-11 bg-institute-50 text-institute-800">
				<FlaskConical
					className="w-5 h-5"
					aria-hidden="true"
				/>
			</div>

			<h2 className="mt-5 text-xl font-semibold leading-7 text-stone-900">
				{method.methodName}
			</h2>

			<div className="mt-5 space-y-5">
				<MethodInfo label="Standard">
					<span className="font-medium text-institute-800">
						{method.standard}
					</span>
				</MethodInfo>

				<MethodInfo label="Oblast ispitivanja">{method.field}</MethodInfo>

				<MethodInfo label="Materijal ili predmet ispitivanja">
					{method.material}
				</MethodInfo>

				<MethodInfo label="Laboratorija">{method.laboratory}</MethodInfo>

				<MethodInfo label="Broj akreditacije">
					{method.accreditationNumber}
				</MethodInfo>
			</div>

			{method.note && (
				<p className="p-4 mt-5 text-xs leading-5 rounded-lg bg-stone-50 text-stone-600">
					{method.note}
				</p>
			)}
		</article>
	);
}

type MethodInfoProps = {
	label: string;
	children: React.ReactNode;
};

function MethodInfo({ label, children }: MethodInfoProps) {
	return (
		<div>
			<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
				{label}
			</p>

			<div className="mt-1 text-sm leading-6 text-stone-700">{children}</div>
		</div>
	);
}

type EmptyMethodsStateProps = {
	onClear: () => void;
};

function EmptyMethodsState({ onClear }: EmptyMethodsStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađenih metoda
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
