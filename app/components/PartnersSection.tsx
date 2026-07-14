import { ExternalLink } from "lucide-react";
import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import Image from "next/image";
import logo from "@/public/imgs/ITNMS_simbol.png";
// Podsetnik: Pitati Sonju koji su nam Partneri i za njihove logoe
type Partner = {
	name: string;
	logo: string;
	href: string;
};

const partners: Partner[] = [
	{
		name: "Fond za nauku Republike Srbije",
		logo: "/images/partneri/fond-za-nauku.webp",
		href: "https://fondzanauku.gov.rs",
	},
	{
		name: "Univerzitet u Beogradu",
		logo: "/images/partneri/univerzitet-u-beogradu.webp",
		href: "https://www.bg.ac.rs",
	},
	{
		name: "Ministarstvo nauke, tehnološkog razvoja i inovacija",
		logo: "/images/partneri/ministarstvo-nauke.webp",
		href: "https://nitra.gov.rs",
	},
	{
		name: "Partnerska institucija",
		logo: "/images/partneri/partner-01.webp",
		href: "https://example.com",
	},
	{
		name: "Industrijski partner",
		logo: "/images/partneri/partner-02.webp",
		href: "https://example.com",
	},
];

export function PartnersSection() {
	return (
		<Section background="stone">
			<Container>
				<div className="max-w-3xl mx-auto text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
						Saradnja
					</p>

					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
						Partneri Instituta
					</h2>

					<p className="mt-4 text-base leading-7 text-stone-600">
						ITNMS sarađuje sa naučnoistraživačkim organizacijama, državnim
						institucijama, fondovima i partnerima iz industrije.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-3 lg:grid-cols-5">
					{partners.map((partner) => (
						<PartnerCard
							key={partner.name}
							partner={partner}
						/>
					))}
				</div>
			</Container>
		</Section>
	);
}

type PartnerCardProps = {
	partner: Partner;
};

function PartnerCard({ partner }: PartnerCardProps) {
	return (
		<a
			href={partner.href}
			target="_blank"
			rel="noreferrer"
			aria-label={`${partner.name} — otvara se u novom prozoru`}
			className="group flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-stone-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
		>
			<div className="flex items-center justify-center w-full h-16">
				<Image
					src={logo}
					alt=""
					className="object-contain max-w-full transition duration-200 opacity-75 max-h-14 grayscale group-hover:grayscale-0 group-hover:opacity-100"
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
