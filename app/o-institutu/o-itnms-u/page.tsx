import {
	ArrowRight,
	Factory,
	FlaskConical,
	Lightbulb,
	Microscope,
	Network,
	Target,
} from "lucide-react";

import Image from "next/image";

import slika from "@/public/imgs/IMG_0001.jpg";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";

export default async function AboutItnmsPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.aboutItnms;

	const principles = [
		{
			...content.approach.principles.research,
			icon: Microscope,
		},
		{
			...content.approach.principles.appliedResearch,
			icon: Lightbulb,
		},
		{
			...content.approach.principles.industry,
			icon: Factory,
		},
		{
			...content.approach.principles.institutions,
			icon: Network,
		},
	];

	const aboutHref = lang === "en" ? "/en/about-the-institute" : "/o-institutu";

	const workAreasHref =
		lang === "en"
			? "/en/about-the-institute/activities-and-fields-of-work"
			: "/o-institutu/delatnosti-i-oblasti-rada";

	const historyHref =
		lang === "en"
			? "/en/about-the-institute/history"
			: "/o-institutu/istorijat";

	return (
		<>
			<PageHeader
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumbAbout,
						href: aboutHref,
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.intro.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.intro.title}
							</h2>

							<div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
								<p>{content.intro.paragraph1}</p>
								<p>{content.intro.paragraph2}</p>
								<p>{content.intro.paragraph3}</p>
							</div>
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
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
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="p-8 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-10">
							<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
								<Target
									className="w-6 h-6"
									aria-hidden="true"
								/>
							</div>

							<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
								{content.mission.title}
							</h2>

							<p className="mt-4 text-base leading-8 text-stone-600">
								{content.mission.description}
							</p>
						</div>

						<div className="p-8 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-10">
							<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-mineral-50 text-mineral-800">
								<FlaskConical
									className="w-6 h-6"
									aria-hidden="true"
								/>
							</div>

							<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
								{content.vision.title}
							</h2>

							<p className="mt-4 text-base leading-8 text-stone-600">
								{content.vision.description}
							</p>
						</div>
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							{content.approach.eyebrow}
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							{content.approach.title}
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							{content.approach.description}
						</p>
					</div>

					<div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-4">
						{principles.map((item) => {
							const Icon = item.icon;

							return (
								<article
									key={item.title}
									className="p-6 bg-white border shadow-sm rounded-xl border-stone-200"
								>
									<div className="flex items-center justify-center rounded-lg h-11 w-11 bg-institute-50 text-institute-800">
										<Icon
											className="w-5 h-5"
											aria-hidden="true"
										/>
									</div>

									<h3 className="mt-5 text-lg font-semibold text-stone-900">
										{item.title}
									</h3>

									<p className="mt-3 text-sm leading-6 text-stone-600">
										{item.description}
									</p>
								</article>
							);
						})}
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.workAreas.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.workAreas.title}
							</h2>

							<p className="max-w-xl mt-4 text-base leading-7 text-stone-600">
								{content.workAreas.description}
							</p>

							<a
								href={workAreasHref}
								className="inline-flex items-center gap-2 text-sm font-semibold transition mt-7 text-institute-700 hover:text-institute-900"
							>
								{content.workAreas.link}

								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>
						</div>

						<div className="bg-white border shadow-sm rounded-2xl border-institute-100 p-7 md:p-9">
							<ul className="grid gap-4 sm:grid-cols-2">
								{content.workAreas.items.map((area) => (
									<li
										key={area}
										className="flex items-start gap-3 p-4 border rounded-lg border-stone-100 bg-stone-50"
									>
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />

										<span className="text-sm font-medium leading-6 text-stone-700">
											{area}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<div className="grid gap-8 rounded-2xl bg-institute-950 p-8 text-white md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
								{content.historyCta.title}
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-institute-100">
								{content.historyCta.description}
							</p>
						</div>

						<a
							href={historyHref}
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition bg-white rounded-md text-institute-950 hover:bg-institute-50"
						>
							{content.historyCta.button}

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
