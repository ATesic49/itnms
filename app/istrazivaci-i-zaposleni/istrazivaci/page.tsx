// "use client";

// import { Search, SlidersHorizontal, X } from "lucide-react";
// import { useMemo, useState } from "react";

// import { Container } from "@/app/components/Container";
// import { PageHeader } from "@/app/components/PageHeder";
// import { Section } from "@/app/components/Section";

// type Researcher = {
// 	id: string;
// 	fullName: string;
// 	scientificTitle: string;
// 	unit: string;
// 	interests: string[];
// 	image: string;
// 	profileUrl: string;
// };

// const researchers: Researcher[] = [
// 	{
// 		id: "1",
// 		fullName: "Dr Ime Prezime",
// 		scientificTitle: "Naučni savetnik",
// 		unit: "Sektor za pripremu mineralnih sirovina",
// 		interests: ["Priprema mineralnih sirovina", "Karakterizacija materijala"],
// 		image: "/images/zaposleni/ime-prezime.webp",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/ime-prezime",
// 	},
// 	{
// 		id: "2",
// 		fullName: "Dr Drugo Prezime",
// 		scientificTitle: "Viši naučni saradnik",
// 		unit: "Sektor za metalurgiju",
// 		interests: ["Metalurgija", "Hidrometalurški procesi"],
// 		image: "/images/zaposleni/drugo-prezime.webp",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/drugo-prezime",
// 	},
// 	{
// 		id: "3",
// 		fullName: "MSc Treće Prezime",
// 		scientificTitle: "Istraživač saradnik",
// 		unit: "Sektor za materijale i hemijsko inženjerstvo",
// 		interests: ["Napredni materijali", "Hemijsko inženjerstvo"],
// 		image: "/images/zaposleni/trece-prezime.webp",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/trece-prezime",
// 	},
// ];

// const scientificTitles = [
// 	...new Set(researchers.map((researcher) => researcher.scientificTitle)),
// ];

// const units = [...new Set(researchers.map((researcher) => researcher.unit))];

// const interestAreas = [
// 	...new Set(researchers.flatMap((researcher) => researcher.interests)),
// ].sort((a, b) => a.localeCompare(b, "sr"));

// export default function ResearchersPage() {
// 	const [query, setQuery] = useState("");
// 	const [selectedTitle, setSelectedTitle] = useState("Sve");
// 	const [selectedUnit, setSelectedUnit] = useState("Sve");
// 	const [selectedInterest, setSelectedInterest] = useState("Sve");

// 	const filteredResearchers = useMemo(() => {
// 		return researchers.filter((researcher) => {
// 			const normalizedQuery = query.toLocaleLowerCase("sr");

// 			const matchesQuery =
// 				researcher.fullName.toLocaleLowerCase("sr").includes(normalizedQuery) ||
// 				researcher.interests.some((interest) =>
// 					interest.toLocaleLowerCase("sr").includes(normalizedQuery),
// 				);

// 			const matchesTitle =
// 				selectedTitle === "Sve" || researcher.scientificTitle === selectedTitle;

// 			const matchesUnit =
// 				selectedUnit === "Sve" || researcher.unit === selectedUnit;

// 			const matchesInterest =
// 				selectedInterest === "Sve" ||
// 				researcher.interests.includes(selectedInterest);

// 			return matchesQuery && matchesTitle && matchesUnit && matchesInterest;
// 		});
// 	}, [query, selectedTitle, selectedUnit, selectedInterest]);

// 	const filtersActive =
// 		query !== "" ||
// 		selectedTitle !== "Sve" ||
// 		selectedUnit !== "Sve" ||
// 		selectedInterest !== "Sve";

// 	function clearFilters() {
// 		setQuery("");
// 		setSelectedTitle("Sve");
// 		setSelectedUnit("Sve");
// 		setSelectedInterest("Sve");
// 	}

// 	return (
// 		<>
// 			<PageHeader
// 				title="Istraživači"
// 				description="Pregled istraživača Instituta prema naučnom zvanju, organizacionoj jedinici i oblasti interesovanja."
// 				breadcrumbs={[
// 					{
// 						label: "Istraživači i zaposleni",
// 						href: "/istrazivaci-i-zaposleni",
// 					},
// 					{
// 						label: "Istraživači",
// 					},
// 				]}
// 			/>

// 			<Section>
// 				<Container>
// 					<div className="p-5 border rounded-2xl border-stone-200 bg-stone-50 md:p-6">
// 						<div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
// 							<SlidersHorizontal
// 								className="w-4 h-4 text-institute-700"
// 								aria-hidden="true"
// 							/>
// 							Pretraga i filteri
// 						</div>

// 						<div className="mt-5 grid gap-4 xl:grid-cols-[1fr_220px_280px_260px_auto]">
// 							<label className="relative block">
// 								<span className="sr-only">Pretražite istraživače</span>

// 								<Search
// 									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
// 									aria-hidden="true"
// 								/>

// 								<input
// 									type="search"
// 									value={query}
// 									onChange={(event) => setQuery(event.target.value)}
// 									placeholder="Ime ili oblast interesovanja"
// 									className="w-full py-3 pl-10 pr-4 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
// 								/>
// 							</label>

