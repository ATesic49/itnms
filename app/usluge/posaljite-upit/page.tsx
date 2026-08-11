"use client";

import { CheckCircle2, FileUp, Mail, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
//Podsetnik: dodati backend mejl da se salje
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type FormData = {
	fullName: string;
	organization: string;
	email: string;
	phone: string;
	inquiryType: string;
	laboratory: string;
	subject: string;
	message: string;
	consent: boolean;
};

const initialFormData: FormData = {
	fullName: "",
	organization: "",
	email: "",
	phone: "",
	inquiryType: "",
	laboratory: "",
	subject: "",
	message: "",
	consent: false,
};

const inquiryTypes = [
	"Laboratorijsko ispitivanje",
	"Karakterizacija materijala",
	"Razvoj tehnološkog procesa",
	"Poluindustrijsko ispitivanje",
	"Zaštita životne sredine",
	"Stručna studija ili konsultacija",
	"Naučna saradnja",
	"Ostalo",
];

const laboratories = [
	"Nisam siguran",
	"Laboratorija za instrumentalna ispitivanja",
	"Laboratorija za pripremu mineralnih sirovina",
	"Laboratorija za metalurška ispitivanja",
];

export default function SendInquiryPage() {
	const [formData, setFormData] = useState(initialFormData);
	const [fileName, setFileName] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
		setFormData((current) => ({
			...current,
			[field]: value,
		}));
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!formData.consent) {
			return;
		}

		setIsSubmitting(true);

		try {
			// Ovde kasnije poveži API rutu ili servis za slanje emaila.
			await new Promise((resolve) => setTimeout(resolve, 600));

			setSubmitted(true);
			setFormData(initialFormData);
			setFileName("");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<>
			<PageHeader
				title="Pošaljite upit"
				description="Opišite potrebno ispitivanje, uzorak, tehnološki problem ili predlog saradnje."
				breadcrumbs={[
					{
						label: "Usluge",
						href: "/usluge",
					},
					{
						label: "Pošaljite upit",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
						<div>
							<div className="max-w-3xl">
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
									Forma za kontakt
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
									Pošaljite podatke o zahtevu
								</h2>

								<p className="mt-4 text-base leading-7 text-stone-600">
									Navedite što više konkretnih informacija o uzorku, potrebnom
									ispitivanju, očekivanom rezultatu ili vrsti saradnje.
								</p>
							</div>

							{submitted ? (
								<SuccessState onReset={() => setSubmitted(false)} />
							) : (
								<form
									onSubmit={handleSubmit}
									className="mt-10 space-y-8"
								>
									<fieldset className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-8">
										<legend className="px-2 text-lg font-semibold text-stone-900">
											Kontakt podaci
										</legend>

										<div className="grid gap-6 md:grid-cols-2">
											<FormField
												label="Ime i prezime"
												required
											>
												<input
													type="text"
													required
													value={formData.fullName}
													onChange={(event) =>
														updateField("fullName", event.target.value)
													}
													className={inputClasses}
												/>
											</FormField>

											<FormField label="Organizacija">
												<input
													type="text"
													value={formData.organization}
													onChange={(event) =>
														updateField("organization", event.target.value)
													}
													className={inputClasses}
												/>
											</FormField>

											<FormField
												label="Email adresa"
												required
											>
												<input
													type="email"
													required
													value={formData.email}
													onChange={(event) =>
														updateField("email", event.target.value)
													}
													className={inputClasses}
												/>
											</FormField>

											<FormField label="Broj telefona">
												<input
													type="tel"
													value={formData.phone}
													onChange={(event) =>
														updateField("phone", event.target.value)
													}
													className={inputClasses}
												/>
											</FormField>
										</div>
									</fieldset>

									<fieldset className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-8">
										<legend className="px-2 text-lg font-semibold text-stone-900">
											Podaci o upitu
										</legend>

										<div className="grid gap-6 md:grid-cols-2">
											<FormField
												label="Vrsta upita"
												required
											>
												<select
													required
													value={formData.inquiryType}
													onChange={(event) =>
														updateField("inquiryType", event.target.value)
													}
													className={inputClasses}
												>
													<option value="">Izaberite vrstu upita</option>

													{inquiryTypes.map((type) => (
														<option
															key={type}
															value={type}
														>
															{type}
														</option>
													))}
												</select>
											</FormField>

											<FormField label="Laboratorija">
												<select
													value={formData.laboratory}
													onChange={(event) =>
														updateField("laboratory", event.target.value)
													}
													className={inputClasses}
												>
													<option value="">Izaberite laboratoriju</option>

													{laboratories.map((laboratory) => (
														<option
															key={laboratory}
															value={laboratory}
														>
															{laboratory}
														</option>
													))}
												</select>
											</FormField>
										</div>

										<div className="mt-6">
											<FormField
												label="Naslov upita"
												required
											>
												<input
													type="text"
													required
													value={formData.subject}
													onChange={(event) =>
														updateField("subject", event.target.value)
													}
													placeholder="Na primer: Hemijska analiza uzorka"
													className={inputClasses}
												/>
											</FormField>
										</div>

										<div className="mt-6">
											<FormField
												label="Opis zahteva"
												required
												helpText="Navedite vrstu uzorka, količinu, očekivane analize, rok i druge važne informacije."
											>
												<textarea
													required
													rows={8}
													value={formData.message}
													onChange={(event) =>
														updateField("message", event.target.value)
													}
													className={`${inputClasses} resize-y`}
												/>
											</FormField>
										</div>

										<div className="mt-6">
											<FormField
												label="Prilog"
												helpText="Dozvoljeni formati i maksimalnu veličinu definiši prema backendu."
											>
												<label className="flex flex-col items-center justify-center px-6 py-8 text-center transition border border-dashed cursor-pointer rounded-xl border-stone-300 bg-stone-50 hover:border-institute-400 hover:bg-institute-50">
													<FileUp
														className="w-8 h-8 text-institute-700"
														aria-hidden="true"
													/>

													<span className="mt-3 text-sm font-semibold text-stone-800">
														Izaberite dokument
													</span>

													<span className="mt-1 text-xs text-stone-500">
														PDF, DOCX, XLSX, JPG ili PNG
													</span>

													{fileName && (
														<span className="mt-3 text-sm font-medium text-institute-700">
															{fileName}
														</span>
													)}

													<input
														type="file"
														className="sr-only"
														accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
														onChange={(event) =>
															setFileName(event.target.files?.[0]?.name ?? "")
														}
													/>
												</label>
											</FormField>
										</div>
									</fieldset>

									<div className="p-5 border rounded-xl border-stone-200 bg-stone-50">
										<label className="flex items-start gap-3 cursor-pointer">
											<input
												type="checkbox"
												checked={formData.consent}
												onChange={(event) =>
													updateField("consent", event.target.checked)
												}
												className="w-4 h-4 mt-1 rounded border-stone-300 text-institute-700 focus:ring-institute-500"
											/>

											<span className="text-sm leading-6 text-stone-600">
												Saglasan sam da Institut koristi unete podatke
												isključivo radi odgovora na ovaj upit, u skladu sa{" "}
												<a
													href="/politika-privatnosti"
													className="font-semibold text-institute-700 hover:text-institute-900"
												>
													politikom privatnosti
												</a>
												.
											</span>
										</label>
									</div>

									<button
										type="submit"
										disabled={!formData.consent || isSubmitting}
										className="inline-flex items-center justify-center gap-2 rounded-md bg-institute-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-institute-900 disabled:cursor-not-allowed disabled:opacity-50"
									>
										<Send
											className="w-4 h-4"
											aria-hidden="true"
										/>

										{isSubmitting ? "Slanje upita..." : "Pošaljite upit"}
									</button>
								</form>
							)}
						</div>

						<aside className="lg:sticky lg:top-32 lg:self-start">
							<div className="text-white rounded-2xl bg-institute-950 p-7">
								<h2 className="text-xl font-semibold">Direktan kontakt</h2>

								<p className="mt-3 text-sm leading-6 text-institute-100">
									Upit možete poslati i direktno putem emaila ili telefona.
								</p>

								<div className="mt-6 space-y-5">
									<a
										href="mailto:itnms@itnms.ac.rs"
										className="flex items-start gap-3 text-sm transition text-institute-100 hover:text-white"
									>
										<Mail
											className="mt-0.5 h-5 w-5 shrink-0 text-institute-300"
											aria-hidden="true"
										/>

										<span className="break-all">itnms@itnms.ac.rs</span>
									</a>

									<a
										href="tel:+381113691722"
										className="flex items-start gap-3 text-sm transition text-institute-100 hover:text-white"
									>
										<Phone
											className="mt-0.5 h-5 w-5 shrink-0 text-institute-300"
											aria-hidden="true"
										/>
										+381 11 3691 722
									</a>
								</div>
							</div>

							<div className="mt-6 border rounded-2xl border-stone-200 bg-stone-50 p-7">
								<h2 className="text-lg font-semibold text-stone-900">
									Šta treba da navedete?
								</h2>

								<ul className="mt-5 space-y-3 text-sm leading-6 text-stone-600">
									<li className="flex gap-3">
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										Vrstu i količinu uzorka
									</li>

									<li className="flex gap-3">
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										Potrebnu analizu ili rezultat
									</li>

									<li className="flex gap-3">
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										Očekivani rok realizacije
									</li>

									<li className="flex gap-3">
										<span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-mineral-600" />
										Tehničku dokumentaciju, ako postoji
									</li>
								</ul>
							</div>
						</aside>
					</div>
				</Container>
			</Section>
		</>
	);
}

const inputClasses =
	"w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-institute-500 focus:ring-2 focus:ring-institute-100";

type FormFieldProps = {
	label: string;
	required?: boolean;
	helpText?: string;
	children: React.ReactNode;
};

function FormField({
	label,
	required = false,
	helpText,
	children,
}: FormFieldProps) {
	return (
		<label className="block">
			<span className="text-sm font-semibold text-stone-800">
				{label}

				{required && (
					<span
						className="ml-1 text-red-600"
						aria-hidden="true"
					>
						*
					</span>
				)}
			</span>

			<span className="block mt-2">{children}</span>

			{helpText && (
				<span className="block mt-2 text-xs leading-5 text-stone-500">
					{helpText}
				</span>
			)}
		</label>
	);
}

type SuccessStateProps = {
	onReset: () => void;
};

function SuccessState({ onReset }: SuccessStateProps) {
	return (
		<div className="px-6 mt-10 text-center border rounded-2xl border-mineral-200 bg-mineral-50 py-14 md:px-10 md:py-16">
			<div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-full shadow-sm text-mineral-700">
				<CheckCircle2
					className="w-8 h-8"
					aria-hidden="true"
				/>
			</div>

			<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
				Upit je uspešno poslat
			</h2>

			<p className="max-w-xl mx-auto mt-4 text-base leading-7 text-stone-600">
				Hvala što ste kontaktirali Institut. Odgovarajući stručni tim će
				pregledati zahtev i javiti vam se putem navedene email adrese.
			</p>

			<button
				type="button"
				onClick={onReset}
				className="px-5 py-3 mt-8 text-sm font-semibold transition bg-white border rounded-md border-institute-700 text-institute-800 hover:bg-institute-50"
			>
				Pošaljite novi upit
			</button>
		</div>
	);
}
