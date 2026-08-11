import { Mail, UserRound } from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

type CouncilMember = {
	fullName: string;
	role?: string;
	scientificTitle?: string;
	email?: string;
	profileUrl?: string;
};

const leadership: CouncilMember[] = [
	{
		fullName: "Ime i prezime",
		role: "Predsednik Naučnog veća",
		scientificTitle: "Naučni savetnik",
		email: "ime.prezime@itnms.ac.rs",
		profileUrl: "/istrazivaci-i-zaposleni/ime-prezime",
	},
	{
		fullName: "Ime i prezime",
		role: "Zamenik predsednika",
		scientificTitle: "Viši naučni saradnik",
		email: "ime.prezime@itnms.ac.rs",
		profileUrl: "/istrazivaci-i-zaposleni/ime-prezime-2",
	},
	{
		fullName: "Ime i prezime",
		role: "Sekretar Naučnog veća",
		scientificTitle: "Naučni saradnik",
		email: "ime.prezime@itnms.ac.rs",
		profileUrl: "/istrazivaci-i-zaposleni/ime-prezime-3",
	},
];

const members: CouncilMember[] = [
	{
		fullName: "Ime i prezime",
		scientificTitle: "Naučni savetnik",
		profileUrl: "/istrazivaci-i-zaposleni/clan-1",
	},
	{
		fullName: "Ime i prezime",
		scientificTitle: "Viši naučni saradnik",
		profileUrl: "/istrazivaci-i-zaposleni/clan-2",
	},
	{
		fullName: "Ime i prezime",
		scientificTitle: "Naučni saradnik",
		profileUrl: "/istrazivaci-i-zaposleni/clan-3",
	},
	{
		fullName: "Ime i prezime",
		scientificTitle: "Istraživač saradnik",
		profileUrl: "/istrazivaci-i-zaposleni/clan-4",
	},
];

export default function ScientificCouncilMembersPage() {
	return (
		<>
			<PageHeader
				title="Sastav Naučnog veća"
				description="Pregled predsednika, zamenika, sekretara i članova Naučnog veća Instituta."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "Naučno veće",
						href: "/o-institutu/naucno-vece",
					},
					{
						label: "Sastav",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Rukovodstvo Naučnog veća
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Predsednik, zamenik i sekretar
						</h2>
					</div>

					<div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
						{leadership.map((member) => (
							<CouncilLeadershipCard
								key={member.role}
								member={member}
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
								Članovi
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Članovi Naučnog veća
							</h2>
						</div>

						<p className="text-sm text-stone-500">
							Ukupno članova: {members.length + leadership.length}
						</p>
					</div>

					<div className="mt-10 overflow-hidden bg-white border shadow-sm rounded-xl border-stone-200">
						<div className="hidden grid-cols-[1fr_280px_160px] border-b border-stone-200 bg-stone-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-stone-500 md:grid">
							<span>Ime i prezime</span>
							<span>Naučno zvanje</span>
							<span>Profil</span>
						</div>

						<div className="divide-y divide-stone-200">
							{members.map((member) => (
								<CouncilMemberRow
									key={member.profileUrl ?? member.fullName}
									member={member}
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
};

function CouncilLeadershipCard({ member }: CouncilLeadershipCardProps) {
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
					Pogledajte profil →
				</a>
			)}
		</article>
	);
}

type CouncilMemberRowProps = {
	member: CouncilMember;
};

function CouncilMemberRow({ member }: CouncilMemberRowProps) {
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
						Otvori profil
					</a>
				) : (
					<span className="text-sm text-stone-400">Nije dostupan</span>
				)}
			</div>
		</div>
	);
}
