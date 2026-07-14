import { ExternalLink, Mail, GraduationCap, Microscope } from "lucide-react";

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

export function EmployeeCard({
	image,
	fullName,
	position,
	scientificTitle,
	interests,
	education,
	email,
	links,
}: EmployeeCardProps) {
	return (
		<article className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
			<div className="grid md:grid-cols-[220px_1fr]">
				<div className="overflow-hidden bg-stone-100">
					<img
						src={image}
						alt={fullName}
						className="h-full min-h-[320px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
					/>
				</div>

				<div className="flex flex-col p-6 md:p-8">
					<header className="border-b border-stone-200 pb-5">
						<h3 className="text-2xl font-semibold tracking-tight text-stone-900">
							{fullName}
						</h3>

						<p className="mt-2 font-semibold text-institute-700">{position}</p>

						<p className="mt-1 text-sm text-stone-600">{scientificTitle}</p>
					</header>

					<div className="mt-5 space-y-5">
						<section>
							<div className="flex items-center gap-2">
								<Microscope
									className="h-4 w-4 text-mineral-700"
									aria-hidden="true"
								/>
								<h4 className="text-sm font-semibold uppercase tracking-wide text-stone-800">
									Oblast interesovanja
								</h4>
							</div>

							<p className="mt-2 line-clamp-4 text-sm leading-6 text-stone-600">
								{interests}
							</p>
						</section>

						<section>
							<div className="flex items-center gap-2">
								<GraduationCap
									className="h-4 w-4 text-mineral-700"
									aria-hidden="true"
								/>
								<h4 className="text-sm font-semibold uppercase tracking-wide text-stone-800">
									Akademsko obrazovanje
								</h4>
							</div>

							<p className="mt-2 text-sm leading-6 text-stone-600">
								{education}
							</p>
						</section>
					</div>

					<footer className="mt-auto pt-6">
						<a
							href={`mailto:${email}`}
							className="inline-flex items-center gap-2 text-sm font-medium text-institute-700 transition hover:text-institute-900"
						>
							<Mail
								className="h-4 w-4"
								aria-hidden="true"
							/>
							{email}
						</a>

						<div className="mt-5 flex flex-wrap gap-3">
							{links.orcid && (
								<ProfileLink
									href={links.orcid}
									label="ORCID"
								/>
							)}

							{links.eNauka && (
								<ProfileLink
									href={links.eNauka}
									label="eNauka"
								/>
							)}

							{links.scopus && (
								<ProfileLink
									href={links.scopus}
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
