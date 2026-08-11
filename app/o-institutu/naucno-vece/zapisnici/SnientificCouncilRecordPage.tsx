import { FileText } from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

export default function ScientificCouncilRecordsPage() {
	return (
		<>
			<PageHeader
				title="Zapisnici Naučnog veća"
				description="Na ovoj stranici biće objavljivani javno dostupni zapisnici sa sednica Naučnog veća Instituta."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "Naučno veće",
						href: "/o-institutu/naucno-vece",
					},
					{
						label: "Zapisnici",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-3xl mx-auto">
						<div className="px-6 text-center border shadow-sm rounded-2xl border-stone-200 bg-stone-50 py-14 md:px-10 md:py-20">
							<div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-institute-100 text-institute-800">
								<FileText
									className="w-8 h-8"
									aria-hidden="true"
								/>
							</div>

							<h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Trenutno nema objavljenih zapisnika
							</h2>

							<p className="max-w-xl mx-auto mt-4 text-base leading-7 text-stone-600">
								Javno dostupni zapisnici sa sednica Naučnog veća biće objavljeni
								na ovoj stranici kada budu dostupni.
							</p>

							<a
								href="/o-institutu/naucno-vece"
								className="inline-flex items-center justify-center px-5 py-3 mt-8 text-sm font-semibold transition border rounded-md border-institute-700 text-institute-800 hover:bg-institute-50"
							>
								Nazad na Naučno veće
							</a>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
