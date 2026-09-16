"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";

import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import { CompactEmployeeCard } from "@/app/components/CompactEmployeeCard";

import { Employee } from "@/app/types/employee";

import { routeTranslations } from "@/app/lib/language/routes";

type ResearchersContent = {
	card: {
		learnMore: string;
	};
	pageHeader: {
		title: string;
		description: string;
		breadcrumbResearchers: string;
		breadcrumbCurrent: string;
	};

	filters: {
		title: string;

		searchLabel: string;
		searchPlaceholder: string;

		scientificTitleLabel: string;
		allScientificTitles: string;

		positionLabel: string;
		allPositions: string;

		clear: string;
	};

	results: {
		shown: string;
		researchers: string;
		total: string;
	};

	empty: {
		title: string;
		description: string;
		clear: string;
	};
};

export default function IstrazivaciPageContent({
	employees,
	content,
	lang,
}: {
	employees: Employee[];
	content: ResearchersContent;
	lang: "sr" | "en";
}) {
	const scientificTitles = [
		...new Set(
			employees.map((employee) => employee.naucnoZvanje).filter(Boolean),
		),
	];

	const positions = [
		...new Set(employees.map((employee) => employee.position).filter(Boolean)),
	];

	const [query, setQuery] = useState("");

	const [selectedScientificTitle, setSelectedScientificTitle] = useState("");

	const [selectedPosition, setSelectedPosition] = useState("");

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const filteredEmployees = useMemo(() => {
		const normalizedQuery = normalizeSearch(query);

		return employees.filter((employee) => {
			const fullName = `${employee.firstName} ${employee.lastName}`;

			const matchesQuery =
				normalizedQuery === "" ||
				normalizeSearch(fullName).includes(normalizedQuery);

			const matchesScientificTitle =
				selectedScientificTitle === "" ||
				employee.naucnoZvanje === selectedScientificTitle;

			const matchesPosition =
				selectedPosition === "" || employee.position === selectedPosition;

			return matchesQuery && matchesScientificTitle && matchesPosition;
		});
	}, [employees, query, selectedScientificTitle, selectedPosition]);

	const filtersActive =
		query !== "" || selectedScientificTitle !== "" || selectedPosition !== "";

	function clearFilters() {
		setQuery("");
		setSelectedScientificTitle("");
		setSelectedPosition("");
	}

	return (
		<>
			<PageHeader
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumbResearchers,
						href: localizeHref("/istrazivaci"),
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
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

							{content.filters.title}
						</div>

						<div className="mt-5 grid gap-4 lg:grid-cols-[1fr_280px_240px_auto]">
							<label className="relative block">
								<span className="sr-only">{content.filters.searchLabel}</span>

								<Search
									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
									aria-hidden="true"
								/>

								<input
									type="search"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
									placeholder={content.filters.searchPlaceholder}
									className="w-full py-3 pl-10 pr-4 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								/>
							</label>

							<label>
								<span className="sr-only">
									{content.filters.scientificTitleLabel}
								</span>

								<select
									value={selectedScientificTitle}
									onChange={(event) =>
										setSelectedScientificTitle(event.target.value)
									}
									className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								>
									<option value="">
										{content.filters.allScientificTitles}
									</option>

									{scientificTitles.map((title) => (
										<option
											key={title}
											value={title}
										>
											{title}
										</option>
									))}
								</select>
							</label>

							<label>
								<span className="sr-only">{content.filters.positionLabel}</span>

								<select
									value={selectedPosition}
									onChange={(event) => setSelectedPosition(event.target.value)}
									className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								>
									<option value="">{content.filters.allPositions}</option>

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

								{content.filters.clear}
							</button>
						</div>
					</div>

					<div className="flex items-center justify-between gap-4 mt-8">
						<p className="text-sm text-stone-600">
							{content.results.shown}{" "}
							<span className="font-semibold text-stone-900">
								{filteredEmployees.length}
							</span>{" "}
							{content.results.researchers}
						</p>

						<p className="text-sm text-stone-500">
							{content.results.total}: {employees.length}
						</p>
					</div>

					{filteredEmployees.length > 0 ? (
						<div className="grid gap-5 mt-6 lg:grid-cols-2">
							{filteredEmployees.map((employee, index) => (
								<CompactEmployeeCard
									key={
										employee.email ??
										`${employee.firstName}-${employee.lastName}-${index}`
									}
									{...employee}
									lang={lang}
									learnMoreLabel={content.card.learnMore}
								/>
							))}
						</div>
					) : (
						<EmptyEmployeesState
							onClear={clearFilters}
							content={content.empty}
						/>
					)}
				</Container>
			</Section>
		</>
	);
}

type EmptyEmployeesStateProps = {
	onClear: () => void;

	content: {
		title: string;
		description: string;
		clear: string;
	};
};

function EmptyEmployeesState({ onClear, content }: EmptyEmployeesStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				{content.title}
			</h2>

			<p className="max-w-lg mx-auto mt-3 text-sm leading-6 text-stone-600">
				{content.description}
			</p>

			<button
				type="button"
				onClick={onClear}
				className="mt-6 rounded-md border border-institute-700 px-5 py-2.5 text-sm font-semibold text-institute-800 transition hover:bg-institute-50"
			>
				{content.clear}
			</button>
		</div>
	);
}

function normalizeSearch(value: string) {
	return value
		.toLocaleLowerCase("sr")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "dj")
		.trim();
}
