import { ArrowRight, FlaskConical, Recycle, Users } from "lucide-react";

import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

export default async function MetallurgicalTechnologiesCenterPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.metallurgicalTechnologiesCentre;

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const employees = [
		{
			name: "dr Branislav Marković",
			position: content.team.positions.scientificAdviserAssistant,
			slug: "branislav-markovic",
		},
		{
			name: "dr Miroslav Sokić",
			position: content.team.positions.scientificAdviser,
			slug: "miroslav-sokic",
		},
		{
			name: "dr Dragana Ranđelović",
			position: content.team.positions.seniorResearchAssociate,
			slug: "dragana-randjelovic",
		},
		{
			name: "dr Dušan Milojkov",
			position: content.team.positions.seniorResearchAssociate,
			slug: "dusan-milojkov",
		},
		{
			name: "dr Aleksandar Jovanović",
			position: content.team.positions.researchAssociate,
			slug: "aleksandar-jovanovic",
		},
		{
			name: "dr Gvozden Jovanović",
			position: content.team.positions.researchAssociate,
			slug: "gvozden-jovanovic",
		},
		{
			name: "dr Nela Petronijević",
			position: content.team.positions.researchAssociate,
			slug: "nela-petronijevic",
		},
		{
			name: "Katarina Pantović",
			position: content.team.positions.researchAssistant,
			slug: "katarina-pantovic",
		},
		{
			name: "Gordana Marković",
			position: content.team.positions.researchAssistant,
			slug: "gordana-markovic",
		},
		{
			name: "Dimitrije Anđić",
			position: content.team.positions.researchAssistant,
			slug: "dimitrije-andjic",
		},
		{
			name: "Milica Mišić",
			position: content.team.positions.researchTrainee,
			slug: "milica-misic",
		},
	];

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

								<div className="grid gap-4 mt-8 md:grid-cols-2">
									{content.intro.mainActivities.map((activity) => (
										<div
											key={activity}
											className="flex items-start gap-4 p-5 border rounded-xl border-stone-200 bg-stone-50"
										>
											<div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-institute-50 text-institute-800">
												<FlaskConical className="w-5 h-5" />
											</div>

											<p className="font-semibold leading-6 text-stone-800">
												{activity}
											</p>
										</div>
									))}
								</div>
							</section>

							<ContentSection title={content.extractiveMetallurgy.title}>
								{content.extractiveMetallurgy.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}

								<BulletList
									items={content.extractiveMetallurgy.developmentActivities}
								/>

								<p>{content.extractiveMetallurgy.processIntro}</p>
							</ContentSection>

							<div className="grid gap-6 mt-8 lg:grid-cols-2">
								<ProcessCard
									title={content.processes.hydrometallurgical.title}
									description={content.processes.hydrometallurgical.description}
									items={content.processes.hydrometallurgical.items}
								/>

								<ProcessCard
									title={content.processes.pyrometallurgical.title}
									description={content.processes.pyrometallurgical.description}
									items={content.processes.pyrometallurgical.items}
								/>
							</div>

							<ContentSection title={content.recycling.title}>
								<p>{content.recycling.description}</p>

								<BulletList items={content.recycling.items} />
							</ContentSection>

							<ContentSection title={content.additionalResearch.title}>
								<BulletList items={content.additionalResearch.items} />
							</ContentSection>

							<section className="mt-16">
								<div className="flex items-center gap-3">
									<div className="flex items-center justify-center h-11 w-11 rounded-xl bg-mineral-100 text-mineral-800">
										<Users className="w-5 h-5" />
									</div>

									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
											{content.team.eyebrow}
										</p>

										<h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900">
											{content.team.title}
										</h2>
									</div>
								</div>

								<div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
									{employees.map((employee) => (
										<Link
											key={employee.slug}
											href={`${localizeHref(
												`/istrazivaci/${employee.slug}`,
											)}?zaposleni=true`}
											className="group flex min-h-32 flex-col justify-between rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
										>
											<div>
												<h3 className="font-semibold text-stone-900 group-hover:text-institute-800">
													{employee.name}
												</h3>

												<div className="flex flex-col mt-2 text-sm leading-6 text-stone-600">
													{employee.position
														.split(",")
														.map((position, index) => (
															<p
																className="capitalize"
																key={index}
															>
																{position.trim()}
															</p>
														))}
												</div>
											</div>

											<span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-institute-700">
												{content.team.profile}

												<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
											</span>
										</Link>
									))}
								</div>
							</section>
						</main>

						<aside>
							<div className="sticky p-6 border top-28 rounded-2xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
									{content.sidebar.label}
								</p>

								<h2 className="mt-3 text-xl font-semibold text-stone-900">
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
									<p className="text-sm text-stone-600">
										{content.sidebar.collaboratorsCount}
									</p>

									<p className="mt-1 text-3xl font-semibold text-institute-800">
										{employees.length}
									</p>
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
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="pt-10 mt-12 border-t border-stone-200">
			<h2 className="text-2xl font-semibold tracking-tight text-stone-900">
				{title}
			</h2>

			<div className="mt-5 space-y-5 text-base leading-8 text-stone-600">
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

function ProcessCard({
	title,
	description,
	items,
}: {
	title: string;
	description: string;
	items: readonly string[];
}) {
	return (
		<div className="p-6 border shadow-sm rounded-2xl border-stone-200 bg-stone-50">
			<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-institute-50 text-institute-800">
				<Recycle className="w-5 h-5" />
			</div>

			<h3 className="mt-5 text-xl font-semibold text-stone-900">{title}</h3>

			<p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>

			<BulletList items={items} />
		</div>
	);
}
