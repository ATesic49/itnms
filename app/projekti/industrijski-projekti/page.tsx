import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { getIndustrialProjects } from "@/app/lib/industrijalProjects";
import IndustrialProjectsPageContent from "./IndustrijalProjectsPageContent";

export default async function IndustrialProjectsPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const projects = await getIndustrialProjects(lang);

	return (
		<IndustrialProjectsPageContent
			projects={projects}
			lang={lang}
			content={dict.industrialProjects}
		/>
	);
}
