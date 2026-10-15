import { Microscope } from "lucide-react";

import type { Language } from "@/app/lib/language/dictionary";
import { getDictionary } from "@/app/lib/language/dictionary";

import img9915 from "@/public/imgs/IMG_9915.jpg";
import img9916 from "@/public/imgs/IMG_9916.jpg";
import LaboratorySection from "../LaboratorySection";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Props = {
	lang: Language;
	dict: Dictionary;
	standalone?: boolean;
};

const images = [img9915, img9916];

export default function ElectronMicroscopyLaboratory({
	lang,
	dict,
	standalone = false,
}: Props) {
	const content = dict.centralLaboratory.labs.microscopy;

	return (
		<LaboratorySection
			lang={lang}
			number="06"
			icon={Microscope}
			title={content.title}
			description={[content.description]}
			images={images}
			standalone={standalone}
		/>
	);
}
