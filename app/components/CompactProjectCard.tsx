import {
	ArrowRight,
	Building2,
	CalendarDays,
	Landmark,
	Users,
} from "lucide-react";

type CompactProjectCardProps = {
	title: string;
	acronym: string;
	abstract: string;
	projectUrl: string;
	funder: string;
	period: string;
	teamCount: number;
	institutionCount: number;
};

export function CompactProjectCard({
	title,
	acronym,
	abstract,
	projectUrl,
	funder,
	period,
	teamCount,
	institutionCount,
}: CompactProjectCardProps) {
	return (
		<article className="p-6 transition bg-white border shadow-sm group rounded-xl border-stone-200 hover:border-institute-300 hover:shadow-md">
			<div className="flex flex-col gap-5">
				<header>
					<span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-institute-50 text-institute-800">
						{acronym}
					</span>

					<h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-stone-900 group-hover:text-institute-800">
						{title}
					</h3>
				</header>

				<p className="text-sm leading-6 line-clamp-3 text-stone-600">
					{abstract}
				</p>

				<div className="grid gap-3 py-4 border-y border-stone-200 sm:grid-cols-2">
					<ProjectMeta
						icon={<Landmark className="w-4 h-4" />}
						label="Finansijer"
						value={funder}
					/>

					<ProjectMeta
						icon={<CalendarDays className="w-4 h-4" />}
						label="Period"
						value={period}
					/>

					<ProjectMeta
						icon={<Users className="w-4 h-4" />}
						label="Tim"
						value={`${teamCount} članova`}
					/>

					<ProjectMeta
						icon={<Building2 className="w-4 h-4" />}
						label="NIO"
						value={`${institutionCount} učesnika`}
					/>
				</div>

				<a
					href={projectUrl}
					className="inline-flex items-center self-start gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
				>
					Detaljnije o projektu
					<ArrowRight
						className="w-4 h-4 transition-transform group-hover:translate-x-1"
						aria-hidden="true"
					/>
				</a>
			</div>
		</article>
	);
}

type ProjectMetaProps = {
	icon: React.ReactNode;
	label: string;
	value: string;
};

function ProjectMeta({ icon, label, value }: ProjectMetaProps) {
	return (
		<div className="flex gap-3">
			<div className="mt-0.5 text-mineral-700">{icon}</div>

			<div className="min-w-0">
				<p className="text-xs font-semibold tracking-wide uppercase text-stone-500">
					{label}
				</p>

				<p className="mt-1 text-sm font-medium line-clamp-2 text-stone-700">
					{value}
				</p>
			</div>
		</div>
	);
}
