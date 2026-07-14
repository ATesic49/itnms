import { ArrowRight } from "lucide-react";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { ProjectCard } from "@/app/components/ProjectCard";

const featuredProjects = [
	{
		title: "Razvoj naprednih materijala za održivu preradu mineralnih sirovina",
		acronym: "MINERAL+",
		abstract:
			"Projekat je usmeren na razvoj novih tehnoloških postupaka i materijala koji omogućavaju efikasniju, ekonomičniju i ekološki prihvatljiviju preradu mineralnih sirovina.",
		projectUrl: "https://projekat.rs",
		funder: "Fond za nauku Republike Srbije",
		startDate: "2025.",
		endDate: "2027.",
		team: [
			{
				name: "Dr Ime Prezime",
				profileUrl: "/istrazivaci-i-zaposleni/ime-prezime",
			},
			{
				name: "Dr Drugo Prezime",
				profileUrl: "/istrazivaci-i-zaposleni/drugo-prezime",
			},
			{
				name: "MSc Treće Prezime",
			},
		],
		institutions: [
			{
				name: "ITNMS",
				url: "https://itnms.ac.rs",
			},
			{
				name: "Univerzitet u Beogradu",
				url: "https://www.bg.ac.rs",
			},
		],
	},
	{
		title: "Unapređenje procesa tretmana industrijskog i rudarskog otpada",
		acronym: "ECO-MINE",
		abstract:
			"Cilj projekta je razvoj održivih metoda tretmana industrijskog i rudarskog otpada, izdvajanje korisnih komponenti i smanjenje negativnog uticaja na životnu sredinu.",
		projectUrl: "https://projekat.rs",
		funder: "Fond za nauku Republike Srbije",
		startDate: "2024.",
		endDate: "2026.",
		team: [
			{
				name: "Dr Primer Istraživač",
				profileUrl: "/istrazivaci-i-zaposleni/primer-istrazivac",
			},
			{
				name: "Dr Primer Saradnik",
			},
		],
		institutions: [
			{
				name: "ITNMS",
				url: "https://itnms.ac.rs",
			},
			{
				name: "Partnerska naučnoistraživačka organizacija",
			},
		],
	},
];

export function FeaturedProjectsSection() {
	return (
		<Section background="stone">
			<Container>
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Projekti
						</p>

						<h2 className="max-w-3xl mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Izdvojeni naučnoistraživački projekti
						</h2>

						<p className="max-w-2xl mt-4 text-base leading-7 text-stone-600">
							Pregled odabranih projekata koje Institut realizuje samostalno ili
							u saradnji sa domaćim i međunarodnim partnerima.
						</p>
					</div>

					<a
						href="/projekti/naucni"
						className="inline-flex items-center self-start gap-2 text-sm font-semibold transition shrink-0 text-institute-700 hover:text-institute-900 lg:self-auto"
					>
						Svi naučni projekti
						<ArrowRight
							className="w-4 h-4"
							aria-hidden="true"
						/>
					</a>
				</div>

				<div className="mt-12 space-y-8">
					{featuredProjects.map((project) => (
						<ProjectCard
							key={project.acronym}
							{...project}
						/>
					))}
				</div>
			</Container>
		</Section>
	);
}
