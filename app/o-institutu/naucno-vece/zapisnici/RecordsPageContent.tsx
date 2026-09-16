"use client";

import { useMemo, useState } from "react";
import { Download, FileText, Search } from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { routeTranslations } from "@/app/lib/language/routes";

type CouncilRecord = {
	id: string;
	title: string;
	date: string;
	year: number;
	fileUrl: string;
	fileSize?: string;
};

const records: CouncilRecord[] = [
	{
		id: "7-4-21",
		title: "Zapisnik sa 8 sednice NV 2022. godina",
		date: "07. april 2021.",
		year: 2022,
		fileUrl: "/zapisnici/Tac 1 Zapisnik sa 8 sednice NV 2022. godina.doc",
		fileSize: "88 KB",
	},
	{
		id: "15-7-21",
		title: "Zapisnik sa 9 sednice NV 2022. godina",
		date: "15. jul 2021.",
		year: 2022,
		fileUrl: "/zapisnici/Tac 1 Zapisnik sa 9 sednice NV 2022. godina.doc",
		fileSize: "91 KB",
	},
	{
		id: "31-1-23",
		title: "Zapisnik sa 15 sednice NV ITNMS 2023",
		date: "31. jan 2023.",
		year: 2023,
		fileUrl: "/zapisnici/Tac 1 Zapisnik sa 15 sednice NV ITNMS 2023.doc",
		fileSize: "120 KB",
	},
	{
		id: "27-09-23",
		title: "Zapisnik sa 1 sednice NV ITNMS 2023. ",
		date: "27. sept 2023.",
		year: 2023,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa 1 sednice NV ITNMS 2023..doc",
		fileSize: "88 KB",
	},
	{
		id: "2-1-23",
		title: "Tac 1. Zapisnik sa II sednice NV ITNMS 2023. ",
		date: "2. nov 2023.",
		year: 2023,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa II sednice NV ITNMS 2023.doc",
		fileSize: "95 KB",
	},
	{
		id: "19-3-25",
		title: "Zapisnik sa X redovne sednice NV ITNMS",
		date: "19. mart 2025.",
		year: 2025,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa X redovne sednice NV ITNMS.doc",
		fileSize: "110 KB",
	},
	{
		id: "23-5-22",
		title: "Zapisnik sa XI redovne sednice NV ITNMS 2022. godina",
		date: "23. maj 2022.",
		year: 2022,
		fileUrl:
			"/zapisnici/Tac 1. Zapisnik sa XI redovne sednice NV ITNMS 2022. godina.doc",
		fileSize: "107 KB",
	},
	{
		id: "17-4-25",
		title: "Zapisnik sa XI redovne sednice NV ITNMS",
		date: "17. april 2025.",
		year: 2025,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa XI redovne sednice NV ITNMS.doc",
		fileSize: "107 KB",
	},
	{
		id: "4-10-22",
		title: "Zapisnik sa XII redovne sednice NV ITNMS 2022. godina",
		date: "4. oktobar 2022.",
		year: 2022,
		fileUrl:
			"/zapisnici/Tac 1. Zapisnik sa XII redovne sednice NV ITNMS 2022. godina.doc",
		fileSize: "119 KB",
	},
	{
		id: "7-12-23",
		title: "Zapisnik sa III sednice NV ITNMS 2023",
		date: "7. decembar 2023.",
		year: 2023,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa III sednice NV ITNMS 2023.doc",
		fileSize: "105 KB",
	},
	{
		id: "19-3-24",
		title: "Zapisnik sa IV sednice NV ITNMS 2024",
		date: "19. mart 2024.",
		year: 2024,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa IV sednice NV ITNMS 2024.doc",
		fileSize: "91 KB",
	},
	{
		id: "22-4-24",
		title: "Zapisnik sa V sednice NV ITNMS",
		date: "22. april 2024.",
		year: 2024,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa V sednice NV ITNMS.doc",
		fileSize: "102 KB",
	},
	{
		id: "27-4-24",
		title: "Zapisnik sa VI sednice NV ITNMS",
		date: "27. april 2024.",
		year: 2024,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa VI sednice NV ITNMS.doc",
		fileSize: "91 KB",
	},
	{
		id: "24-9-24",
		title: "Zapisnik sa VII sednice NV ITNMS 2",
		date: "24. septembar 2024.",
		year: 2024,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa VII sednice NV ITNMS 2.doc",
		fileSize: "106 KB",
	},
	{
		id: "23-10-24",
		title: "Zapisnik sa VIII sednice NV ITNMS (2)",
		date: "23. oktobar 2024.",
		year: 2024,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa VIII sednice NV ITNMS (2).doc",
		fileSize: "105 KB",
	},
	{
		id: "15-3-23",
		title: "Zapisnik sa 17 sednice NV ITNMS",
		date: "15. mart 2023.",
		year: 2023,
		fileUrl: "/zapisnici/Tac. 1 Zapisnik sa 17 sednice NV ITNMS.doc",
		fileSize: "78 KB",
	},
	{
		id: "25-11-24",
		title: "Zapisnik sa IX redovne sednice NV ITNMS",
		date: "25. novembar 2024.",
		year: 2024,
		fileUrl: "/zapisnici/Tac. 1 Zapisnik sa IX redovne sednice NV ITNMS.doc",
		fileSize: "90 KB",
	},
	{
		id: "22-5-25",
		title: "Zapisnik sa XII redovne sednice NV ITNMS",
		date: "22. maj 2025.",
		year: 2025,
		fileUrl: "/zapisnici/Tac 1. Zapisnik sa XII redovne sednice NV ITNMS.doc",
		fileSize: "114 KB",
	},
	{
		id: "3-11-22",
		title: "Zapisnik sa XIII redovne sednice NV ITNMS 2022. godina",
		date: "3. novembar 2022.",
		year: 2022,
		fileUrl:
			"/zapisnici/Tac 1. Zapisnik sa XIII redovne sednice NV ITNMS 2022. godina.doc",
		fileSize: "112 KB",
	},
	{
		id: "16-5-23",
		title: "Zapisnik sa Кonstitutivne sednice NV ITNMS konstitutivna sednica",
		date: "16. maj 2023.",
		year: 2023,
		fileUrl:
			"/zapisnici/Tac 1. Zapisnik sa Кonstitutivne sednice NV ITNMS konstitutivna sednica.doc",
		fileSize: "86 KB",
	},
	{
		id: "21-11-25",
		title: "Zapisnik са XVI redovne sednice",
		date: "21. novembar 2025.",
		year: 2025,
		fileUrl: "/zapisnici/Tac 1. Zapisnik са XVI redovne sednice.doc",
		fileSize: "108 KB",
	},
	{
		id: "24-12-25",
		title: "Zapisnik са XVII redovne sednice",
		date: "24. decembar 2025.",
		year: 2025,
		fileUrl: "/zapisnici/Tač 1. Zapisnik са XVII redovne sednice.doc",
		fileSize: "99 KB",
	},
	{
		id: "25-1-22",
		title: "Zapisnik sa 10 sednice NV 2022. godina",
		date: "25. januar 2022.",
		year: 2022,
		fileUrl: "/zapisnici/Tač. 1  Zapisnik sa  10  sednice NV 2022. godina.doc",
		fileSize: "141 KB",
	},
	{
		id: "15-12-22",
		title: "Zapisnik sa 14 sednice NV ITNMS 2022.",
		date: "15. decembar 2022.",
		year: 2022,
		fileUrl: "/zapisnici/Tac. 1 Zapisnik sa 14 sednice NV ITNMS 2022..doc",
		fileSize: "119 KB",
	},
	{
		id: "9-3-23",
		title: "Zapisnik sa 16 sednice NV ITNMS",
		date: "9. mart 2023.",
		year: 2023,
		fileUrl: "/zapisnici/Tac. 1 Zapisnik sa 16 sednice NV ITNMS.doc",
		fileSize: "92 KB",
	},
	{
		id: "28-11-19",
		title: "Zapisnik sa IV sednice NV ITNMS 2020. godina",
		date: "28. novembar 2019.",
		year: 2019,
		fileUrl:
			"/zapisnici/Tac. 1. Zapisnik sa IV sednice NV ITNMS 2020. godina.doc",
		fileSize: "118 KB",
	},
	{
		id: "20-6-19",
		title: "Zapisnik sa I redovne sednice NV ITNMS 2019. godina",
		date: "20. jun 2019.",
		year: 2019,
		fileUrl:
			"/zapisnici/Tac.1. Zapisnik sa I redovne sednice NV ITNMS 2019. godina.doc",
		fileSize: "1928 KB",
	},
	{
		id: "20-5-19",
		title: "Zapisnik sa Konstitutivne sednice NV ITNMS 2019",
		date: "20. maj 2019.",
		year: 2019,
		fileUrl:
			"/zapisnici/Tac.1. Zapisnik sa Konstitutivne sednice NV ITNMS 2019.doc",
		fileSize: "1933 KB",
	},
	{
		id: "19-3-26",
		title: "Zapisnik sa XIX redovne sednice",
		date: "19. mart 2026.",
		year: 2026,
		fileUrl: "/zapisnici/Tac. 1 Zapisnik са XIX redovne sednice.doc",
		fileSize: "103 KB",
	},
	{
		id: "27-1-26",
		title: "Zapisnik sa XVIII redovne sednice",
		date: "27. januar 2026.",
		year: 2026,
		fileUrl: "/zapisnici/Tac. 1 Zapisnik са XVIII redovne sednice.doc",
		fileSize: "146 KB",
	},
	{
		id: "21-4-26",
		title: "Zapisnik sa XX redovne sednice",
		date: "21. april 2026.",
		year: 2026,
		fileUrl: "/zapisnici/Tac. 1 Zapisnik са XX redovne sednice.doc",
		fileSize: "102 KB",
	},
	{
		id: "14-5-26",
		title: "Zapisnik sa XXI redovne sednice",
		date: "14. maj 2026.",
		year: 2026,
		fileUrl: "/zapisnici/Tac. 1 Zapisnik са XXI redovne sednice.doc",
		fileSize: "108 KB",
	},
	{
		id: "22-1-20",
		title: "Zapisnik sa 5 sednice NV 2020. godina",
		date: "22. januar 2020.",
		year: 2020,
		fileUrl: "/zapisnici/Tac. 1. Zapisnik sa 5 sednice NV 2020. godina.doc",
		fileSize: "98 KB",
	},
	{
		id: "22-7-19",
		title: "Zapisnik sa II sednice NV ITNMS 2019. godina",
		date: "22. jul 2019.",
		year: 2019,
		fileUrl:
			"/zapisnici/Tac. 1. Zapisnik sa II sednice NV ITNMS 2019. godina.doc",
		fileSize: "110 KB",
	},
	{
		id: "15-10-19",
		title: "Zapisnik sa III sednice NV ITNMS 2019.",
		date: "15. oktobar 2019.",
		year: 2019,
		fileUrl: "/zapisnici/Tac. 1. Zapisnik sa III sednice NV ITNMS 2019..doc",
		fileSize: "105 KB",
	},
	{
		id: "24-6-25",
		title: "Zapisnik sa XIII redovne sednice",
		date: "24. jun 2025.",
		year: 2025,
		fileUrl: "/zapisnici/Тac. 1 Zapisnik са XIII redovne sednice.doc",
		fileSize: "104 KB",
	},
	{
		id: "15-9-25",
		title: "Zapisnik sa XIV redovne sednice",
		date: "15. septembar 2025.",
		year: 2025,
		fileUrl: "/zapisnici/Тac. 1 Zapisnik са XIV redovne sednice.doc",
		fileSize: "96 KB",
	},
	{
		id: "21-10-25",
		title: "Zapisnik са XV redovne sednice",
		date: "21. oktobar 2025.",
		year: 2025,
		fileUrl: "/zapisnici/Тac. 1 Zapisnik са XV redovne sednice.doc",
		fileSize: "100 KB",
	},
];

