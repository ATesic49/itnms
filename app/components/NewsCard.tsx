// import { ArrowRight, CalendarDays } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// import { getNewsHref, type NewsItem } from "@/app/data/news";

// type NewsCardProps = {
// 	item: NewsItem;
// };

// export function NewsCard({ item }: NewsCardProps) {
// 	const href = getNewsHref(item);

// 	return (
// 		<article className="flex flex-col h-full overflow-hidden transition duration-200 bg-white border shadow-sm group rounded-xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md">
// 			<Link
// 				href={href}
// 				className="block overflow-hidden bg-stone-100"
// 			>
// 				<Image
// 					src={item.image}
// 					alt={item.title}
// 					className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
// 				/>
// 			</Link>

// 			<div className="flex flex-col flex-1 p-6">
// 				<div className="flex flex-wrap items-center gap-3 text-xs">
// 					<span className="px-3 py-1 font-semibold rounded-full bg-mineral-100 text-mineral-800">
// 						{item.category}
// 					</span>

// 					<span className="inline-flex items-center gap-1.5 text-stone-500">
// 						<CalendarDays
// 							className="h-3.5 w-3.5"
// 							aria-hidden="true"
// 						/>

// 						<time dateTime={item.dateISO}>{item.date}</time>
// 					</span>
// 				</div>

// 				<h2 className="mt-5 text-xl font-semibold leading-snug tracking-tight transition text-stone-900 group-hover:text-institute-800">
// 					<Link href={href}>{item.title}</Link>
// 				</h2>

// 				<p className="mt-3 text-sm leading-6 line-clamp-3 text-stone-600">
// 					{item.excerpt}
// 				</p>

// 				<Link
// 					href={href}
// 					className="inline-flex items-center gap-2 pt-6 mt-auto text-sm font-semibold transition text-institute-700 hover:text-institute-900"
// 				>
// 					Pročitajte više
// 					<ArrowRight
// 						className="w-4 h-4 transition-transform group-hover:translate-x-1"
// 						aria-hidden="true"
// 					/>
// 				</Link>
// 			</div>
// 		</article>
// 	);
// }
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";

import type { NewsItem } from "@/app/types/news";
import Image from "next/image";

type NewsCardProps = {
	item: NewsItem;
};

export function NewsCard({ item }: NewsCardProps) {
	return (
		<article className="flex flex-col h-full overflow-hidden transition duration-200 bg-white border shadow-sm group rounded-xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md">
			<Link
				href={`${item.imageUrl}`}
				className="block overflow-hidden bg-stone-100"
			>
				{item.imageUrl ? (
					<>
						<Image
							src={item.imageUrl}
							alt={item.imageUrl}
							width={800}
							height={800}
							className="aspect-16/10 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
						/>
					</>
				) : (
					<div className="flex items-center justify-center text-sm aspect-16/10 bg-stone-100 text-stone-500">
						Nema fotografije
					</div>
				)}
			</Link>

			<div className="flex flex-col flex-1 p-6">
				<div className="flex flex-wrap items-center gap-3 text-xs">
					<span className="px-3 py-1 font-semibold rounded-full bg-mineral-100 text-mineral-800">
						{item.category}
					</span>

					<span className="inline-flex items-center gap-1.5 text-stone-500">
						<CalendarDays
							className="h-3.5 w-3.5"
							aria-hidden="true"
						/>

						<time dateTime={item.dateISO}>{item.date}</time>
					</span>
				</div>

				<h2 className="mt-5 text-xl font-semibold leading-snug tracking-tight transition text-stone-900 group-hover:text-institute-800">
					<Link href={`/vesti/${item.slug}`}>{item.title}</Link>
				</h2>

				<p className="mt-3 text-sm leading-6 line-clamp-3 text-stone-600">
					{item.excerpt}
				</p>

				<Link
					href={`/vesti/${item.slug}`}
					className="inline-flex items-center gap-2 pt-6 mt-auto text-sm font-semibold transition text-institute-700 hover:text-institute-900"
				>
					Pročitajte više
					<ArrowRight
						className="w-4 h-4 transition-transform group-hover:translate-x-1"
						aria-hidden="true"
					/>
				</Link>
			</div>
		</article>
	);
}
