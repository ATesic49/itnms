"use client";
import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { CompactProjectCard } from "../components/CompactProjectCard";
import { Header } from "../components/Header";

const page = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-16 px-16 py-32">
			<h2 className="text-2xl">PROJEKTI</h2>
			<ProjectCard
				title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
				acronym="MINERAL+"
				abstract="Projekat je usmeren na razvoj novih tehnoloških postupaka i naprednih materijala koji omogućavaju efikasniju, ekonomičniju i ekološki prihvatljiviju preradu mineralnih sirovina."
				projectUrl="https://projekat.rs"
				funder="Fond za nauku Republike Srbije"
				startDate="1. 1. 2025."
				endDate="31. 12. 2027."
				team={[
					{
						name: "Dr Ime Prezime",
						profileUrl: "/istrazivaci/ime-prezime",
					},
					{
						name: "Dr Drugo Prezime",
						profileUrl: "/istrazivaci/drugo-prezime",
					},
					{
						name: "MSc Treće Prezime",
					},
				]}
				institutions={[
					{
						name: "ITNMS",
						url: "https://itnms.ac.rs",
					},
					{
						name: "Univerzitet u Beogradu",
						url: "https://www.bg.ac.rs",
					},
				]}
			/>
			<div className="grid gap-6 lg:grid-cols-2">
				<CompactProjectCard
					acronym="MINERAL+"
					title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
					abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
					projectUrl="/projekti/mineral-plus"
					funder="Fond za nauku Republike Srbije"
					period="2025–2027"
					teamCount={8}
					institutionCount={3}
				/>
				<CompactProjectCard
					acronym="MINERAL+"
					title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
					abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
					projectUrl="/projekti/mineral-plus"
					funder="Fond za nauku Republike Srbije"
					period="2025–2027"
					teamCount={8}
					institutionCount={3}
				/>
				<CompactProjectCard
					acronym="MINERAL+"
					title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
					abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
					projectUrl="/projekti/mineral-plus"
					funder="Fond za nauku Republike Srbije"
					period="2025–2027"
					teamCount={8}
					institutionCount={3}
				/>
				<CompactProjectCard
					acronym="MINERAL+"
					title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
					abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
					projectUrl="/projekti/mineral-plus"
					funder="Fond za nauku Republike Srbije"
					period="2025–2027"
					teamCount={8}
					institutionCount={3}
				/>
				<CompactProjectCard
					acronym="MINERAL+"
					title="Razvoj naprednih materijala za održivu preradu mineralnih sirovina"
					abstract="Projekat je usmeren na razvoj tehnoloških postupaka koji omogućavaju efikasniju i ekološki prihvatljiviju preradu mineralnih sirovina."
					projectUrl="/projekti/mineral-plus"
					funder="Fond za nauku Republike Srbije"
					period="2025–2027"
					teamCount={8}
					institutionCount={3}
				/>
			</div>
		</div>
	);
};

export default page;
