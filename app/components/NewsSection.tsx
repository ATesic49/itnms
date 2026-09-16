// // import { ArrowRight, CalendarDays } from "lucide-react";
// // import slika from "@/public/imgs/IMG_9916.jpg";
// // import slika2 from "@/public/imgs/IMG_9929.jpg";
// // import slika3 from "@/public/imgs/IMG_9984.jpg";
// // import { Container } from "@/app/components/Container";
// // import { Section } from "@/app/components/Section";
// // import Image, { StaticImageData } from "next/image";

// // type NewsItem = {
// // 	title: string;
// // 	excerpt: string;
// // 	date: string;
// // 	category: string;
// // 	href: string;
// // 	image: string | StaticImageData;
// // };

// // const news: NewsItem[] = [
// // 	{
// // 		title: "Novi naučnoistraživački projekat Instituta",
// // 		excerpt:
// // 			"Institut je započeo realizaciju projekta posvećenog razvoju održivih tehnoloških postupaka i naprednih materijala.",
// // 		date: "12. jul 2026.",
// // 		category: "Projekti",
// // 		href: "/vesti/novi-naucnoistrazivacki-projekat",
// // 		image: slika,
// // 	},
// // 	{
// // 		title: "Učešće istraživača ITNMS-a na stručnoj konferenciji",
// // 		excerpt:
// // 			"Predstavljeni su rezultati istraživanja iz oblasti prerade mineralnih sirovina i zaštite životne sredine.",
// // 		date: "28. jun 2026.",
// // 		category: "Događaji",
// // 		href: "/vesti/strucna-konferencija",
// // 		image: slika2,
// // 	},
// // 	{
// // 		title: "Objavljen novi konkurs za istraživače",
// // 		excerpt:
// // 			"Otvoren je konkurs za angažovanje istraživača na projektima Instituta. Detalji i dokumentacija dostupni su u objavi.",
// // 		date: "15. jun 2026.",
// // 		category: "Konkursi",
// // 		href: "/vesti/konkurs-za-istrazivace",
// // 		image: slika3,
// // 	},
// // ];

// // export function NewsSection() {
// // 	return (
// // 		<Section background="white">
// // 			<Container>
// // 				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
// // 					<div>
// // 						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
// // 							Aktuelnosti
// // 						</p>

// // 						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
// // 							Vesti i obaveštenja
// // 						</h2>

// // 						<p className="max-w-2xl mt-4 text-base leading-7 text-stone-600">
// // 							Najnovije informacije o projektima, događajima, konkursima i
// // 							aktivnostima Instituta.
// // 						</p>
// // 					</div>

// // 					<a
// // 						href="/vesti"
// // 						className="inline-flex items-center self-start gap-2 text-sm font-semibold transition shrink-0 text-institute-700 hover:text-institute-900 md:self-auto"
// // 					>
// // 						Sve vesti i obaveštenja
// // 						<ArrowRight
// // 							className="w-4 h-4"
// // 							aria-hidden="true"
// // 						/>
// // 					</a>
// // 				</div>

// // 				<div className="grid gap-6 mt-12 lg:grid-cols-3">
// // 					{news.map((item) => (
// // 						<NewsCard
// // 							key={item.href}
// // 							item={item}
// // 						/>
// // 					))}
// // 				</div>
// // 			</Container>
// // 		</Section>
// // 	);
// // }

// // type NewsCardProps = {
// // 	item: NewsItem;
// // };

// // function NewsCard({ item }: NewsCardProps) {
// // 	return (
// // 		<article className="flex flex-col h-full overflow-hidden transition duration-200 bg-white border shadow-sm group rounded-xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md">
// // 			<a
// // 				href={item.href}
// // 				className="block overflow-hidden bg-stone-100"
// // 			>
// // 				<Image
// // 					src={item.image}
// // 					alt=""
// // 					className="aspect-16/10 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
// // 				/>
// // 			</a>

// // 			<div className="flex flex-col flex-1 p-6">
// // 				<div className="flex flex-wrap items-center gap-3 text-xs">
// // 					<span className="px-3 py-1 font-semibold rounded-full bg-mineral-100 text-mineral-800">
// // 						{item.category}
// // 					</span>

// // 					<span className="inline-flex items-center gap-1.5 text-stone-500">
// // 						<CalendarDays
// // 							className="h-3.5 w-3.5"
// // 							aria-hidden="true"
// // 						/>
// // 						<time>{item.date}</time>
// // 					</span>
// // 				</div>

