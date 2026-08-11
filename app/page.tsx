import Image from "next/image";
import logo from "@/public/imgs/load.jpg";
import logo1 from "@/public/imgs/IMG_99676.jpg";
import Vesti from "./components/Vesti";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { HeroSection } from "./components/HeroSections";
import { ResearchAreasSection } from "./ResearchAreasSection";
import { InstituteStatsSection } from "./components/InstitueStatsSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { LabsAndEquipmentSection } from "./components/LabsAndEquipmentSection";
import { NewsSection } from "./components/NewsSection";
import { PartnersSection } from "./components/PartnersSection";
import { ContactCtaSection } from "./components/ContactCtaSection";
export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-full gap-16 ">
			{/* <div className="relative w-full">
				<div className=" absolute top-32 gap-4 right-16 w-fit  backdrop-blur-sm  bg-[#33333377]  p-8 flex flex-col ">
					<h1 className="text-4xl font-bold text-mineral-100 font-naslov ">
						Dobro Došli na Sajt ITNMS
					</h1>
					<p className="w-[25em] text-sm text-gray-200 font-text ">
						Dobro Došli na Sajt ITNMS Institut za tehnologiju nuklearnih i
						drugih mineralnih sirovina (ITNMS) Beograd, proslavio je 2008.
						godine 60 godina svog postojanja. Osnovan je 1948. god. rešenjem
						vlade FNRJ...
					</p>
				</div>
				<Image
					src={logo1}
					alt=""
					className="object-cover object-bottom w-full max-h-screen"
				></Image>
			</div> */}
			<HeroSection></HeroSection>
			<NewsSection />
			{/* //Akta instituta */}
			{/* <InstituteStatsSection /> */}
			<FeaturedProjectsSection />
			{/* <ServicesSection /> */}
			{/* <LabsAndEquipmentSection /> */}
			{/* <ResearchAreasSection /> */}
			<ContactCtaSection />
			<PartnersSection />
			{/* <Vesti></Vesti> */}
		</div>
	);
}
