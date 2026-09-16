import { ArrowRight, ExternalLink, Factory, FlaskConical } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

import slika1 from "@/public/imgs/IMG_9943.jpg";

export default async function ProjectsPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.projectsPage;

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
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-8 lg:grid-cols-2">
						<ProjectCategoryCard
							title={content.categories.scientific.title}
							description={content.categories.scientific.description}
							href={localizeHref("/projekti/naucni")}
							icon={FlaskConical}
							buttonLabel={content.categories.scientific.button}
						/>

						<ProjectCategoryCard
							title={content.categories.industrial.title}
							description={content.categories.industrial.description}
							href="https://example.com"
							icon={Factory}
							external
							buttonLabel={content.categories.industrial.button}
						/>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.intro.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.intro.title}
							</h2>

							{content.intro.paragraphs.map((paragraph, index) => (
								<p
									key={paragraph}
									className={`text-base leading-8 text-stone-600 ${
										index === 0 ? "mt-5" : "mt-4"
									}`}
								>
									{paragraph}
								</p>
							))}
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={slika1}
								alt={content.intro.imageAlt}
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
	buttonLabel: string;
	external?: boolean;
};

function ProjectCategoryCard({
	title,
	description,
	href,
	icon: Icon,
	buttonLabel,
	external = false,
}: ProjectCategoryCardProps) {
	const className =
		"flex flex-col p-8 transition bg-white border shadow-sm group min-h-75 rounded-2xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md";

	const content = (
		<>
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
				{buttonLabel}

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
		</>
	);

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className={className}
			>
				{content}
			</a>
		);
	}

	return (
		<Link
			href={href}
			className={className}
		>
			{content}
		</Link>
	);
}
