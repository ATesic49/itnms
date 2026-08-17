export type SearchPage = {
	title: string;
	description?: string;
	href: string;
	keywords?: string[];
};

export const searchPages: SearchPage[] = [
	{
		title: "Početna",
		description: "Početna stranica Instituta",
		href: "/",
		keywords: ["itnms", "institut"],
	},

	{
		title: "O Institutu",
		description: "Informacije o Institutu",
		href: "/o-institutu",
	},

	{
		title: "Istorijat",
		description: "Istorijat Instituta",
		href: "/o-institutu/istorijat",
		keywords: ["istorija", "istorijat"],
	},

	{
		title: "O ITNMS-u",
		href: "/o-institutu/o-itnms-u",
	},

	{
		title: "Organizaciona šema",
		href: "/o-institutu/organizacija",
		keywords: ["organizacija", "šema", "sektori", "centri", "rukovodstvo"],
	},

	{
		title: "Rukovodstvo",
		href: "/o-institutu/rukovodstvo",
	},

	{
		title: "Naučno veće",
		href: "/o-institutu/naucno-vece",
	},

	{
		title: "Delatnosti i oblasti rada",
		href: "/o-institutu/delatnosti-i-oblasti-rada",
	},

	{
		title: "Istraživači i zaposleni",
		href: "/istrazivaci-i-zaposleni",
	},

	{
		title: "Istraživači",
		href: "/istrazivaci-i-zaposleni/istrazivaci",
	},

	{
		title: "Projekti",
		href: "/projekti",
	},

	{
		title: "Naučni projekti",
		href: "/projekti/naucni",
	},

	{
		title: "Industrijski projekti",
		href: "/projekti/industrijski-projekti",
	},

	// {
	// 	title: "Usluge",
	// 	href: "/usluge",
	// },

	// {
	// 	title: "Oblasti usluga",
	// 	href: "/usluge/oblasti-usluga",
	// },

	// {
	// 	title: "Laboratorije",
	// 	href: "/usluge/laboratorije",
	// },

	// {
	// 	title: "Oprema",
	// 	href: "/usluge/oprema",
	// },

	// {
	// 	title: "Pošaljite upit",
	// 	href: "/usluge/posaljite-upit",
	// },

	{
		title: "Kvalitet i akreditacije",
		href: "/kvalitet-i-akreditacije",
	},

	{
		title: "Sistem kvaliteta",
		href: "/kvalitet-i-akreditacije/sistem-kvaliteta",
	},

	{
		title: "Akreditacije",
		href: "/kvalitet-i-akreditacije/akreditacije",
	},

	{
		title: "Akreditovane metode",
		href: "/kvalitet-i-akreditacije/akreditovane-metode",
	},

	{
		title: "Sertifikati",
		href: "/kvalitet-i-akreditacije/sertifikati",
	},

	{
		title: "Politika kvaliteta",
		href: "/kvalitet-i-akreditacije/politika-kvaliteta",
	},

	{
		title: "Kontakt",
		href: "/kontakt",
	},

	{
		title: "Centar za metalurške tehnologije",
		href: "/organizacione-jedinice/centri/centar-metalurske-tehnologije",
		keywords: ["metalurgija", "metalurške tehnologije", "metali", "reciklaža"],
	},

	{
		title: "Centar za proizvodnju",
		href: "/organizacione-jedinice/centri/centar-za-proizvodnju",
		keywords: ["proizvodnja", "metali", "oksidi", "soli"],
	},

	{
		title: "Centar za neorganske tehnologije",
		href: "/organizacione-jedinice/centri/centar-neorganske-tehnologije",
		keywords: ["neorganske tehnologije", "keramika", "staklo", "materijali"],
	},
];
