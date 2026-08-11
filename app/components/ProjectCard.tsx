import {
	ExternalLink,
	Building2,
	CalendarDays,
	Landmark,
	Users,
} from "lucide-react";

type TeamMember = {
	name: string;
	profileUrl?: string;
};

type Institution = {
	name: string;
	url?: string;
};

type ProjectCardProps = {
	title: string;
	acronym: string;
	team: TeamMember[];
	abstract: string;
	projectUrl: string;
	institutions: Institution[];
	funder: string;
	startDate: string;
	endDate: string;
};

export function ProjectCard({
	title,
	acronym,
	team,
	abstract,
	projectUrl,
	institutions,
	funder,
	startDate,
	endDate,
}: ProjectCardProps) {
	return (
		<article className="overflow-hidden transition duration-200 bg-white border shadow-sm rounded-xl border-stone-200 hover:border-institute-300 hover:shadow-md">
			<div className="grid lg:grid-cols-[1fr_280px]">
				<div className="p-6 md:p-8">
					<header>
						<span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-institute-50 text-institute-800">
							{acronym}
						</span>

						<h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900">
							{title}
						</h3>
					</header>

					<section className="mt-5">
						<h4 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
							Apstrakt projekta
						</h4>

						<p className="mt-2 text-sm leading-6 line-clamp-4 text-stone-600">
							{abstract}
						</p>
					</section>

					<section className="mt-6">
						<div className="flex items-center gap-2">
							<Users
								className="w-4 h-4 text-mineral-700"
								aria-hidden="true"
							/>

							<h4 className="text-sm font-semibold tracking-wide uppercase text-stone-800">
								Tim saradnika
							</h4>
						</div>

						<div className="flex flex-wrap mt-3 gap-x-4 gap-y-2">
							{team.map((member) =>
								member.profileUrl ? (
									<a
										key={member.name}
										href={member.profileUrl}
										className="text-sm font-medium text-institute-700 hover:text-institute-900 hover:underline"
									>
										{member.name}
									</a>
								) : (
									<span
										key={member.name}
										className="text-sm text-stone-600"
									>
										{member.name}
									</span>
								),
							)}
						</div>
					</section>

					<a
						href={projectUrl}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white transition rounded-md mt-7 bg-institute-800 hover:bg-institute-900"
					>
						Pogledaj projekat
						<ExternalLink
							className="w-4 h-4"
							aria-hidden="true"
						/>
					</a>
				</div>

				<aside className="p-6 border-t border-stone-200 bg-stone-50 lg:border-l lg:border-t-0 md:p-8">
					<ProjectInfo
						icon={<CalendarDays className="w-4 h-4" />}
						label="Period trajanja"
					>
						{startDate} – {endDate}
					</ProjectInfo>

					<ProjectInfo
						icon={<Landmark className="w-4 h-4" />}
						label="Finansijer"
					>
						{funder}
					</ProjectInfo>

					<ProjectInfo
						icon={<Building2 className="w-4 h-4" />}
						label="NIO učesnici"
					>
						<ul className="space-y-2">
							{institutions.map((institution) => (
								<li key={institution.name}>
									{institution.url ? (
										<a
											href={institution.url}
											target="_blank"
											rel="noreferrer"
											className="font-medium text-institute-700 hover:text-institute-900 hover:underline"
										>
											{institution.name}
										</a>
									) : (
										institution.name
									)}
								</li>
							))}
						</ul>
					</ProjectInfo>
				</aside>
			</div>
		</article>
	);
}

type ProjectInfoProps = {
	icon: React.ReactNode;
	label: string;
	children: React.ReactNode;
};

function ProjectInfo({ icon, label, children }: ProjectInfoProps) {
	return (
		<section className="py-5 border-b border-stone-200 first:pt-0 last:border-b-0 last:pb-0">
			<div className="flex items-center gap-2 text-mineral-700">
				{icon}

				<h4 className="text-xs font-semibold tracking-wide uppercase text-stone-700">
					{label}
				</h4>
			</div>

			<div className="mt-2 text-sm leading-6 text-stone-600">{children}</div>
		</section>
	);
}
