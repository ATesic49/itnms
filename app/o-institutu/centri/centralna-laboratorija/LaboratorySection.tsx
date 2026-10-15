import Image, { type StaticImageData } from "next/image";
import type React from "react";

import type { Language } from "@/app/lib/language/dictionary";
import LaboratoryGallery from "./LabaratoryGallery";
import EmployeeList from "../EmployeeList";
type LaboratoryMember = {
	ime: string;
	pozicija?: string;
};

type LaboratorySectionProps = {
	lang: Language;

	number: string;
	title: string;
	subtitle?: string;
	description: readonly string[];

	icon: React.ComponentType<{
		className?: string;
	}>;

	images?: readonly StaticImageData[];

	members?: readonly LaboratoryMember[];

	membersTitle?: string;

	standalone?: boolean;
};

export default function LaboratorySection({
	lang,
	number,
	title,
	subtitle,
	description,
	icon: Icon,
	images = [],
	members = [],
	membersTitle,
	standalone = false,
}: LaboratorySectionProps) {
	const featuredImage = images[0];
	const galleryImages = images.slice(1);

	return (
		<section
			className={standalone ? "py-6" : "pt-14 border-t border-stone-200"}
		>
			<div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-14">
				<div>
					<div className="flex items-start gap-5">
						<div className="flex items-center justify-center h-14 w-14 shrink-0 rounded-2xl bg-institute-50 text-institute-800">
							<Icon className="w-6 h-6" />
						</div>

						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{lang === "en"
									? `Laboratory ${number}`
									: `Laboratorija ${number}`}
							</p>

							<h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{title}
							</h2>

							{subtitle && (
								<p className="mt-3 text-base font-medium leading-7 text-institute-700">
									{subtitle}
								</p>
							)}
						</div>
					</div>

					<div className="mt-8 space-y-5 text-base leading-8 text-stone-700">
						{description.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</div>

				{featuredImage ? (
					<div className="lg:sticky lg:top-28 lg:self-start">
						<a
							href={featuredImage.src}
							target="_blank"
							rel="noreferrer"
							className="block group"
						>
							<div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-stone-100 shadow-sm aspect-[4/3]">
								<Image
									src={featuredImage}
									alt={title}
									fill
									sizes="(min-width: 1024px) 40vw, 100vw"
									className="object-cover transition duration-300 group-hover:scale-[1.02]"
								/>
							</div>
						</a>
					</div>
				) : (
					<div className="flex items-center justify-center px-8 text-center border border-dashed min-h-72 rounded-3xl border-stone-300 bg-stone-50">
						<p className="max-w-xs text-sm leading-6 text-stone-500">
							{lang === "en"
								? "Laboratory photographs will be added later."
								: "Fotografije laboratorije biće dodate naknadno."}
						</p>
					</div>
				)}
			</div>

			{galleryImages.length > 0 && (
				<LaboratoryGallery
					images={galleryImages}
					title={title}
					lang={lang}
				/>
			)}

			{members.length > 0 && (
				<EmployeeList
					zaposleni={members}
					lang={lang}
					title={
						membersTitle ??
						(lang === "en" ? "Laboratory members" : "Članovi laboratorije")
					}
				/>
			)}
		</section>
	);
}
