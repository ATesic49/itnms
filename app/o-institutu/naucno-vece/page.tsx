import { ArrowRight, FileText, Landmark, Users } from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

export default async function ScientificCouncilPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.scientificCouncil;

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
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-8 lg:grid-cols-2">
						<ScientificCouncilCard
							title={content.cards.members.title}
							description={content.cards.members.description}
							href={localizeHref("/o-institutu/naucno-vece/sastav")}
							icon={Users}
							openPageLabel={content.cards.openPage}
						/>

						<ScientificCouncilCard
							title={content.cards.minutes.title}
							description={content.cards.minutes.description}
							href={localizeHref("/o-institutu/naucno-vece/zapisnici")}
							icon={FileText}
							openPageLabel={content.cards.openPage}
						/>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
						<div className="flex justify-center">
							<div className="flex items-center justify-center bg-white border rounded-full shadow-sm h-52 w-52 border-institute-200 md:h-64 md:w-64">
								<div className="flex items-center justify-center rounded-full h-36 w-36 bg-institute-50 text-institute-800 md:h-44 md:w-44">
									<Landmark
										className="w-16 h-16 md:h-20 md:w-20"
										aria-hidden="true"
									/>
								</div>
							</div>
						</div>

						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.role.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.role.title}
							</h2>

							<div className="mt-6 space-y-4 text-base leading-8 text-stone-600">
								<p>{content.role.paragraph1}</p>
								<p>{content.role.paragraph2}</p>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								{content.documents.title}
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								{content.documents.description}
							</p>
						</div>

						<a
							href={localizeHref("/dokumenta/naucno-vece")}
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							{content.documents.button}

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

type ScientificCouncilCardProps = {
	title: string;
	description: string;
	href: string;
	icon: React.ElementType;
	openPageLabel: string;
};

function ScientificCouncilCard({
	title,
	description,
	href,
	icon: Icon,
	openPageLabel,
}: ScientificCouncilCardProps) {
	return (
		<a
			href={href}
			className="flex flex-col p-8 transition bg-white border shadow-sm group min-h-70 rounded-2xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
		>
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
				{openPageLabel}

				<ArrowRight
					className="w-4 h-4 transition-transform group-hover:translate-x-1"
					aria-hidden="true"
				/>
			</span>
		</a>
	);
}
