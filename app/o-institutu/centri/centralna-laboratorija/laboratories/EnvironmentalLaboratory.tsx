import { ShieldCheck } from "lucide-react";

import type { Language } from "@/app/lib/language/dictionary";
import { getDictionary } from "@/app/lib/language/dictionary";

import img069 from "@/public/imgs/IMG_0069.jpg";
import img079 from "@/public/imgs/IMG_0079.jpg";
import img083 from "@/public/imgs/IMG_0083.jpg";
import LaboratorySection from "../LaboratorySection";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Props = {
	lang: Language;
	dict: Dictionary;
	standalone?: boolean;
};

const images = [img069, img079, img083];

export default function EnvironmentalLaboratory({
	lang,
	dict,
	standalone = false,
}: Props) {
	const content = dict.centralLaboratory.labs.environmental;

	return (
		<LaboratorySection
			lang={lang}
			number="04"
			icon={ShieldCheck}
			title={content.title}
			description={[content.description]}
			images={images}
			standalone={standalone}
		/>
	);
}
