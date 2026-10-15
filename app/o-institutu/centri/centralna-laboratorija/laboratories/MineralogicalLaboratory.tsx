import { Mountain } from "lucide-react";

import type { Language } from "@/app/lib/language/dictionary";
import { getDictionary } from "@/app/lib/language/dictionary";

import img034 from "@/public/imgs/IMG_0034.jpg";
import img048 from "@/public/imgs/IMG_0048.jpg";
import img055 from "@/public/imgs/IMG_0055.jpg";
import LaboratorySection from "../LaboratorySection";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Props = {
	lang: Language;
	dict: Dictionary;
	standalone?: boolean;
};

const images = [img034, img048, img055];

export default function MineralogicalLaboratory({
	lang,
	dict,
	standalone = false,
}: Props) {
	const content = dict.centralLaboratory.labs.mineralogical;

	return (
		<LaboratorySection
			lang={lang}
			number="03"
			icon={Mountain}
			title={content.title}
			subtitle={content.subtitle}
			description={[content.description]}
			images={images}
			standalone={standalone}
		/>
	);
}
