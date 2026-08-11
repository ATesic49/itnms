import { ArrowRight, Mail, Phone } from "lucide-react";
// import rukovodstvoSlika1 from '@/app/'
import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import Image, { StaticImageData } from "next/image";
import user from "@/public/imgs/user.png";
import user1 from "@/public/imgs/user1.png";
type LeadershipMember = {
	fullName: string;
	position: string;
	scientificTitle?: string;
	image: string | StaticImageData;
	email?: string;
	phone?: string;
	profileUrl?: string;
	featured?: boolean;
};

const leadership: LeadershipMember[] = [
	{
		fullName: "Ime i prezime",
		position: "Direktor Instituta",
		scientificTitle: "Naučni savetnik",
		image: user,
		email: "ime.prezime@itnms.ac.rs",
		phone: "+381 11 0000 000",
		profileUrl: "/istrazivaci-i-zaposleni/ime-prezime",
		featured: true,
	},
	{
		fullName: "Ime i prezime",
		position: "Pomoćnik direktora za nauku",
		scientificTitle: "Viši naučni saradnik",
		image: user1,
		email: "ime.prezime@itnms.ac.rs",
		profileUrl: "/istrazivaci-i-zaposleni/ime-prezime-2",
	},
	{
		fullName: "Ime i prezime",
		position: "Pomoćnik direktora za finansije",
		image: user1,
		email: "ime.prezime@itnms.ac.rs",
		profileUrl: "/istrazivaci-i-zaposleni/ime-prezime-3",
	},
	{
		fullName: "Ime i prezime",
		position: "Sekretar Instituta",
		image: user1,
		email: "ime.prezime@itnms.ac.rs",
		profileUrl: "/istrazivaci-i-zaposleni/ime-prezime-4",
	},
];

export default function LeadershipPage() {
	const director = leadership.find((member) => member.featured);
	const otherMembers = leadership.filter((member) => !member.featured);

	return (
		<>
			<PageHeader
				title="Rukovodstvo"
				description="Pregled rukovodstva Instituta i odgovornih lica zaduženih za upravljanje naučnim, stručnim i administrativnim poslovima."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "Rukovodstvo",
					},
				]}
			/>

			{director && (
				<Section>
					<Container>
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
								Direktor Instituta
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
								Upravljanje i razvoj Instituta
							</h2>
						</div>

						<div className="mt-10 overflow-hidden bg-white border shadow-sm rounded-2xl border-stone-200">
							<div className="grid lg:grid-cols-[320px_1fr]">
								<div className="bg-stone-100">
									<Image
										src={director.image}
										alt={director.fullName}
										className="object-cover object-top w-full h-full min-h-95"
									/>
								</div>

								<div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
									<p className="text-sm font-semibold uppercase tracking-[0.16em] text-institute-700">
										{director.position}
									</p>

									<h3 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
										{director.fullName}
									</h3>

									{director.scientificTitle && (
										<p className="mt-2 text-base text-stone-600">
											{director.scientificTitle}
										</p>
									)}

									<p className="max-w-2xl mt-6 text-base leading-8 text-stone-600">
										Opis
									</p>

									<div className="flex flex-col gap-3 text-sm mt-7 sm:flex-row sm:flex-wrap sm:gap-5">
										{director.email && (
											<a
												href={`mailto:${director.email}`}
												className="inline-flex items-center gap-2 font-medium transition text-institute-700 hover:text-institute-900"
											>
												<Mail
													className="w-4 h-4"
													aria-hidden="true"
												/>
												{director.email}
											</a>
										)}

										{director.phone && (
											<a
												href={`tel:${director.phone.replace(/\s+/g, "")}`}
												className="inline-flex items-center gap-2 font-medium transition text-stone-700 hover:text-institute-800"
											>
												<Phone
													className="w-4 h-4"
													aria-hidden="true"
												/>
												{director.phone}
											</a>
										)}
									</div>

									{director.profileUrl && (
										<a
											href={director.profileUrl}
											className="inline-flex items-center self-start gap-2 mt-8 text-sm font-semibold transition text-institute-700 hover:text-institute-900"
										>
											Pogledajte profil
											<ArrowRight
												className="w-4 h-4"
												aria-hidden="true"
											/>
										</a>
									)}
								</div>
							</div>
						</div>
					</Container>
				</Section>
			)}

			<Section background="stone">
				<Container>
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
							Ostali članovi rukovodstva
						</p>

						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
							Stručna i operativna podrška upravljanju
						</h2>
					</div>

					<div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
						{otherMembers.map((member) => (
							<LeadershipCard
								key={member.profileUrl ?? member.fullName}
								member={member}
							/>
						))}
					</div>
				</Container>
			</Section>
		</>
	);
}

type LeadershipCardProps = {
	member: LeadershipMember;
};

function LeadershipCard({ member }: LeadershipCardProps) {
	return (
		<article className="overflow-hidden transition bg-white border shadow-sm group rounded-xl border-stone-200 hover:-translate-y-1 hover:border-institute-300 hover:shadow-md">
			<div className="grid grid-cols-[120px_1fr]">
				<div className="bg-stone-100">
					<Image
						src={member.image}
						alt={member.fullName}
						className="object-cover object-top w-full h-full min-h-45"
					/>
				</div>

				<div className="flex flex-col p-5">
					<p className="text-xs font-semibold tracking-wide uppercase text-institute-700">
						{member.position}
					</p>

					<h3 className="mt-2 text-lg font-semibold tracking-tight transition text-stone-900 group-hover:text-institute-800">
						{member.fullName}
					</h3>

					{member.scientificTitle && (
						<p className="mt-1 text-sm text-stone-600">
							{member.scientificTitle}
						</p>
					)}

					{member.email && (
						<a
							href={`mailto:${member.email}`}
							className="inline-flex items-center gap-2 mt-4 text-sm transition text-stone-600 hover:text-institute-800"
						>
							<Mail
								className="w-4 h-4"
								aria-hidden="true"
							/>
							{member.email}
						</a>
					)}

					{member.profileUrl && (
						<a
							href={member.profileUrl}
							className="inline-flex items-center gap-2 pt-5 mt-auto text-sm font-semibold text-institute-700"
						>
							Profil
							<ArrowRight
								className="w-4 h-4 transition-transform group-hover:translate-x-1"
								aria-hidden="true"
							/>
						</a>
					)}
				</div>
			</div>
		</article>
	);
}
