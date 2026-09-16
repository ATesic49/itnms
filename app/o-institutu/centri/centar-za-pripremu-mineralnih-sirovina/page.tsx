import Link from "next/link";
import {
	ArrowRight,
	Factory,
	FlaskConical,
	Gem,
	Recycle,
	Scale,
	Settings2,
	UsersRound,
} from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

const members = [
	"Dragan Radulović",
	"Vladimir Jovanović",
	"Dejan Todorović",
	"Branislav Ivošević",
	"Jovica Stojanović",
	"Slavica Mihajlović",
	"Vladan Kašić",
	"Ana Radosavljević Mihajlović",
	"Ivana Jelić",
	"Nikola Vuković",
];

function createEmployeeSlug(name: string) {
	return name
		.toLocaleLowerCase("sr")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "dj")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export default async function CentarZaPripremuMineralnihSirovinaPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.mineralRawMaterialsCentre;

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const researchAreas = [
		{
			...content.research.areas.characterization,
			icon: Gem,
		},
		{
			...content.research.areas.crushing,
			icon: Settings2,
		},
		{
			...content.research.areas.gravity,
			icon: Scale,
		},
		{
			...content.research.areas.magnetic,
			icon: FlaskConical,
		},
		{
			...content.research.areas.flotation,
			icon: Factory,
		},
		{
			...content.research.areas.secondary,
			icon: Recycle,
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
						label: content.pageHeader.breadcrumbCentres,
						href: localizeHref("/o-institutu/centri"),
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
						<main className="min-w-0">
							<section>
								<p className="max-w-4xl text-lg leading-8 text-stone-700">
									{content.intro}
								</p>
							</section>

							<ContentSection title={content.technology.title}>
								{content.technology.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</ContentSection>

							<ContentSection title={content.research.title}>
								<div className="grid gap-5 sm:grid-cols-2">
									{researchAreas.map((area) => {
										const Icon = area.icon;

										return (
											<div
												key={area.title}
												className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200"
											>
												<div className="flex items-center justify-center h-11 w-11 rounded-xl bg-institute-50 text-institute-800">
													<Icon className="w-5 h-5" />
												</div>

												<h3 className="mt-4 text-base font-semibold text-stone-900">
													{area.title}
												</h3>

												<p className="mt-2 text-sm leading-7 text-stone-600">
													{area.description}
												</p>
											</div>
										);
									})}
								</div>
							</ContentSection>

							<ContentSection title={content.poorResources.title}>
								<p>{content.poorResources.paragraph}</p>

								<div className="p-6 mt-6 border rounded-2xl border-mineral-200 bg-mineral-50">
									<p className="text-sm leading-7 text-stone-700">
										{content.poorResources.highlight}
									</p>
								</div>
							</ContentSection>

							<ContentSection title={content.criticalResources.title}>
								{content.criticalResources.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</ContentSection>

							<ContentSection title={content.industry.title}>
								{content.industry.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}

								<div className="grid gap-4 mt-6 sm:grid-cols-3">
									{content.industry.steps.map((step, index) => (
										<ProcessStep
											key={step.title}
											number={String(index + 1).padStart(2, "0")}
											title={step.title}
											description={step.description}
										/>
									))}
								</div>
							</ContentSection>

							<ContentSection title={content.sustainability.title}>
								<p>{content.sustainability.description}</p>
							</ContentSection>

							<ContentSection title={content.members.title}>
								<div className="grid gap-3 sm:grid-cols-2">
									{members.map((member) => {
										const profilePath = `/istrazivaci/${createEmployeeSlug(
											member,
										)}`;

										const href = `${localizeHref(profilePath)}?zaposleni=true`;

										return (
											<Link
												key={member}
												href={href}
												className="flex items-center justify-between px-4 py-4 transition bg-white border group rounded-xl border-stone-200 hover:border-institute-300 hover:bg-institute-50"
											>
												<div className="flex items-center gap-3">
													<div className="flex items-center justify-center transition rounded-lg h-9 w-9 bg-stone-100 text-stone-600 group-hover:bg-white group-hover:text-institute-800">
														<UsersRound className="w-4 h-4" />
													</div>

													<span className="text-sm font-medium text-stone-800">
														{member}
													</span>
												</div>

												<ArrowRight className="w-4 h-4 transition text-stone-300 group-hover:translate-x-1 group-hover:text-institute-700" />
											</Link>
										);
									})}
								</div>
							</ContentSection>
						</main>

						<aside className="lg:pt-1">
							<div className="sticky space-y-5 top-28">
								<div className="p-6 border rounded-2xl border-stone-200 bg-stone-50">
									<p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-700">
										{content.sidebar.mainAreas}
									</p>

									<ul className="mt-5 space-y-3 text-sm leading-6 text-stone-700">
										{content.sidebar.areas.map((area) => (
											<li key={area}>{area}</li>
										))}
									</ul>
								</div>

								<div className="p-6 text-white rounded-2xl bg-institute-800">
									<Recycle className="w-6 h-6 text-institute-100" />

									<h3 className="mt-4 text-lg font-semibold">
										{content.sidebar.recyclingTitle}
									</h3>

									<p className="mt-3 text-sm leading-7 text-institute-100">
										{content.sidebar.recyclingDescription}
									</p>
								</div>
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
		<section className="pt-10 border-t mt-14 border-stone-200">
			<h2 className="text-2xl font-semibold tracking-tight text-stone-900">
				{title}
			</h2>

			<div className="mt-5 space-y-4 text-sm leading-7 text-stone-600">
				{children}
			</div>
		</section>
	);
}

function ProcessStep({
	number,
	title,
	description,
}: {
	number: string;
	title: string;
	description: string;
}) {
	return (
		<div className="p-5 border rounded-xl border-stone-200 bg-stone-50">
			<p className="text-xs font-semibold text-mineral-700">{number}</p>

			<h3 className="mt-2 font-semibold text-stone-900">{title}</h3>

			<p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
		</div>
	);
}
