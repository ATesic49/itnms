"use client";

import { FormEvent, useState } from "react";

import { ImageUpload } from "@/app/components/ImageUpload";

type ApiResponse = {
	message: string;
};

export default function AddNewsPage() {
	const [imageUrl, setImageUrl] = useState("");
	const [imageFileId, setImageFileId] = useState("");

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!imageUrl || !imageFileId) {
			setMessage("Prvo postavite fotografiju.");

			return;
		}

		setIsSubmitting(true);
		setMessage("");

		const form = event.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch("/api/vesti", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title: formData.get("title"),
					excerpt: formData.get("excerpt"),
					category: formData.get("category"),
					date: formData.get("date"),
					content: formData.get("content"),

					imageUrl,
					imageFileId,
				}),
			});

			const result = (await response.json()) as ApiResponse;

			if (!response.ok) {
				throw new Error(result.message);
			}

			setMessage(result.message);

			form.reset();

			setImageUrl("");
			setImageFileId("");
		} catch (error) {
			setMessage(
				error instanceof Error ? error.message : "Došlo je do greške.",
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<main className="min-h-screen py-12 bg-stone-50">
			<div className="max-w-3xl px-5 mx-auto">
				<div className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-8">
					<h1 className="text-3xl font-semibold text-stone-900">
						Dodaj novu vest
					</h1>

					<p className="mt-3 text-sm leading-6 text-stone-600">
						Popunite podatke i postavite fotografiju. Vest će biti sačuvana u
						Google Sheets dokumentu.
					</p>

					<form
						onSubmit={handleSubmit}
						className="mt-8 space-y-6"
					>
						<label className="block">
							<span className="block mb-2 text-sm font-semibold text-stone-800">
								Naslov
							</span>

							<input
								type="text"
								name="title"
								required
								placeholder="Naslov vesti"
								className="w-full px-4 py-3 text-sm bg-white border rounded-md outline-none border-stone-300 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
							/>
						</label>

						<label className="block">
							<span className="block mb-2 text-sm font-semibold text-stone-800">
								Kratak opis
							</span>

							<textarea
								name="excerpt"
								required
								rows={3}
								placeholder="Kratak opis koji se prikazuje na kartici"
								className="w-full px-4 py-3 text-sm bg-white border rounded-md outline-none resize-y border-stone-300 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
							/>
						</label>

						<div className="grid gap-5 md:grid-cols-2">
							<label className="block">
								<span className="block mb-2 text-sm font-semibold text-stone-800">
									Kategorija
								</span>

								<select
									name="category"
									required
									defaultValue=""
									className="w-full px-4 py-3 text-sm bg-white border rounded-md outline-none border-stone-300 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								>
									<option
										value=""
										disabled
									>
										Izaberite kategoriju
									</option>

									<option value="Projekti">Projekti</option>

									<option value="Događaji">Događaji</option>

									<option value="Konkursi">Konkursi</option>

									<option value="Obaveštenja">Obaveštenja</option>
								</select>
							</label>

							<label className="block">
								<span className="block mb-2 text-sm font-semibold text-stone-800">
									Datum
								</span>

								<input
									type="date"
									name="date"
									required
									className="w-full px-4 py-3 text-sm bg-white border rounded-md outline-none border-stone-300 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
								/>
							</label>
						</div>

						<label className="block">
							<span className="block mb-2 text-sm font-semibold text-stone-800">
								Tekst vesti
							</span>

							<textarea
								name="content"
								required
								rows={12}
								placeholder="Unesite kompletan tekst vesti"
								className="w-full px-4 py-3 text-sm leading-7 bg-white border rounded-md outline-none resize-y border-stone-300 focus:border-institute-500 focus:ring-2 focus:ring-institute-100"
							/>
						</label>

						<div className="p-5 border rounded-xl border-stone-200 bg-stone-50">
							<ImageUpload
								onUploaded={(image) => {
									setImageUrl(image.imageUrl);
									setImageFileId(image.fileId);
									setMessage("");
								}}
							/>

							{imageUrl && (
								<div className="px-4 py-3 mt-4 text-sm text-green-800 rounded-md bg-green-50">
									Fotografija je postavljena i spremna za čuvanje.
								</div>
							)}
						</div>

						<button
							type="submit"
							disabled={isSubmitting || !imageUrl}
							className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{isSubmitting ? "Objavljivanje..." : "Objavi vest"}
						</button>

						{message && (
							<p className="px-4 py-3 text-sm border rounded-md border-stone-200 bg-stone-50 text-stone-700">
								{message}
							</p>
						)}
					</form>
				</div>
			</div>
		</main>
	);
}
