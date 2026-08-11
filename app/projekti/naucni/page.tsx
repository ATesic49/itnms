import { SearchParams } from "next/dist/server/request/search-params";
import ScientificProjectsPage from "./ProjectPageContent";
import { getProjects } from "@/app/lib/google-sheets/projectss";

export default async function AllEmployeesPage({
	searchParams,
}: {
	searchParams: Promise<{
		title?: string;
	}>;
}) {
	const projects = await getProjects();
	const { title } = await searchParams;
	return (
		<ScientificProjectsPage
			title={title}
			projectss={projects}
		/>
	);
}
