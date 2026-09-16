import {
	Building2,
	ChevronDown,
	ExternalLink,
	UserRound,
	UsersRound,
} from "lucide-react";

import Link from "next/link";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { routeTranslations } from "@/app/lib/language/routes";
import { getDictionary } from "@/app/lib/language/dictionary";

type CardLabels = {
	management: string;
	governance: string;
	board: string;
	service: string;
	serviceHead: string;
	moreInformation: string;
	noData: string;
	sharedServices: string;
	telephone: string;
	mobile: string;
};

type ServiceCardProps = {
	id: string;
	professionalTitle?: string;
	title: string;
	head?: string;
	email?: string;
	phone?: string;
	mobile?: string;
	labels: CardLabels;
};

type LeadershipCardProps = {
	id: string;
	title: string;
	name?: string;
	dr?: string;
	description?: string;
	href?: string;

	scientificTitle?: string;
	email?: string;
	phone?: string;
	mobile?: string;
	address?: string;

	labels: CardLabels;
};

type BoardMember = {
	name: string;
	zvanje: string;
	description: string;
	role?: string;
	href?: string;
};

export default async function OrganizationPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.organization;

	const localizeHref = (href: string) => {
		if (lang === "sr") {
			return href;
		}

		return routeTranslations[href] ?? `/en${href}`;
	};

	const boardMembers: BoardMember[] = [
		{
			zvanje: content.boardMembers.djordjeNikolic.title,
			name: "Đorđe Nikolić",
			description: content.boardMembers.djordjeNikolic.description,
			role: content.boardMembers.djordjeNikolic.role,
			href: "",
		},
		{
			zvanje: content.boardMembers.milicaNicetin.title,
			name: "Milica Nićetin",
			description: content.boardMembers.milicaNicetin.description,
			href: "",
		},
		{
			zvanje: content.boardMembers.slavkoDimovic.title,
			name: "Slavko Dimović",
			description: content.boardMembers.slavkoDimovic.description,
			href: "",
		},
		{
			zvanje: content.boardMembers.milosMladenovic.title,
			name: "Miloš Mladenović",
			description: content.boardMembers.milosMladenovic.description,
			href: "",
		},
		{
			zvanje: content.boardMembers.aleksandraDakovic.title,
			name: "Aleksandra Daković",
			description: content.boardMembers.aleksandraDakovic.description,
			role: content.boardMembers.aleksandraDakovic.role,
			href: localizeHref("/istrazivaci/aleksandra-dakovic"),
		},
		{
			zvanje: content.boardMembers.branislavMarkovic.title,
			name: "Branislav Marković",
			description: content.boardMembers.branislavMarkovic.description,
			href: localizeHref("/istrazivaci/branislav-markovic"),
		},
		{
			zvanje: content.boardMembers.vladimirJovanovic.title,
			name: "Vladimir Jovanović",
			description: content.boardMembers.vladimirJovanovic.description,
			href: localizeHref("/istrazivaci/vladimir-jovanovic"),
		},
	];

	return (
		<>
			<PageHeader
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumbAbout,
						href: localizeHref("/o-institutu"),
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="pt-2 pb-10 overflow-x-auto">
						<div className="mx-auto min-w-262.5 max-w-7xl">
							{/* UPRAVNI ODBOR */}

							<div className="flex justify-center">
								<BoardCard
									members={boardMembers}
									labels={content.labels}
								/>
							</div>

							<VerticalLine />

							{/* DIREKTOR */}

							<div className="flex justify-center">
								<LeadershipCard
									id="direktor"
									title={content.director.title}
									name="Dragan Radulović"
									dr="dr"
									email="d.radulovic@itnms.ac.rs"
									scientificTitle={content.director.scientificTitle}
									description={content.director.description}
									href={localizeHref("/istrazivaci/dragan-radulovic")}
									labels={content.labels}
								/>
							</div>

							<VerticalLine height="h-10" />

							{/* GLAVNA HORIZONTALNA GRANA */}

							<div className="w-2/3 h-px mx-auto bg-stone-300" />

							<div className="grid grid-cols-3 gap-16">
								<div className="flex justify-center">
									<VerticalLine />
								</div>

								<div className="flex justify-center">
									<VerticalLine />
								</div>

								<div className="flex justify-center">
									<VerticalLine />
								</div>
							</div>

							{/* TRI POMOĆNIKA */}

							<div className="grid items-start grid-cols-3 gap-8">
								{/* PRVA GRANA */}

								<div>
									<LeadershipCard
										id="pomocnik-mineralne"
										title={content.assistants.mineral.title}
										scientificTitle={content.assistants.mineral.scientificTitle}
										name="Sonja Milićević"
										email="s.milicevic@itnms.ac.rs"
										description={content.assistants.mineral.description}
										href={localizeHref("/istrazivaci/sonja-milicevic")}
										labels={content.labels}
									/>

									<VerticalLine />

									<OrganizationNode
										title={content.sectors.mineral.title}
										podnaslov={content.sectors.mineral.subtitle}
									/>

									<VerticalLine />

									<div className="w-4/5 h-px mx-auto bg-stone-300" />

									<div className="grid grid-cols-3 gap-2">
										<div className="flex justify-center">
											<VerticalLine />
										</div>

										<div className="flex justify-center">
											<VerticalLine />
										</div>

										<div className="flex justify-center">
											<VerticalLine />
										</div>
									</div>

									<div className="grid grid-cols-3 gap-2">
										<OrganizationLink
											title={content.centres.mineralPreparation.title}
											podnaslov={content.centres.mineralPreparation.subtitle}
											href={localizeHref(
												"/o-institutu/centri/centar-za-pripremu-mineralnih-sirovina",
											)}
										/>

										<OrganizationLink
											title={content.centres.newMaterials.title}
											podnaslov={content.centres.newMaterials.subtitle}
											href={localizeHref(
												"/o-institutu/centri/centar-razvoj-novih-materijala",
											)}
										/>

										<OrganizationLink
											title={content.centres.inorganic.title}
											podnaslov={content.centres.inorganic.subtitle}
											href={localizeHref(
												"/o-institutu/centri/centar-neorganske-tehnologije",
											)}
										/>
									</div>
								</div>

								{/* DRUGA GRANA */}

								<div>
									<LeadershipCard
										id="pomocnik-metalurgija"
										title={content.assistants.metallurgy.title}
										name="Branislav Marković"
										dr="dr"
										scientificTitle={
											content.assistants.metallurgy.scientificTitle
										}
										description={content.assistants.metallurgy.description}
										email="b.markovic@itnms.ac.rs"
										phone="+381 11 3691 586"
										mobile="+381 63 348 520"
										href={localizeHref("/istrazivaci/branislav-markovic")}
										labels={content.labels}
									/>

									<VerticalLine />

									<OrganizationNode
										title={content.sectors.metallurgy.title}
										podnaslov={content.sectors.metallurgy.subtitle}
									/>

									<VerticalLine />

									<div className="w-3/4 h-px mx-auto bg-stone-300" />

									<div className="w-3/4 h-px mx-auto bg-stone-300" />

									<div className="grid grid-cols-2">
										<div className="flex justify-center">
											<VerticalLine />
										</div>

										<div className="flex justify-center">
											<VerticalLine />
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
										<OrganizationLink
											title={content.centres.metallurgy.title}
											podnaslov={content.centres.metallurgy.subtitle}
											href={localizeHref(
												"/o-institutu/centri/centar-metalurske-tehnologije",
											)}
										/>

										<OrganizationLink
											title={content.centres.environment.title}
											podnaslov={content.centres.environment.subtitle}
											href={localizeHref(
												"/o-institutu/centri/centar-za-zastitu",
											)}
										/>
									</div>

									{/* SPAJANJE DVA CENTRA */}

									<div className="grid grid-cols-2">
										<div className="flex justify-center">
											<VerticalLine />
										</div>

										<div className="flex justify-center">
											<VerticalLine />
										</div>
									</div>

									<div className="w-1/2 h-px mx-auto bg-stone-300" />

									<VerticalLine />

									<div className="mx-auto max-w-60">
										<OrganizationLink
											title={content.centres.production.title}
											podnaslov={content.centres.production.subtitle}
											href={localizeHref(
												"/o-institutu/centri/centar-za-proizvodnju",
											)}
											variant="important"
										/>
									</div>
								</div>

								{/* TREĆA GRANA */}

								<div>
									<LeadershipCard
										id="pomocnik-nauka"
										title={content.assistants.science.title}
										name="Jovica Stojanović"
										email="j.stojanovic@itnms.ac.rs"
										description={content.assistants.science.description}
										href={localizeHref("/istrazivaci/jovica-stojanovic")}
										labels={content.labels}
									/>

									<VerticalLine />

									<OrganizationLink
										title={content.centres.centralLaboratory.title}
										podnaslov={content.centres.centralLaboratory.subtitle}
										href={localizeHref(
											"/o-institutu/centri/centralna-laboratorija",
										)}
										variant="sector"
									/>
								</div>
							</div>

							{/* ZAJEDNIČKA GRANA ZA SLUŽBE */}

							<div className="mt-16">
								<div className="grid grid-cols-3">
									<div className="flex justify-center">
										<div className="w-px h-8 bg-stone-300" />
									</div>

									<div className="flex justify-center">
										<div className="w-px h-8 bg-stone-300" />
									</div>

									<div className="flex justify-center">
										<div className="w-px h-8 bg-stone-300" />
									</div>
								</div>

								<div className="w-2/3 h-px mx-auto bg-stone-300" />

								<VerticalLine />

								<p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
									{content.labels.sharedServices}
								</p>

								<div className="grid grid-cols-2 gap-6">
									<ServiceCard
										id="ekonomski-finansijski"
										title={content.services.economic.title}
										professionalTitle={
											content.services.economic.professionalTitle
										}
										head="Tanja Stojanović"
										email="t.stojanovic@itnms.ac.rs"
										phone="063438025"
										labels={content.labels}
									/>

									<ServiceCard
										id="administrativni"
										title={content.services.administrative.title}
										professionalTitle={
											content.services.administrative.professionalTitle
										}
										head="Marija Stojanović"
										email="marija.stojanovic@itnms.ac.rs"
										phone="063348235"
										labels={content.labels}
									/>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

function VerticalLine({ height = "h-7" }: { height?: string }) {
	return (
		<div
			className={`mx-auto w-px ${height} bg-stone-300`}
			aria-hidden="true"
		/>
	);
}

type OrganizationLinkProps = {
	title: string;
	podnaslov: string;
	href: string;
	variant?: "default" | "primary" | "sector" | "important" | "service";
};

function OrganizationLink({
	title,
	podnaslov,
	href,
	variant = "default",
}: OrganizationLinkProps) {
	const styles = {
		default:
			"border-stone-200 bg-white text-stone-800 hover:border-institute-400 hover:bg-institute-50",

		primary:
			"border-institute-800 bg-institute-800 text-white hover:bg-institute-900",

		sector:
			"border-mineral-300 bg-mineral-50 text-stone-900 hover:border-mineral-500",

		important:
			"border-institute-300 bg-institute-50 text-institute-900 hover:bg-institute-100",

		service:
			"border-stone-300 bg-stone-50 text-stone-800 hover:border-institute-300 hover:bg-white",
	};

	return (
		<Link
			className={`group flex min-h-24 flex-col items-center justify-center rounded-xl border p-4 text-center text-sm font-semibold leading-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${styles[variant]}`}
			href={href}
		>
			<div className="flex items-center justify-center w-full">
				<div className="ml-auto">{title}</div>

				{variant === "primary" ? null : (
					<ExternalLink className="ml-auto h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:opacity-60" />
				)}
			</div>

			<span className="text-xs font-normal text-stone-600">{podnaslov}</span>
		</Link>
	);
}

function LeadershipCard({
	id,
	title,
	name,
	description,
	href,
	dr,
	scientificTitle,
	email,
	phone,
	mobile,
	address,
	labels,
}: LeadershipCardProps) {
	return (
		<details className="group w-full max-w-[30em]">
			<summary className="list-none cursor-pointer rounded-2xl border border-stone-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md group-open:border-institute-400 group-open:shadow-md">
				<div className="flex items-start gap-4">
					<div className="flex items-center justify-center h-11 w-11 shrink-0 rounded-xl bg-institute-50 text-institute-800">
						<UserRound className="w-5 h-5" />
					</div>

					<div className="flex-1 min-w-0">
						<p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mineral-700">
							{labels.management}
						</p>

						<h2 className="mt-2 text-base font-semibold leading-6 text-stone-800">
							{title}
						</h2>

						{name && <p className="mt-2 text-sm text-stone-600">{name}</p>}
					</div>

					<ChevronDown className="w-5 h-5 transition-transform shrink-0 text-stone-400 group-open:rotate-180" />
				</div>
			</summary>

			<div
				id={`${id}-details`}
				className="p-5 mt-2 border rounded-xl border-stone-200 bg-stone-50"
			>
				{name && (
					<p className="font-semibold text-stone-900">
						{dr && <span className="text-stone-400">{dr} </span>}

						{name}
					</p>
				)}

				{scientificTitle && (
					<p className="mt-1 text-sm font-medium text-institute-700">
						{scientificTitle}
					</p>
				)}

				{description && (
					<p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>
				)}

				<div className="mt-4 space-y-2 text-sm text-stone-600">
					{email && (
						<a
							href={`mailto:${email}`}
							className="block hover:text-institute-800"
						>
							{email}
						</a>
					)}

					{phone && (
						<a
							href={`tel:${phone.replace(/\s/g, "")}`}
							className="block hover:text-institute-800"
						>
							{labels.telephone}: {phone}
						</a>
					)}

					{mobile && (
						<a
							href={`tel:${mobile.replace(/\s/g, "")}`}
							className="block hover:text-institute-800"
						>
							{labels.mobile}: {mobile}
						</a>
					)}

					{address && <p>{address}</p>}
				</div>

				{href && (
					<Link
						href={href}
						className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-institute-700 hover:text-institute-900"
					>
						{labels.moreInformation}

						<ExternalLink className="w-4 h-4" />
					</Link>
				)}
			</div>
		</details>
	);
}

function BoardCard({
	members,
	labels,
}: {
	members: BoardMember[];
	labels: CardLabels;
}) {
	return (
		<details className="w-full max-w-2xl group">
			<summary className="p-5 text-left text-white list-none transition border shadow-sm cursor-pointer rounded-2xl border-institute-800 bg-institute-800 hover:bg-institute-900 group-open:shadow-md">
				<div className="flex items-center gap-4">
					<div className="flex items-center justify-center h-11 w-11 shrink-0 rounded-xl bg-white/10">
						<UsersRound className="w-5 h-5" />
					</div>

					<div className="flex-1">
						<p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-institute-100">
							{labels.governance}
						</p>

						<h2 className="mt-1 text-lg font-semibold">{labels.board}</h2>
					</div>

					<ChevronDown className="w-5 h-5 transition-transform shrink-0 group-open:rotate-180" />
				</div>
			</summary>

			<div className="mt-2 overflow-hidden bg-white border shadow-sm rounded-2xl border-stone-200">
				{members.map((member, index) => {
					const memberContent = (
						<div className="flex items-start gap-4 p-5 transition group hover:bg-stone-50">
							<div className="flex items-center justify-center rounded-lg h-9 w-9 shrink-0 bg-institute-50 text-institute-800">
								<UserRound className="w-4 h-4" />
							</div>

							<div className="flex-1 min-w-0">
								<div className="flex flex-wrap items-center gap-2">
									<p className="font-semibold text-stone-900">
										<span className="mr-1 text-stone-400">{member.zvanje}</span>

										{member.name}
									</p>

									{member.role && (
										<span className="rounded-full bg-mineral-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-mineral-800">
											{member.role}
										</span>
									)}
								</div>

								<p className="mt-2 text-sm leading-6 text-stone-600">
									{member.description}
								</p>
							</div>

							{member.href && (
								<ExternalLink className="w-4 h-4 mt-1 transition shrink-0 text-stone-300 group-hover:text-institute-700" />
							)}
						</div>
					);

					return (
						<div
							key={member.name}
							className={
								index !== members.length - 1 ? "border-b border-stone-200" : ""
							}
						>
							{member.href ? (
								<Link href={member.href}>{memberContent}</Link>
							) : (
								memberContent
							)}
						</div>
					);
				})}
			</div>
		</details>
	);
}

function OrganizationNode({
	title,
	podnaslov,
	variant = "sector",
}: {
	title: string;
	podnaslov?: string;
	variant?: "sector" | "service";
}) {
	const styles = {
		sector: "border-mineral-300 bg-mineral-50 text-stone-900",
		service: "border-stone-300 bg-stone-50 text-stone-900",
	};

	return (
		<div
			className={`flex min-h-24 flex-col items-center justify-center rounded-xl border p-4 text-center shadow-sm ${styles[variant]}`}
		>
			<p className="text-sm font-semibold leading-5">{title}</p>

			{podnaslov && (
				<p className="mt-1 text-xs font-normal leading-5 text-stone-600">
					{podnaslov}
				</p>
			)}
		</div>
	);
}

function ServiceCard({
	id,
	title,
	head,
	professionalTitle,
	email,
	phone,
	mobile,
	labels,
}: ServiceCardProps) {
	return (
		<details className="w-full group">
			<summary className="p-5 text-left list-none transition border shadow-sm cursor-pointer rounded-xl border-stone-300 bg-stone-50 hover:border-institute-300 hover:bg-white group-open:border-institute-300 group-open:bg-white group-open:shadow-md">
				<div className="flex items-start gap-3">
					<div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-institute-50 text-institute-800">
						<Building2 className="w-5 h-5" />
					</div>

					<div className="flex-1 min-w-0">
						<p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mineral-700">
							{labels.service}
						</p>

						<h3 className="mt-2 text-sm font-semibold leading-6 text-stone-900">
							{title}
						</h3>
					</div>

					<ChevronDown className="w-5 h-5 transition-transform shrink-0 text-stone-400 group-open:rotate-180" />
				</div>
			</summary>

			<div
				id={`${id}-details`}
				className="p-5 mt-2 bg-white border rounded-xl border-stone-200"
			>
				<p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-500">
					{labels.serviceHead}
				</p>

				<p className="mt-1 font-semibold text-stone-900">
					{head || labels.noData}
				</p>

				{professionalTitle && (
					<p className="mt-1 text-sm text-stone-500">{professionalTitle}</p>
				)}

				{(email || phone || mobile) && (
					<div className="pt-4 mt-4 space-y-2 text-sm border-t border-stone-200 text-stone-600">
						{email && (
							<a
								href={`mailto:${email}`}
								className="block hover:text-institute-800"
							>
								{email}
							</a>
						)}

						{phone && (
							<a
								href={`tel:${phone.replace(/\s/g, "")}`}
								className="block hover:text-institute-800"
							>
								{labels.telephone}: {phone}
							</a>
						)}

						{mobile && (
							<a
								href={`tel:${mobile.replace(/\s/g, "")}`}
								className="block hover:text-institute-800"
							>
								{labels.mobile}: {mobile}
							</a>
						)}
					</div>
				)}
			</div>
		</details>
	);
}
