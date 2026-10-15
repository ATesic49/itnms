import { Atom } from "lucide-react";

import type { Language } from "@/app/lib/language/dictionary";
import { getDictionary } from "@/app/lib/language/dictionary";
import LaboratorySection from "../LaboratorySection";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Props = {
	lang: Language;
	dict: Dictionary;
	standalone?: boolean;
};

export default function PMSLaboratory({
	lang,
	dict,
	standalone = false,
}: Props) {
	const content = dict.centralLaboratory.labs.pms;

	return (
		<LaboratorySection
			lang={lang}
			number="05"
			icon={Atom}
			title={content.title}
			description={[content.description]}
			standalone={standalone}
		/>
	);
}
