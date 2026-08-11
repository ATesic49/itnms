"use client";
//Promeni projekte u ono sto oni trebaju biti
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

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import { Project } from "@/app/types/projects";
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

type Institution = {
	name: string;
	url?: string;
};

// type ScientificProject = {
// 	id: string;
// 	title: string;
// 	acronym: string;
// 	abstract: string;
// 	projectUrl?: string;
// 	funder: string;
// 	program: string;
// 	startDate: string;
// 	endDate: string;
// 	status: "Aktivan" | "Završen";
// 	team: TeamMember[];
// 	institutions: Institution[];
// };

// const projects: ScientificProject[] = [
// 	{
// 		id: "mineral-plus",
// 		title: "Razvoj naprednih materijala za održivu preradu mineralnih sirovina",
// 		acronym: "MINERAL+",
// 		abstract:
// 			"Projekat je usmeren na razvoj novih tehnoloških postupaka i materijala koji omogućavaju efikasniju, ekonomičniju i ekološki prihvatljiviju preradu mineralnih sirovina. Istraživanja obuhvataju karakterizaciju sirovina, laboratorijska ispitivanja i razvoj mogućnosti za buduću industrijsku primenu.",
// 		projectUrl: "https://example.com/mineral-plus",
// 		funder: "Fond za nauku Republike Srbije",
// 		program: "IDEJE",
// 		startDate: "2025.",
// 		endDate: "2027.",
// 		status: "Aktivan",
// 		team: [
// 			{
// 				name: "Dr Ime Prezime",
// 				profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/ime-prezime",
// 			},
// 			{
// 				name: "Dr Drugo Prezime",
// 				profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/drugo-prezime",
// 			},
// 			{
// 				name: "MSc Treće Prezime",
// 			},
// 		],
// 		institutions: [
// 			{
// 				name: "ITNMS",
// 				url: "https://itnms.ac.rs",
// 			},
// 			{
// 				name: "Univerzitet u Beogradu",
// 				url: "https://www.bg.ac.rs",
// 			},
// 		],
// 	},
// 	{
// 		id: "eco-mine",
// 		title: "Unapređenje procesa tretmana industrijskog i rudarskog otpada",
// 		acronym: "ECO-MINE",
// 		abstract:
// 			"Cilj projekta je razvoj održivih postupaka za karakterizaciju i tretman industrijskog i rudarskog otpada. Posebna pažnja posvećena je izdvajaju korisnih komponenti, smanjenju uticaja na životnu sredinu i mogućnostima ponovne upotrebe tretiranih materijala.",
// 		funder: "Fond za nauku Republike Srbije",
// 		program: "Dokaz koncepta",
// 		startDate: "2023.",
// 		endDate: "2025.",
// 		status: "Završen",
// 		team: [
// 			{
// 				name: "Dr Primer Istraživač",
// 			},
// 			{
// 				name: "Dr Primer Saradnik",
// 			},
// 		],
// 		institutions: [
// 			{
// 				name: "ITNMS",
// 			},
// 			{
// 				name: "Partnerska naučnoistraživačka organizacija",
// 			},
// 		],
// 	},
// ];

const statuses = ["Aktivan", "Završen"];

// const programs = [...new Set(projects.map((project) => project.program))];

//

