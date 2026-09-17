import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";

import logo from "@/public/imgs/ITNMS_simbol.png";

// Podsetnik: Pitati Sonju koji su nam partneri i za njihove logoe

type PartnersSectionProps = {
	content: {
		eyebrow: string;
		title: string;
		description: string;
		openNewWindow: string;

		names: {
			scienceFund: string;
			universityBelgrade: string;
			ministry: string;
			partnerInstitution: string;
			industryPartner: string;
		};
	};
};

type Partner = {
	name: string;
	logo: string;
	href: string;
};

export function PartnersSection({ content }: PartnersSectionProps) {
	const partners: Partner[] = [
		{
			name: content.names.scienceFund,
			logo: "/images/partneri/fond-za-nauku.webp",
			href: "https://fondzanauku.gov.rs",
		},
		{
			name: content.names.universityBelgrade,
			logo: "/images/partneri/univerzitet-u-beogradu.webp",
			href: "https://www.bg.ac.rs",
		},
		{
			name: content.names.ministry,
			logo: "/images/partneri/ministarstvo-nauke.webp",
			href: "https://nitra.gov.rs",
		},
		{
			name: content.names.partnerInstitution,
			logo: "/images/partneri/partner-01.webp",
			href: "https://example.com",
		},
		{
			name: content.names.industryPartner,
			logo: "/images/partneri/partner-02.webp",
			href: "https://example.com",
		},
	];

	return (
		<Section background="stone">
			<Container>
				<div className="max-w-3xl mx-auto text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
						{content.eyebrow}
					</p>

					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
						{content.title}
					</h2>

					<p className="mt-4 text-base leading-7 text-stone-600">
						{content.description}
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-3 lg:grid-cols-5">
					{partners.map((partner) => (
						<PartnerCard
							key={partner.name}
							partner={partner}
							openNewWindow={content.openNewWindow}
						/>
					))}
				</div>
			</Container>
		</Section>
	);
}

type PartnerCardProps = {
	partner: Partner;
	openNewWindow: string;
};

function PartnerCard({ partner, openNewWindow }: PartnerCardProps) {
	return (
		<a
			href={partner.href}
			target="_blank"
			rel="noreferrer"
			aria-label={`${partner.name} — ${openNewWindow}`}
			className="group flex min-h-37.5 flex-col items-center justify-center rounded-xl border border-stone-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
		>
			<div className="flex items-center justify-center w-full h-16">
				<Image
					sizes="(min-width: 1024px) 50vw, 100vw"
					src={logo}
					alt=""
					className="object-contain max-w-full transition duration-200 opacity-75 max-h-14 grayscale group-hover:opacity-100 group-hover:grayscale-0"
				/>
			</div>

			<div className="mt-4 flex items-start justify-center gap-1.5">
				<span className="text-xs font-medium leading-5 transition text-stone-600 group-hover:text-institute-800">
					{partner.name}
				</span>

				<ExternalLink
					className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone-400"
					aria-hidden="true"
				/>
			</div>
		</a>
	);
}
