import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";

import PhysicalChemicalLaboratory from "../laboratories/PhysicalChemicalLaboratory";

export default async function Page() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.centralLaboratory.labs.physicochemical;

	return (
		<>
			<PageHeader
				title={content.title}
				description={content.description}
				breadcrumbs={[
					{
						label: lang === "en" ? "About the Institute" : "O Institutu",
						href: "/o-institutu",
					},
					{
						label:
							lang === "en" ? "Central Laboratory" : "Centralna laboratorija",
						href: "/o-institutu/centri/centralna-laboratorija",
					},
					{
						label: content.title,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-6xl mx-auto">
						<PhysicalChemicalLaboratory
							lang={lang}
							dict={dict}
							standalone
						/>
					</div>
				</Container>
			</Section>
		</>
	);
}
