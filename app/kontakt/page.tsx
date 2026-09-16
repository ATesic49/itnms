import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import ContactPageContent from "./ContactPageContent";

export default async function ContactPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	return (
		<ContactPageContent
			lang={lang}
			content={dict.contactPage}
		/>
	);
}
