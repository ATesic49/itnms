// import type { Metadata } from "next";

// import { Container } from "@/app/components/Container";
// import { NewsCard } from "@/app/components/NewsCard";
// import { PageHeader } from "@/app/components/PageHeder";
// import { Section } from "@/app/components/Section";
// import { news } from "@/app/data/news";

// export const metadata: Metadata = {
// 	title: "Vesti i obaveštenja | ITNMS",
// 	description:
// 		"Najnovije vesti, projekti, događaji, konkursi i aktivnosti Instituta.",
// };

// export default function NewsPage() {
// 	const sortedNews = [...news].sort(
// 		(first, second) =>
// 			new Date(second.dateISO).getTime() - new Date(first.dateISO).getTime(),
// 	);

// 	return (
// 		<>
// 			<PageHeader
// 				title="Vesti i obaveštenja"
// 				description="Najnovije informacije o projektima, događajima, konkursima i aktivnostima Instituta."
// 				breadcrumbs={[
// 					{
// 						label: "Vesti i obaveštenja",
// 					},
// 				]}
// 			/>

// 			<Section>
// 				<Container>
// 					<div className="flex items-center justify-between gap-4">
// 						<p className="text-sm text-stone-600">
// 							Ukupno objava:{" "}
// 							<span className="font-semibold text-stone-900">
// 								{sortedNews.length}
// 							</span>
// 						</p>
// 					</div>

// 					<div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">
// 						{sortedNews.map((item) => (
// 							<NewsCard
// 								key={item.slug}
// 								item={item}
// 							/>
// 						))}
// 					</div>
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

import type { Metadata } from "next";

import { Container } from "@/app/components/Container";
import { NewsCard } from "@/app/components/NewsCard";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import { getNews } from "@/app/lib/getNews";

export const metadata: Metadata = {
	title: "Vesti i obaveštenja | ITNMS",
	description:
		"Najnovije vesti, događaji, projekti, konkursi i aktivnosti Instituta.",
};

export default async function NewsPage() {
	const news = await getNews();

	return (
		<>
			<PageHeader
				title="Vesti i obaveštenja"
				description="Najnovije informacije o projektima, događajima, konkursima i aktivnostima Instituta."
				breadcrumbs={[
					{
						label: "Vesti i obaveštenja",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="flex items-center justify-between gap-4">
						<p className="text-sm text-stone-600">
							Ukupno objava:{" "}
							<span className="font-semibold text-stone-900">
								{news.length}
							</span>
						</p>
					</div>

					{news.length > 0 ? (
						<div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">
							{news.map((item) => (
								<NewsCard
									key={`${item.slug}-${item.date}`}
									item={item}
								/>
							))}
						</div>
					) : (
						<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
							<h2 className="text-2xl font-semibold text-stone-900">
								Nema objavljenih vesti
							</h2>

							<p className="mt-3 text-sm text-stone-600">
								Nove objave će biti prikazane na ovoj stranici.
							</p>
						</div>
					)}
				</Container>
			</Section>
		</>
	);
}
