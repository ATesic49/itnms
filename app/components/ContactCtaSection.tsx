import { ArrowRight, Mail, Phone } from "lucide-react";

import { Container } from "@/app/components/Container";
import { Section } from "./Section";
import Link from "next/link";

type ContactCtaSectionProps = {
	content: {
		eyebrow: string;
		title: string;
		description: string;
		sendInquiry: string;
		contactDetails: string;
	};
	lang: "sr" | "en";
};

export function ContactCtaSection({ content, lang }: ContactCtaSectionProps) {
	const inquiryHref =
		lang === "en" ? "/en/services/send-an-inquiry" : "/usluge/posaljite-upit";

	const contactHref = lang === "en" ? "/en/contact" : "/kontakt";

	return (
		<Section className="bg-white">
			<Container className="py-16 md:py-20">
				<div className="px-6 py-10 overflow-hidden border shadow-sm rounded-2xl border-institute-900 text-institute-800 md:px-10 md:py-12 lg:px-14">
					<div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-600">
								{content.eyebrow}
							</p>

							<h2 className="max-w-3xl mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
								{content.title}
							</h2>

							<p className="max-w-2xl mt-5 text-base leading-7 text-institute-600">
								{content.description}
							</p>

							<div className="flex flex-col gap-3 text-sm mt-7 text-institute-600 sm:flex-row sm:gap-6">
								<Link
									href="mailto:itnms@itnms.ac.rs"
									className="inline-flex items-center gap-2 transition hover:text-institute-800"
								>
									<Mail
										className="w-4 h-4"
										aria-hidden="true"
									/>
									itnms@itnms.ac.rs
								</Link>

								<Link
									href="tel:+381113691722"
									className="inline-flex items-center gap-2 transition hover:text-institute-800"
								>
									<Phone
										className="w-4 h-4"
										aria-hidden="true"
									/>
									+381 11 3691 722
								</Link>
							</div>
						</div>

						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
							<Link
								href={inquiryHref}
								className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition border rounded-md bg-institute-800 hover:bg-institute-900"
							>
								{content.sendInquiry}

								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</Link>

							<Link
								href={contactHref}
								className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition border rounded-md border-institute-400/40 text-institute-600 hover:border-institute-900 hover:bg-white/10"
							>
								{content.contactDetails}
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
