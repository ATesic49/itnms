import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { Container } from "@/app/components/Container";

type BreadcrumbItem = {
	label: string;
	href?: string;
};

type PageHeaderProps = {
	title: string;
	description?: string;
	breadcrumbs?: BreadcrumbItem[];
};

export function PageHeader({
	title,
	description,
	breadcrumbs = [],
}: PageHeaderProps) {
	return (
		<header className="border-b border-stone-200 bg-institute-50">
			<Container className="py-12 md:py-16 lg:py-20">
				{breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}

				<div className={breadcrumbs.length > 0 ? "mt-8" : ""}>
					<h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
						{title}
					</h1>

					{description && (
						<p className="max-w-3xl mt-5 text-lg leading-8 text-stone-600 md:text-xl">
							{description}
						</p>
					)}
				</div>
			</Container>
		</header>
	);
}
