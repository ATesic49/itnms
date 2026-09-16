"use client";

import {
	Building2,
	CalendarDays,
	ExternalLink,
	Landmark,
	Search,
	SlidersHorizontal,
	Users,
	X,
} from "lucide-react";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { Project } from "@/app/types/projects";

import { routeTranslations } from "@/app/lib/language/routes";

type Language = "sr" | "en";

type ScientificProjectsContent = {
	pageHeader: {
		title: string;
		description: string;
		breadcrumbProjects: string;
		breadcrumbCurrent: string;
	};

	filters: {
		title: string;

		searchLabel: string;
		searchPlaceholder: string;

		statusLabel: string;
		allStatuses: string;

		funderLabel: string;
		allFunders: string;

		clear: string;
	};

	statuses: {
		active: string;
		completed: string;
	};

	results: {
		shown: string;
		projects: string;
		total: string;
	};

	card: {
		abstract: string;
		team: string;
		projectLink: string;

		duration: string;
		funder: string;
		institutions: string;
	};

	empty: {
		title: string;
		description: string;
		clear: string;
	};
};

type Zaposleni = {
	ime: string;
	rukovodilac: boolean;
};

export function handleZaposleni(value: string): Zaposleni[] {
	return value
		.split(/[,;]/)
		.map((deo) => deo.trim())
		.filter(Boolean)
		.map((deo) => {
			const rukovodilac = /-\s*rukovodilac/i.test(deo);

			const ime = deo
				.replace(/^dr\.?\s+/i, "")
				.replace(/\s*-\s*rukovodilac.*$/i, "")
				.trim()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")
				.replace(/đ/g, "dj")
				.replace(/Đ/g, "Dj");

			return {
				ime,
				rukovodilac,
			};
		});
}

const statuses = ["Aktivan", "Završen"] as const;

