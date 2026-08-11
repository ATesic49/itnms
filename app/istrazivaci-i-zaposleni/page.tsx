import { ArrowRight, BriefcaseBusiness, Microscope, Users } from "lucide-react";
//Podsetnik: Ubaci ovde slike i kontent i sistem za zaposlene obavezno
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import Image from "next/image";
import slika from "@/public/imgs/IMG_9912.jpg";
import { getEmployees } from "../lib/google-sheets/employees";
import { Employee } from "../types/employee";
import user from "@/public/imgs/user.png";
const employeeSections = [
	// {
	// 	title: "Svi zaposleni",
	// 	description:
	// 		"Pregled zaposlenih Instituta, njihovih pozicija, organizacionih jedinica i kontakt podataka.",
	// 	href: "/istrazivaci-i-zaposleni/svi-zaposleni",
	// 	icon: Users,
	// },
	{
		title: "Istraživači",
		description:
			"Profili istraživača, naučna zvanja, oblasti interesovanja, obrazovanje i spoljašnji naučni profili.",
		href: "/istrazivaci-i-zaposleni/istrazivaci",
		icon: Microscope,
	},
	{
		title: "Rukovodstvo",
		description:
			"Direktor, pomoćnici direktora i druga odgovorna lica zadužena za upravljanje Institutom.",
		href: "/istrazivaci-i-zaposleni/rukovodstvo",
		icon: BriefcaseBusiness,
	},
];

// const featuredResearchers = [
// 	{
// 		image: "/images/zaposleni/istrazivac-01.webp",
// 		fullName: "Dr Ime Prezime",
// 		scientificTitle: "Naučni savetnik",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/ime-prezime",
// 	},
// 	{
// 		image: "/images/zaposleni/istrazivac-02.webp",
// 		fullName: "Dr Ime Prezime",
// 		scientificTitle: "Viši naučni saradnik",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/ime-prezime-2",
// 	},
// 	{
// 		image: "/images/zaposleni/istrazivac-03.webp",
// 		fullName: "Dr Ime Prezime",
// 		scientificTitle: "Naučni saradnik",
// 		profileUrl: "/istrazivaci-i-zaposleni/istrazivaci/ime-prezime-3",
// 	},
// ];

export default async function EmployeesAndResearchersPage() {
	const researchers = (await getEmployees()).filter(
		(value) => value.jeIstrazivac,
	);
	const featuredResearchers = researchers.slice(0, 3);
	return (
		<>
			<PageHeader
				title="Istraživači i zaposleni"
				description="Pregled zaposlenih, istraživača, naučnih zvanja, oblasti interesovanja i organizacione pripadnosti."
				breadcrumbs={[
					{
						label: "Istraživači i zaposleni",
					},
				]}
			/>

			<Section>
				<Container>
					<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Tim Instituta
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Stručni timovi povezani kroz nauku, razvoj i primenu
							</h2>

							<p className="mt-5 text-base leading-8 text-stone-600">
								Zaposleni Instituta učestvuju u naučnoistraživačkim projektima,
								laboratorijskim ispitivanjima, razvoju tehnologija i saradnji sa
								privredom i drugim institucijama.
							</p>

							<p className="mt-4 text-base leading-8 text-stone-600">
								Profili istraživača sadrže podatke o naučnom zvanju, oblastima
								interesovanja, akademskom obrazovanju i relevantnim naučnim
								identifikatorima.
							</p>
						</div>

						<div className="overflow-hidden border shadow-sm rounded-2xl border-stone-200 bg-stone-100">
							<Image
								src={slika}
								alt="Istraživači i zaposleni ITNMS-a"
								className="object-cover w-full aspect-4/3"
							/>
						</div>
					</div>
				</Container>
			</Section>

			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Pregled zaposlenih
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Izaberite grupu zaposlenih
						</h2>

						<p className="mt-4 text-base leading-7 text-stone-600">
							Pristupite kompletnom imeniku, profilima istraživača ili pregledu
							rukovodstva Instituta.
						</p>
					</div>

					<div className="grid gap-6 mt-12 lg:grid-cols-3">
						{employeeSections.map((item) => {
							const Icon = item.icon;

							return (
								<a
									key={item.href}
									href={item.href}
									className="flex flex-col p-8 transition bg-white border shadow-sm group min-h-70 rounded-2xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md"
								>
									<div className="flex items-center justify-center transition h-14 w-14 rounded-xl bg-institute-50 text-institute-800 group-hover:bg-institute-800 group-hover:text-white">
										<Icon
											className="h-7 w-7"
											aria-hidden="true"
										/>
									</div>

									<h3 className="text-2xl font-semibold tracking-tight transition mt-7 text-stone-900 group-hover:text-institute-800">
										{item.title}
									</h3>

									<p className="mt-4 text-base leading-7 text-stone-600">
										{item.description}
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
						})}
					</div>
				</Container>
			</Section>

			<Section background="white">
				<Container>
					<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Izdvojeni profili
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Upoznajte istraživače Instituta
							</h2>
						</div>

						<a
							href="/istrazivaci-i-zaposleni/istrazivaci"
							className="inline-flex items-center self-start gap-2 text-sm font-semibold transition text-institute-700 hover:text-institute-900 md:self-auto"
						>
							Svi istraživači
							<ArrowRight
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					</div>

					<div className="grid gap-5 mt-10 lg:grid-cols-3">
						{featuredResearchers.map((researcher, a) => (
							<CompactEmployeeCard
								key={a}
								{...researcher}
							/>
						))}
					</div>
				</Container>
			</Section>

			<Section background="institute">
				<Container>
					<div className="grid gap-8 rounded-2xl border border-institute-100 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
								Tražite saradnika iz određene oblasti?
							</h2>

							<p className="max-w-2xl mt-3 text-base leading-7 text-stone-600">
								Pretražite istraživače prema naučnom zvanju, organizacionoj
								jedinici ili oblasti interesovanja.
							</p>
						</div>

						<a
							href="/istrazivaci-i-zaposleni/istrazivaci"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
						>
							Pretražite istraživače
							<ArrowRight
								className="w-4 h-4"
								aria-hidden="true"
							/>
						</a>
					</div>
				</Container>
			</Section>
		</>
	);
}

type CompactEmployeeCardProps = {
	image: string;
	fullName: string;
	scientificTitle: string;
	profileUrl: string;
};

function CompactEmployeeCard({
	lastName,
	firstName,
	position,
	naucnoZvanje,
	jeIstrazivac,
	akademskoObrazovanje,
	email,
	enaukaLink,
	oblastInteresovanja,
	orcidLink,
	skopusLink,
	slug,
}: Employee) {
	return (
		<a
			href={`/istrazivaci-i-zaposleni/istrazivaci/${slug}?zaposleni=true`}
			className="group flex min-h-33 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-institute-300 hover:shadow-md"
		>
			<div className="overflow-hidden w-28 shrink-0 bg-stone-100 sm:w-32">
				<Image
					src={user}
					alt={firstName}
					className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
				/>
			</div>

			<div className="flex flex-col justify-center flex-1 min-w-0 px-5 py-4">
				<h3 className="text-lg font-semibold tracking-tight transition text-stone-900 group-hover:text-institute-800">
					{firstName} {lastName}
				</h3>

				<p className="mt-2 text-sm leading-5 text-stone-600">{naucnoZvanje}</p>

				<span className="mt-3 text-sm font-semibold text-institute-700">
					Pogledajte profil →
				</span>
			</div>
		</a>
	);
}
