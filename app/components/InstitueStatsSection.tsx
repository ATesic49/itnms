import { Building2, FlaskConical, FolderKanban, Users } from "lucide-react";

import { Container } from "@/app/components/Container";
import { Section } from "./Section";

const stats = [
	{
		value: "50+",
		label: "godina rada",
		icon: Building2,
	},
	{
		value: "30+",
		label: "istraživača",
		icon: Users,
	},
	{
		value: "10+",
		label: "laboratorija",
		icon: FlaskConical,
	},
	{
		value: "20+",
		label: "aktivnih projekata",
		icon: FolderKanban,
	},
];

export function InstituteStatsSection() {
	return (
		<section className="bg-institute-950">
			<Container className="py-12 md:py-16">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat) => {
						const Icon = stat.icon;

						return (
							<div
								key={stat.label}
								className="flex items-center gap-4 border-white/10 lg:border-r lg:last:border-r-0 lg:pr-8"
							>
								<div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-white/10 text-institute-200">
									<Icon
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</div>

								<div>
									<p className="text-3xl font-semibold tracking-tight text-white">
										{stat.value}
									</p>

									<p className="mt-1 text-sm text-stone-300">{stat.label}</p>
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
