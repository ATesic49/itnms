import { getProjects } from "@/app/lib/google-sheets/projectss";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";

import ScientificProjectsPage from "./ProjectPageContent";

export default async function ScientificProjectsRoute({
	searchParams,
}: {
	searchParams: Promise<{
		title?: string;
	}>;
}) {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const projects = await getProjects(lang);

	const { title } = await searchParams;

	return (
		<ScientificProjectsPage
			title={title}
			projectss={projects}
			lang={lang}
			content={dict.scientificProjects}
		/>
	);
}
