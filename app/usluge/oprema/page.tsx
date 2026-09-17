"use client";

import {
	Building2,
	Mail,
	Search,
	Settings2,
	SlidersHorizontal,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";
import oprema1 from "@/public/imgs/IMG_9995.jpg";
import oprema2 from "@/public/imgs/IMG_9966.jpg";
import oprema3 from "@/public/imgs/IMG_9958.jpg";
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import Image, { StaticImageData } from "next/image";

type EquipmentItem = {
	id: string;
	name: string;
	manufacturer?: string;
	model?: string;
	description: string;
	image: string | StaticImageData;
	laboratory: string;
	contactName?: string;
	contactEmail?: string;
};

const equipment: EquipmentItem[] = [
	{
		id: "uredjaj-01",
		name: "Naziv uređaja",
		manufacturer: "Proizvođač",
		model: "Model uređaja",
		description:
			"Kratak opis namene uređaja, vrste analiza ili ispitivanja koja se njime obavljaju i materijala koji se mogu ispitivati.",
		image: oprema1,
		laboratory: "Laboratorija za instrumentalna ispitivanja",
		contactName: "Ime i prezime",
		contactEmail: "ime.prezime@itnms.ac.rs",
	},
	{
		id: "uredjaj-02",
		name: "Naziv laboratorijskog sistema",
		manufacturer: "Proizvođač",
		model: "Model",
		description:
			"Uređaj se koristi za karakterizaciju uzoraka, kontrolu tehnoloških parametara i podršku naučnim i stručnim ispitivanjima.",
		image: oprema2,
		laboratory: "Laboratorija za pripremu mineralnih sirovina",
		contactName: "Ime i prezime",
		contactEmail: "ime.prezime@itnms.ac.rs",
	},
	{
		id: "uredjaj-03",
		name: "Naziv pilot-opreme",
		manufacturer: "Proizvođač",
		model: "Model",
		description:
			"Oprema namenjena laboratorijskim i poluindustrijskim ispitivanjima tehnoloških procesa.",
		image: oprema3,
		laboratory: "Laboratorija za metalurška ispitivanja",
		contactName: "Ime i prezime",
		contactEmail: "ime.prezime@itnms.ac.rs",
	},
];

const laboratories = [
	...new Set(equipment.map((item) => item.laboratory)),
].sort((a, b) => a.localeCompare(b, "sr"));

export default function EquipmentPage() {
	const [query, setQuery] = useState("");
	const [selectedLaboratory, setSelectedLaboratory] = useState("Sve");

	const filteredEquipment = useMemo(() => {
		const normalizedQuery = query.toLocaleLowerCase("sr");

		return equipment.filter((item) => {
			const searchableText = [
				item.name,
				item.manufacturer,
				item.model,
				item.description,
				item.laboratory,
			]
				.filter(Boolean)
				.join(" ")
				.toLocaleLowerCase("sr");

			const matchesQuery = searchableText.includes(normalizedQuery);

			const matchesLaboratory =
				selectedLaboratory === "Sve" || item.laboratory === selectedLaboratory;

			return matchesQuery && matchesLaboratory;
		});
	}, [query, selectedLaboratory]);

	const filtersActive = query !== "" || selectedLaboratory !== "Sve";

	function clearFilters() {
		setQuery("");
		setSelectedLaboratory("Sve");
	}

	return (
		<>
			<PageHeader
				title="Oprema"
				description="Pregled laboratorijske, analitičke i tehnološke opreme Instituta."
				breadcrumbs={[
					{
						label: "Usluge",
						href: "/usluge",
					},
					{
						label: "Oprema",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Tehnički kapaciteti
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Laboratorijska i tehnološka oprema
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Oprema Instituta koristi se za naučnoistraživački rad,
							laboratorijska ispitivanja, razvoj tehnoloških procesa i stručne
							usluge.
						</p>
					</div>

					<div className="p-5 mt-10 border rounded-2xl border-stone-200 bg-stone-50 md:p-6">
						<div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
							<SlidersHorizontal
								className="w-4 h-4 text-institute-700"
								aria-hidden="true"
							/>
							Pretraga i filteri
						</div>

						<div className="mt-5 grid gap-4 lg:grid-cols-[1fr_340px_auto]">
							<label className="relative block">
								<span className="sr-only">Pretražite opremu</span>

								<Search
									className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none left-3 top-1/2 text-stone-400"
									aria-hidden="true"
								/>

								<input
									type="search"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
									placeholder="Naziv, model, proizvođač ili namena"
									className="w-full py-3 pl-10 pr-4 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								/>
							</label>

							<select
								value={selectedLaboratory}
								onChange={(event) => setSelectedLaboratory(event.target.value)}
								className="w-full px-4 py-3 text-sm transition bg-white border rounded-md outline-none border-stone-300 text-stone-800 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								aria-label="Laboratorija"
							>
								<option value="Sve">Sve laboratorije</option>

								{laboratories.map((laboratory) => (
									<option
										key={laboratory}
										value={laboratory}
									>
										{laboratory}
									</option>
								))}
							</select>

							<button
								type="button"
								onClick={clearFilters}
								disabled={!filtersActive}
								className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition bg-white border rounded-md border-stone-300 text-stone-700 hover:border-institute-300 hover:text-institute-800 disabled:cursor-not-allowed disabled:opacity-40"
							>
								<X
									className="w-4 h-4"
									aria-hidden="true"
								/>
								Poništi
							</button>
						</div>
					</div>

					<div className="flex items-center justify-between gap-4 mt-8">
						<p className="text-sm text-stone-600">
							Prikazano{" "}
							<span className="font-semibold text-stone-900">
								{filteredEquipment.length}
							</span>{" "}
							uređaja
						</p>

						<p className="text-sm text-stone-500">Ukupno: {equipment.length}</p>
					</div>

					{filteredEquipment.length > 0 ? (
						<div className="grid gap-6 mt-6 lg:grid-cols-2">
							{filteredEquipment.map((item) => (
								<EquipmentCard
									key={item.id}
									item={item}
								/>
							))}
						</div>
					) : (
						<EmptyEquipmentState onClear={clearFilters} />
					)}
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Potrebno vam je ispitivanje na određenom uređaju?
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pošaljite opis uzorka, potrebne analize i očekivane rezultate, a
								stručni tim će vas uputiti na odgovarajuću opremu.
							</p>
						</div>

						<a
							href="/usluge/posaljite-upit"
							className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Pošaljite upit
						</a>
					</div>
				</Container>
			</Section>
		</>
	);
}

type EquipmentCardProps = {
	item: EquipmentItem;
};

function EquipmentCard({ item }: EquipmentCardProps) {
	const manufacturerAndModel = [item.manufacturer, item.model]
		.filter(Boolean)
		.join(" · ");

	return (
		<article
			id={item.id}
			className="overflow-hidden transition bg-white border shadow-sm scroll-mt-32 rounded-2xl border-stone-200 hover:border-institute-300 hover:shadow-md"
		>
			<div className="grid sm:grid-cols-[220px_1fr]">
				<div className="flex items-center justify-center p-4 overflow-hidden min-h-60 bg-stone-100">
					<Image
						sizes="(min-width: 1024px) 50vw, 100vw"
						src={item.image}
						alt={item.name}
						className="h-full max-h-62.5  w-full object-cover"
					/>
				</div>

				<div className="flex flex-col p-6">
					<div className="flex items-center justify-center rounded-lg h-11 w-11 bg-institute-50 text-institute-800">
						<Settings2
							className="w-5 h-5"
							aria-hidden="true"
						/>
					</div>

					<h2 className="mt-5 text-xl font-semibold tracking-tight text-stone-900">
						{item.name}
					</h2>

					{manufacturerAndModel && (
						<p className="mt-2 text-sm font-medium text-institute-700">
							{manufacturerAndModel}
						</p>
					)}

					<p className="mt-4 text-sm leading-6 text-stone-600">
						{item.description}
					</p>

					<div className="pt-5 mt-6 space-y-4 border-t border-stone-200">
						<div className="flex items-start gap-3">
							<Building2
								className="mt-0.5 h-4 w-4 shrink-0 text-mineral-700"
								aria-hidden="true"
							/>

							<div>
								<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
									Laboratorija
								</p>

								<p className="mt-1 text-sm leading-6 text-stone-700">
									{item.laboratory}
								</p>
							</div>
						</div>

						{(item.contactName || item.contactEmail) && (
							<div className="flex items-start gap-3">
								<Mail
									className="mt-0.5 h-4 w-4 shrink-0 text-mineral-700"
									aria-hidden="true"
								/>

								<div className="min-w-0">
									<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
										Kontakt
									</p>

									{item.contactName && (
										<p className="mt-1 text-sm font-medium text-stone-800">
											{item.contactName}
										</p>
									)}

									{item.contactEmail && (
										<a
											href={`mailto:${item.contactEmail}`}
											className="block mt-1 text-sm break-all transition text-institute-700 hover:text-institute-900"
										>
											{item.contactEmail}
										</a>
									)}
								</div>
							</div>
						)}
					</div>

					<a
						href={`/usluge/posaljite-upit?oprema=${item.id}`}
						className="pt-6 mt-auto text-sm font-semibold transition text-institute-700 hover:text-institute-900"
					>
						Pošaljite upit za ovu opremu →
					</a>
				</div>
			</div>
		</article>
	);
}

type EmptyEquipmentStateProps = {
	onClear: () => void;
};

function EmptyEquipmentState({ onClear }: EmptyEquipmentStateProps) {
	return (
		<div className="px-6 mt-8 text-center border rounded-2xl border-stone-200 bg-stone-50 py-14">
			<Search
				className="w-10 h-10 mx-auto text-stone-400"
				aria-hidden="true"
			/>

			<h2 className="mt-5 text-2xl font-semibold text-stone-900">
				Nema pronađene opreme
			</h2>

			<p className="max-w-lg mx-auto mt-3 text-sm leading-6 text-stone-600">
				Promenite pojam pretrage ili izaberite drugu laboratoriju.
			</p>

			<button
				type="button"
				onClick={onClear}
				className="mt-6 rounded-md border border-institute-700 px-5 py-2.5 text-sm font-semibold text-institute-800 transition hover:bg-institute-50"
			>
				Poništi sve filtere
			</button>
		</div>
	);
}