// // 				<h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight transition text-stone-900 group-hover:text-institute-800">
// // 					<a href={item.href}>{item.title}</a>
// // 				</h3>

// // 				<p className="mt-3 text-sm leading-6 line-clamp-3 text-stone-600">
// // 					{item.excerpt}
// // 				</p>

// // 				<a
// // 					href={item.href}
// // 					className="inline-flex items-center gap-2 pt-6 mt-auto text-sm font-semibold transition text-institute-700 hover:text-institute-900"
// // 				>
// // 					Pročitajte više
// // 					<ArrowRight
// // 						className="w-4 h-4 transition-transform group-hover:translate-x-1"
// // 						aria-hidden="true"
// // 					/>
// // 				</a>
// // 			</div>
// // 		</article>
// // 	);
// // }
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// import { Container } from "@/app/components/Container";
// import { NewsCard } from "@/app/components/NewsCard";
// import { Section } from "@/app/components/Section";
// import { getNews } from "@/app/lib/getNews";

// export async function NewsSection() {
// 	const news = await getNews();

// 	const latestNews = news.slice(0, 3);

// 	return (
// 		<Section background="white">
// 			<Container>
// 				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
// 					<div>
// 						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
// 							Aktuelnosti
// 						</p>

// 						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
// 							Vesti i obaveštenja
// 						</h2>

// 						<p className="max-w-2xl mt-4 text-base leading-7 text-stone-600">
// 							Najnovije informacije o projektima, događajima, konkursima i
// 							aktivnostima Instituta.
// 						</p>
// 					</div>

// 					<Link
// 						href="/vesti"
// 						className="inline-flex items-center self-start gap-2 text-sm font-semibold transition shrink-0 text-institute-700 hover:text-institute-900 md:self-auto"
// 					>
// 						Sve vesti i obaveštenja
// 						<ArrowRight
// 							className="w-4 h-4"
// 							aria-hidden="true"
// 						/>
// 					</Link>
// 				</div>

// 				{latestNews.length > 0 ? (
// 					<div className="grid gap-6 mt-12 lg:grid-cols-3">
// 						{latestNews.map((item) => (
// 							<NewsCard
// 								key={`${item.slug}-${item.date}`}
// 								item={item}
// 							/>
// 						))}
// 					</div>
// 				) : (
// 					<div className="px-6 py-10 mt-10 text-center border rounded-xl border-stone-200 bg-stone-50">
// 						<p className="text-sm text-stone-600">
// 							Trenutno nema objavljenih vesti.
// 						</p>
// 					</div>
// 				)}
// 			</Container>
// 		</Section>
// 	);
// }
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/app/components/Container";
import { NewsCard } from "@/app/components/NewsCard";
import { Section } from "@/app/components/Section";
import { getNews } from "@/app/lib/getNews";
type NewsSectionProps = {
	content: {
		eyebrow: string;
		title: string;
		description: string;
		allNews: string;
		readMore: string;
	};
	lang: "sr" | "en";
};

export async function NewsSection({ content }: NewsSectionProps) {
	const news = await getNews();

	const latestNews = news.slice(0, 3);

	return (
		<Section background="white">
			<Container>
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							{content.eyebrow}
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							{content.title}
						</h2>

						<p className="max-w-2xl mt-4 text-base leading-7 text-stone-600">
							{content.description}
						</p>
					</div>

					<Link
						href="/vesti"
						className="inline-flex items-center self-start gap-2 text-sm font-semibold transition shrink-0 text-institute-700 hover:text-institute-900 md:self-auto"
					>
						{content.allNews}
						<ArrowRight
							className="w-4 h-4"
							aria-hidden="true"
						/>
					</Link>
				</div>

				{latestNews.length > 0 ? (
					<div className="grid gap-6 mt-12 lg:grid-cols-3">
						{latestNews.map((item) => (
							<NewsCard
								key={`${item.slug}-${item.date}`}
								item={item}
							/>
						))}
					</div>
				) : (
					<div className="px-6 py-10 mt-10 text-center border rounded-xl border-stone-200 bg-stone-50">
						<p className="text-sm text-stone-600">
							Trenutno nema objavljenih vesti.
						</p>
					</div>
				)}
			</Container>
		</Section>
	);
}
