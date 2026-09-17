import {
	ArrowRight,
	Building2,
	History,
	Landmark,
	Network,
	Users,
} from "lucide-react";

import Image from "next/image";

import slika from "@/public/imgs/IMG_9906.jpg";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "../lib/language/dictionary";

export default async function AboutInstitutePage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.about;

	const aboutSections = [
		{
			title: content.structure.sections.about.title,
			description: content.structure.sections.about.description,
			href:
				lang === "en"
					? "/en/about-the-institute/about-itnms"
					: "/o-institutu/o-itnms-u",
			icon: Building2,
		},
		{
			title: content.structure.sections.history.title,
			description: content.structure.sections.history.description,
			href:
				lang === "en"
					? "/en/about-the-institute/history"
					: "/o-institutu/istorijat",
			icon: History,
		},
		{
			title: content.structure.sections.organization.title,
			description: content.structure.sections.organization.description,
			href:
				lang === "en"
					? "/en/about-the-institute/organization"
					: "/o-institutu/organizacija",
			icon: Network,
		},
		{
			title: content.structure.sections.management.title,
			description: content.structure.sections.management.description,
			href:
				lang === "en"
					? "/en/about-the-institute/management"
					: "/o-institutu/rukovodstvo",
			icon: Users,
		},
		{
			title: content.structure.sections.scientificCouncil.title,
			description: content.structure.sections.scientificCouncil.description,
			href:
				lang === "en"
					? "/en/about-the-institute/scientific-council"
					: "/o-institutu/naucno-vece",
			icon: Landmark,
		},
	];

	const aboutHref =
		lang === "en"
			? "/en/about-the-institute/about-itnms"
			: "/o-institutu/o-itnms-u";

	const researchersHref =
		lang === "en"
			? "/en/researchers-and-employees/researchers"
			: "/istrazivaci-i-zaposleni/istrazivaci";

	return (
		<>
			<PageHeader
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumb,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.intro.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.intro.title}
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								{content.intro.paragraph1}
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								{content.intro.paragraph2}
							</p>

							<a
								href={aboutHref}
								className="inline-flex items-center gap-2 text-sm font-semibold transition mt-7 text-institute-700 hover:text-institute-900"
							>
								{content.intro.readMore}

								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								sizes="(min-width: 1024px) 50vw, 100vw"
								loading="eager"
								src={slika}
								alt={content.intro.imageAlt}
								className="object-cover w-full aspect-4/3"
							/>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							{content.structure.eyebrow}
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							{content.structure.title}
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							{content.structure.description}
						</p>
					</div>

					<div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
						{aboutSections.map((item) => {
							const Icon = item.icon;

							return (
								<a
									key={item.href}
									href={item.href}
									className="group flex min-h-61.25 flex-col rounded-xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
								>
									<div className="flex items-center justify-center w-12 h-12 transition rounded-lg bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
										<Icon
											className="w-6 h-6"
											aria-hidden="true"
										/>
									</div>

									<h3 className="mt-6 text-xl font-semibold transition text-stone-900 group-hover:text-institute-800">
										{item.title}
									</h3>

									<p className="mt-3 text-sm leading-6 text-stone-600">
										{item.description}
									</p>

									<span className="pt-6 mt-auto text-sm font-semibold text-institute-700">
										{content.structure.openPage}
									</span>
								</a>
							);
						})}
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								{content.researchersCta.title}
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								{content.researchersCta.description}
							</p>
						</div>

						<a
							href={researchersHref}
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							{content.researchersCta.button}

							<ArrowRight
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					</div>
				</Container>
			</Section>
		</>
	);
}
