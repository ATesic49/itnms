import { FlaskConical } from "lucide-react";

import type { Language } from "@/app/lib/language/dictionary";
import { getDictionary } from "@/app/lib/language/dictionary";

import img005 from "@/public/imgs/IMG_0005.jpg";
import img012 from "@/public/imgs/IMG_0012.jpg";
import img013 from "@/public/imgs/IMG_0013.jpg";
import img017 from "@/public/imgs/IMG_0017.jpg";
import img021 from "@/public/imgs/IMG_0021.jpg";
import img023 from "@/public/imgs/IMG_0023.jpg";
import img027 from "@/public/imgs/IMG_0027.jpg";
import img028 from "@/public/imgs/IMG_0028.jpg";
import img032 from "@/public/imgs/IMG_0032.jpg";
import LaboratorySection from "../LaboratorySection";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Props = {
	lang: Language;
	dict: Dictionary;
	standalone?: boolean;
};

const images = [
	img005,
	img012,
	img013,
	img017,
	img021,
	img023,
	img027,
	img028,
	img032,
];

export default function PhysicalChemicalLaboratory({
	lang,
	dict,
	standalone = false,
}: Props) {
	const content = dict.centralLaboratory.labs.physicochemical;

	return (
		<LaboratorySection
			lang={lang}
			number="02"
			icon={FlaskConical}
			title={content.title}
			subtitle={content.subtitle}
			description={[content.description]}
			images={images}
			standalone={standalone}
		/>
	);
}