export default function ScientificProjectsPage({
	projectss,
	title,
}: {
	projectss: Project[];
	title?: string;
}) {
	const [query, setQuery] = useState(title || "");
	const [selectedStatus, setSelectedStatus] = useState("Svi");
	const [selectedProgram, setSelectedProgram] = useState("Svi");
	const [selectedFunder, setSelectedFunder] = useState("Svi");
	const fundera = [...new Set(projectss.map((project) => project.finansijer))];
	const funders = fundera.filter((value) => value !== undefined);
	console.log(title, "aa");

	const programs = [...new Set(projectss.map((project) => project.nio))];
	const filteredProjects = useMemo(() => {
		const normalizedQuery = query.toLocaleLowerCase("sr");

		return projectss.filter((project) => {
			const matchesQuery =
				project.projectName.toLocaleLowerCase("sr").includes(normalizedQuery) ||
				project.akronim.toLocaleLowerCase("sr").includes(normalizedQuery) ||
				project.apstrakt.toLocaleLowerCase("sr").includes(normalizedQuery);

			const matchesStatus =
				selectedStatus === "Svi" || project.status === selectedStatus;

			const matchesProgram =
				selectedProgram === "Svi" || project.nio === selectedProgram;

			const matchesFunder =
				selectedFunder === "Svi" || project.finansijer === selectedFunder;

			return matchesQuery && matchesStatus && matchesProgram && matchesFunder;
		});
	}, [query, selectedStatus, selectedProgram, selectedFunder]);

	const filtersActive =
		query !== "" ||
		selectedStatus !== "Svi" ||
		selectedProgram !== "Svi" ||
		selectedFunder !== "Svi";

	function clearFilters() {
		setQuery("");
		setSelectedStatus("Svi");
		setSelectedProgram("Svi");
		setSelectedFunder("Svi");
	}

	return (
		<>
			<PageHeader
				title="Naučni projekti"
				description="Pregled naučnoistraživačkih projekata, projektnih timova, programa, finansijera i partnerskih institucija."
				breadcrumbs={[
					{
						label: "Projekti",
						href: "/projekti",
					},
					{
						label: "Naučni projekti",
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

						<div className="mt-5 grid gap-4 xl:grid-cols-[1fr_180px_220px_280px_auto]">
							<label className="relative block">
								<span className="sr-only">Pretražite projekte</span>

								<Search
									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
									aria-hidden="true"
								/>

								<input
									type="search"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
									placeholder="Naziv, akronim ili pojam"
									className="w-full py-3 pl-10 pr-4 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								/>
							</label>

							<select
								value={selectedStatus}
								onChange={(event) => setSelectedStatus(event.target.value)}
								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								aria-label="Status projekta"
							>
								<option value="Svi">Svi statusi</option>

								{statuses.map((status, a) => (
									<option
										key={a}
										value={status}
									>
										{status}
									</option>
								))}
							</select>

							{/* <select
								value={selectedProgram}
								onChange={(event) => setSelectedProgram(event.target.value)}
								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								aria-label="Program"
							>
								<option value="Svi">Svi programi</option>

								{programs.map((program, a) => (
									<option
										key={a}
										value={program}
									>
										{program}
									</option>
								))}
							</select> */}

							<select
								value={selectedFunder}
								onChange={(event) => setSelectedFunder(event.target.value)}
								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								aria-label="Finansijer"
							>
								<option value="Svi">Svi finansijeri</option>

								{funders.map((funder, a) => (
									<option
										key={a}
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
								Poništi
							</button>
						</div>
					</div>

					<div className="flex items-center justify-between gap-4 mt-8">
						<p className="text-sm text-stone-600">
							Prikazano{" "}
							<span className="font-semibold text-stone-900">
								{filteredProjects.length}
							</span>{" "}
							projekata
						</p>

						<p className="text-sm text-stone-500">Ukupno: {projectss.length}</p>
					</div>

					{filteredProjects.length > 0 ? (
						<div className="mt-6 space-y-8">
							{filteredProjects.map((project, k) => (
								<ScientificProjectCard
									key={k}
									project={project}
								/>
							))}
						</div>
					) : (
						<EmptyProjectsState onClear={clearFilters} />
					)}
				</Container>
			</Section>
		</>
	);
}

type ScientificProjectCardProps = {
	project: Project;
};

export function ScientificProjectCard({ project }: ScientificProjectCardProps) {
	return (
		<article className="overflow-hidden transition bg-white border shadow-sm rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md">
			<div className="grid lg:grid-cols-[1fr_300px]">
				<div className="p-6 md:p-8">
					<header>
						<div className="flex flex-wrap items-center gap-3">
							<span
								className={` ${project.akronim == "/" ? "hidden" : "inline-flex"} px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-institute-50 text-institute-800`}
							>
								{project.akronim}
							</span>

							<span
								className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
									project.status === "Aktivan"
										? "bg-mineral-100 text-mineral-800"
										: "bg-stone-100 text-stone-700"
								}`}
							>
								{project.status}
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
							Apstrakt projekta
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
								Tim saradnika
							</h3>
						</div>

						<div className="flex flex-wrap mt-3 gap-x-4 gap-y-4 ">
							{/* {project.team.map((member) =>
								member.profileUrl ? (
									<a
										key={member.name}
										href={member.profileUrl}
										className="text-sm font-medium transition text-institute-700 hover:text-institute-900 hover:underline"
									>
										{member.name}
									</a>
								) : (
									<span
										key={member.name}
										className="text-sm text-stone-600"
									>
										{member.name}
									</span>
								),
							)} */}
							{handleZaposleni(project.timSaradnika).map((member, i) => (
								<a
									key={i}
									href={
										"/istrazivaci-i-zaposleni/istrazivaci/" +
										member.ime.replaceAll(" ", "-").toLowerCase() +
										"?zaposleni=true"
									}
									className="text-sm font-medium transition text-institute- hover:text-institute-00 hover:underline"
								>
									<span
										className={` ${member.rukovodilac ? "text-institute-50  bg-mineral-700" : "text-institute-700 bg-mineral-200"} p-1.5 px-3 rounded-lg  bg-mineral-200`}
									>
										{member.ime}
									</span>
								</a>
							))}
						</div>
					</section>

					{project.link && project.link != "/" && (
						<a
							href={project.link}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 px-5 py-3 mt-8 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Link ka projektu
							<ExternalLink
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					)}
				</div>

				<aside className="p-6 border-t border-stone-200 bg-stone-50 md:p-8 lg:border-l lg:border-t-0">
					<ProjectInfo
						icon={CalendarDays}
						label="Period trajanja"
					>
						{project.period}
					</ProjectInfo>

					<ProjectInfo
						icon={Landmark}
						label="Finansijer"
					>
						{project.finansijer}
					</ProjectInfo>

					<ProjectInfo
						icon={Building2}
						label="NIO učesnici"
					>
						<ul className="space-y-2">
							{/* {project.institutions.map((institution) => (
								<li key={institution.name}>
									{institution.url ? (
										<a
											href={institution.url}
											target="_blank"
											rel="noreferrer"
											className="font-medium transition text-institute-700 hover:text-institute-900 hover:underline"
										>
											{institution.name}
										</a>
									) : (
										institution.name
									)}
								</li>
							))} */}
							{project.nio}
						</ul>
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

type EmptyProjectsStateProps = {
	onClear: () => void;
};

function EmptyProjectsState({ onClear }: EmptyProjectsStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađenih projekata
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
