import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/public/imgs/ITNMS_simbol.png";
import text from "@/public/imgs/ITNMS_text.png";
import Image from "next/image";
const quickLinks = [
	{ label: "O institutu", href: "/o-institutu" },
	{
		label: "Istraživači i zaposleni",
		href: "/istrazivaci-i-zaposleni",
	},
	{ label: "Naučni projekti", href: "/projekti/naucni" },
	{ label: "Usluge", href: "/usluge" },
	{ label: "Laboratorije", href: "/usluge/laboratorije" },
	{ label: "Oprema", href: "/usluge/oprema" },
];

const documentLinks = [
	{ label: "Akta Instituta", href: "/dokumenta/akta" },
	{ label: "Pravilnici", href: "/dokumenta/pravilnici" },
	{ label: "Izveštaji", href: "/dokumenta/izvestaji" },
	{
		label: "Akreditacije",
		href: "/kvalitet-i-akreditacije/akreditacije",
	},
	{
		label: "Akreditovane metode",
		href: "/kvalitet-i-akreditacije/akreditovane-metode",
	},
	{
		label: "Dokumenta Naučnog veća",
		href: "/dokumenta/naucno-vece",
	},
];

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-institute-950 text-stone-300">
			<div className="px-6 py-16 mx-auto max-w-7xl lg:px-8 lg:py-20">
				<div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
					{/* Institut */}
					<div>
						<a
							href="/"
							className="inline-flex items-center gap-3"
							aria-label="ITNMS početna stranica"
						>
							<Image
								alt="ITNMS"
								src={logo}
								className="w-16"
							></Image>

							<div>
								<Image
									alt="ITNMS"
									src={text}
									className="object-cover w-16 text-xl font-semibold text-white"
								/>

								<p className="mt-1 text-xs leading-5 max-2-70 text-stone-400">
									Institut za tehnologiju nuklearnih i drugih mineralnih
									sirovina
								</p>
							</div>
						</a>

						<p className="max-w-md mt-6 text-sm leading-7 text-stone-400">
							Naučnoistraživački rad, razvoj tehnologija i stručne usluge u
							oblasti mineralnih sirovina, materijala, metalurgije i zaštite
							životne sredine.
						</p>

						<a
							href="https://ritnms.itnms.ac.rs"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition text-institute-200 hover:text-white"
						>
							Digitalni repozitorijum
							<ExternalLink
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					</div>

					{/* Brzi linkovi */}
					<FooterColumn title="Brzi linkovi">
						{quickLinks.map((link) => (
							<FooterLink
								key={link.href}
								{...link}
							/>
						))}
					</FooterColumn>

					{/* Dokumenta */}
					<FooterColumn title="Dokumenta i kvalitet">
						{documentLinks.map((link) => (
							<FooterLink
								key={link.href}
								{...link}
							/>
						))}
					</FooterColumn>

					{/* Kontakt */}
					<div>
						<h2 className="text-sm font-semibold tracking-wider text-white uppercase">
							Kontakt
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
									Bulevar Franše d’Eperea 86
									<br />
									11000 Beograd, Srbija
								</span>
							</a>

							<a
								href="mailto:office@itnms.ac.rs"
								className="flex items-center gap-3 text-sm transition text-stone-400 hover:text-white"
							>
								<Mail
									className="w-5 h-5 shrink-0 text-institute-300"
									aria-hidden="true"
								/>
								office@itnms.ac.rs
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
							href="/kontakt"
							className="mt-7 inline-flex rounded-md border border-institute-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-institute-400 hover:bg-institute-900"
						>
							Svi kontakt podaci
						</a>
					</div>
				</div>
			</div>

			{/* Donja traka */}
			<div className="border-t border-white/10">
				<div className="flex flex-col gap-4 px-6 py-6 mx-auto text-xs max-w-7xl text-stone-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
					<p>© {currentYear} ITNMS. Sva prava zadržana.</p>

					<div className="flex flex-wrap gap-x-6 gap-y-2">
						<a
							href="/politika-privatnosti"
							className="transition hover:text-white"
						>
							Politika privatnosti
						</a>

						<a
							href="/politika-kolacica"
							className="transition hover:text-white"
						>
							Politika kolačića
						</a>

						<a
							href="/pristupacnost"
							className="transition hover:text-white"
						>
							Pristupačnost
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
