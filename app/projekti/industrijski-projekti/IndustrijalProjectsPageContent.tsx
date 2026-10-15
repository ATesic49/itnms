"use client";

import {
	Building2,
	CalendarDays,
	FileCheck2,
	FileText,
	Landmark,
	Search,
	SlidersHorizontal,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import type {
	IndustrialProject,
	IndustrialProjectCategory,
} from "@/app/lib/google-sheets/industrijalProjects";

import type { Language } from "@/app/lib/language/dictionary";
import { localizeHref } from "@/app/lib/language/localizeHref";

type IndustrialProjectsContent = {
	pageHeader: {
		title: string;
		description: string;
		breadcrumbProjects: string;
		breadcrumbCurrent: string;
	};

	intro: {
		eyebrow: string;
		title: string;
		description: string;
	};

	filters: {
		title: string;
		searchPlaceholder: string;
		searchLabel: string;

		allCategories: string;
		allYears: string;

		categoryLabel: string;
		yearLabel: string;

		clear: string;
	};

	categories: {
		miningProject: string;
		technicalControl: string;
		elaborate: string;
		study: string;
	};

	results: {
		showing: string;
		of: string;
		projects: string;
	};

	card: {
		investor: string;
		period: string;
	};

	empty: {
		title: string;
		description: string;
		clear: string;
	};
};

type Props = {
	projects: readonly IndustrialProject[];
	lang: Language;
	content: IndustrialProjectsContent;
};

export default function IndustrialProjectsPageContent({
	projects,
	lang,
	content,
}: Props) {
	const [query, setQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<
		IndustrialProjectCategory | "all"
	>("all");
	const [selectedYear, setSelectedYear] = useState("all");

	const isEnglish = lang === "en";

	const years = useMemo(() => {
		return [
			...new Set(
				projects
					.map((project) => project.sortYear)
					.filter((year): year is number => typeof year === "number"),
			),
		].sort((a, b) => b - a);
	}, [projects]);

	const filteredProjects = useMemo(() => {
		const normalizedQuery = query
			.trim()
			.toLocaleLowerCase(lang === "sr" ? "sr" : "en");

		return projects.filter((project) => {
			const searchableText = [
				project.title,
				project.investor,
				project.period,
				project.note,
			]
				.filter(Boolean)
				.join(" ")
				.toLocaleLowerCase(lang === "sr" ? "sr" : "en");

			const matchesQuery =
				normalizedQuery === "" || searchableText.includes(normalizedQuery);

			const matchesCategory =
				selectedCategory === "all" || project.category === selectedCategory;

			const matchesYear =
				selectedYear === "all" || project.sortYear?.toString() === selectedYear;

			return matchesQuery && matchesCategory && matchesYear;
		});
	}, [projects, query, selectedCategory, selectedYear, lang]);

	const filtersActive =
		query !== "" || selectedCategory !== "all" || selectedYear !== "all";

	function clearFilters() {
		setQuery("");
		setSelectedCategory("all");
		setSelectedYear("all");
	}

	const projectsHref = localizeHref("/projekti", isEnglish);

	return (
		<>
			<PageHeader
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumbProjects,
						href: projectsHref,
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							{content.intro.eyebrow}
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							{content.intro.title}
						</h2>

						<p className="mt-4 text-base leading-8 text-stone-600">
							{content.intro.description}
						</p>
					</div>

					<div className="p-5 mt-10 border rounded-2xl border-stone-200 bg-stone-50 md:p-6">
						<div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
							<SlidersHorizontal
								className="w-4 h-4 text-institute-700"
								aria-hidden="true"
							/>

							{content.filters.title}
						</div>

						<div className="mt-5 grid gap-4 lg:grid-cols-[1fr_230px_180px_auto]">
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

							<select
								value={selectedCategory}
								onChange={(event) =>
									setSelectedCategory(
										event.target.value as IndustrialProjectCategory | "all",
									)
								}
								className={selectClasses}
								aria-label={content.filters.categoryLabel}
							>
								<option value="all">{content.filters.allCategories}</option>

								<option value="mining-project">
									{content.categories.miningProject}
								</option>

								<option value="technical-control">
									{content.categories.technicalControl}
								</option>

								<option value="elaborate">
									{content.categories.elaborate}
								</option>

								<option value="study">{content.categories.study}</option>
							</select>

							<select
								value={selectedYear}
								onChange={(event) => setSelectedYear(event.target.value)}
								className={selectClasses}
								aria-label={content.filters.yearLabel}
							>
								<option value="all">{content.filters.allYears}</option>

								{years.map((year) => (
									<option
										key={year}
										value={year}
									>
										{year}
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

								{content.filters.clear}
							</button>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-4 mt-8">
						<p className="text-sm text-stone-600">
							{content.results.showing}{" "}
							<span className="font-semibold text-stone-900">
								{filteredProjects.length}
							</span>{" "}
							{content.results.of}{" "}
							<span className="font-semibold text-stone-900">
								{projects.length}
							</span>{" "}
							{content.results.projects}
						</p>
					</div>

					{filteredProjects.length > 0 ? (
						<div className="grid gap-5 mt-6">
							{filteredProjects.map((project) => (
								<IndustrialProjectCard
									key={project.id}
									project={project}
									content={content}
								/>
							))}
						</div>
					) : (
						<EmptyState
							content={content}
							onClear={clearFilters}
						/>
					)}
				</Container>
			</Section>
		</>
	);
}

function IndustrialProjectCard({
	project,
	content,
}: {
	project: IndustrialProject;
	content: IndustrialProjectsContent;
}) {
	const category = getCategoryPresentation(project.category, content);

	const Icon = category.icon;

	return (
		<article className="overflow-hidden transition bg-white border shadow-sm rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md">
			<div className="grid md:grid-cols-[110px_1fr]">
				<div className="flex items-center justify-center px-5 py-6 border-b bg-stone-50 border-stone-200 md:border-b-0 md:border-r">
					<div className="flex flex-col items-center text-center">
						<div className="flex items-center justify-center rounded-xl h-11 w-11 bg-institute-50 text-institute-800">
							<Icon
								className="w-5 h-5"
								aria-hidden="true"
							/>
						</div>

						{project.sortYear && (
							<span className="mt-3 text-sm font-semibold text-stone-800">
								{project.sortYear}
							</span>
						)}
					</div>
				</div>

				<div className="p-6 md:p-7">
					<div className="flex flex-wrap items-center gap-3">
						<span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-institute-50 text-institute-800">
							{category.label}
						</span>

						{project.period && (
							<span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500">
								<CalendarDays
									className="w-3.5 h-3.5"
									aria-hidden="true"
								/>

								{project.period}
							</span>
						)}
					</div>

					<h2 className="mt-4 text-xl font-semibold leading-8 tracking-tight text-stone-900 md:text-2xl">
						{project.title}
					</h2>

					{project.note && (
						<p className="max-w-4xl mt-3 text-sm leading-7 text-stone-600">
							{project.note}
						</p>
					)}

					{project.investor && (
						<div className="flex items-start gap-3 pt-5 mt-5 border-t border-stone-100">
							<Building2
								className="w-4 h-4 mt-0.5 shrink-0 text-institute-700"
								aria-hidden="true"
							/>

							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-400">
									{content.card.investor}
								</p>

								<p className="mt-1 text-sm font-medium leading-6 text-stone-700">
									{project.investor}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</article>
	);
}

function getCategoryPresentation(
	category: IndustrialProjectCategory,
	content: IndustrialProjectsContent,
) {
	switch (category) {
		case "mining-project":
			return {
				label: content.categories.miningProject,
				icon: Landmark,
			};

		case "technical-control":
			return {
				label: content.categories.technicalControl,
				icon: FileCheck2,
			};

		case "elaborate":
			return {
				label: content.categories.elaborate,
				icon: FileText,
			};

		case "study":
			return {
				label: content.categories.study,
				icon: FileText,
			};
	}
}

function EmptyState({
	content,
	onClear,
}: {
	content: IndustrialProjectsContent;
	onClear: () => void;
}) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				{content.empty.title}
			</h2>

			<p className="max-w-lg mx-auto mt-3 text-sm leading-6 text-stone-600">
				{content.empty.description}
			</p>

			<button
				type="button"
				onClick={onClear}
				className="mt-6 rounded-md border border-institute-700 px-5 py-2.5 text-sm font-semibold text-institute-800 transition hover:bg-institute-50"
			>
				{content.empty.clear}
			</button>
		</div>
	);
}

const selectClasses =
	"w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-institute-500 focus:ring-2 focus:ring-institute-100";