type RecordsPageContentProps = {
	content: {
		pageHeader: {
			title: string;
			description: string;
			breadcrumbAbout: string;
			breadcrumbCouncil: string;
			breadcrumbCurrent: string;
		};

		archive: {
			eyebrow: string;
			title: string;
			ariaLabel: string;
		};

		records: {
			eyebrow: string;
			title: string;
			searchLabel: string;
			searchPlaceholder: string;
			openDoc: string;
			noResults: string;
		};
	};

	lang: "sr" | "en";
};

export default function RecordsPageContent({
	content,
	lang,
}: RecordsPageContentProps) {
	const [searchQuery, setSearchQuery] = useState("");

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const filteredRecords = useMemo(() => {
		const query = normalizeSearch(searchQuery);

		if (!query) {
			return records;
		}

		return records.filter((record) => {
			const searchableText = normalizeSearch(
				[record.title, record.date, record.year.toString(), record.id].join(
					" ",
				),
			);

			return searchableText.includes(query);
		});
	}, [searchQuery]);

	const filteredYears = useMemo(() => {
		return [...new Set(filteredRecords.map((record) => record.year))].sort(
			(a, b) => b - a,
		);
	}, [filteredRecords]);

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
						label: content.pageHeader.breadcrumbCouncil,
						href: localizeHref("/o-institutu/naucno-vece"),
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
						<aside className="lg:sticky lg:top-32 lg:self-start">
							<div className="p-6 border rounded-xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
									{content.archive.eyebrow}
								</p>

								<h2 className="mt-2 text-xl font-semibold text-stone-900">
									{content.archive.title}
								</h2>

								<nav
									className="mt-5 space-y-1"
									aria-label={content.archive.ariaLabel}
								>
									{filteredYears.map((year) => (
										<a
											key={year}
											href={`#godina-${year}`}
											className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-white hover:text-institute-800"
										>
											<span>{year}.</span>

											<span className="rounded-full bg-white px-2 py-0.5 text-xs text-stone-500">
												{
													filteredRecords.filter(
														(record) => record.year === year,
													).length
												}
											</span>
										</a>
									))}
								</nav>
							</div>
						</aside>

						<div>
							<div className="flex flex-col gap-5 pb-8 border-b border-stone-200 sm:flex-row sm:items-end sm:justify-between">
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
										{content.records.eyebrow}
									</p>

									<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
										{content.records.title}
									</h2>
								</div>

								<label className="relative block w-full sm:max-w-xs">
									<span className="sr-only">{content.records.searchLabel}</span>

									<Search
										className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
										aria-hidden="true"
									/>

									<input
										type="search"
										value={searchQuery}
										onChange={(event) => setSearchQuery(event.target.value)}
										placeholder={content.records.searchPlaceholder}
										className="w-full rounded-md border border-stone-300 bg-white py-2.5 pr-4 pl-10 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
									/>
								</label>
							</div>

							<div className="mt-10 space-y-12">
								{filteredYears.length === 0 ? (
									<div className="p-8 text-center border rounded-xl border-stone-200 bg-stone-50">
										<p className="text-sm text-stone-600">
											{content.records.noResults}
										</p>
									</div>
								) : (
									filteredYears.map((year) => {
										const yearRecords = filteredRecords.filter(
											(record) => record.year === year,
										);

										return (
											<section
												key={year}
												id={`godina-${year}`}
												className="scroll-mt-32"
											>
												<div className="flex items-center gap-4">
													<h3 className="text-2xl font-semibold tracking-tight text-stone-900">
														{year}.
													</h3>

													<div className="flex-1 h-px bg-stone-200" />
												</div>

												<div className="mt-6 overflow-hidden bg-white border shadow-sm rounded-xl border-stone-200">
													<div className="divide-y divide-stone-200">
														{yearRecords.map((record) => (
															<RecordRow
																key={record.id}
																record={record}
																openDocLabel={content.records.openDoc}
															/>
														))}
													</div>
												</div>
											</section>
										);
									})
								)}
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

type RecordRowProps = {
	record: CouncilRecord;
	openDocLabel: string;
};

function RecordRow({ record, openDocLabel }: RecordRowProps) {
	return (
		<article className="grid gap-5 p-5 transition hover:bg-stone-50 md:grid-cols-[48px_1fr_auto] md:items-center md:p-6">
			<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
				<FileText
					className="w-5 h-5"
					aria-hidden="true"
				/>
			</div>

			<div>
				<h4 className="font-semibold text-stone-900">{record.title}</h4>

				<div className="flex flex-wrap items-center mt-2 text-sm gap-x-4 gap-y-1 text-stone-500">
					<time>{record.date}</time>

					{record.fileSize && (
						<>
							<span aria-hidden="true">•</span>

							<span>DOC, {record.fileSize}</span>
						</>
					)}
				</div>
			</div>

			<a
				href={record.fileUrl}
				target="_blank"
				rel="noreferrer"
				className="inline-flex items-center justify-center gap-2 rounded-md border border-institute-700 px-4 py-2.5 text-sm font-semibold text-institute-800 transition hover:bg-institute-50"
			>
				<Download
					className="w-4 h-4"
					aria-hidden="true"
				/>

				{openDocLabel}
			</a>
		</article>
	);
}

function normalizeSearch(value: string) {
	return value
		.toLocaleLowerCase("sr")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "dj")
		.trim();
}
