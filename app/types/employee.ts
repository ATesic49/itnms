import { BlobOptions } from "buffer";

export type Employee = {
	firstName: string;
	lastName: string;
	oblastInteresovanja?: string;
	naucnoZvanje?: string;
	akademskoObrazovanje?: string;
	orcidLink?: string;
	enaukaLink?: string;
	skopusLink?: string;
	email?: string;
	position: string;
	slug?: string;
	jeIstrazivac: boolean;
	// isResearcher: boolean;
	// isActive: boolean;
	// order: number;
};

export const researchPositions = [
	"Senior research fellow",
	"Junior Research Assistant",
	"Research Associate",
	" Research Associate",
	"Senior Research Associate",
	" Research Associate at the Center for metallurgical technology",
	"Research Assistant",
	"Scientific Researcher in the Applied Mineralogy Unit",
	"Researcher in Materials, Thermochemical Conversion and Environmental Protection",
	"Researcher in Carbon Materials, Thermochemical Conversion and Environmental Protection",
	"Viši naučni saradnik/Senior Research Associate",
	"Naučni saradnik/Research Associate",
	"Scientific Researcher in the Geology and Applied Mineralogy Unit",
	"Principal research fellow",
	"naučni saradnik/Research Associate",
	"Istraživač pripravnik u Sektoru za metalurške tehnologije i zaštitu životne sredine/Junior Researcher at the Department of Metallurgical Technologies and Environmental Engineering",
	"Naučni savetnik/Principal Research Fellow",
	"Naučni saradnik / Research Associate",
	"Naučni savetnik/Principal research fellow",
	"Istraživač saradnik / Research Assistant",
	"Naučni savetnik/Principal Research Fellow šef službe QMS",
] as const;
