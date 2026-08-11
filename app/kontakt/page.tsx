"use client";

import {
	Building2,
	CheckCircle2,
	Clock3,
	Mail,
	MapPin,
	Phone,
	Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type ContactFormData = {
	fullName: string;
	email: string;
	phone: string;
	organization: string;
	subject: string;
	message: string;
	consent: boolean;
};

const initialFormData: ContactFormData = {
	fullName: "",
	email: "",
	phone: "",
	organization: "",
	subject: "",
	message: "",
	consent: false,
};

const contactDetails = [
	{
		title: "Adresa",
		value: "Franše d’Eperea 86, 11000 Beograd, Srbija",
		href: "https://maps.google.com",
		icon: MapPin,
	},
	{
		title: "Telefon",
		value: "+381 11 3691 722",
		href: "tel:+381113691722",
		icon: Phone,
	},
	{
		title: "Email",
		value: "itnms@itnms.ac.rs",
		href: "mailto:itnms@itnms.ac.rs",
		icon: Mail,
	},
	{
		title: "Radno vreme",
		value: "Ponedeljak–petak, 8.00–16.00",
		icon: Clock3,
	},
];

const departmentContacts = [
	{
		title: "Opšti i administrativni poslovi",
		email: "itnms@itnms.ac.rs",
		phone: "+381 11 3691 722",
	},
	{
		title: "Laboratorijska ispitivanja i usluge",
		email: "laboratorije@itnms.ac.rs",
		phone: "+381 11 0000 000",
	},
	{
		title: "Naučnoistraživačka saradnja",
		email: "nauka@itnms.ac.rs",
		phone: "+381 11 0000 000",
	},
];

export default function ContactPage() {
	const [formData, setFormData] = useState(initialFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	function updateField<K extends keyof ContactFormData>(
		field: K,
		value: ContactFormData[K],
	) {
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
			// Ovde kasnije poveži formu sa API rutom ili email servisom.
			await new Promise((resolve) => setTimeout(resolve, 600));

			setSubmitted(true);
			setFormData(initialFormData);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<>
			<PageHeader
				title="Kontakt"
				description="Kontakt podaci, lokacija i forma za obraćanje Institutu."
				breadcrumbs={[
					{
						label: "Kontakt",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
						{contactDetails.map((detail) => {
							const Icon = detail.icon;

							const content = (
								<>
									<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-institute-50 text-institute-800">
										<Icon
											className="w-6 h-6"
											aria-hidden="true"
										/>
									</div>

									<h2 className="mt-5 text-sm font-semibold tracking-wide uppercase text-stone-500">
										{detail.title}
									</h2>

									<p className="mt-2 text-base font-semibold leading-7 text-stone-900">
										{detail.value}
									</p>
								</>
							);

							if (detail.href) {
								return (
									<a
										key={detail.title}
										href={detail.href}
										target={detail.title === "Adresa" ? "_blank" : undefined}
										rel={detail.title === "Adresa" ? "noreferrer" : undefined}
										className="p-6 transition bg-white border shadow-sm rounded-2xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
									>
										{content}
									</a>
								);
							}

							return (
								<article
									key={detail.title}
									className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200"
								>
									{content}
								</article>
							);
						})}
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-14">
						<div>
							<div className="max-w-3xl">
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
									Lokacija
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
									Kako da dođete do Instituta
								</h2>

								<p className="mt-4 text-base leading-7 text-stone-600">
									Institut se nalazi u Beogradu. Za precizne smernice za dolazak
									otvorite lokaciju na mapi.
								</p>
							</div>

							<div className="mt-8 overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2060.8437103415995!2d20.459763374816028!3d44.79393427791179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70126d8f007b%3A0x96b77e21cc5fbf10!2sITNMS!5e1!3m2!1sen!2sus!4v1784290639526!5m2!1sen!2sus"
									className="w-full border-0 w-block aspect-4/3"
									loading="lazy"
									allowFullScreen={true}
								></iframe>
							</div>
							{/* 
							<div className="grid gap-5 mt-6 sm:grid-cols-2">
								<article className="p-6 bg-white border rounded-2xl border-stone-200">
									<h3 className="text-lg font-semibold text-stone-900">
										Dolazak javnim prevozom
									</h3>

									<p className="mt-3 text-sm leading-6 text-stone-600">
										Unesite najbliže linije javnog prevoza, stajališta i okvirno
										vreme pešačenja do Instituta.
									</p>
								</article>

								<article className="p-6 bg-white border rounded-2xl border-stone-200">
									<h3 className="text-lg font-semibold text-stone-900">
										Dolazak automobilom
									</h3>

									<p className="mt-3 text-sm leading-6 text-stone-600">
										Navedite informacije o prilazu objektu, ulazu za posetioce i
										dostupnosti parkinga.
									</p>
								</article>
							</div> */}
						</div>

						<aside>
							<div className="bg-white border shadow-sm rounded-2xl border-stone-200 p-7 md:p-8">
								<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-institute-50 text-institute-800">
									<Building2
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</div>

								<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
									Kontakti organizacionih oblasti
								</h2>

								<p className="mt-3 text-sm leading-6 text-stone-600">
									Za brži odgovor obratite se direktno odgovarajućoj oblasti.
								</p>

								<div className="divide-y mt-7 divide-stone-200">
									{departmentContacts.map((contact) => (
										<article
											key={contact.title}
											className="py-6 first:pt-0 last:pb-0"
										>
											<h3 className="font-semibold text-stone-900">
												{contact.title}
											</h3>

											<div className="mt-3 space-y-2">
												<a
													href={`mailto:${contact.email}`}
													className="flex items-start gap-3 text-sm transition text-institute-700 hover:text-institute-900"
												>
													<Mail
														className="mt-0.5 h-4 w-4 shrink-0"
														aria-hidden="true"
													/>
													<span className="break-all">{contact.email}</span>
												</a>

												<a
													href={`tel:${contact.phone.replace(/\s/g, "")}`}
													className="flex items-start gap-3 text-sm transition text-stone-600 hover:text-institute-800"
												>
													<Phone
														className="mt-0.5 h-4 w-4 shrink-0 text-mineral-700"
														aria-hidden="true"
													/>
													{contact.phone}
												</a>
											</div>
										</article>
									))}
								</div>
							</div>
						</aside>
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Pišite nam
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Opšti kontakt upit
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								Koristite ovu formu za opšta pitanja, predloge, informacije o
								Institutu i upite koji nisu vezani za konkretnu laboratorijsku
								uslugu.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Za laboratorijske analize i stručne usluge koristite posebnu
								formu „Pošaljite upit“.
							</p>

							<a
								href="/usluge/posaljite-upit"
								className="inline-flex items-center text-sm font-semibold transition mt-7 text-institute-700 hover:text-institute-900"
							>
								Otvorite formu za usluge →
							</a>
						</div>

						<div>
							{submitted ? (
								<SuccessState onReset={() => setSubmitted(false)} />
							) : (
								<form
									onSubmit={handleSubmit}
									className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-8"
								>
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

									<div className="mt-6">
										<FormField
											label="Naslov poruke"
											required
										>
											<input
												type="text"
												required
												value={formData.subject}
												onChange={(event) =>
													updateField("subject", event.target.value)
												}
												className={inputClasses}
											/>
										</FormField>
									</div>

									<div className="mt-6">
										<FormField
											label="Poruka"
											required
										>
											<textarea
												required
												rows={7}
												value={formData.message}
												onChange={(event) =>
													updateField("message", event.target.value)
												}
												className={`${inputClasses} resize-y`}
											/>
										</FormField>
									</div>

									<label className="flex items-start gap-3 p-4 mt-6 cursor-pointer rounded-xl bg-stone-50">
										<input
											type="checkbox"
											checked={formData.consent}
											onChange={(event) =>
												updateField("consent", event.target.checked)
											}
											className="w-4 h-4 mt-1 rounded border-stone-300 text-institute-700 focus:ring-institute-500"
										/>

										<span className="text-sm leading-6 text-stone-600">
											Saglasan sam da se uneti podaci koriste radi odgovora na
											poruku, u skladu sa{" "}
											<a
												href="/politika-privatnosti"
												className="font-semibold text-institute-700 hover:text-institute-900"
											>
												politikom privatnosti
											</a>
											.
										</span>
									</label>

									<button
										type="submit"
										disabled={!formData.consent || isSubmitting}
										className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-institute-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-institute-900 disabled:cursor-not-allowed disabled:opacity-50"
									>
										<Send
											className="w-4 h-4"
											aria-hidden="true"
										/>

										{isSubmitting ? "Slanje poruke..." : "Pošaljite poruku"}
									</button>
								</form>
							)}
						</div>
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
	children: React.ReactNode;
};

function FormField({ label, required = false, children }: FormFieldProps) {
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
		</label>
	);
}

type SuccessStateProps = {
	onReset: () => void;
};

function SuccessState({ onReset }: SuccessStateProps) {
	return (
		<div className="px-6 text-center border rounded-2xl border-mineral-200 bg-mineral-50 py-14 md:px-10">
			<div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-full shadow-sm text-mineral-700">
				<CheckCircle2
					className="w-8 h-8"
					aria-hidden="true"
				/>
			</div>

			<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
				Poruka je evidentirana
			</h2>

			<p className="max-w-lg mx-auto mt-4 text-sm leading-7 text-stone-600">
				Nakon povezivanja forme sa backendom, ovde će se prikazivati potvrda
				stvarnog slanja poruke.
			</p>

			<button
				type="button"
				onClick={onReset}
				className="px-5 py-3 text-sm font-semibold transition bg-white border rounded-md mt-7 border-institute-700 text-institute-800 hover:bg-institute-50"
			>
				Pošaljite novu poruku
			</button>
		</div>
	);
}
