import {
	ArrowRight,
	Building2,
	FileCheck2,
	FlaskConical,
	Leaf,
	Recycle,
	ShieldCheck,
} from "lucide-react";

import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

export default async function EnvironmentalProtectionCenterPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.environmentalProtectionCentre;

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	return (
		<>
			<PageHeader
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumbAbout,
						href: localizeHref("/o-institutu"),
					},
					{
						label: content.pageHeader.breadcrumbOrganization,
						href: localizeHref("/o-institutu/organizacija"),
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-12 xl:grid-cols-[1fr_320px] xl:gap-16">
						<main>
							<section>
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
									{content.intro.eyebrow}
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
									{content.intro.title}
								</h2>

								<p className="max-w-4xl mt-5 text-base leading-8 text-stone-600">
									{content.intro.description}
								</p>

								<div className="grid gap-3 mt-8 sm:grid-cols-2 lg:grid-cols-3">
									{content.intro.workAreas.map((area) => (
										<div
											key={area}
											className="flex items-center gap-3 p-4 border rounded-xl border-stone-200 bg-stone-50"
										>
											<Leaf className="w-4 h-4 shrink-0 text-mineral-700" />

											<span className="text-sm font-semibold text-stone-800">
												{area}
											</span>
										</div>
									))}
								</div>
							</section>

							<ContentSection
								eyebrow={content.impactAssessment.eyebrow}
								title={content.impactAssessment.title}
								icon={FileCheck2}
							>
								{content.impactAssessment.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}

								<BulletList items={content.impactAssessment.procedure} />

								<HighlightBox>
									{content.impactAssessment.highlightBefore}{" "}
									<strong>{content.impactAssessment.highlightStrong}</strong>
									{content.impactAssessment.highlightAfter}
								</HighlightBox>

								<p>{content.impactAssessment.closing}</p>
							</ContentSection>

							<section className="mt-10">
								<h3 className="text-xl font-semibold text-stone-900">
									{content.impactAssessment.referencesTitle}
								</h3>

								<div className="grid gap-3 mt-5">
									{content.impactAssessment.references.map((reference) => (
										<ReferenceCard
											key={reference}
											text={reference}
										/>
									))}
								</div>
							</section>

							<ContentSection
								eyebrow={content.ippc.eyebrow}
								title={content.ippc.title}
								icon={ShieldCheck}
							>
								{content.ippc.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}

								<BulletList items={content.ippc.activities} />

								<p>{content.ippc.bref}</p>

								<HighlightBox>{content.ippc.highlight}</HighlightBox>
							</ContentSection>

							<section className="mt-10">
								<h3 className="text-xl font-semibold text-stone-900">
									{content.ippc.referencesTitle}
								</h3>

								<div className="grid gap-3 mt-5 sm:grid-cols-2">
									{content.ippc.references.map((reference) => (
										<div
											key={reference}
											className="p-4 text-sm leading-6 border rounded-xl border-stone-200 bg-stone-50 text-stone-700"
										>
											{reference}
										</div>
									))}
								</div>
							</section>

							<section className="mt-8">
								<h3 className="text-xl font-semibold text-stone-900">
									{content.ippc.additionalProjectsTitle}
								</h3>

								<BulletList items={content.ippc.additionalProjects} />
							</section>

							<ContentSection
								eyebrow={content.biomass.eyebrow}
								title={content.biomass.title}
								icon={Recycle}
							>
								{content.biomass.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}

								<BulletList items={content.biomass.items} />
							</ContentSection>

							<section className="pt-10 mt-12 border-t border-stone-200">
								<div className="flex items-center gap-4">
									<div className="flex items-center justify-center h-11 w-11 rounded-xl bg-institute-50 text-institute-800">
										<FlaskConical className="w-5 h-5" />
									</div>

									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
											{content.projects.eyebrow}
										</p>

										<h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900">
											{content.projects.title}
										</h2>
									</div>
								</div>

								<div className="grid gap-5 mt-8">
									{content.projects.items.map((project) => (
										<ProjectCard
											key={`${project.code}-${project.period}`}
											project={project}
										/>
									))}
								</div>
							</section>
						</main>

						<aside>
							<div className="sticky p-6 border top-28 rounded-2xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
									{content.sidebar.label}
								</p>

								<h2 className="mt-3 text-xl font-semibold leading-7 text-stone-900">
									{content.sidebar.title}
								</h2>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										{content.sidebar.mainAreas}
									</p>

									<ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
										{content.sidebar.areas.map((area) => (
											<li key={area}>{area}</li>
										))}
									</ul>
								</div>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										{content.sidebar.experience}
									</p>

									<div className="grid grid-cols-2 gap-3 mt-3">
										<div>
											<p className="text-2xl font-semibold text-institute-800">
												90+
											</p>

											<p className="mt-1 text-xs leading-5 text-stone-500">
												{content.sidebar.studies}
											</p>
										</div>

										<div>
											<p className="text-2xl font-semibold text-institute-800">
												10+
											</p>

											<p className="mt-1 text-xs leading-5 text-stone-500">
												{content.sidebar.ippcPermits}
											</p>
										</div>
									</div>
								</div>

								<Link
									href={localizeHref("/o-institutu/organizacija")}
									className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-institute-700 hover:text-institute-900"
								>
									{content.sidebar.organizationLink}

									<ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</aside>
					</div>
				</Container>
			</Section>
		</>
	);
}

