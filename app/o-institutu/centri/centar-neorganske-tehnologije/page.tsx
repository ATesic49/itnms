import {
	ArrowRight,
	FlaskConical,
	GraduationCap,
	Leaf,
	Microscope,
	Sparkles,
} from "lucide-react";

import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

export default async function InorganicTechnologiesCenterPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.inorganicTechnologiesCentre;

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const researchIcons = [Microscope, Sparkles, Leaf, FlaskConical];

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

								{content.intro.paragraphs.map((paragraph, index) => (
									<p
										key={paragraph}
										className={`max-w-4xl text-base leading-8 text-stone-600 ${
											index === 0 ? "mt-5" : "mt-4"
										}`}
									>
										{paragraph}
									</p>
								))}
							</section>

							<section className="pt-10 mt-12 border-t border-stone-200">
								<div className="flex items-center gap-3">
									<div className="flex items-center justify-center h-11 w-11 rounded-xl bg-institute-50 text-institute-800">
										<FlaskConical className="w-5 h-5" />
									</div>

									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
											{content.research.eyebrow}
										</p>

										<h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900">
											{content.research.title}
										</h2>
									</div>
								</div>

								<div className="grid gap-5 mt-8 md:grid-cols-2">
									{content.research.areas.map((area, index) => {
										const Icon = researchIcons[index];

										return (
											<div
												key={area.title}
												className="p-6 transition border shadow-sm rounded-2xl border-stone-200 bg-stone-50 hover:border-institute-300 hover:shadow-md"
											>
												<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-mineral-100 text-mineral-800">
													<Icon className="w-5 h-5" />
												</div>

												<h3 className="mt-5 text-xl font-semibold text-stone-900">
													{area.title}
												</h3>

												<p className="mt-3 text-sm leading-7 text-stone-600">
													{area.text}
												</p>
											</div>
										);
									})}
								</div>
							</section>

							<ContentSection title={content.characterization.title}>
								{content.characterization.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}

								<BulletList items={content.characterization.items} />
							</ContentSection>

							<ContentSection title={content.cooperation.title}>
								<div className="flex items-start gap-4">
									<div className="flex items-center justify-center h-11 w-11 shrink-0 rounded-xl bg-institute-50 text-institute-800">
										<GraduationCap className="w-5 h-5" />
									</div>

									<div>
										{content.cooperation.paragraphs.map((paragraph, index) => (
											<p
												key={paragraph}
												className={index === 0 ? "" : "mt-4"}
											>
												{paragraph}
											</p>
										))}
									</div>
								</div>
							</ContentSection>
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
										{content.sidebar.focusTitle}
									</p>

									<ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
										{content.sidebar.focusItems.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>

								<div className="pt-5 mt-5 border-t border-stone-200">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										{content.sidebar.applicationsTitle}
									</p>

									<p className="mt-2 text-sm leading-6 text-stone-600">
										{content.sidebar.applications}
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
