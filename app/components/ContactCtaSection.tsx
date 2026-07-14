import { ArrowRight, Mail, Phone } from "lucide-react";

import { Container } from "@/app/components/Container";
import { Section } from "./Section";

export function ContactCtaSection() {
	return (
		<Section className="bg-white">
			<Container className="py-16 md:py-20">
				<div className="px-6 py-10 overflow-hidden border shadow-sm text-institute-800 rounded-2xl border-institute-900 md:px-10 md:py-12 lg:px-14">
					<div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-600">
								Kontakt i saradnja
							</p>

							<h2 className="max-w-3xl mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
								Potrebna vam je stručna podrška ili saradnja sa Institutom?
							</h2>

							<p className="max-w-2xl mt-5 text-base leading-7 text-institute-600">
								Pošaljite nam upit za laboratorijska ispitivanja, projekte,
								stručne usluge ili saradnju sa istraživačkim timovima Instituta.
							</p>

							<div className="flex flex-col gap-3 text-sm mt-7 text-institute-600 sm:flex-row sm:gap-6">
								<a
									href="mailto:office@itnms.ac.rs"
									className="inline-flex items-center gap-2 transition hover:text-institute-800"
								>
									<Mail
										className="w-4 h-4"
										aria-hidden="true"
									/>
									office@itnms.ac.rs
								</a>

								<a
									href="tel:+381113691722"
									className="inline-flex items-center gap-2 transition hover:text-institute-800"
								>
									<Phone
										className="w-4 h-4"
										aria-hidden="true"
									/>
									+381 11 3691 722
								</a>
							</div>
						</div>

						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
							<a
								href="/usluge/posaljite-upit"
								className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition border rounded-md bg-institute-800 hover:bg-institute-900"
							>
								Pošaljite upit
								<ArrowRight
									className="w-4 h-4"
									aria-hidden="true"
								/>
							</a>

							<a
								href="/kontakt"
								className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition border rounded-md text-institute-600 border-institute-400/40 hover:border-institute-900 hover:bg-white/10"
							>
								Kontakt podaci
							</a>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
