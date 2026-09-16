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

import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { routeTranslations } from "@/app/lib/language/routes";

type Language = "sr" | "en";

type ContactPageContentType = {
	pageHeader: {
		title: string;
		description: string;
		breadcrumbCurrent: string;
	};

	contactDetails: {
		address: string;
		phone: string;
		email: string;
		workingHours: string;
		workingHoursValue: string;
	};

	location: {
		eyebrow: string;
		title: string;
		description: string;
	};

	departments: {
		title: string;
		description: string;
		general: string;
		laboratory: string;
		research: string;
	};

	formIntro: {
		eyebrow: string;
		title: string;
		paragraph1: string;
		paragraph2: string;
		servicesLink: string;
	};

	form: {
		fullName: string;
		organization: string;
		email: string;
		phone: string;
		subject: string;
		message: string;
		consentBefore: string;
		privacyPolicy: string;
		submit: string;
		submitting: string;
	};

	success: {
		title: string;
		description: string;
		reset: string;
	};
};

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

export default function ContactPageContent({
	lang,
	content,
}: {
	lang: Language;
	content: ContactPageContentType;
}) {
	const [formData, setFormData] = useState(initialFormData);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const [submitted, setSubmitted] = useState(false);

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const contactDetails = [
		{
			title: content.contactDetails.address,
			value: "Franše d’Eperea 86, 11000 Beograd, Srbija",
			href: "https://maps.google.com",
			icon: MapPin,
			external: true,
		},
		{
			title: content.contactDetails.phone,
			value: "+381 11 3691 722",
			href: "tel:+381113691722",
			icon: Phone,
		},
		{
			title: content.contactDetails.email,
			value: "itnms@itnms.ac.rs",
			href: "mailto:itnms@itnms.ac.rs",
			icon: Mail,
		},
		{
			title: content.contactDetails.workingHours,
			value: content.contactDetails.workingHoursValue,
			icon: Clock3,
		},
	];

	const departmentContacts = [
		{
			title: content.departments.general,
			email: "itnms@itnms.ac.rs",
			phone: "+381 11 3691 722",
		},
		{
			title: content.departments.laboratory,
			email: "laboratorije@itnms.ac.rs",
			phone: "+381 11 0000 000",
		},
		{
			title: content.departments.research,
			email: "nauka@itnms.ac.rs",
			phone: "+381 11 0000 000",
		},
	];

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
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
						{contactDetails.map((detail) => {
							const Icon = detail.icon;

							const cardContent = (
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
										target={detail.external ? "_blank" : undefined}
										rel={detail.external ? "noreferrer" : undefined}
										className="p-6 transition bg-white border shadow-sm rounded-2xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
									>
										{cardContent}
									</a>
								);
							}

							return (
								<article
									key={detail.title}
									className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200"
								>
									{cardContent}
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
									{content.location.eyebrow}
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
									{content.location.title}
								</h2>

								<p className="mt-4 text-base leading-7 text-stone-600">
									{content.location.description}
								</p>
							</div>

							<div className="mt-8 overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2060.8437103415995!2d20.459763374816028!3d44.79393427791179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70126d8f007b%3A0x96b77e21cc5fbf10!2sITNMS!5e1!3m2!1sen!2sus!4v1784290639526!5m2!1sen!2sus"
									className="w-full border-0 aspect-4/3"
									loading="lazy"
									allowFullScreen
								/>
							</div>
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
									{content.departments.title}
								</h2>

								<p className="mt-3 text-sm leading-6 text-stone-600">
									{content.departments.description}
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
								{content.formIntro.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.formIntro.title}
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								{content.formIntro.paragraph1}
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								{content.formIntro.paragraph2}
							</p>

							<Link
								href={localizeHref("/usluge/posaljite-upit")}
								className="inline-flex items-center text-sm font-semibold transition mt-7 text-institute-700 hover:text-institute-900"
							>
								{content.formIntro.servicesLink}
							</Link>
						</div>

						<div>
							{submitted ? (
								<SuccessState
									onReset={() => setSubmitted(false)}
									content={content.success}
								/>
							) : (
								<form
									onSubmit={handleSubmit}
									className="p-6 bg-white border shadow-sm rounded-2xl border-stone-200 md:p-8"
								>
									<div className="grid gap-6 md:grid-cols-2">
										<FormField
											label={content.form.fullName}
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

										<FormField label={content.form.organization}>
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
											label={content.form.email}
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

										<FormField label={content.form.phone}>
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
											label={content.form.subject}
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
											label={content.form.message}
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
											{content.form.consentBefore}{" "}
											<Link
												href={localizeHref("/politika-privatnosti")}
												className="font-semibold text-institute-700 hover:text-institute-900"
											>
												{content.form.privacyPolicy}
											</Link>
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

										{isSubmitting
											? content.form.submitting
											: content.form.submit}
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

function FormField({
	label,
	required = false,
	children,
}: {
	label: string;
	required?: boolean;
	children: React.ReactNode;
}) {
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

function SuccessState({
	onReset,
	content,
}: {
	onReset: () => void;
	content: {
		title: string;
		description: string;
		reset: string;
	};
}) {
	return (
		<div className="px-6 text-center border rounded-2xl border-mineral-200 bg-mineral-50 py-14 md:px-10">
			<div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-full shadow-sm text-mineral-700">
				<CheckCircle2
					className="w-8 h-8"
					aria-hidden="true"
				/>
			</div>

			<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
				{content.title}
			</h2>

			<p className="max-w-lg mx-auto mt-4 text-sm leading-7 text-stone-600">
				{content.description}
			</p>

			<button
				type="button"
				onClick={onReset}
				className="px-5 py-3 text-sm font-semibold transition bg-white border rounded-md mt-7 border-institute-700 text-institute-800 hover:bg-institute-50"
			>
				{content.reset}
			</button>
		</div>
	);
}