// 							<select
// 								value={selectedTitle}
// 								onChange={(event) => setSelectedTitle(event.target.value)}
// 								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
// 								aria-label="Naučno zvanje"
// 							>
// 								<option value="Sve">Sva naučna zvanja</option>

// 								{scientificTitles.map((title) => (
// 									<option
// 										key={title}
// 										value={title}
// 									>
// 										{title}
// 									</option>
// 								))}
// 							</select>

// 							<select
// 								value={selectedUnit}
// 								onChange={(event) => setSelectedUnit(event.target.value)}
// 								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
// 								aria-label="Organizaciona jedinica"
// 							>
// 								<option value="Sve">Sve organizacione jedinice</option>

// 								{units.map((unit) => (
// 									<option
// 										key={unit}
// 										value={unit}
// 									>
// 										{unit}
// 									</option>
// 								))}
// 							</select>

// 							<select
// 								value={selectedInterest}
// 								onChange={(event) => setSelectedInterest(event.target.value)}
// 								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
// 								aria-label="Oblast interesovanja"
// 							>
// 								<option value="Sve">Sve oblasti interesovanja</option>

// 								{interestAreas.map((interest) => (
// 									<option
// 										key={interest}
// 										value={interest}
// 									>
// 										{interest}
// 									</option>
// 								))}
// 							</select>

// 							<button
// 								type="button"
// 								onClick={clearFilters}
// 								disabled={!filtersActive}
// 								className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition bg-white border rounded-md border-stone-300 text-stone-700 hover:border-institute-300 hover:text-institute-800 disabled:cursor-not-allowed disabled:opacity-40"
// 							>
// 								<X
// 									className="w-4 h-4"
// 									aria-hidden="true"
// 								/>
// 								Poništi
// 							</button>
// 						</div>
// 					</div>

// 					<div className="flex items-center justify-between gap-4 mt-8">
// 						<p className="text-sm text-stone-600">
// 							Prikazano{" "}
// 							<span className="font-semibold text-stone-900">
// 								{filteredResearchers.length}
// 							</span>{" "}
// 							istraživača
// 						</p>

// 						<p className="text-sm text-stone-500">
// 							Ukupno: {researchers.length}
// 						</p>
// 					</div>

// 					{filteredResearchers.length > 0 ? (
// 						<div className="grid gap-5 mt-6 lg:grid-cols-2">
// 							{filteredResearchers.map((researcher) => (
// 								<ResearcherCard
// 									key={researcher.id}
// 									researcher={researcher}
// 								/>
// 							))}
// 						</div>
// 					) : (
// 						<EmptyResearchersState onClear={clearFilters} />
// 					)}
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

// type ResearcherCardProps = {
// 	researcher: Researcher;
// };

// function ResearcherCard({ researcher }: ResearcherCardProps) {
// 	return (
// 		<a
// 			href={researcher.profileUrl}
// 			className="group flex min-h-37.5 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
// 		>
// 			<div className="overflow-hidden w-28 shrink-0 bg-stone-100 sm:w-32">
// 				<img
// 					src={researcher.image}
// 					alt={researcher.fullName}
// 					className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
// 				/>
// 			</div>

// 			<div className="flex flex-col justify-center flex-1 min-w-0 px-5 py-4">
// 				<h2 className="text-lg font-semibold tracking-tight transition text-stone-900 group-hover:text-institute-800">
// 					{researcher.fullName}
// 				</h2>

// 				<p className="mt-2 text-sm font-medium text-institute-700">
// 					{researcher.scientificTitle}
// 				</p>

// 				<p className="mt-2 text-xs line-clamp-1 text-stone-500">
// 					{researcher.unit}
// 				</p>

// 				<div className="flex flex-wrap gap-2 mt-3">
// 					{researcher.interests.slice(0, 2).map((interest) => (
// 						<span
// 							key={interest}
// 							className="rounded-full bg-mineral-50 px-2.5 py-1 text-xs font-medium text-mineral-800"
// 						>
// 							{interest}
// 						</span>
// 					))}
// 				</div>
// 			</div>
// 		</a>
// 	);
// }

// type EmptyResearchersStateProps = {
// 	onClear: () => void;
// };

// function EmptyResearchersState({ onClear }: EmptyResearchersStateProps) {
// 	return (
// 		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
// 			<Search
// 				className="w-10 h-10 mx-auto text-stone-400"
// 				aria-hidden="true"
// 			/>

// 			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
// 				Nema pronađenih istraživača
// 			</h2>

// 			<p className="max-w-lg mx-auto mt-3 text-sm leading-6 text-stone-600">
// 				Promenite pojam pretrage ili izaberite druge filtere.
// 			</p>

// 			<button
// 				type="button"
// 				onClick={onClear}
// 				className="mt-6 rounded-md border border-institute-700 px-5 py-2.5 text-sm font-semibold text-institute-800 transition hover:bg-institute-50"
// 			>
// 				Poništi sve filtere
// 			</button>
// 		</div>
// 	);
// }
import { getEmployees } from "@/app/lib/google-sheets/employees";
import IstrazivaciPageContent from "./IstrazivaciPageContent";

export default async function AllEmployeesPage() {
	const employees = await getEmployees();
	const istrazivaci = employees;
	return <IstrazivaciPageContent employees={istrazivaci} />;
}
