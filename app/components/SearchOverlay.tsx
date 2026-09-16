"use client";

const SEARCH_CACHE_KEY = "itnms-search-cache";

const SEARCH_CACHE_TIME = 2 * 60 * 1000;
type SearchCache = {
	results: SearchResult[];
	timestamp: number;
};

function getCachedSearch(): SearchResult[] | null {
	try {
		const cached = sessionStorage.getItem(SEARCH_CACHE_KEY);

		if (!cached) {
			return null;
		}

		const parsed = JSON.parse(cached) as SearchCache;

		const expired = Date.now() - parsed.timestamp > SEARCH_CACHE_TIME;

		if (expired) {
			sessionStorage.removeItem(SEARCH_CACHE_KEY);

			return null;
		}

		return parsed.results;
	} catch {
		return null;
	}
}

function saveSearchCache(results: SearchResult[]) {
	const cache: SearchCache = {
		results,
		timestamp: Date.now(),
	};

	sessionStorage.setItem(SEARCH_CACHE_KEY, JSON.stringify(cache));
}
import {
	ArrowRight,
	BriefcaseBusiness,
	FileText,
	FlaskConical,
	Loader2,
	Search,
	UserRound,
	X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { SearchResult, SearchResultType } from "@/app/types/search";
import { normalizeSearch } from "../lib/search/normalizeSearch";
import { localizeHref } from "../lib/language/localizeHref";
import { usePathname } from "next/navigation";

type SearchOverlayProps = {
	open: boolean;
	onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
	useEffect(() => {
		if (!open) {
			return;
		}

		async function loadSearchData() {
			/*
			 * Prvo proveravamo cache.
			 */
			const cached = getCachedSearch();

			if (cached) {
				console.log("Search: koristim cache");

				setAllResults(cached);

				return;
			}

			/*
			 * Ako cache ne postoji
			 * ili je stariji od 2 min,
			 * zovemo API.
			 */
			try {
				setLoading(true);

				console.log("Search: fetchujem nove podatke");

				const response = await fetch("/api/search");

				if (!response.ok) {
					throw new Error("Search fetch failed.");
				}

				const data = (await response.json()) as {
					results: SearchResult[];
				};

				const newResults = data.results ?? [];

				setAllResults(newResults);

				saveSearchCache(newResults);
			} catch (error) {
				console.error("Search loading error:", error);

				setAllResults([]);
			} finally {
				setLoading(false);
			}
		}

		loadSearchData();
	}, [open]);
	const [query, setQuery] = useState("");
	const [allResults, setAllResults] = useState<SearchResult[]>([]);

	const [results, setResults] = useState<SearchResult[]>([]);

	const [loading, setLoading] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	/*
	 * Fokus na input kada se otvori.
	 */
	useEffect(() => {
		if (!open) {
			return;
		}

		const timeout = setTimeout(() => {
			inputRef.current?.focus();
		}, 50);

		return () => clearTimeout(timeout);
	}, [open]);

	/*
	 * ESC zatvara search.
	 */
	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				onClose();
			}
		}

		if (open) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [open, onClose]);

	/*
	 * Sprečava scroll stranice
	 * dok je search otvoren.
	 */
	useEffect(() => {
		if (!open) {
			return;
		}

		const previousOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);
	useEffect(() => {
		const normalizedQuery = normalizeSearch(query);

		if (normalizedQuery.length < 2) {
			setResults([]);
			return;
		}

		const ranked = allResults
			.map((result) => {
				const title = normalizeSearch(result.title ?? "");

				const description = normalizeSearch(result.description ?? "");

				const searchText = normalizeSearch(result.searchText ?? "");

				let score = 0;

				/*
				 * 1. ZAPOSLENI - ime ima najveći prioritet
				 */
				if (result.type === "employee" && title.includes(normalizedQuery)) {
					score = 400;
				}

				/*
				 * Još veći score ako ime počinje upitom
				 */
				if (result.type === "employee" && title.startsWith(normalizedQuery)) {
					score = 450;
				}

				/*
				 * 2. PROJEKTI
				 */
				if (
					result.type === "project" &&
					(title.includes(normalizedQuery) ||
						description.includes(normalizedQuery) ||
						searchText.includes(normalizedQuery))
				) {
					score = 300;
				}

				/*
				 * Bonus ako se pojam nalazi u naslovu projekta
				 */
				if (result.type === "project" && title.includes(normalizedQuery)) {
					score = 350;
				}

				/*
				 * 3. ZAPOSLENI - opis / oblast istraživanja
				 */
				if (
					result.type === "employee" &&
					!title.includes(normalizedQuery) &&
					(description.includes(normalizedQuery) ||
						searchText.includes(normalizedQuery))
				) {
					score = 200;
				}

				/*
				 * 4. STRANICE
				 */
				if (
					result.type === "page" &&
					(title.includes(normalizedQuery) ||
						description.includes(normalizedQuery) ||
						searchText.includes(normalizedQuery))
				) {
					score = 400;
				}

				return {
					result,
					score,
				};
			})
			.filter(({ score }) => score > 0)
			.sort((a, b) => b.score - a.score)
			.map(({ result }) => result);

		setResults(ranked.slice(0, 30));
	}, [query, allResults]);
	if (!open) {
		return null;
	}

	const employees = results.filter((result) => result.type === "employee");

	const pages = results.filter((result) => result.type === "page");

	const projects = results.filter((result) => result.type === "project");

	return (
		<div
			className="fixed inset-0 z-[9999] bg-white"
			role="dialog"
			aria-modal="true"
			aria-label="Pretraga sajta"
		>
			<div className="flex flex-col h-full">
				{/* HEADER */}

				<div className="border-b border-stone-200">
					<div className="flex items-center max-w-5xl gap-4 px-5 py-5 mx-auto md:px-8">
						<Search className="w-6 h-6 shrink-0 text-institute-700" />

						<input
							ref={inputRef}
							type="search"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder="Pretražite istraživače, projekte i stranice..."
							className="flex-1 min-w-0 text-xl font-medium bg-transparent outline-none text-stone-900 placeholder:text-stone-400 md:text-2xl"
						/>

						{loading && (
							<Loader2 className="w-5 h-5 animate-spin text-stone-400" />
						)}

						<button
							type="button"
							onClick={onClose}
							className="flex items-center justify-center transition rounded-full h-11 w-11 shrink-0 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
							aria-label="Zatvori pretragu"
						>
							<X className="w-6 h-6" />
						</button>
					</div>
				</div>

				{/* RESULTS */}

				<div className="flex-1 overflow-y-auto">
					<div className="max-w-5xl px-5 py-8 mx-auto md:px-8 md:py-12">
						{query.trim().length < 2 ? (
							<SearchStart />
						) : !loading && results.length === 0 ? (
							<NoResults query={query} />
						) : (
							// <div className="space-y-10">
							// 	{employees.length > 0 && (
							// 		<ResultGroup
							// 			title="Istraživači i zaposleni"
							// 			results={employees}
							// 			onClose={onClose}
							// 		/>
							// 	)}

							// 	{pages.length > 0 && (
							// 		<ResultGroup
							// 			title="Stranice"
							// 			results={pages}
							// 			onClose={onClose}
							// 		/>
							// 	)}

							// 	{projects.length > 0 && (
							// 		<ResultGroup
							// 			title="Projekti"
							// 			results={projects}
							// 			onClose={onClose}
							// 		/>
							// 	)}
							// </div>
							<div className="divide-y divide-stone-200 border-y border-stone-200">
								{results.map((result) => (
									<SearchResultItem
										key={result.id}
										result={result}
										onClose={onClose}
									/>
								))}
							</div>
						)}
					</div>
				</div>

				{/* FOOTER */}

				<div className="border-t border-stone-200 bg-stone-50">
					<div className="flex items-center justify-between max-w-5xl px-5 py-3 mx-auto text-xs text-stone-500 md:px-8">
						<span>Pretraga ITNMS sajta</span>

						<span className="hidden sm:block">ESC za zatvaranje</span>
					</div>
				</div>
			</div>
		</div>
	);
}
function ResultGroup({
	title,
	results,
	onClose,
}: {
	title: string;
	results: SearchResult[];
	onClose: () => void;
}) {
	return (
		<section>
			<p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mineral-700">
				{title}
			</p>

			<div className="divide-y divide-stone-200 border-y border-stone-200">
				{results.map((result) => (
					<SearchResultItem
						key={result.id}
						result={result}
						onClose={onClose}
					/>
				))}
			</div>
		</section>
	);
}

