import {
	ArrowLeft,
	ExternalLink,
	GraduationCap,
	Mail,
	Microscope,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getEmployees } from "@/app/lib/google-sheets/employees";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

import user from "@/public/imgs/user.png";

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

	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.researcherProfile;

	const employees = await getEmployees(lang);

	const employee = employees.find((employee) => employee.slug === slug);

	const cameFromEmployeesPage = zaposleni === "true";

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	if (!employee && cameFromEmployeesPage) {
		return (
			<FormerEmployeePage
				slug={slug}
				content={content}
				researchersHref={localizeHref("/istrazivaci")}
			/>
		);
	}

	if (!employee) {
		notFound();
	}

	const fullName = `${employee.firstName} ${employee.lastName}`;

	const employeeDescription = [employee.position, employee.naucnoZvanje]
		.filter(Boolean)
		.join(" · ");

	return (
		<>
			<PageHeader
				title={fullName}
				description={employeeDescription}
				breadcrumbs={[
					{
						label: content.breadcrumbResearchers,
						href: localizeHref("/istrazivaci"),
					},
					{
						label: fullName,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
						<aside>
							<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
								<Image
									sizes="(min-width: 1024px) 50vw, 100vw"
									src={user}
									alt={fullName}
									className="object-cover object-top w-full aspect-4/5"
								/>
							</div>

							<div className="p-5 mt-6 border rounded-xl border-stone-200 bg-stone-50">
								<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
									{content.sidebar.contact}
								</p>

								{employee.email && (
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
								)}

								{employee.oblastInteresovanja && (
									<div className="pt-5 mt-5 border-t border-stone-200">
										<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
											{content.sidebar.organizationalUnit}
										</p>

										<p className="mt-2 text-sm leading-6 text-stone-700">
											<span className="font-semibold text-stone-300">
												{content.sidebar.notAvailable}
											</span>
										</p>
									</div>
								)}
							</div>
						</aside>

						<article>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.profile.eyebrow}
							</p>

							<h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
								{fullName}
							</h1>

							<div className="flex flex-col gap-2 mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
								{employee.position && (
									<span className="text-base font-semibold text-institute-700">
										{employee.position}
									</span>
								)}

								{employee.position && employee.naucnoZvanje && (
									<span
										className="hidden text-stone-300 sm:inline"
										aria-hidden="true"
									>
										•
									</span>
								)}

								{employee.naucnoZvanje && (
									<span className="text-base text-stone-600">
										{employee.naucnoZvanje}
									</span>
								)}
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
								{employee.oblastInteresovanja && (
									<ProfileSection
										icon={Microscope}
										title={content.profile.researchArea}
									>
										<p>{employee.oblastInteresovanja}</p>
									</ProfileSection>
								)}

								{employee.akademskoObrazovanje && (
									<ProfileSection
										icon={GraduationCap}
										title={content.profile.academicEducation}
									>
										<div>
											{employee.akademskoObrazovanje
												.split(";")
												.map((education, index) => (
													<p
														className="flex items-start gap-2 mb-2 md:pr-8"
														key={index}
													>
														<span className="mt-[0.75em] block h-3 w-3 shrink-0 rounded-full bg-institute-100" />

														<span>{education.trim()}</span>
													</p>
												))}
										</div>
									</ProfileSection>
								)}
							</div>

							<div className="pt-8 mt-12 border-t border-stone-200">
								<Link
									href={localizeHref("/istrazivaci")}
									className="inline-flex items-center gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
								>
									<ArrowLeft
										className="w-4 h-4"
										aria-hidden="true"
									/>

									{content.profile.backToResearchers}
								</Link>
							</div>
						</article>
					</div>
				</Container>
			</Section>
		</>
	);
}

type FormerEmployeeContent = {
	breadcrumbResearchers: string;

	formerEmployee: {
		description: string;
		eyebrow: string;
		titleSuffix: string;
		descriptionText: string;
		back: string;
	};
};

function FormerEmployeePage({
	slug,
	content,
	researchersHref,
}: {
	slug: string;
	content: FormerEmployeeContent;
	researchersHref: string;
}) {
	const name = slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return (
		<>
			<PageHeader
				title={name}
				description={content.formerEmployee.description}
				breadcrumbs={[
					{
						label: content.breadcrumbResearchers,
						href: researchersHref,
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
								{content.formerEmployee.eyebrow}
							</p>

							<h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900">
								{name} {content.formerEmployee.titleSuffix}
							</h1>

							<p className="mt-5 leading-7 text-stone-600">
								{content.formerEmployee.descriptionText}
							</p>

							<Link
								href={researchersHref}
								className="inline-flex items-center gap-2 mt-8 font-semibold transition text-institute-700 hover:text-institute-900"
							>
								<ArrowLeft className="w-4 h-4" />

								{content.formerEmployee.back}
							</Link>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

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
