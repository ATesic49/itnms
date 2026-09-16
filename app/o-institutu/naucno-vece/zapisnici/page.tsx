import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import RecordsPageContent from "./RecordsPageContent";

export default async function ScientificCouncilRecordsPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	return (
		<RecordsPageContent
			content={dict.scientificCouncilRecords}
			lang={lang}
		/>
	);
}