export default function ScientificProjectsPage({
	projectss,
	title,
	lang,
	content,
}: {
	projectss: Project[];
	title?: string;
	lang: Language;
	content: ScientificProjectsContent;
}) {
	const [query, setQuery] = useState(title || "");

	const [selectedStatus, setSelectedStatus] = useState("");

	const [selectedFunder, setSelectedFunder] = useState("");

	const funders = [
		...new Set(projectss.map((project) => project.finansijer).filter(Boolean)),
	];

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const filteredProjects = useMemo(() => {
		const normalizedQuery = normalizeSearch(query);

		return projectss.filter((project) => {
			const matchesQuery =
				normalizedQuery === "" ||
				normalizeSearch(project.projectName).includes(normalizedQuery) ||
				normalizeSearch(project.akronim).includes(normalizedQuery) ||
				normalizeSearch(project.apstrakt).includes(normalizedQuery);

			const matchesStatus =
				selectedStatus === "" || project.status === selectedStatus;

			const matchesFunder =
				selectedFunder === "" || project.finansijer === selectedFunder;

			return matchesQuery && matchesStatus && matchesFunder;
		});
	}, [projectss, query, selectedStatus, selectedFunder]);

	const filtersActive =
		query !== "" || selectedStatus !== "" || selectedFunder !== "";

	function clearFilters() {
		setQuery("");
		setSelectedStatus("");
		setSelectedFunder("");
	}

	function getStatusLabel(status: string) {
		if (status === "Aktivan") {
			return content.statuses.active;
		}

		if (status === "Završen") {
			return content.statuses.completed;
		}

		return status;
	}

	return (
		<>
			<PageHeader
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumbProjects,
						href: localizeHref("/projekti"),
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

						<div className="mt-5 grid gap-4 xl:grid-cols-[1fr_180px_280px_auto]">
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
								value={selectedStatus}
								onChange={(event) => setSelectedStatus(event.target.value)}
								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								aria-label={content.filters.statusLabel}
							>
								<option value="">{content.filters.allStatuses}</option>

								{statuses.map((status, i) => (
									<option
										key={i}
										value={status}
									>
										{getStatusLabel(status)}
									</option>
								))}
							</select>

							<select
								value={selectedFunder}
								onChange={(event) => setSelectedFunder(event.target.value)}
								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								aria-label={content.filters.funderLabel}
							>
								<option value="">{content.filters.allFunders}</option>

								{funders.map((funder, i) => (
									<option
										key={i}
										value={funder}
									>
										{funder}
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

					<div className="flex items-center justify-between gap-4 mt-8">
						<p className="text-sm text-stone-600">
							{content.results.shown}{" "}
							<span className="font-semibold text-stone-900">
								{filteredProjects.length}
							</span>{" "}
							{content.results.projects}
						</p>

						<p className="text-sm text-stone-500">
							{content.results.total}: {projectss.length}
						</p>
					</div>

					{filteredProjects.length > 0 ? (
						<div className="mt-6 space-y-8">
							{filteredProjects.map((project, index) => (
								<ScientificProjectCard
									key={index}
									project={project}
									lang={lang}
									content={content}
									localizeHref={localizeHref}
									statusLabel={getStatusLabel(project.status)}
								/>
							))}
						</div>
					) : (
						<EmptyProjectsState
							onClear={clearFilters}
							content={content.empty}
						/>
					)}
				</Container>
			</Section>
		</>
	);
}

type ScientificProjectCardProps = {
	project: Project;
	lang: Language;
	content: ScientificProjectsContent;
	localizeHref: (href: string) => string;
	statusLabel: string;
};

function ScientificProjectCard({
	project,
	content,
	localizeHref,
	statusLabel,
}: ScientificProjectCardProps) {
	return (
		<article className="overflow-hidden transition bg-white border shadow-sm rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md">
			<div className="grid lg:grid-cols-[1fr_300px]">
				<div className="p-6 md:p-8">
					<header>
						<div className="flex flex-wrap items-center gap-3">
							{project.akronim !== "/" && (
								<span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-institute-50 text-institute-800">
									{project.akronim}
								</span>
							)}

							<span
								className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
									project.status === "Aktivan"
										? "bg-mineral-100 text-mineral-800"
										: "bg-stone-100 text-stone-700"
								}`}
							>
								{statusLabel}
							</span>

							<span className="text-sm font-medium text-stone-500">
								{project.period}
							</span>
						</div>

						<h2 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-stone-900 md:text-3xl">
							{project.projectName}
						</h2>
					</header>

					<section className="mt-6">
						<h3 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
							{content.card.abstract}
						</h3>

						<p className="mt-3 text-sm leading-7 text-stone-600 md:text-base">
							{project.apstrakt}
						</p>
					</section>

					<section className="mt-7">
						<div className="flex items-center gap-2">
							<Users
								className="w-4 h-4 text-mineral-700"
								aria-hidden="true"
							/>

							<h3 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
								{content.card.team}
							</h3>
						</div>

						<div className="flex flex-wrap mt-3 gap-x-4 gap-y-4">
							{handleZaposleni(project.timSaradnika).map((member, index) => {
								const profilePath = `/istrazivaci/${member.ime
									.replaceAll(" ", "-")
									.toLowerCase()}`;

								return (
									<Link
										key={`${member.ime}-${index}`}
										href={`${localizeHref(profilePath)}?zaposleni=true`}
										className="text-sm font-medium hover:underline"
									>
										<span
											className={`rounded-lg px-3 py-1.5 ${
												member.rukovodilac
													? "bg-mineral-700 text-institute-50"
													: "bg-mineral-200 text-institute-700"
											}`}
										>
											{member.ime}
										</span>
									</Link>
								);
							})}
						</div>
					</section>

					{project.link && project.link !== "/" && (
						<a
							href={project.link}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 px-5 py-3 mt-8 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							{content.card.projectLink}

							<ExternalLink
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					)}
				</div>

				<aside className="p-6 border-t border-stone-200 bg-stone-50 md:p-8 lg:border-t-0 lg:border-l">
					<ProjectInfo
						icon={CalendarDays}
						label={content.card.duration}
					>
						{project.period}
					</ProjectInfo>

					<ProjectInfo
						icon={Landmark}
						label={content.card.funder}
					>
						{project.finansijer}
					</ProjectInfo>

					<ProjectInfo
						icon={Building2}
						label={content.card.institutions}
					>
						{project.nio}
					</ProjectInfo>
				</aside>
			</div>
		</article>
	);
}

type ProjectInfoProps = {
	icon: React.ElementType;
	label: string;
	children: React.ReactNode;
};

function ProjectInfo({ icon: Icon, label, children }: ProjectInfoProps) {
	return (
		<section className="py-5 border-b border-stone-200 first:pt-0 last:border-b-0 last:pb-0">
			<div className="flex items-center gap-2">
				<Icon
					className="w-4 h-4 text-mineral-700"
					aria-hidden="true"
				/>

				<h3 className="text-xs font-semibold tracking-wide uppercase text-stone-600">
					{label}
				</h3>
			</div>

			<div className="mt-2 text-sm leading-6 text-stone-700">{children}</div>
		</section>
	);
}

function EmptyProjectsState({
	onClear,
	content,
}: {
	onClear: () => void;
	content: {
		title: string;
		description: string;
		clear: string;
	};
}) {
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
