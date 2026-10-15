import Link from "next/link";
import { ArrowRight, UsersRound } from "lucide-react";

import { routeTranslations } from "@/app/lib/language/routes";

type Employee = {
	ime: string;
	pozicija?: string;
};

type EmployeeListProps = {
	zaposleni: readonly Employee[];
	lang: "sr" | "en";
	title?: string;
};

export default function EmployeeList({
	zaposleni,
	lang,
	title,
}: EmployeeListProps) {
	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	return title ? (
		<section className="pt-10 border-t mt-14 border-stone-200">
			{title && (
				<h2 className="text-2xl font-semibold tracking-tight text-stone-900">
					{title}
				</h2>
			)}

			<div className="grid gap-3 mt-5 sm:grid-cols-2">
				{zaposleni.map((member) => {
					const profilePath = `/istrazivaci/${createEmployeeSlug(member.ime)}`;

					const href = `${localizeHref(profilePath)}?zaposleni=true`;

					return (
						<Link
							key={member.ime}
							href={href}
							className="flex items-center justify-between px-4 py-4 transition bg-white border group rounded-xl border-stone-200 hover:border-institute-300 hover:bg-institute-50"
						>
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center transition rounded-lg h-9 w-9 bg-stone-100 text-stone-600 group-hover:bg-white group-hover:text-institute-800">
									<UsersRound className="w-4 h-4" />
								</div>

								<span className="flex flex-col justify-center text-sm font-medium text-stone-800">
									<span>Dr {member.ime}</span>

									{member.pozicija && (
										<span className="text-xs font-normal capitalize text-institute-700">
											{member.pozicija}
										</span>
									)}
								</span>
							</div>

							<ArrowRight className="w-4 h-4 transition text-stone-300 group-hover:translate-x-1 group-hover:text-institute-700" />
						</Link>
					);
				})}
			</div>
		</section>
	) : (
		<section className="">
			<div className="grid gap-3 mt-5 sm:grid-cols-2">
				{zaposleni.map((member) => {
					const profilePath = `/istrazivaci/${createEmployeeSlug(member.ime)}`;

					const href = `${localizeHref(profilePath)}?zaposleni=true`;

					return (
						<Link
							key={member.ime}
							href={href}
							className="flex items-center justify-between px-4 py-4 transition bg-white border group rounded-xl border-stone-200 hover:border-institute-300 hover:bg-institute-50"
						>
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center transition rounded-lg h-9 w-9 bg-stone-100 text-stone-600 group-hover:bg-white group-hover:text-institute-800">
									<UsersRound className="w-4 h-4" />
								</div>

								<span className="flex flex-col justify-center text-sm font-medium text-stone-800">
									<span>Dr {member.ime}</span>

									{member.pozicija && (
										<span className="text-xs font-normal capitalize text-institute-700">
											{member.pozicija}
										</span>
									)}
								</span>
							</div>

							<ArrowRight className="w-4 h-4 transition text-stone-300 group-hover:translate-x-1 group-hover:text-institute-700" />
						</Link>
					);
				})}
			</div>
		</section>
	);
}

function createEmployeeSlug(name: string) {
	return name
		.toLocaleLowerCase("sr")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "dj")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}
