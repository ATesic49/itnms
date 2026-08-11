"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import { EmployeeCard } from "@/app/components/EmployeeCard";
import { Employee } from "@/app/types/employee";
import { CompactEmployeeCard } from "@/app/components/CompactEmployeeCard";

// type Employee = {
// 	id: string;
// 	fullName: string;
// 	scientificTitle: string;
// 	position: string;
// 	unit: string;
// 	image: string;
// 	profileUrl: string;
// };

// const employees: Employee[] = [
// 	{
// 		id: "1",
// 		fullName: "Dr Ime Prezime",
// 		scientificTitle: "Naučni savetnik",
// 		position: "Istraživač",
// 		unit: "Sektor za pripremu mineralnih sirovina",
// 		image: "/images/zaposleni/ime-prezime.webp",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/ime-prezime",
// 	},
// 	{
// 		id: "2",
// 		fullName: "Dr Drugo Prezime",
// 		scientificTitle: "Viši naučni saradnik",
// 		position: "Rukovodilac laboratorije",
// 		unit: "Laboratorija za instrumentalna ispitivanja",
// 		image: "/images/zaposleni/drugo-prezime.webp",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/drugo-prezime",
// 	},
// 	{
// 		id: "3",
// 		fullName: "MSc Treće Prezime",
// 		scientificTitle: "Istraživač saradnik",
// 		position: "Istraživač",
// 		unit: "Sektor za metalurgiju",
// 		image: "/images/zaposleni/trece-prezime.webp",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/trece-prezime",
// 	},
// 	{
// 		id: "4",
// 		fullName: "Ime Prezime",
// 		scientificTitle: "—",
// 		position: "Stručni saradnik",
// 		unit: "Služba za kvalitet",
// 		image: "/images/zaposleni/ime-prezime-4.webp",
// 		profileUrl: "/istrazivaci-i-zaposleni/ime-prezime-4",
// 	},
// ];

export default function EmployeesPageContent({
	employees,
}: {
	employees: Employee[];
}) {
	const units = [
		...new Set(employees.map((employee) => employee.naucnoZvanje)),
	];
	const positions = [
		...new Set(employees.map((employee) => employee.position)),
	];

	const [query, setQuery] = useState("");
	const [selectedUnit, setSelectedUnit] = useState("Sve");
	const [selectedPosition, setSelectedPosition] = useState("Sve");

	const filteredEmployees = useMemo(() => {
		return employees.filter((employee) => {
			const matchesQuery = `${employee.firstName} ${employee.lastName}`
				.toLocaleLowerCase("sr")
				.includes(query.toLocaleLowerCase("sr"));

			const matchesUnit =
				selectedUnit === "Sve" || employee.naucnoZvanje === selectedUnit;

			const matchesPosition =
				selectedPosition === "Sve" || employee.position === selectedPosition;

			return matchesQuery && matchesUnit && matchesPosition;
		});
	}, [query, selectedUnit, selectedPosition]);

	const filtersActive =
		query !== "" || selectedUnit !== "Sve" || selectedPosition !== "Sve";

	function clearFilters() {
		setQuery("");
		setSelectedUnit("Sve");
		setSelectedPosition("Sve");
	}

	return (
		<>
			<PageHeader
				title="Svi zaposleni"
				description="Pregled zaposlenih Instituta prema imenu, poziciji i organizacionoj jedinici."
				breadcrumbs={[
					{
						label: "Istraživači i zaposleni",
						href: "/istrazivaci-i-zaposleni",
					},
					{
						label: "Svi zaposleni",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="p-5 border rounded-2xl border-stone-200 bg-stone-50 md:p-6">
						<div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
							<SlidersHorizontal
								className="w-4 h-4 text-institute-700"
								aria-hidden="true"
							/>
							Pretraga i filteri
						</div>

						<div className="mt-5 grid gap-4 lg:grid-cols-[1fr_280px_240px_auto]">
							<label className="relative block">
								<span className="sr-only">Pretražite zaposlene</span>

								<Search
									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
									aria-hidden="true"
								/>

								<input
									type="search"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
									placeholder="Ime i prezime"
									className="w-full py-3 pl-10 pr-4 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								/>
							</label>

							<label>
								<span className="sr-only">Organizaciona jedinica</span>

								<select
									value={selectedUnit}
									onChange={(event) => setSelectedUnit(event.target.value)}
									className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								>
									<option value="Sve">Sve organizacione jedinice</option>

									{units.map((unit) => (
										<option
											key={unit}
											value={unit}
										>
											{unit}
										</option>
									))}
								</select>
							</label>

							<label>
								<span className="sr-only">Pozicija</span>

								<select
									value={selectedPosition}
									onChange={(event) => setSelectedPosition(event.target.value)}
									className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								>
									<option value="Sve">Sve pozicije</option>

									{positions.map((position) => (
										<option
											key={position}
											value={position}
										>
											{position}
										</option>
									))}
								</select>
							</label>

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
								{filteredEmployees.length}
							</span>{" "}
							zaposlenih
						</p>

						<p className="text-sm text-stone-500">Ukupno: {employees.length}</p>
					</div>

					{filteredEmployees.length > 0 ? (
						<div className="grid gap-5 mt-6 lg:grid-cols-2">
							{filteredEmployees.map((employee, a) => (
								// <EmployeeCard
								// 	key={a}
								// 	{...employee}
								// />
								<CompactEmployeeCard
									key={a}
									{...employee}
								/>
							))}
						</div>
					) : (
						<EmptyEmployeesState onClear={clearFilters} />
					)}
				</Container>
			</Section>
		</>
	);
}

// type CompactEmployeeCardProps = {
// 	employee: Employee;
// };

// function CompactEmployeeCard({ employee }: CompactEmployeeCardProps) {
// 	return (
// 		<a
// 			href={employee.profileUrl}
// 			className="group flex min-h-36 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
// 		>
// 			<div className="overflow-hidden w-28 shrink-0 bg-stone-100 sm:w-32">
// 				<img
// 					src={employee.image}
// 					alt={employee.fullName}
// 					className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
// 				/>
// 			</div>

// 			<div className="flex flex-col justify-center flex-1 min-w-0 px-5 py-4">
// 				<h2 className="text-lg font-semibold tracking-tight transition text-stone-900 group-hover:text-institute-800">
// 					{employee.fullName}
// 				</h2>

// 				<p className="mt-2 text-sm font-medium text-institute-700">
// 					{employee.scientificTitle}
// 				</p>

// 				<p className="mt-2 text-sm line-clamp-1 text-stone-600">
// 					{employee.position}
// 				</p>

// 				<p className="mt-1 text-xs line-clamp-1 text-stone-500">
// 					{employee.unit}
// 				</p>
// 			</div>
// 		</a>
// 	);
// }

type EmptyEmployeesStateProps = {
	onClear: () => void;
};

function EmptyEmployeesState({ onClear }: EmptyEmployeesStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađenih zaposlenih
			</h2>

			<p className="max-w-lg mx-auto mt-3 text-sm leading-6 text-stone-600">
				Promenite pojam pretrage ili izaberite druge vrednosti filtera.
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
