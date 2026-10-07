import React from "react";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import Link from "next/link";
import { routeTranslations } from "@/app/lib/language/routes";
import { ArrowRight, UsersRound } from "lucide-react";

export default async function Page() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);
	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const content = dict.newMaterialsCentre.laboratory;

	const team = [
		{
			name: "Dr Aleksandra Daković",
			title: content.team.titles.scientificAdviser,
		},
		{
			name: "Dr Marija Marković",
			title: content.team.titles.researchAssociate,
		},
		{
			name: "Dr Milica Ožegović",
			title: content.team.titles.researchAssistant,
		},
		{
			name: "Dr Milena Obradović",
			title: content.team.titles.researchAssociate,
		},
		{
			name: "Dr Mirko Grubišić",
			title: content.team.titles.researchAssociate,
		},
	];
	const members = [
		"Aleksandra Daković",
		"Marija Marković",
		"Milica Ožegović",
		"Milena Obradović",
		"Mirko Grubišić",
	];
	const pollutantMethods = [
		content.pollutants.methods.hplc,
		content.pollutants.methods.uvvis,
		content.pollutants.methods.aas,
	];

	return (
		<div className="p-6 mt-16 border rounded-3xl border-stone-200 bg-stone-50 md:p-10">
			<section className="mt-20">
				<div className="pt-10 border-t border-stone-200">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-mineral-700">
						{content.eyebrow}
					</p>

					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
						{content.title}
					</h2>

					<div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
						<div className="space-y-6 text-base leading-8 text-stone-700">
							{content.intro.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>

						<aside className="p-6 border rounded-2xl border-stone-200 bg-stone-50">
							<p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
								{content.researchAreas.title}
							</p>

							<ul className="mt-5 space-y-3 text-sm leading-6 text-stone-700">
								{content.researchAreas.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</aside>
					</div>
				</div>

				<div className="grid gap-6 mt-14 lg:grid-cols-2">
					<div className="bg-white border shadow-sm rounded-2xl border-stone-200 p-7">
						<h3 className="text-xl font-semibold text-stone-900">
							{content.characterization.title}
						</h3>

						<p className="mt-4 text-sm leading-7 text-stone-600">
							{content.characterization.description}
						</p>

						<ul className="mt-6 space-y-3 text-sm text-stone-700">
							{content.characterization.methods.map((method) => (
								<li key={method}>{method}</li>
							))}
						</ul>

						<p className="mt-5 text-sm leading-7 text-stone-600">
							{content.characterization.conclusion}
						</p>
					</div>

					<div className="bg-white border shadow-sm rounded-2xl border-stone-200 p-7">
						<h3 className="text-xl font-semibold text-stone-900">
							{content.pollutants.title}
						</h3>

						<p className="mt-4 text-sm leading-7 text-stone-600">
							{content.pollutants.description}
						</p>

						<div className="mt-6 space-y-5">
							{pollutantMethods.map((method) => (
								<div key={method.title}>
									<p className="font-semibold text-stone-900">{method.title}</p>

									<p className="mt-1 text-sm leading-6 text-stone-600">
										{method.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="mt-14">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-mineral-700">
						{content.team.eyebrow}
					</p>

					{/* <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900">
						{content.team.title}
					</h3> */}
					{/* 
					<div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
						{team.map((member) => (
							<div
								key={member.name}
								className="p-5 bg-white border shadow-sm rounded-xl border-stone-200"
							>
								<p className="font-semibold text-stone-900">{member.name}</p>

								<p className="mt-1 text-sm text-stone-500">{member.title}</p>
							</div>
						))}
					</div> */}
					<ContentSection title={content.team.title}>
						<div className="grid gap-3 sm:grid-cols-2">
							{team.map((member) => {
								const profilePath = `/istrazivaci/${createEmployeeSlug(
									member.name,
								)}`;

								const href = `${localizeHref(profilePath)}?zaposleni=true`;

								return (
									<Link
										key={member.name}
										href={href}
										className="flex items-center justify-between px-4 py-4 transition bg-white border group rounded-xl border-stone-200 hover:border-institute-300 hover:bg-institute-50"
									>
										<div className="flex items-center gap-3">
											<div className="flex items-center justify-center transition rounded-lg h-9 w-9 bg-stone-100 text-stone-600 group-hover:bg-white group-hover:text-institute-800">
												<UsersRound className="w-4 h-4" />
											</div>

											<span className="flex flex-col justify-center text-sm font-medium text-stone-800">
												<span>{member.name}</span>
												<span className="text-xs font-normal capitalize text-institute-700">
													{member.title}
												</span>
											</span>
										</div>

										<ArrowRight className="w-4 h-4 transition text-stone-300 group-hover:translate-x-1 group-hover:text-institute-700" />
									</Link>
								);
							})}
						</div>
					</ContentSection>
				</div>
			</section>
		</div>
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
		<section className="pt-10 border-t mt-14 border-stone-200">
			<h2 className="text-2xl font-semibold tracking-tight text-stone-900">
				{title}
			</h2>

			<div className="mt-5 space-y-4 text-sm leading-7 text-stone-600">
				{children}
			</div>
		</section>
	);
}
function createEmployeeSlug(name: string) {
	return name
		.toLocaleLowerCase("sr")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "dj")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}
