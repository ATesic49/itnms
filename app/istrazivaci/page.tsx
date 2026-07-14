import React from "react";
import { EmployeeCard } from "../components/EmployeeCard";
import { CompactEmployeeCard } from "../components/CompactEmployeeCard";

const page = () => {
	return (
		<div className="py-32 px-16 flex flex-col justify-center items-center gap-16 ">
			<h2>ZAPOSTLE</h2>
			<div className="grid gap-6 w-full grid-cols-2">
				<CompactEmployeeCard
					image="/imgs/user.png"
					fullName="Dr Ime Prezime"
					scientificTitle="Viši naučni saradnik"
					profileUrl="/istrazivaci/ime-prezime"
				/>{" "}
				<CompactEmployeeCard
					image="/imgs/user.png"
					fullName="Dr Ime Prezime"
					scientificTitle="Viši naučni saradnik"
					profileUrl="/istrazivaci/ime-prezime"
				/>{" "}
				<CompactEmployeeCard
					image="/imgs/user.png"
					fullName="Dr Ime Prezime"
					scientificTitle="Viši naučni saradnik"
					profileUrl="/istrazivaci/ime-prezime"
				/>{" "}
				<CompactEmployeeCard
					image="/imgs/user.png"
					fullName="Dr Ime Prezime"
					scientificTitle="Viši naučni saradnik"
					profileUrl="/istrazivaci/ime-prezime"
				/>{" "}
				<CompactEmployeeCard
					image="/imgs/user.png"
					fullName="Dr Ime Prezime"
					scientificTitle="Viši naučni saradnik"
					profileUrl="/istrazivaci/ime-prezime"
				/>{" "}
				<CompactEmployeeCard
					image="/imgs/user.png"
					fullName="Dr Ime Prezime"
					scientificTitle="Viši naučni saradnik"
					profileUrl="/istrazivaci/ime-prezime"
				/>{" "}
				<CompactEmployeeCard
					image="/imgs/user.png"
					fullName="Dr Ime Prezime"
					scientificTitle="Viši naučni saradnik"
					profileUrl="/istrazivaci/ime-prezime"
				/>
			</div>

			<EmployeeCard
				image="/imgs/user.png"
				fullName="Dr Ime Prezime"
				position="Rukovodilac laboratorije"
				scientificTitle="Viši naučni saradnik"
				interests="Priprema mineralnih sirovina, karakterizacija materijala, razvoj tehnoloških postupaka i unapređenje procesa prerade."
				education="Doktor tehničkih nauka, Univerzitet u Beogradu, Tehnološko-metalurški fakultet."
				email="ime.prezime@itnms.ac.rs"
				links={{
					orcid: "https://orcid.org/",
					eNauka: "https://enauka.gov.rs/",
					scopus: "https://www.scopus.com/",
				}}
			/>
		</div>
	);
};

export default page;
