import { ArrowRight, Network, UsersRound } from "lucide-react";
import slika from "@/public/imgs/IMG_9970.jpg";
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import Image from "next/image";

export default function OrganizationPage() {
	return (
		<>
			<PageHeader
				title="Organizacija"
				description="Pregled organizacione strukture Instituta, njegovih jedinica, sektora i rukovodilaca."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "Organizacija",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid gap-8 lg:grid-cols-2">
						<OrganizationCard
							title="Organizaciona šema"
							description="Grafički prikaz rukovodstva, sektora, laboratorija i drugih organizacionih jedinica Instituta."
							href="/o-institutu/organizacija/organizaciona-sema"
							icon={Network}
						/>

						<OrganizationCard
							title="Organizacione jedinice"
							description="Pregled svih sektora i jedinica, njihovih oblasti rada, rukovodilaca i zaposlenih."
							href="/o-institutu/organizacija/organizacione-jedinice"
							icon={UsersRound}
						/>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Struktura Instituta
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Organizacija naučnog, stručnog i laboratorijskog rada
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								Organizaciona struktura Instituta omogućava povezivanje
								istraživačkih timova, laboratorijskih kapaciteta i stručnih
								službi u okviru zajedničkih naučnih i razvojnih aktivnosti.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Svaka organizaciona jedinica ima jasno definisane oblasti rada,
								odgovorna lica i zaposlene koji učestvuju u projektima,
								ispitivanjima i saradnji sa privredom.
							</p>
						</div>

						<div className="overflow-hidden bg-white border shadow-sm rounded-2xl border-stone-200">
							<Image
								src={slika}
								alt="Zaposleni i organizacione jedinice ITNMS-a"
								className="object-cover w-full brightness-120 aspect-4/3"
							/>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

type OrganizationCardProps = {
	title: string;
	description: string;
	href: string;
	icon: React.ElementType;
};

function OrganizationCard({
	title,
	description,
	href,
	icon: Icon,
}: OrganizationCardProps) {
	return (
		<a
			href={href}
			className="group flex min-h-[280px] flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
		>
			<div className="flex items-center justify-center transition h-14 w-14 rounded-xl bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
				<Icon
					className="h-7 w-7"
					aria-hidden="true"
				/>
			</div>

			<h2 className="text-2xl font-semibold tracking-tight transition mt-7 text-stone-900 group-hover:text-institute-800">
				{title}
			</h2>

			<p className="max-w-xl mt-4 text-base leading-7 text-stone-600">
				{description}
			</p>

			<span className="inline-flex items-center gap-2 pt-8 mt-auto text-sm font-semibold text-institute-700">
				Otvorite stranicu
				<ArrowRight
					className="w-4 h-4 transition-transform group-hover:translate-x-1"
					aria-hidden="true"
				/>
			</span>
		</a>
	);
}
