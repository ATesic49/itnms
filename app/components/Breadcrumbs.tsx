import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
	label: string;
	href?: string;
};

type BreadcrumbsProps = {
	items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
	return (
		<nav aria-label="Breadcrumb">
			<ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
				<li>
					<a
						href="/"
						className="inline-flex items-center transition hover:text-institute-800"
						aria-label="Početna"
					>
						<Home className="w-4 h-4" />
					</a>
				</li>

				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<li
							key={`${item.label}-${index}`}
							className="flex items-center gap-2"
						>
							<ChevronRight
								className="w-4 h-4 text-stone-300"
								aria-hidden="true"
							/>

							{item.href && !isLast ? (
								<a
									href={item.href}
									className="transition hover:text-institute-800"
								>
									{item.label}
								</a>
							) : (
								<span
									className={isLast ? "font-medium text-stone-700" : ""}
									aria-current={isLast ? "page" : undefined}
								>
									{item.label}
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
