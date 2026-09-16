import { getEmployees } from "@/app/lib/google-sheets/employees";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";

import IstrazivaciPageContent from "./IstrazivaciPageContent";

export default async function AllEmployeesPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const employees = await getEmployees(lang);

	return (
		<IstrazivaciPageContent
			employees={employees}
			content={dict.researchers}
			lang={lang}
		/>
	);
}
