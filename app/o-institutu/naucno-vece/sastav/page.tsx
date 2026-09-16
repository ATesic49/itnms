import { Mail, UserRound } from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

type CouncilMember = {
	fullName: string;
	role?: string;
	scientificTitle?: string;
	email?: string;
	profileUrl?: string;
};

export default async function ScientificCouncilMembersPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.scientificCouncilMembers;

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	const leadership: CouncilMember[] = [
		{
			fullName: "Jovica Stojanović",
			role: content.roles.president,
			scientificTitle: content.scientificTitles.scientificAdviser,
			email: "j.stojanovic@itnms.ac.rs",
			profileUrl: localizeHref("/istrazivaci/jovica-stojanovic"),
		},
		{
			fullName: "Branislav Marković",
			role: content.roles.deputyPresident,
			scientificTitle: content.scientificTitles.scientificAdviser,
			email: "b.markovic@itnms.ac.rs",
			profileUrl: localizeHref("/istrazivaci/branislav-markovic"),
		},
	];

	const members: CouncilMember[] = [
		{
			fullName: "Dragan Radulović",
			profileUrl: localizeHref("/istrazivaci/dragan-radulovic"),
			scientificTitle: content.scientificTitles.scientificAdviser,
		},
		{
			fullName: "Miroslav Sokić",
			profileUrl: localizeHref("/istrazivaci/miroslav-sokic"),
			scientificTitle: content.scientificTitles.scientificAdviser,
		},
		{
			fullName: "Srđan Matijašević",
			profileUrl: localizeHref("/istrazivaci/srdjan-matijasevic"),
			scientificTitle: content.scientificTitles.scientificAdviser,
		},
		{
			fullName: "Slavica Mihajlović",
			profileUrl: localizeHref("/istrazivaci/slavica-mihajlovic"),
			scientificTitle: content.scientificTitles.scientificAdviser,
		},
		{
			fullName: "Jelena Petrović",
			profileUrl: localizeHref("/istrazivaci/jelena-petrovic"),
			scientificTitle: content.scientificTitles.seniorResearchAssociate,
		},
		{
			fullName: "Tatjana Šoštarić",
			profileUrl: localizeHref("/istrazivaci/tatjana-sostaric"),
			scientificTitle: content.scientificTitles.seniorResearchAssociate,
		},
		{
			fullName: "Aleksandar Jovanović",
			profileUrl: localizeHref("/istrazivaci/aleksandar-jovanovic"),
			scientificTitle: content.scientificTitles.researchAssociate,
		},
		{
			fullName: "Ana Radosavljević Mihajlović",
			profileUrl: localizeHref("/istrazivaci/ana-radosavljevic-mihajlovic"),
			scientificTitle: content.scientificTitles.scientificAdviser,
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
						label: content.pageHeader.breadcrumbCouncil,
						href: localizeHref("/o-institutu/naucno-vece"),
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							{content.leadershipSection.eyebrow}
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							{content.leadershipSection.title}
						</h2>
					</div>

					<div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-2">
						{leadership.map((member) => (
							<CouncilLeadershipCard
								key={member.role}
								member={member}
								viewProfileLabel={content.viewProfile}
							/>
						))}
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								{content.membersSection.eyebrow}
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								{content.membersSection.title}
							</h2>
						</div>

						<p className="text-sm text-stone-500">
							{content.membersSection.totalMembers}:{" "}
							{members.length + leadership.length}
						</p>
					</div>

					<div className="mt-10 overflow-hidden bg-white border shadow-sm rounded-xl border-stone-200">
						<div className="hidden grid-cols-[1fr_280px_160px] border-b border-stone-200 bg-stone-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-stone-500 md:grid">
							<span>{content.table.fullName}</span>

							<span>{content.table.scientificTitle}</span>

							<span>{content.table.profile}</span>
						</div>

						<div className="divide-y divide-stone-200">
							{members.map((member) => (
								<CouncilMemberRow
									key={member.profileUrl ?? member.fullName}
									member={member}
									openProfileLabel={content.openProfile}
									notAvailableLabel={content.notAvailable}
								/>
							))}
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

type CouncilLeadershipCardProps = {
	member: CouncilMember;
	viewProfileLabel: string;
};

function CouncilLeadershipCard({
	member,
	viewProfileLabel,
}: CouncilLeadershipCardProps) {
	return (
		<article className="bg-white border shadow-sm rounded-xl border-stone-200 p-7">
			<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-institute-50 text-institute-800">
				<UserRound
					className="w-6 h-6"
					aria-hidden="true"
				/>
			</div>

			<p className="mt-6 text-xs font-semibold tracking-wide uppercase text-institute-700">
				{member.role}
			</p>

			<h3 className="mt-2 text-xl font-semibold tracking-tight text-stone-900">
				{member.fullName}
			</h3>

			{member.scientificTitle && (
				<p className="mt-2 text-sm text-stone-600">{member.scientificTitle}</p>
			)}

			{member.email && (
				<a
					href={`mailto:${member.email}`}
					className="inline-flex items-center gap-2 mt-5 text-sm transition text-stone-600 hover:text-institute-800"
				>
					<Mail
						className="w-4 h-4"
						aria-hidden="true"
					/>

					{member.email}
				</a>
			)}

			{member.profileUrl && (
				<a
					href={member.profileUrl}
					className="block mt-6 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
				>
					{viewProfileLabel}
				</a>
			)}
		</article>
	);
}

type CouncilMemberRowProps = {
	member: CouncilMember;
	openProfileLabel: string;
	notAvailableLabel: string;
};

function CouncilMemberRow({
	member,
	openProfileLabel,
	notAvailableLabel,
}: CouncilMemberRowProps) {
	return (
		<div className="grid gap-3 px-6 py-5 md:grid-cols-[1fr_280px_160px] md:items-center">
			<div>
				<p className="font-semibold text-stone-900">{member.fullName}</p>
			</div>

			<p className="text-sm text-stone-600">{member.scientificTitle ?? "—"}</p>

			<div>
				{member.profileUrl ? (
					<a
						href={member.profileUrl}
						className="text-sm font-semibold transition text-institute-700 hover:text-institute-900"
					>
						{openProfileLabel}
					</a>
				) : (
					<span className="text-sm text-stone-400">{notAvailableLabel}</span>
				)}
			</div>
		</div>
	);
}