function ContentSection({
	eyebrow,
	title,
	icon: Icon,
	children,
}: {
	eyebrow: string;
	title: string;
	icon: React.ElementType;
	children: React.ReactNode;
}) {
	return (
		<section className="pt-10 border-t mt-14 border-stone-200">
			<div className="flex items-start gap-4">
				<div className="flex items-center justify-center h-11 w-11 shrink-0 rounded-xl bg-institute-50 text-institute-800">
					<Icon className="w-5 h-5" />
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
						{eyebrow}
					</p>

					<h2 className="mt-1 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
						{title}
					</h2>
				</div>
			</div>

			<div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
				{children}
			</div>
		</section>
	);
}

function BulletList({ items }: { items: readonly string[] }) {
	return (
		<ul className="grid gap-3 mt-5">
			{items.map((item) => (
				<li
					key={item}
					className="flex items-start gap-3"
				>
					<span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-mineral-600" />

					<span>{item}</span>
				</li>
			))}
		</ul>
	);
}

function HighlightBox({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-5 mt-6 border rounded-xl border-mineral-200 bg-mineral-50">
			<p className="text-sm leading-7 text-stone-700">{children}</p>
		</div>
	);
}

function ReferenceCard({ text }: { text: string }) {
	return (
		<div className="flex items-start gap-4 p-5 bg-white border rounded-xl border-stone-200">
			<div className="flex items-center justify-center rounded-lg h-9 w-9 shrink-0 bg-stone-100 text-stone-600">
				<Building2 className="w-4 h-4" />
			</div>

			<p className="text-sm leading-7 text-stone-600">{text}</p>
		</div>
	);
}

type ResearchProject = {
	readonly organization: string;
	readonly code: string;
	readonly program: string;
	readonly period: string;
	readonly title: string;
	readonly description?: string;
};

function ProjectCard({ project }: { project: ResearchProject }) {
	return (
		<article className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200">
			<div className="flex flex-wrap items-center gap-2">
				<span className="px-3 py-1 text-xs font-semibold rounded-full bg-institute-50 text-institute-800">
					{project.code}
				</span>

				<span className="px-3 py-1 text-xs font-medium rounded-full bg-stone-100 text-stone-600">
					{project.program}
				</span>

				<span className="px-3 py-1 text-xs font-medium rounded-full bg-stone-100 text-stone-600">
					{project.period}
				</span>
			</div>

			<h3 className="mt-5 text-lg font-semibold leading-7 text-stone-900">
				{project.title}
			</h3>

			<p className="mt-3 text-sm font-medium text-mineral-700">
				{project.organization}
			</p>

			{project.description && (
				<p className="mt-4 text-sm leading-7 text-stone-600">
					{project.description}
				</p>
			)}
		</article>
	);
}
