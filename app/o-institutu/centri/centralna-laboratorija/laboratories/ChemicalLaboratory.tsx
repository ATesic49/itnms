import { Beaker } from "lucide-react";

import type { Language } from "@/app/lib/language/dictionary";
import { getDictionary } from "@/app/lib/language/dictionary";

import hemijska001 from "@/public/imgs/IMG_0001.jpg";
import hemijska002 from "@/public/imgs/IMG_0002.jpg";
import hemijska003 from "@/public/imgs/IMG_0003.jpg";
import LaboratorySection from "../LaboratorySection";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Props = {
	lang: Language;
	dict: Dictionary;
	standalone?: boolean;
};

const images = [hemijska001, hemijska002, hemijska003];

export default function ChemicalLaboratory({
	lang,
	dict,
	standalone = false,
}: Props) {
	const content = dict.centralLaboratory.labs.chemical;
	const members = [
		{
			ime: "Jelena Petrović",
		},
		{
			ime: "Marija Simić",
		},
		{
			ime: "Marija Ercegović",
		},
		{
			ime: "Marija Koprivica",
		},
		{
			ime: "Jelena Dimitrijević",
		},
		{
			ime: "Ivana Mikavica",
		},
	];
	return (
		<LaboratorySection
			lang={lang}
			number="01"
			icon={Beaker}
			title={content.title}
			description={dict.centralLaboratory.intro}
			images={images}
			members={members}
			standalone={standalone}
		/>
	);
}
