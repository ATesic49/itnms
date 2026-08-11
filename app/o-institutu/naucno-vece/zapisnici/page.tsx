import { Download, FileText, Search } from "lucide-react";
//Podsetnik: Dodaj finkcionalnost, i pitaj Sonju sta su zapisnici, ili napravi nema zapisnika deo
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

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
		id: "zapisnik-2026-03",
		title: "Zapisnik sa 3. sednice Naučnog veća",
		date: "18. jun 2026.",
		year: 2026,
		fileUrl: "/documents/naucno-vece/2026/zapisnik-03.pdf",
		fileSize: "1,2 MB",
	},
	{
		id: "zapisnik-2026-02",
		title: "Zapisnik sa 2. sednice Naučnog veća",
		date: "24. april 2026.",
		year: 2026,
		fileUrl: "/documents/naucno-vece/2026/zapisnik-02.pdf",
		fileSize: "980 KB",
	},
	{
		id: "zapisnik-2026-01",
		title: "Zapisnik sa 1. sednice Naučnog veća",
		date: "12. februar 2026.",
		year: 2026,
		fileUrl: "/documents/naucno-vece/2026/zapisnik-01.pdf",
		fileSize: "1,1 MB",
	},
	{
		id: "zapisnik-2025-05",
		title: "Zapisnik sa 5. sednice Naučnog veća",
		date: "16. decembar 2025.",
		year: 2025,
		fileUrl: "/documents/naucno-vece/2025/zapisnik-05.pdf",
		fileSize: "1,4 MB",
	},
	{
		id: "zapisnik-2025-04",
		title: "Zapisnik sa 4. sednice Naučnog veća",
		date: "8. oktobar 2025.",
		year: 2025,
		fileUrl: "/documents/naucno-vece/2025/zapisnik-04.pdf",
		fileSize: "870 KB",
	},
];

const years = [...new Set(records.map((record) => record.year))].sort(
	(a, b) => b - a,
);

export default function ScientificCouncilRecordsPage() {
	return (
		<>
			<PageHeader
				title="Zapisnici Naučnog veća"
				description="Pregled zapisnika sa sednica Naučnog veća Instituta, razvrstanih prema godini održavanja."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "Naučno veće",
						href: "/o-institutu/naucno-vece",
					},
					{
						label: "Zapisnici",
					},
				]}
			/>

			<Section>
				<Container>
					{/* <ScientificCouncilRecordsPage /> */}
					<div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
						<aside className="lg:sticky lg:top-32 lg:self-start">
							<div className="p-6 border rounded-xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
									Arhiva
								</p>

								<h2 className="mt-2 text-xl font-semibold text-stone-900">
									Godine
								</h2>

								<nav
									className="mt-5 space-y-1"
									aria-label="Godine zapisnika"
								>
									{years.map((year) => (
										<a
											key={year}
											href={`#godina-${year}`}
											className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-white hover:text-institute-800"
										>
											<span>{year}.</span>

											<span className="rounded-full bg-white px-2 py-0.5 text-xs text-stone-500">
												{
													records.filter((record) => record.year === year)
														.length
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
										Dokumentacija
									</p>

									<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
										Objavljeni zapisnici
									</h2>
								</div>

								<label className="relative block w-full sm:max-w-xs">
									<span className="sr-only">Pretražite zapisnike</span>

									<Search
										className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
										aria-hidden="true"
									/>

									<input
										type="search"
										placeholder="Pretražite zapisnike"
										className="w-full rounded-md border border-stone-300 bg-white py-2.5 pl-10 pr-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
									/>
								</label>
							</div>

							<div className="mt-10 space-y-12">
								{years.map((year) => {
									const yearRecords = records.filter(
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
														/>
													))}
												</div>
											</div>
										</section>
									);
								})}
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
};

function RecordRow({ record }: RecordRowProps) {
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
							<span>PDF, {record.fileSize}</span>
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
				Otvori PDF
			</a>
		</article>
	);
}
