import { ArrowRight, Factory, FlaskConical, Recycle } from "lucide-react";

import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

export default async function ProductionCenterPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.productionCentre;

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

								<div className="grid gap-4 mt-8 md:grid-cols-2">
									{content.intro.mainActivities.map((activity, index) => (
										<div
											key={activity}
											className="flex items-start gap-4 p-5 border rounded-xl border-stone-200 bg-stone-50"
										>
											<div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-institute-50 text-institute-800">
												{index === 0 ? (
													<FlaskConical className="w-5 h-5" />
												) : (
													<Recycle className="w-5 h-5" />
												)}
											</div>

											<p className="font-semibold leading-6 text-stone-800">
												{activity}
											</p>
										</div>
									))}
								</div>
							</section>

							<ContentSection title={content.hydrometallurgy.title}>
								<p>{content.hydrometallurgy.description}</p>

								<div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
									{content.hydrometallurgy.products.map((product) => (
										<div
											key={product}
											className="flex items-center gap-3 p-4 bg-white border rounded-xl border-stone-200"
										>
											<div className="flex items-center justify-center rounded-lg h-9 w-9 shrink-0 bg-mineral-100 text-mineral-800">
												<Factory className="w-4 h-4" />
											</div>

											<p className="text-sm font-semibold leading-6 text-stone-800">
												{product}
											</p>
										</div>
									))}
								</div>
							</ContentSection>

							<ContentSection title={content.recycling.title}>
								<p>{content.recycling.description}</p>

								<BulletList items={content.recycling.items} />
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
										{content.sidebar.productsTitle}
									</p>

									<p className="mt-2 text-sm leading-6 text-stone-600">
										{content.sidebar.productsDescription}
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
