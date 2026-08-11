// import type { Metadata } from "next";
// import { ArrowLeft, CalendarDays } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// import { Container } from "@/app/components/Container";
// import { Section } from "@/app/components/Section";
// import { news } from "@/app/data/news";

// type NewsDetailsPageProps = {
// 	params: Promise<{
// 		slug: string;
// 	}>;
// };

// export function generateStaticParams() {
// 	return news.map((item) => ({
// 		slug: item.slug,
// 	}));
// }

// export async function generateMetadata({
// 	params,
// }: NewsDetailsPageProps): Promise<Metadata> {
// 	const { slug } = await params;

// 	const item = news.find((newsItem) => newsItem.slug === slug);

// 	if (!item) {
// 		return {
// 			title: "Vest nije pronađena | ITNMS",
// 		};
// 	}

// 	return {
// 		title: `${item.title} | ITNMS`,
// 		description: item.excerpt,
// 	};
// }

// export default async function NewsDetailsPage({
// 	params,
// }: NewsDetailsPageProps) {
// 	const { slug } = await params;

// 	const item = news.find((newsItem) => newsItem.slug === slug);

// 	if (!item) {
// 		notFound();
// 	}

// 	return (
// 		<main>
// 			<section className="py-12 border-b border-stone-200 bg-stone-50 md:py-16">
// 				<Container>
// 					<Link
// 						href="/vesti"
// 						className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
// 					>
// 						<ArrowLeft
// 							className="w-4 h-4"
// 							aria-hidden="true"
// 						/>
// 						Sve vesti
// 					</Link>

// 					<div className="max-w-4xl mt-8">
// 						<div className="flex flex-wrap items-center gap-3 text-sm">
// 							<span className="px-3 py-1 font-semibold rounded-full bg-mineral-100 text-mineral-800">
// 								{item.category}
// 							</span>

// 							<span className="inline-flex items-center gap-2 text-stone-500">
// 								<CalendarDays
// 									className="w-4 h-4"
// 									aria-hidden="true"
// 								/>

// 								<time dateTime={item.dateISO}>{item.date}</time>
// 							</span>
// 						</div>

// 						<h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">
// 							{item.title}
// 						</h1>

// 						<p className="max-w-3xl mt-6 text-lg leading-8 text-stone-600">
// 							{item.excerpt}
// 						</p>
// 					</div>
// 				</Container>
// 			</section>

// 			<Section>
// 				<Container>
// 					<article className="max-w-4xl mx-auto">
// 						<div className="overflow-hidden rounded-2xl bg-stone-100">
// 							<Image
// 								src={item.image}
// 								alt={item.title}
// 								priority
// 								className="aspect-[16/9] w-full object-cover"
// 							/>
// 						</div>

// 						<div className="max-w-3xl mx-auto mt-10 space-y-6">
// 							{item.content.map((paragraph, index) => (
// 								<p
// 									key={index}
// 									className="text-base leading-8 text-stone-700"
// 								>
// 									{paragraph}
// 								</p>
// 							))}
// 						</div>
// 					</article>
// 				</Container>
// 			</Section>
// 		</main>
// 	);
// }
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { getNews } from "@/app/lib/getNews";

type NewsDetailsPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function NewsDetailsPage({
	params,
}: NewsDetailsPageProps) {
	const { slug } = await params;

	const news = await getNews();

	const item = news.find((newsItem) => newsItem.slug === slug);

	if (!item) {
		notFound();
	}

	return (
		<main>
			<section className="py-12 border-b border-stone-200 bg-stone-50 md:py-16">
				<Container>
					<Link
						href="/vesti"
						className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
					>
						<ArrowLeft
							className="w-4 h-4"
							aria-hidden="true"
						/>
						Sve vesti
					</Link>

					<div className="max-w-4xl mt-8">
						<div className="flex flex-wrap items-center gap-3 text-sm">
							<span className="px-3 py-1 font-semibold rounded-full bg-mineral-100 text-mineral-800">
								{item.category}
							</span>

							<span className="inline-flex items-center gap-2 text-stone-500">
								<CalendarDays
									className="w-4 h-4"
									aria-hidden="true"
								/>

								<time>{item.date}</time>
							</span>
						</div>

						<h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">
							{item.title}
						</h1>

						<p className="max-w-3xl mt-6 text-lg leading-8 text-stone-600">
							{item.excerpt}
						</p>
					</div>
				</Container>
			</section>

			<Section>
				<Container>
					<article className="max-w-4xl mx-auto">
						{item.imageUrl && (
							<img
								src={item.imageUrl}
								alt={item.title}
								className="object-cover w-full aspect-video rounded-2xl"
							/>
						)}

						<div className="max-w-3xl mx-auto mt-10">
							{item.content
								.split(/\n+/)
								.filter(Boolean)
								.map((paragraph, index) => (
									<p
										key={index}
										className="mt-5 text-base leading-8 text-stone-700 first:mt-0"
									>
										{paragraph}
									</p>
								))}
						</div>
					</article>
				</Container>
			</Section>
		</main>
	);
}
