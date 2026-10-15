import Image, { type StaticImageData } from "next/image";

import type { Language } from "@/app/lib/language/dictionary";

type LaboratoryGalleryProps = {
	images: readonly StaticImageData[];
	title: string;
	lang: Language;
};

export default function LaboratoryGallery({
	images,
	title,
	lang,
}: LaboratoryGalleryProps) {
	if (images.length === 0) {
		return null;
	}

	return (
		<div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
			{images.map((image, index) => {
				const featured = images.length >= 4 && index === 0;

				return (
					<a
						key={image.src}
						href={image.src}
						target="_blank"
						rel="noreferrer"
						className={`group relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
							featured ? "sm:col-span-2 lg:row-span-2" : ""
						}`}
					>
						<div
							className={
								featured
									? "relative h-full min-h-72 aspect-[16/10]"
									: "relative aspect-[4/3]"
							}
						>
							<Image
								src={image}
								alt={
									lang === "en"
										? `${title} – photo ${index + 2}`
										: `${title} – fotografija ${index + 2}`
								}
								fill
								sizes={
									featured
										? "(min-width: 1024px) 66vw, 100vw"
										: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
								}
								className="object-cover transition duration-300 group-hover:scale-[1.02]"
							/>

							<div className="absolute inset-0 transition bg-black/0 group-hover:bg-black/10" />

							<div className="absolute px-3 py-1 text-xs font-medium transition rounded-full shadow-sm opacity-0 bottom-3 right-3 bg-white/90 text-stone-700 backdrop-blur group-hover:opacity-100">
								{lang === "en" ? "Open image" : "Otvori sliku"}
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
}
