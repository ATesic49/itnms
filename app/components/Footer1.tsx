import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import Image from "next/image";

import logo from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";

type FooterProps = {
	content: {
		instituteName: string;
		description: string;
		repository: string;

		quickLinksTitle: string;

		quickLinks: {
			about: string;
			researchers: string;
			projects: string;
			services: string;
			laboratories: string;
		};

		documentsTitle: string;

		documents: {
			acts: string;
			reports: string;
			accreditations: string;
			scientificCouncil: string;
		};

		contactTitle: string;
		allContactDetails: string;

		address: {
			street: string;
			city: string;
		};

		copyright: string;

		privacyPolicy: string;
		cookiePolicy: string;
		accessibility: string;

		homeAriaLabel: string;
	};

	lang: "sr" | "en";
};

export default function Footer({ content, lang }: FooterProps) {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{
			label: content.quickLinks.about,
			href: lang === "en" ? "/en/about-the-institute" : "/o-institutu",
		},
		{
			label: content.quickLinks.researchers,
			href:
				lang === "en"
					? "/en/researchers-and-employees/researchers"
					: "/istrazivaci-i-zaposleni/istrazivaci",
		},
		{
			label: content.quickLinks.projects,
			href: lang === "en" ? "/en/projects/scientific" : "/projekti/naucni",
		},
		{
			label: content.quickLinks.services,
			href: lang === "en" ? "/en/services" : "/usluge",
		},
		{
			label: content.quickLinks.laboratories,
			href:
				lang === "en"
					? "/en/about-the-institute/centres/central-laboratory"
					: "/o-institutu/centri/centralna-laboratorija",
		},
	];

	const documentLinks = [
		{
			label: content.documents.acts,
			href: lang === "en" ? "/en/documents/acts" : "/dokumenta/akta",
		},
		{
			label: content.documents.reports,
			href: lang === "en" ? "/en/documents/reports" : "/dokumenta/izvestaji",
		},
		{
			label: content.documents.accreditations,
			href:
				lang === "en"
					? "/en/quality-and-accreditation/accreditations"
					: "/kvalitet-i-akreditacije/akreditacije",
		},
		{
			label: content.documents.scientificCouncil,
			href:
				lang === "en"
					? "/en/documents/scientific-council"
					: "/dokumenta/naucno-vece",
		},
	];

	const homeHref = lang === "en" ? "/en" : "/";

	const contactHref = lang === "en" ? "/en/contact" : "/kontakt";

	const privacyHref =
		lang === "en" ? "/en/privacy-policy" : "/politika-privatnosti";

	const cookieHref = lang === "en" ? "/en/cookie-policy" : "/politika-kolacica";

	const accessibilityHref =
		lang === "en" ? "/en/accessibility" : "/pristupacnost";

	return (
		<footer className="bg-institute-950 text-stone-300">
			<div className="px-6 py-16 mx-auto max-w-7xl lg:px-8 lg:py-20">
				<div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
					<div>
						<a
							href={homeHref}
							className="inline-flex items-center gap-3"
							aria-label={content.homeAriaLabel}
						>
							<Image
								alt="ITNMS"
								src={logo}
								className="w-16"
							/>

							<div>
								<Image
									alt="ITNMS"
									src={text}
									className="object-cover w-16"
								/>

								<p className="mt-1 text-xs leading-5 max-w-70 text-stone-400">
									{content.instituteName}
								</p>
							</div>
						</a>

						<p className="max-w-md mt-6 text-sm leading-7 text-stone-400">
							{content.description}
						</p>

						<a
							href="https://ritnms.itnms.ac.rs"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition text-institute-200 hover:text-white"
						>
							{content.repository}

							<ExternalLink
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					</div>

					<FooterColumn title={content.quickLinksTitle}>
						{quickLinks.map((link) => (
							<FooterLink
								key={link.href}
								{...link}
							/>
						))}
					</FooterColumn>

					<FooterColumn title={content.documentsTitle}>
						{documentLinks.map((link) => (
							<FooterLink
								key={link.href}
								{...link}
							/>
						))}
					</FooterColumn>

					<div>
						<h2 className="text-sm font-semibold tracking-wider text-white uppercase">
							{content.contactTitle}
						</h2>

						<address className="mt-6 space-y-5 not-italic">
							<a
								href="https://maps.google.com"
								target="_blank"
								rel="noreferrer"
								className="flex items-start gap-3 text-sm leading-6 transition group text-stone-400 hover:text-white"
							>
								<MapPin
									className="mt-0.5 h-5 w-5 shrink-0 text-institute-300"
									aria-hidden="true"
								/>

								<span>
									{content.address.street}
									<br />
									{content.address.city}
								</span>
							</a>

							<a
								href="mailto:itnms@itnms.ac.rs"
								className="flex items-center gap-3 text-sm transition text-stone-400 hover:text-white"
							>
								<Mail
									className="w-5 h-5 shrink-0 text-institute-300"
									aria-hidden="true"
								/>
								itnms@itnms.ac.rs
							</a>

							<a
								href="tel:+381113691722"
								className="flex items-center gap-3 text-sm transition text-stone-400 hover:text-white"
							>
								<Phone
									className="w-5 h-5 shrink-0 text-institute-300"
									aria-hidden="true"
								/>
								+381 11 3691 722
							</a>
						</address>

						<a
							href={contactHref}
							className="mt-7 inline-flex rounded-md border border-institute-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-institute-400 hover:bg-institute-900"
						>
							{content.allContactDetails}
						</a>
					</div>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="flex flex-col gap-4 px-6 py-6 mx-auto text-xs max-w-7xl text-stone-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
					<p>
						© {currentYear} ITNMS. {content.copyright}
					</p>

					<div className="flex flex-wrap gap-x-6 gap-y-2">
						<a
							href={privacyHref}
							className="transition hover:text-white"
						>
							{content.privacyPolicy}
						</a>

						<a
							href={cookieHref}
							className="transition hover:text-white"
						>
							{content.cookiePolicy}
						</a>

						<a
							href={accessibilityHref}
							className="transition hover:text-white"
						>
							{content.accessibility}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

type FooterColumnProps = {
	title: string;
	children: React.ReactNode;
};

function FooterColumn({ title, children }: FooterColumnProps) {
	return (
		<div>
			<h2 className="text-sm font-semibold tracking-wider uppercase text-institute-50">
				{title}
			</h2>

			<div className="flex flex-col items-start gap-3 mt-6">{children}</div>
		</div>
	);
}

type FooterLinkProps = {
	label: string;
	href: string;
};

function FooterLink({ label, href }: FooterLinkProps) {
	return (
		<a
			href={href}
			className="text-sm leading-6 text-stone-400 transition hover:translate-x-0.5 hover:text-white"
		>
			{label}
		</a>
	);
}
