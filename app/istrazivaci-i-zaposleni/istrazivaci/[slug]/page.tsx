import {
	ArrowLeft,
	ExternalLink,
	GraduationCap,
	Mail,
	Microscope,
} from "lucide-react";
//Podsetnik: dodaj Dinamicnu logiku
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import user from "@/public/imgs/user.png";
// type ResearcherProfile = {
// 	fullName: string;
// 	position: string;
// 	scientificTitle: string;
// 	image: string;
// 	email: string;
// 	interests: string;
// 	education: string;
// 	unit?: string;
// 	links: {
// 		orcid?: string;
// 		eNauka?: string;
// 		scopus?: string;
// 	};
// };
import { notFound } from "next/navigation";

import { EmployeeCard } from "@/app/components/EmployeeCard";
import { getEmployees } from "@/app/lib/google-sheets/employees";
import Image from "next/image";

type EmployeeProfilePageProps = {
	params: Promise<{
		slug: string;
	}>;
	searchParams: Promise<{
		zaposleni?: string;
	}>;
};

export default async function EmployeeProfilePage({
	params,
	searchParams,
}: EmployeeProfilePageProps) {
	const { slug } = await params;
	const { zaposleni } = await searchParams;

	const employees = await getEmployees();

	const employee = employees.find((employee) => employee.slug === slug);

	const cameFromEmployeesPage = zaposleni === "true";

	if (!employee && cameFromEmployeesPage) {
		return <FormerEmployeePage slug={slug} />;
	}

	if (!employee) {
		notFound();
	}

	return (
		<>
			<PageHeader
				title={`${employee.firstName} ${employee.lastName}`}
				description={`${employee.position} · ${employee.naucnoZvanje}`}
				breadcrumbs={[
					{
						label: "Istraživači i zaposleni",
						href: "/istrazivaci-i-zaposleni",
					},
					{
						label: "Istraživači",
						href: "/istrazivaci-i-zaposleni/istrazivaci",
					},
					{
						label: `${employee.firstName} ${employee.lastName}`,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
						<aside>
							<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
								<Image
									src={user}
									alt={employee.firstName}
									className="object-cover object-top w-full aspect-4/5"
								/>
							</div>

							<div className="p-5 mt-6 border rounded-xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
									Kontakt
								</p>

								<a
									href={`mailto:${employee.email}`}
									className="inline-flex items-start gap-2 mt-3 text-sm font-medium transition text-institute-700 hover:text-institute-900"
								>
									<Mail
										className="mt-0.5 h-4 w-4 shrink-0"
										aria-hidden="true"
									/>
									<span className="break-all">{employee.email}</span>
								</a>

								{employee.oblastInteresovanja && (
									<div className="pt-5 mt-5 border-t border-stone-200">
										<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
											Organizaciona jedinica
										</p>

										<p className="mt-2 text-sm leading-6 text-stone-700">
											{/* {employee.oblastInteresovanja} */}
											<span className="font-semibold text-stone-300">
												Nije dostupno
											</span>
										</p>
									</div>
								)}
							</div>
						</aside>

						<article>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Profil istraživača
							</p>

							<h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
								{employee.firstName} {employee.lastName}
							</h1>

							<div className="flex flex-col gap-2 mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
								<span className="text-base font-semibold text-institute-700">
									{employee.position}
								</span>

								<span
									className="hidden text-stone-300 sm:inline"
									aria-hidden="true"
								>
									•
								</span>

								<span className="text-base text-stone-600">
									{employee.naucnoZvanje}
								</span>
							</div>

							<div className="flex flex-wrap gap-3 mt-8">
								{employee.orcidLink && (
									<ProfileLink
										href={employee.orcidLink}
										label="ORCID"
									/>
								)}

								{employee.enaukaLink && (
									<ProfileLink
										href={employee.enaukaLink}
										label="eNauka"
									/>
								)}

								{employee.skopusLink && (
									<ProfileLink
										href={employee.skopusLink}
										label="Scopus"
									/>
								)}
							</div>

							<div className="mt-10 space-y-8">
								<ProfileSection
									icon={Microscope}
									title="Oblast interesovanja"
								>
									<p>{employee.oblastInteresovanja}</p>
								</ProfileSection>

								<ProfileSection
									icon={GraduationCap}
									title="Akademsko obrazovanje"
								>
									<p>{employee.akademskoObrazovanje}</p>
								</ProfileSection>
							</div>

							<div className="pt-8 mt-12 border-t border-stone-200">
								<a
									href="/istrazivaci-i-zaposleni/istrazivaci"
									className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
								>
									<ArrowLeft
										className="w-4 h-4"
										aria-hidden="true"
									/>
									Nazad na sve istraživače
								</a>
							</div>
						</article>
					</div>
				</Container>
			</Section>
		</>
	);
}
function FormerEmployeePage({ slug }: { slug: string }) {
	const name = slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return (
		<>
			<PageHeader
				title={name}
				description="Informacije o zaposlenom"
				breadcrumbs={[
					{
						label: "Istraživači i zaposleni",
						href: "/istrazivaci-i-zaposleni",
					},
					{
						label: name,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-2xl py-12 mx-auto text-center">
						<div className="p-8 border rounded-2xl border-stone-200 bg-stone-50 md:p-12">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Informacija
							</p>

							<h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900">
								{name} više nije zaposlen/a u Institutu
							</h1>

							<p className="mt-5 leading-7 text-stone-600">
								Ova osoba se više ne nalazi među aktuelnim zaposlenima
								Instituta.
							</p>

							<a
								href="/istrazivaci-i-zaposleni"
								className="inline-flex items-center gap-2 mt-8 font-semibold transition text-institute-700 hover:text-institute-900"
							>
								<ArrowLeft className="w-4 h-4" />
								Nazad na zaposlene
							</a>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
// export default function ResearcherProfilePage() {
// 	return (
// <>
// 	<PageHeader
// 		title={researcher.fullName}
// 		description={`${researcher.position} · ${researcher.scientificTitle}`}
// 		breadcrumbs={[
// 			{
// 				label: "Istraživači i zaposleni",
// 				href: "/istrazivaci-i-zaposleni",
// 			},
// 			{
// 				label: "Istraživači",
// 				href: "/istrazivaci-i-zaposleni/istrazivaci",
// 			},
// 			{
// 				label: researcher.fullName,
// 			},
// 		]}
// 	/>

// 	<Section>
// 		<Container>
// 			<div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
// 				<aside>
// 					<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
// 						<img
// 							src={researcher.image}
// 							alt={researcher.fullName}
// 							className="object-cover object-top w-full aspect-4/5"
// 						/>
// 					</div>

// 					<div className="p-5 mt-6 border rounded-xl border-stone-200 bg-stone-50">
// 						<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
// 							Kontakt
// 						</p>

// 						<a
// 							href={`mailto:${researcher.email}`}
// 							className="inline-flex items-start gap-2 mt-3 text-sm font-medium transition text-institute-700 hover:text-institute-900"
// 						>
// 							<Mail
// 								className="mt-0.5 h-4 w-4 shrink-0"
// 								aria-hidden="true"
// 							/>
// 							<span className="break-all">{researcher.email}</span>
// 						</a>

// 						{researcher.unit && (
// 							<div className="pt-5 mt-5 border-t border-stone-200">
// 								<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
// 									Organizaciona jedinica
// 								</p>

// 								<p className="mt-2 text-sm leading-6 text-stone-700">
// 									{researcher.unit}
// 								</p>
// 							</div>
// 						)}
// 					</div>
// 				</aside>

// 				<article>
// 					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
// 						Profil istraživača
// 					</p>

// 					<h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
// 						{researcher.fullName}
// 					</h1>

// 					<div className="flex flex-col gap-2 mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
// 						<span className="text-base font-semibold text-institute-700">
// 							{researcher.position}
// 						</span>

// 						<span
// 							className="hidden text-stone-300 sm:inline"
// 							aria-hidden="true"
// 						>
// 							•
// 						</span>

// 						<span className="text-base text-stone-600">
// 							{researcher.scientificTitle}
// 						</span>
// 					</div>

// 					<div className="flex flex-wrap gap-3 mt-8">
// 						{researcher.links.orcid && (
// 							<ProfileLink
// 								href={researcher.links.orcid}
// 								label="ORCID"
// 							/>
// 						)}

// 						{researcher.links.eNauka && (
// 							<ProfileLink
// 								href={researcher.links.eNauka}
// 								label="eNauka"
// 							/>
// 						)}

// 						{researcher.links.scopus && (
// 							<ProfileLink
// 								href={researcher.links.scopus}
// 								label="Scopus"
// 							/>
// 						)}
// 					</div>

// 					<div className="mt-10 space-y-8">
// 						<ProfileSection
// 							icon={Microscope}
// 							title="Oblast interesovanja"
// 						>
// 							<p>{researcher.interests}</p>
// 						</ProfileSection>

// 						<ProfileSection
// 							icon={GraduationCap}
// 							title="Akademsko obrazovanje"
// 						>
// 							<p>{researcher.education}</p>
// 						</ProfileSection>
// 					</div>

// 					<div className="pt-8 mt-12 border-t border-stone-200">
// 						<a
// 							href="/istrazivaci-i-zaposleni/istrazivaci"
// 							className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
// 						>
// 							<ArrowLeft
// 								className="w-4 h-4"
// 								aria-hidden="true"
// 							/>
// 							Nazad na sve istraživače
// 						</a>
// 					</div>
// 				</article>
// 			</div>
// 		</Container>
// 	</Section>
// </>
// 	);
// }

type ProfileSectionProps = {
	icon: React.ElementType;
	title: string;
	children: React.ReactNode;
};

function ProfileSection({ icon: Icon, title, children }: ProfileSectionProps) {
	return (
		<section className="bg-white border shadow-sm rounded-2xl border-stone-200 p-7 md:p-8">
			<div className="flex items-center gap-3">
				<div className="flex items-center justify-center rounded-lg h-11 w-11 bg-institute-50 text-institute-800">
					<Icon
						className="w-5 h-5"
						aria-hidden="true"
					/>
				</div>

				<h2 className="text-xl font-semibold tracking-tight text-stone-900">
					{title}
				</h2>
			</div>

			<div className="mt-5 text-base leading-8 text-stone-600">{children}</div>
		</section>
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
			className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-institute-300 hover:bg-institute-50 hover:text-institute-800"
		>
			{label}
			<ExternalLink
				className="w-4 h-4"
				aria-hidden="true"
			/>
		</a>
	);
}
