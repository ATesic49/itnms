import { ArrowRight, Cone } from "lucide-react";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { ProjectCard } from "@/app/components/ProjectCard";
import { getProjects } from "../lib/google-sheets/projectss";
import { ScientificProjectCard } from "../projekti/naucni/CompactProjectPageContent";
import Link from "next/link";
type FeaturedProjectsSectionProps = {
	content: {
		eyebrow: string;
		title: string;
		description: string;
		allProjects: string;
	};
	lang: "sr" | "en";
};

export async function FeaturedProjectsSection({
	content,
	lang,
}: FeaturedProjectsSectionProps) {
	//TODO Projekti u toku
	const projects = (await getProjects(lang))
		.filter((a) => a.status == "Aktivan")
		.splice(0, 2);
	return (
		<Section background="stone">
			<Container>
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							{content.eyebrow}
						</p>

						<h2 className="max-w-3xl mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							{content.title}
						</h2>

						<p className="max-w-2xl mt-4 text-base leading-7 text-stone-600">
							{content.description}
						</p>
					</div>

					<Link
						href="/projekti/naucni"
						className="inline-flex items-center self-start gap-2 text-sm font-semibold transition shrink-0 text-institute-700 hover:text-institute-900 lg:self-auto"
					>
						{content.allProjects}
						<ArrowRight
							className="w-4 h-4"
							aria-hidden="true"
						/>
					</Link>
				</div>

				<div className="mt-12 space-y-8">
					{projects.map((project, a) => (
						<ScientificProjectCard
							key={a}
							project={project}
						/>
					))}
				</div>
			</Container>
		</Section>
	);
}
