import { ArrowRight, CalendarDays } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import instituteToday from "@/public/imgs/IMG_0132.jpg";
import fountain from "@/public/imgs/IMG_0127.jpg";
import archiveImage from "@/public/imgs/IMG_0089.jpg";

import accreditation1 from "@/public/imgs/akreditacija_2016_1.jpg";
import accreditation2 from "@/public/imgs/akreditacija_2016_2.jpg";
import accreditation3 from "@/public/imgs/akreditacija_2016_3.jpg";

import NilsBor from "@/public/imgs/NilsBor.jpg";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";

type TimelineItem = {
	year: string;
	title: string;
	description: string;
	slika?: StaticImageData;
};

export default async function HistoryPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.history;

	const timeline: TimelineItem[] = content.timeline.items.map(
		(item, index) => ({
			...item,
			slika: index === 2 ? NilsBor : undefined,
		}),
	);

	const historicalImages = [
		{
			src: instituteToday,
			...content.gallery.images.institute,
		},
		{
			src: fountain,
			...content.gallery.images.fountain,
		},
		{
			src: archiveImage,
			...content.gallery.images.order,
		},
	];

	const accreditationImages = [
		{
			src: accreditation1,
			page: 1,
			link: "/imgs/akreditacija_2016_1.jpg",
		},
		{
			src: accreditation2,
			page: 2,
			link: "/imgs/akreditacija_2016_2.jpg",
		},
		{
			src: accreditation3,
			page: 3,
			link: "/imgs/akreditacija_2016_3.jpg",
		},
	];

	const aboutHref = lang === "en" ? "/en/about-the-institute" : "/o-institutu";

	const organizationHref =
		lang === "en"
			? "/en/about-the-institute/organization"
			: "/o-institutu/organizacija";

	const activitiesHref =
		lang === "en"
			? "/en/about-the-institute/activities-and-fields-of-work"
			: "/o-institutu/delatnosti-i-oblasti-rada";

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
						label: content.pageHeader.breadcrumbAbout,
						href: aboutHref,
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			{/* Uvod */}
			<Section>
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.intro.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.intro.title}
							</h2>

							<div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
								<p>{content.intro.paragraph1}</p>
								<p>{content.intro.paragraph2}</p>
							</div>
						</div>

						<figure className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={archiveImage}
								alt={content.intro.imageAlt}
								className="object-cover w-full aspect-video"
							/>

							<figcaption className="px-5 py-4 text-sm leading-6 bg-white border-t border-stone-200 text-stone-500">
								{content.intro.imageCaption}
							</figcaption>
						</figure>
					</div>
				</Container>
			</Section>

			{/* Timeline */}
			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							{content.timeline.eyebrow}
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							{content.timeline.title}
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							{content.timeline.description}
						</p>
					</div>

					<div className="relative mt-12">
						<div
							className="absolute bottom-0 left-4.75 top-0 hidden w-px bg-stone-300 md:block"
							aria-hidden="true"
						/>

						<ol className="space-y-8">
							{timeline.map((item, index) => (
								<TimelineEntry
									key={`${item.year}-${item.title}`}
									item={item}
									index={index}
								/>
							))}
						</ol>
					</div>
				</Container>
			</Section>

			{/* Zvanični istorijat */}
			<Section>
				<Container>
					<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
						<article className="max-w-4xl">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.officialHistory.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.officialHistory.title}
							</h2>

							<div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
								{content.officialHistory.paragraphs.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}

								<div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
									{accreditationImages.map((image) => (
										<figure
											key={image.page}
											className="overflow-hidden bg-white border shadow-sm rounded-xl border-institute-100"
										>
											<Image
												src={image.src}
												alt={`${content.officialHistory.accreditationPage} ${image.page}`}
												className="object-contain w-full"
											/>

											<figcaption className="px-5 py-4 text-sm leading-6 text-stone-500">
												<p>
													{content.officialHistory.accreditationPage}{" "}
													{image.page}.
												</p>

												<Link
													download
													className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-institute-700 hover:text-institute-900"
													href={image.link}
												>
													{content.officialHistory.downloadImage}

													<ArrowRight
														className="w-4 h-4"
														aria-hidden="true"
													/>
												</Link>
											</figcaption>
										</figure>
									))}
								</div>
							</div>
						</article>

						<aside className="lg:sticky lg:top-32 lg:self-start">
							<div className="p-6 border rounded-xl border-stone-200 bg-stone-50">
								<div className="flex items-center justify-center rounded-lg h-11 w-11 bg-institute-100 text-institute-800">
									<CalendarDays
										className="w-5 h-5"
										aria-hidden="true"
									/>
								</div>

								<h2 className="mt-5 text-lg font-semibold text-stone-900">
									{content.related.title}
								</h2>

								<div className="flex flex-col gap-3 mt-4">
									<RelatedLink
										href={organizationHref}
										label={content.related.organization}
									/>

									<RelatedLink
										href={activitiesHref}
										label={content.related.activities}
									/>

									<RelatedLink
										href={researchersHref}
										label={content.related.researchers}
									/>
								</div>
							</div>
						</aside>
					</div>
				</Container>
			</Section>

			{/* Galerija */}
			<Section background="institute">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							{content.gallery.eyebrow}
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							{content.gallery.title}
						</h2>
					</div>

					<div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
						{historicalImages.map((image, index) => (
							<figure
								key={index}
								className="overflow-hidden bg-white border shadow-sm rounded-xl border-institute-100"
							>
								<Image
									src={image.src}
									alt={image.alt}
									className="object-cover w-full aspect-4/3"
								/>

								<figcaption className="px-5 py-4 text-sm leading-6 text-stone-600">
									{image.caption}
								</figcaption>
							</figure>
						))}
					</div>
				</Container>
			</Section>
		</>
	);
}

function RelatedLink({ href, label }: { href: string; label: string }) {
	return (
		<a
			href={href}
			className="inline-flex items-center justify-between gap-3 text-sm font-medium transition text-stone-700 hover:text-institute-800"
		>
			{label}

			<ArrowRight
				className="w-4 h-4"
				aria-hidden="true"
			/>
		</a>
	);
}

type TimelineEntryProps = {
	item: TimelineItem;
	index: number;
};

function TimelineEntry({ item, index }: TimelineEntryProps) {
	return (
		<li className="relative md:grid md:grid-cols-[40px_140px_1fr] md:gap-6">
			<div
				className="relative z-10 items-center justify-center hidden w-10 h-10 text-xs font-semibold text-white border-4 rounded-full border-stone-50 bg-institute-800 md:flex"
				aria-hidden="true"
			>
				{index + 1}
			</div>

			<p className="text-lg font-semibold text-institute-800">{item.year}</p>

			<div className="mt-3 overflow-hidden bg-white border shadow-sm rounded-xl border-stone-200 md:mt-0">
				<div className="p-6">
					<h3 className="text-xl font-semibold tracking-tight text-stone-900">
						{item.title}
					</h3>

					<p className="mt-3 text-sm leading-7 text-stone-600">
						{item.description}
					</p>
				</div>

				{item.slika && (
					<div className="relative">
						<div className="absolute inset-x-0 top-0 z-10 h-10 pointer-events-none bg-linear-to-b from-white to-transparent" />

						<Image
							src={item.slika}
							alt={item.title}
							className="object-cover w-full h-auto"
						/>
					</div>
				)}
			</div>
		</li>
	);
}
