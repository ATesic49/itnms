import { ExternalLink, Mail, GraduationCap, Microscope } from "lucide-react";
import { Employee } from "../types/employee";
import Image from "next/image";

type EmployeeCardProps = {
	image: string;
	fullName: string;
	position: string;
	scientificTitle: string;
	interests: string;
	education: string;
	email: string;
	links: {
		orcid?: string;
		eNauka?: string;
		scopus?: string;
	};
};
import user from "@/public/imgs/user.png";
export function EmployeeCard({
	// image,
	firstName,
	lastName,
	oblastInteresovanja,
	naucnoZvanje,
	akademskoObrazovanje,
	orcidLink,
	enaukaLink,
	skopusLink,
	email,
	position,
}: Employee) {
	return (
		<article className="overflow-hidden transition duration-200 bg-white border shadow-sm group rounded-xl border-stone-200 hover:-translate-y-1 hover:shadow-md">
			<div className="grid md:grid-cols-[220px_1fr]">
				<div className="overflow-hidden bg-stone-100">
					<Image
						src={user}
						alt={firstName}
						className="h-full min-h-80 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
					/>
				</div>

				<div className="flex flex-col p-6 md:p-8">
					<header className="pb-5 border-b border-stone-200">
						<h3 className="text-2xl font-semibold tracking-tight text-stone-900">
							{firstName} {lastName}
						</h3>

						<p className="mt-2 font-semibold text-institute-700">{position}</p>

						<p className="mt-1 text-sm text-stone-600">{naucnoZvanje}</p>
					</header>

					<div className="mt-5 space-y-5">
						<section>
							<div className="flex items-center gap-2">
								<Microscope
									className="w-4 h-4 text-mineral-700"
									aria-hidden="true"
								/>
								<h4 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
									Oblast interesovanja
								</h4>
							</div>

							<p className="mt-2 text-sm leading-6 line-clamp-4 text-stone-600">
								{oblastInteresovanja}
							</p>
						</section>

						<section>
							<div className="flex items-center gap-2">
								<GraduationCap
									className="w-4 h-4 text-mineral-700"
									aria-hidden="true"
								/>
								<h4 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
									Akademsko obrazovanje
								</h4>
							</div>

							<p className="mt-2 text-sm leading-6 text-stone-600">
								{akademskoObrazovanje}
							</p>
						</section>
					</div>

					<footer className="pt-6 mt-auto">
						<a
							href={`mailto:${email}`}
							className="inline-flex items-center gap-2 text-sm font-medium transition text-institute-700 hover:text-institute-900"
						>
							<Mail
								className="w-4 h-4"
								aria-hidden="true"
							/>
							{email}
						</a>

						<div className="flex flex-wrap gap-3 mt-5">
							{orcidLink && (
								<ProfileLink
									href={orcidLink}
									label="ORCID"
								/>
							)}

							{enaukaLink && (
								<ProfileLink
									href={enaukaLink}
									label="eNauka"
								/>
							)}

							{skopusLink && (
								<ProfileLink
									href={skopusLink}
									label="Scopus"
								/>
							)}
						</div>
					</footer>
				</div>
			</div>
		</article>
	);
}

type ProfileLinkProps = {
	href: string;
	label: string;
};

function ProfileLink({ href, label }: ProfileLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-semibold text-stone-700 transition hover:border-institute-300 hover:bg-institute-50 hover:text-institute-800"
		>
			{label}
			<ExternalLink
				className="h-3.5 w-3.5"
				aria-hidden="true"
			/>
		</a>
	);
}