function SearchResultItem({
	result,
	onClose,
}: {
	result: SearchResult;
	onClose: () => void;
}) {
	const external = result.href.startsWith("http");
	const pathname = usePathname();

	const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
	return (
		<Link
			href={
				result.href.startsWith("http")
					? result.href
					: localizeHref(result.href, isEnglish)
			}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			onClick={onClose}
			className="flex items-center gap-4 py-5 group"
		>
			<div className="flex items-center justify-center transition h-11 w-11 shrink-0 rounded-xl bg-stone-100 text-stone-600 group-hover:bg-institute-50 group-hover:text-institute-800">
				<SearchResultIcon type={result.type} />
			</div>

			<div className="flex-1 min-w-0">
				<p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-mineral-700">
					{result.type === "employee" && "Istraživač"}
					{result.type === "project" && "Projekat"}
					{result.type === "page" && "Stranica"}
				</p>

				<h3 className="font-semibold transition text-stone-900 group-hover:text-institute-800">
					{result.title}
				</h3>

				{result.description && (
					<p className="mt-1 text-sm leading-6 line-clamp-2 text-stone-500">
						{result.description}
					</p>
				)}
			</div>

			<ArrowRight className="w-5 h-5 transition shrink-0 text-stone-300 group-hover:translate-x-1 group-hover:text-institute-700" />
		</Link>
	);
}

function SearchResultIcon({ type }: { type: SearchResultType }) {
	switch (type) {
		case "employee":
			return <UserRound className="w-5 h-5" />;

		case "project":
			return <FlaskConical className="w-5 h-5" />;

		case "page":
			return <FileText className="w-5 h-5" />;
	}
}

function SearchStart() {
	return (
		<div className="py-20 text-center">
			<div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-institute-50 text-institute-800">
				<Search className="w-8 h-8" />
			</div>

			<h2 className="mt-6 text-2xl font-semibold text-stone-900">
				Šta tražite?
			</h2>

			<p className="max-w-lg mx-auto mt-3 text-sm leading-6 text-stone-500">
				Možete pretraživati imena istraživača, projekte, centre, usluge i ostale
				stranice sajta.
			</p>
		</div>
	);
}

function NoResults({ query }: { query: string }) {
	return (
		<div className="py-20 text-center">
			<h2 className="text-2xl font-semibold text-stone-900">Nema rezultata</h2>

			<p className="mt-3 text-sm text-stone-500">
				Nismo pronašli rezultate za{" "}
				<span className="font-semibold text-stone-700">„{query}“</span>.
			</p>
		</div>
	);
}
