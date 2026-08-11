import { ArrowRight, ExternalLink, Factory, FlaskConical } from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import slika1 from "@/public/imgs/IMG_9943.jpg";
import Image from "next/image";
// Podsetnik: dodaj inventory
export default function ProjectsPage() {
	return (
		<>
			<PageHeader
				title="Projekti"
				description="Pregled naučnoistraživačkih i industrijskih projekata Instituta."
				breadcrumbs={[
					{
						label: "Projekti",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-8 lg:grid-cols-2">
						<ProjectCategoryCard
							title="Naučni projekti"
							description="Pregled aktivnih i završenih naučnoistraživačkih projekata, istraživačkih timova, finansijera i partnerskih institucija."
							href="/projekti/naucni"
							icon={FlaskConical}
						/>

						<ProjectCategoryCard
							title="Industrijski projekti"
							description="Pregled saradnje sa privredom i industrijskih projekata Instituta."
							href="https://example.com"
							icon={Factory}
							external
						/>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Nauka i primena
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Projekti koji povezuju istraživanja, razvoj i industriju
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								Institut učestvuje u domaćim i međunarodnim naučnoistraživačkim
								programima, kao i u razvojnim i stručnim projektima realizovanim
								u saradnji sa privredom.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Projektni timovi okupljaju istraživače Instituta i saradnike iz
								drugih naučnoistraživačkih organizacija, univerziteta i
								industrijskih sistema.
							</p>
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={slika1}
								alt="Istraživački tim ITNMS-a tokom rada na projektu"
								className="object-cover w-full aspect-4/3"
							/>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

type ProjectCategoryCardProps = {
	title: string;
	description: string;
	href: string;
	icon: React.ElementType;
	external?: boolean;
};

function ProjectCategoryCard({
	title,
	description,
	href,
	icon: Icon,
	external = false,
}: ProjectCategoryCardProps) {
	return (
		<a
			href={href}
			target={external ? "_blank" : undefined}
			rel={external ? "noreferrer" : undefined}
			className="flex flex-col p-8 transition bg-white border shadow-sm group min-h-75 rounded-2xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
		>
			<div className="flex items-center justify-center transition h-14 w-14 rounded-xl bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
				<Icon
					className="h-7 w-7"
					aria-hidden="true"
				/>
			</div>

			<h2 className="text-2xl font-semibold tracking-tight transition mt-7 text-stone-900 group-hover:text-institute-800">
				{title}
			</h2>

			<p className="max-w-xl mt-4 text-base leading-7 text-stone-600">
				{description}
			</p>

			<span className="inline-flex items-center gap-2 pt-8 mt-auto text-sm font-semibold text-institute-700">
				{external ? "Otvorite stranicu" : "Pogledajte projekte"}

				{external ? (
					<ExternalLink
						className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						aria-hidden="true"
					/>
				) : (
					<ArrowRight
						className="w-4 h-4 transition-transform group-hover:translate-x-1"
						aria-hidden="true"
					/>
				)}
			</span>
		</a>
	);
}

// "use client";
// import React from "react";
// import { ProjectCard } from "../components/ProjectCard";
// import { CompactProjectCard } from "../components/CompactProjectCard";
// import { Header } from "../components/Header";

// const page = () => {
// 	return (
// <div className="flex flex-col items-center justify-center gap-16 px-16 py-32">
// 	<h2 className="text-2xl">PROJEKTI</h2>
// 	<ProjectCard
// 		title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
// 		acronym="MINERAL+"
// 		abstract="Projekat je usmeren na razvoj novih tehnoloških postupaka i naprednih materijala koji omogućavaju efikasniju, ekonomičniju i ekološki prihvatljiviju preradu mineralnih sirovina."
// 		projectUrl="https://projekat.rs"
// 		funder="Fond za nauku Republike Srbije"
// 		startDate="1. 1. 2025."
// 		endDate="31. 12. 2027."
// 		team={[
// 			{
// 				name: "Dr Ime Prezime",
// 				profileUrl: "/istrazivaci/ime-prezime",
// 			},
// 			{
// 				name: "Dr Drugo Prezime",
// 				profileUrl: "/istrazivaci/drugo-prezime",
// 			},
// 			{
// 				name: "MSc Treće Prezime",
// 			},
// 		]}
// 		institutions={[
// 			{
// 				name: "ITNMS",
// 				url: "https://itnms.ac.rs",
// 			},
// 			{
// 				name: "Univerzitet u Beogradu",
// 				url: "https://www.bg.ac.rs",
// 			},
// 		]}
// 	/>
// 	<div className="grid gap-6 lg:grid-cols-2">
// 		<CompactProjectCard
// 			acronym="MINERAL+"
// 			title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
// 			abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
// 			projectUrl="/projekti/mineral-plus"
// 			funder="Fond za nauku Republike Srbije"
// 			period="2025–2027"
// 			teamCount={8}
// 			institutionCount={3}
// 		/>
// 		<CompactProjectCard
// 			acronym="MINERAL+"
// 			title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
// 			abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
// 			projectUrl="/projekti/mineral-plus"
// 			funder="Fond za nauku Republike Srbije"
// 			period="2025–2027"
// 			teamCount={8}
// 			institutionCount={3}
// 		/>
// 		<CompactProjectCard
// 			acronym="MINERAL+"
// 			title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
// 			abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
// 			projectUrl="/projekti/mineral-plus"
// 			funder="Fond za nauku Republike Srbije"
// 			period="2025–2027"
// 			teamCount={8}
// 			institutionCount={3}
// 		/>
// 		<CompactProjectCard
// 			acronym="MINERAL+"
// 			title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
// 			abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
// 			projectUrl="/projekti/mineral-plus"
// 			funder="Fond za nauku Republike Srbije"
// 			period="2025–2027"
// 			teamCount={8}
// 			institutionCount={3}
// 		/>
// 		<CompactProjectCard
// 			acronym="MINERAL+"
// 			title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
// 			abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
// 			projectUrl="/projekti/mineral-plus"
// 			funder="Fond za nauku Republike Srbije"
// 			period="2025–2027"
// 			teamCount={8}
// 			institutionCount={3}
// 		/>
// 	</div>
// </div>
// 	);
// };

// export default page;
