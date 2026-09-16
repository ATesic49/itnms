export type Language = "sr" | "en";

export const dictionary = {
	sr: {
		contactPage: {
			pageHeader: {
				title: "Kontakt",
				description: "Kontakt podaci, lokacija i forma za obraćanje Institutu.",
				breadcrumbCurrent: "Kontakt",
			},

			contactDetails: {
				address: "Adresa",
				phone: "Telefon",
				email: "Email",
				workingHours: "Radno vreme",
				workingHoursValue: "Ponedeljak–petak, 8.00–16.00",
			},

			location: {
				eyebrow: "Lokacija",
				title: "Kako da dođete do Instituta",
				description:
					"Institut se nalazi u Beogradu. Za precizne smernice za dolazak otvorite lokaciju na mapi.",
			},

			departments: {
				title: "Kontakti organizacionih oblasti",
				description:
					"Za brži odgovor obratite se direktno odgovarajućoj oblasti.",

				general: "Opšti i administrativni poslovi",
				laboratory: "Laboratorijska ispitivanja i usluge",
				research: "Naučnoistraživačka saradnja",
			},

			formIntro: {
				eyebrow: "Pišite nam",
				title: "Opšti kontakt upit",
				paragraph1:
					"Koristite ovu formu za opšta pitanja, predloge, informacije o Institutu i upite koji nisu vezani za konkretnu laboratorijsku uslugu.",
				paragraph2:
					"Za laboratorijske analize i stručne usluge koristite posebnu formu „Pošaljite upit“.",
				servicesLink: "Otvorite formu za usluge →",
			},

			form: {
				fullName: "Ime i prezime",
				organization: "Organizacija",
				email: "Email adresa",
				phone: "Broj telefona",
				subject: "Naslov poruke",
				message: "Poruka",

				consentBefore:
					"Saglasan sam da se uneti podaci koriste radi odgovora na poruku, u skladu sa",
				privacyPolicy: "politikom privatnosti",

				submit: "Pošaljite poruku",
				submitting: "Slanje poruke...",
			},

			success: {
				title: "Poruka je evidentirana",
				description:
					"Nakon povezivanja forme sa backendom, ovde će se prikazivati potvrda stvarnog slanja poruke.",
				reset: "Pošaljite novu poruku",
			},
		},
		underConstruction: {
			eyebrow: "Uskoro dostupno",
			title: "Stranica je u izradi",
			description:
				"Trenutno radimo na pripremi sadržaja ove stranice. Posetite nas ponovo uskoro.",
			backHome: "Nazad na početnu",
		},
		scientificProjects: {
			pageHeader: {
				title: "Naučni projekti",
				description:
					"Pregled naučnoistraživačkih projekata, projektnih timova, programa, finansijera i partnerskih institucija.",
				breadcrumbProjects: "Projekti",
				breadcrumbCurrent: "Naučni projekti",
			},

			filters: {
				title: "Pretraga i filteri",

				searchLabel: "Pretražite projekte",
				searchPlaceholder: "Naziv, akronim ili pojam",

				statusLabel: "Status projekta",
				allStatuses: "Svi statusi",

				funderLabel: "Finansijer",
				allFunders: "Svi finansijeri",

				clear: "Poništi",
			},

			statuses: {
				active: "Aktivan",
				completed: "Završen",
			},

			results: {
				shown: "Prikazano",
				projects: "projekata",
				total: "Ukupno",
			},

			card: {
				abstract: "Apstrakt projekta",
				team: "Tim saradnika",
				projectLink: "Link ka projektu",

				duration: "Period trajanja",
				funder: "Finansijer",
				institutions: "NIO učesnici",
			},

			empty: {
				title: "Nema pronađenih projekata",
				description: "Promenite pojam pretrage ili izaberite druge filtere.",
				clear: "Poništi sve filtere",
			},
		},
		projectsPage: {
			pageHeader: {
				title: "Projekti",
				description:
					"Pregled naučnoistraživačkih i industrijskih projekata Instituta.",
				breadcrumbCurrent: "Projekti",
			},

			categories: {
				scientific: {
					title: "Naučni projekti",
					description:
						"Pregled aktivnih i završenih naučnoistraživačkih projekata, istraživačkih timova, finansijera i partnerskih institucija.",
					button: "Pogledajte projekte",
				},

				industrial: {
					title: "Industrijski projekti",
					description:
						"Pregled saradnje sa privredom i industrijskih projekata Instituta.",
					button: "Otvorite stranicu",
				},
			},

			intro: {
				eyebrow: "Nauka i primena",
				title: "Projekti koji povezuju istraživanja, razvoj i industriju",
				paragraphs: [
					"Institut učestvuje u domaćim i međunarodnim naučnoistraživačkim programima, kao i u razvojnim i stručnim projektima realizovanim u saradnji sa privredom.",
					"Projektni timovi okupljaju istraživače Instituta i saradnike iz drugih naučnoistraživačkih organizacija, univerziteta i industrijskih sistema.",
				],
				imageAlt: "Istraživački tim ITNMS-a tokom rada na projektu",
			},
		},
		researcherProfile: {
			breadcrumbResearchers: "Istraživači",

			sidebar: {
				contact: "Kontakt",
				organizationalUnit: "Organizaciona jedinica",
				notAvailable: "Nije dostupno",
			},

			profile: {
				eyebrow: "Profil istraživača",
				researchArea: "Oblast interesovanja",
				academicEducation: "Akademsko obrazovanje",
				backToResearchers: "Nazad na sve istraživače",
			},

			formerEmployee: {
				description: "Informacije o zaposlenom",
				eyebrow: "Informacija",
				titleSuffix: "više nije zaposlen/a u Institutu",
				descriptionText:
					"Ova osoba se više ne nalazi među aktuelnim zaposlenima Instituta.",
				back: "Nazad na zaposlene",
			},
		},
		researchers: {
			card: {
				learnMore: "Saznaj više →",
			},
			pageHeader: {
				title: "Svi istraživači",
				description:
					"Pregled zaposlenih Instituta prema imenu, naučnom zvanju i poziciji.",
				breadcrumbResearchers: "Istraživači",
				breadcrumbCurrent: "Svi istraživači",
			},

			filters: {
				title: "Pretraga i filteri",

				searchLabel: "Pretražite istraživače",
				searchPlaceholder: "Ime i prezime",

				scientificTitleLabel: "Naučno zvanje",
				allScientificTitles: "Sva naučna zvanja",

				positionLabel: "Pozicija",
				allPositions: "Sve pozicije",

				clear: "Poništi",
			},

			results: {
				shown: "Prikazano",
				researchers: "istraživača",
				total: "Ukupno",
			},

			empty: {
				title: "Nema pronađenih istraživača",
				description:
					"Promenite pojam pretrage ili izaberite druge vrednosti filtera.",
				clear: "Poništi sve filtere",
			},
		},
		centralLaboratory: {
			pageHeader: {
				title: "Centralna laboratorija za ispitivanja",
				description:
					"Savremena laboratorijska infrastruktura ITNMS-a namenjena karakterizaciji materijala, mineralnih sirovina i uzoraka iz različitih oblasti nauke i industrije.",
				breadcrumbAbout: "O Institutu",
				breadcrumbOrganization: "Organizacija",
				breadcrumbCurrent: "Centralna laboratorija za ispitivanja",
			},

			intro: [
				"Centralna laboratorija za hemijska ispitivanja predstavlja spoj stručnih analitičkih usluga i savremenih naučnoistraživačkih aktivnosti u oblasti hemije, materijala i zaštite životne sredine. Tim Laboratorije čini pet istraživača u naučnim zvanjima i dva stručna tehničara, koji svojim znanjem i iskustvom doprinose povezivanju fundamentalnih i primenjenih istraživanja.",

				"Značajan segment rada Laboratorije obuhvata pružanje uslužnih hemijskih analiza i ispitivanja uzoraka iz oblasti mineralnih sirovina. Primenom različitih analitičkih metoda vrši se određivanje hemijskog sastava, kao i ispitivanje karakteristika različitih materijala. Dobijeni rezultati pružaju pouzdanu osnovu za karakterizaciju mineralnih sirovina i materijala, kontrolu njihovog kvaliteta, procenu mogućnosti dalje prerade i primene, kao i za potrebe različitih istraživačkih i industrijskih aktivnosti.",

				"Naučnoistraživački rad posebno je usmeren na valorizaciju otpadne biomase i razvoj održivih materijala i tehnologija. Istraživanja obuhvataju direktno iskorišćenje, hemijsku modifikaciju ili umrežavanje biomase sa mineralnim sirovinama, kao i njenu transformaciju u ugljenikom bogate proizvode primenom termohemijskih metoda konverzije, poput hidrotermalne karbonizacije i pirolize. Poseban fokus je na razvoju i karakterizaciji materijala dobijenih iz otpadne biomase sa potencijalnom primenom u zaštiti životne sredine i energetici. Istraživačke aktivnosti Laboratorije obuhvataju i procenu ekoloških i zdravstvenih rizika povezanih sa prisustvom potencijalno toksičnih elemenata i drugih zagađujućih materija u životnoj sredini.",

				"Kroz multidisciplinaran pristup i povezivanje analitičke hemije, nauke o materijalima i zaštite životne sredine, Laboratorija doprinosi valorizaciji otpada, efikasnijem korišćenju resursa i razvoju održivih rešenja zasnovanih na principima cirkularne ekonomije.",
			],

			organization: {
				eyebrow: "Organizaciona struktura",
				title: "Centralna laboratorija",
				unitLabel: "Organizaciona jedinica",
				unitTitle: "Centralna laboratorija za ispitivanja",
				laboratoryLabel: "Laboratorija za",

				labs: {
					physicochemical: "Fizičko-hemijska ispitivanja",
					chemical: "Hemijska ispitivanja",
					mineralogical: "Mineraloška ispitivanja",
					environmental: "Zaštitu životne sredine",
					mineralPreparation: "Pripremu mineralnih sirovina",
					microscopy: "Elektronsku mikroskopiju",
				},
			},

			labs: {
				chemical: {
					title: "Laboratorija za hemijska ispitivanja",
					description:
						"Laboratorija je namenjena hemijskoj analizi i ispitivanju različitih vrsta uzoraka, mineralnih sirovina, materijala i proizvoda.",
				},

				physicochemical: {
					title: "Laboratorija za fizičko-hemijska ispitivanja",
					subtitle: "Razvoj i karakterizacija materijala",
					description:
						"U okviru laboratorije vrše se fizičko-hemijska ispitivanja i karakterizacija materijala, kao podrška razvoju novih materijala i tehnoloških postupaka.",
				},

				mineralogical: {
					title: "Laboratorija za mineraloška ispitivanja",
					subtitle: "Priprema i karakterizacija mineralnih sirovina",
					description:
						"Laboratorija omogućava pripremu uzoraka i mineraloška ispitivanja mineralnih sirovina, kao osnovu za razvoj i optimizaciju procesa njihove prerade.",
				},

				environmental: {
					title: "Laboratorija za zaštitu životne sredine",
					description:
						"Laboratorija pruža podršku istraživanjima i ispitivanjima u oblasti zaštite životne sredine, praćenja kvaliteta i karakterizacije uzoraka iz različitih sredina.",
				},

				pms: {
					title: "Laboratorija za PMS",
					description:
						"Specijalizovana laboratorijska jedinica Centralne laboratorije za ispitivanja.",
				},

				microscopy: {
					title: "Laboratorija za elektronsku mikroskopiju",
					description:
						"Laboratorija za elektronsku mikroskopiju omogućava detaljno ispitivanje mikrostrukture, morfologije i karakteristika različitih materijala i uzoraka na mikroskopskom nivou.",
				},
			},

			labLabel: "Laboratorija",
			noPhotos: "Fotografije laboratorije biće dodate naknadno.",
			openImage: "Otvori sliku",
			photoAlt: "fotografija",
		},
		productionCentre: {
			pageHeader: {
				title: "Centar za proizvodnju",
				description:
					"Izrada soli i oksida metala iz primarnih i sekundarnih sirovina.",
				breadcrumbAbout: "O Institutu",
				breadcrumbOrganization: "Organizacione jedinice",
				breadcrumbCurrent: "Centar za proizvodnju",
			},

			intro: {
				eyebrow: "Delatnost centra",
				title: "Proizvodnja i prerada",
				description:
					"Delatnost Centra za eksperimentalnu proizvodnju je izrada soli i oksida metala iz primarnih i sekundarnih sirovina.",
				mainActivities: [
					"Prerada metala hidrometalurškim postupcima",
					"Prerada sekundarnih sirovina i međuprodukata metalurgije",
				],
			},

			hydrometallurgy: {
				title: "Prerada metala hidrometalurškim postupcima",
				description:
					"Proizvodnja soli i oksida metala tehničkog i p.a. kvaliteta iz primarnih i sekundarnih sirovina obuhvata sledeće grupe proizvoda:",
				products: [
					"Proizvodi na bazi kobalta",
					"Proizvodi na bazi nikla",
					"Proizvodi na bazi cinka",
					"Proizvodi na bazi olova",
					"Proizvodi na bazi bakra",
				],
			},

			recycling: {
				title: "Prerada sekundarnih sirovina i međuprodukata metalurgije",
				description:
					"Delatnost obuhvata preradu različitih sekundarnih sirovina, otpadnih rastvora, istrošenih akumulatora i katalizatora, kao i međuprodukata obojene i crne metalurgije.",
				items: [
					"Prerada šljaka i muljeva obojenih metala (Pb, Sn, Cu, Zn, Al i dr.)",
					"Rafinacija obojenih metala i legura",
					"Prerada otpadnih rastvora nikla, kobalta, bakra, molibdena i dr.",
					"Prerada istrošenih Pb i Ni-Cd akumulatora",
					"Prerada istrošenih Ni, Mo i V katalizatora",
					"Prerada međuprodukata obojene metalurgije",
					"Prerada međuprodukata crne metalurgije",
				],
			},

			sidebar: {
				label: "Centar",
				title: "Centar za proizvodnju",
				mainAreas: "Glavne oblasti",
				areas: [
					"Prerada metala hidrometalurškim postupcima",
					"Prerada sekundarnih sirovina i međuprodukata metalurgije",
				],
				productsTitle: "Proizvodi",
				productsDescription: "Soli i oksidi metala tehničkog i p.a. kvaliteta.",
				organizationLink: "Organizaciona šema",
			},
		},
		environmentalProtectionCentre: {
			pageHeader: {
				title: "Centar za zaštitu životne sredine",
				description: "Nauka u službi čistije životne sredine.",
				breadcrumbAbout: "O Institutu",
				breadcrumbOrganization: "Organizacione jedinice",
				breadcrumbCurrent: "Centar za zaštitu životne sredine",
			},

			intro: {
				eyebrow: "Delatnost centra",
				title: "Nauka u službi čistije životne sredine",
				description:
					"Kombinujemo stručno iskustvo i naučna istraživanja kako bismo preduzećima i institucijama pomogli da odgovorno upravljaju uticajem na životnu sredinu – od procene do dozvole.",
				workAreas: [
					"Rudarstvo",
					"Energetika",
					"Industrija",
					"Poljoprivreda",
					"Upravljanje otpadom",
				],
			},

			impactAssessment: {
				eyebrow: "Procena uticaja",
				title: "Studije o proceni uticaja na životnu sredinu",

				paragraphs: [
					"Centar vodi klijente kroz celokupan postupak procene uticaja – od pripreme prve dokumentacije do konačne saglasnosti nadležnog ministarstva.",
					"U skladu sa vrstom projekta formira se multidisciplinarni tim koji pokriva sve faze postupka, u skladu sa važećim domaćim i međunarodnim propisima.",
				],

				procedure: [
					"Izrada Zahteva za odlučivanje o potrebi procene uticaja",
					"Izrada Zahteva za određivanje obima i sadržaja Studije",
					"Izrada Studije o proceni uticaja na životnu sredinu",
					"Javna prezentacija Studije na lokaciji koju odredi nadležni organ",
					"Odbrana Studije pred Tehničkom komisijom i nadležnim organima",
					"Komunikacija sa nadležnim organima do ishodovanja konačne saglasnosti",
				],

				highlightBefore:
					"Saradnici Centra učestvuju u radu Tehničkih komisija pri Ministarstvu zaštite životne sredine Republike Srbije i lokalnim samoupravama i do sada su bili angažovani u analizi više od",

				highlightStrong: "90 studija o proceni uticaja",

				highlightAfter: ".",

				closing:
					"Centar takođe zastupa investitore pred nadležnim organima i vodi komunikaciju sa Ministarstvom zaštite životne sredine od pokretanja postupka do konačne saglasnosti.",

				referencesTitle: "Odabrane reference",

				references: [
					"Studija o proceni uticaja na životnu sredinu Dopunskog rudarskog projekta odlaganja jalovine na odlagalište „Mali Ujevac“, Serbia Zijin Copper d.o.o. Bor, Ogranak RBM Majdanpek",
					"Studija o proceni uticaja na životnu sredinu Dopunskog rudarskog projekta otkopavanja Površinskog kopa Južni revir u Rudniku bakra Majdanpek za godišnji kapacitet otkopavanja od 9,9 Mt rude, Serbia Zijin Copper d.o.o. Bor, Ogranak RBM Majdanpek",
					"Studija o proceni uticaja na životnu sredinu Dopunskog rudarskog projekta odlaganja jalovine sa Površinskog kopa Severni revir, Serbia Zijin Copper d.o.o. Bor, Ogranak RBM Majdanpek",
					"Studija o proceni uticaja na životnu sredinu Glavnog rudarskog projekta postrojenja za tretman otpadnih rudničkih voda Serbia Zijin Copper d.o.o. Bor",
					"Zahtev o potrebi procene uticaja na životnu sredinu DPR „Pilot“ postrojenja za tehnološka ispitivanja flotacijske prerade Pb-Zn rude iz ležišta „Podvirovi“ i „Popovica“ na području Karamanice, opština Bosilegrad",
					"Studija o proceni uticaja na životnu sredinu projekta eksploatacije rude olova i cinka sa ležišta „Kiževak“ i njene prerade u flotaciji u Rudnici, opština Raška",
					"Studija o proceni uticaja na životnu sredinu projekta izgradnje fabrike za alkalnu aktivaciju bentonita u Šipovu, Bosna i Hercegovina",
				],
			},

			ippc: {
				eyebrow: "Integrisane dozvole",
				title: "Integrisane dozvole za zaštitu životne sredine – IPPC",

				paragraphs: [
					"Integrisan pristup zaštiti životne sredine obavezuje operatere u energetici, metalurgiji, hemijskoj i prehrambenoj industriji, upravljanju otpadom i drugim sektorima da pribave integrisanu dozvolu pre početka ili izmene rada postrojenja.",
					"Centar pruža kompletnu stručnu podršku u pripremi i sprovođenju postupka do ishodovanja integrisane dozvole.",
				],

				activities: [
					"Procena usklađenosti postrojenja sa uslovima za dobijanje IPPC dozvole",
					"Pomoć pri prikupljanju potrebne dokumentacije",
					"Izrada zahteva za izdavanje integrisane dozvole",
					"Praćenje postupka do ishodovanja dozvole",
					"Izrada plana monitoringa",
					"Izrada plana upravljanja otpadom",
					"Izrada plana mera za energetsku efikasnost",
					"Izrada plana mera za sprečavanje udesa",
					"Izrada plana zaštite životne sredine po prestanku rada postrojenja",
					"Poređenje postojećeg stanja sa zahtevima BREF dokumenata",
					"Izrada programa mera za usklađivanje sa zakonskim obavezama",
				],

				bref: "Postojeće stanje postrojenja upoređuje se sa zahtevima sadržanim u BREF dokumentima (Best Available Techniques Reference Documents), nakon čega se definišu potrebne mere za usklađivanje sa zakonskim obavezama.",

				highlight:
					"Saradnici Centra aktivno prate domaće i evropske propise, učestvuju u radu Tehničkih komisija i bili su angažovani u izradi desetak integrisanih dozvola.",

				referencesTitle: "Postrojenja obuhvaćena IPPC projektima",

				references: [
					"TE Kostolac B – Blokovi B1 i B2, Elektroprivreda Srbije a.d. Beograd",
					"Titan Cementara Kosjerić d.o.o. Kosjerić",
					"Elixir Zorka – Mineralna đubriva d.o.o. Šabac",
					"Impol Seval Valjaonica aluminijuma a.d. Sevojno",
					"Jelen Do d.o.o. Jelen Do",
					"IGM „Mladost“ d.o.o. Leskovac, Ogranak Mala Plana",
					"Yunirisk d.o.o. Beograd",
					"Alumil YU Industry AD Stara Pazova",
					"Farma brojlera Ruklada, KO Rubibreza, opština Lajkovac – „Vindija“ d.o.o. Lajkovac",
					"Farma koka nosilja Kruščić, opština Kula – „Animal Commerce“ d.o.o. Beograd",
				],

				additionalProjectsTitle: "Ostali projekti",

				additionalProjects: [
					"Izrada Plana vršenja monitoringa i Plana mera za efikasno korišćenje energije u okviru zahteva za produženje važenja integrisane dozvole za rad postrojenja za toplo cinkovanje operatera „Metal-Cinkara“ d.o.o. Inđija",
					"Elaborat ispitivanja kvaliteta vazduha, kvaliteta zemljišta i nivoa buke u zoni uticaja budućeg postrojenja za livenje kalajnih anoda u Šapcu",
				],
			},

			biomass: {
				eyebrow: "Naučnoistraživački rad",
				title: "Od otpadne biomase do korisnih materijala",

				paragraphs: [
					"Pored saradnje sa privredom, Centar istražuje nove načine prerade otpadne biomase iz prehrambene industrije i poljoprivrede.",
					"Cilj istraživanja je potpuna valorizacija nusproizvoda i razvoj novih materijala sa primenom u zaštiti životne sredine, poljoprivredi i ishrani.",
				],

				items: [
					"Razvoj biosorbenata za uklanjanje zagađivača iz vode",
					"Razvoj organskih đubriva od biomase nepogodne za ishranu",
					"Razvoj nosača mikroelemenata za suplementaciju i funkcionalnu hranu na bazi biomase pogodne za ishranu",
					"Optimizacija procesa dobijanja biočađi postupkom spore pirolize",
					"Modifikacija dobijenih materijala za specifične namene",
					"Potpuna valorizacija nusproizvoda prehrambene industrije i poljoprivrede",
				],
			},

			projects: {
				eyebrow: "Projekti",
				title: "Istraživački projekti",

				items: [
					{
						organization: "Fond za nauku Republike Srbije",
						code: "WasteBridge7439",
						program: "PRIZMA program",
						period: "2023–2026",
						title:
							"Od otpada do hrane i obogaćivanja zemljišta – smanjenje otpada primenom cirkularne ekonomije u industriji prerade voća i povrća",
						description:
							"Projekat istražuje primenu principa cirkularne ekonomije u industriji prerade voća i povrća. Otpadna biomasa se pretvara u vredne resurse za ishranu i obogaćivanje zemljišta, smanjujući otpad na izvoru.",
					},
					{
						organization:
							"Program bilateralne saradnje „Pavle Savić“ – Srbija i Francuska",
						code: "Bilateralna saradnja",
						program: "Pavle Savić",
						period: "2025–2026",
						title:
							"Unapređenje svojstava materijala na bazi biouglja i proširenje njegove primene za remedijaciju i obogaćivanje zemljišta",
					},
					{
						organization:
							"Program bilateralne saradnje „Pavle Savić“ – Srbija i Francuska",
						code: "Bilateralna saradnja",
						program: "Pavle Savić",
						period: "2023–2024",
						title:
							"Biočađ kao podrška cirkularnoj (bio)ekonomiji – sinteza materijala na bazi lignoceluloznog otpada sa multifunkcionalnom primenom",
						description:
							"Razvoj biočađi iz lignoceluloznog otpada kao multifunkcionalnog materijala za prečišćavanje vode, remedijaciju i obogaćivanje zemljišta.",
					},
					{
						organization: "Fond za inovacionu delatnost Republike Srbije",
						code: "PoC5796",
						program: "Dokaz koncepta",
						period: "2020–2022",
						title:
							"Postupak obogaćivanja tropa cinkom kao održiva strategija u borbi protiv nedostatka mikronutrijenata u ishrani",
					},
					{
						organization: "Fond za inovacionu delatnost Republike Srbije",
						code: "TTP1139",
						program: "Transfer tehnologije",
						period: "2022–2023",
						title:
							"Nastavak PoC projekta kroz fazu industrijskog skaliranja i pripremu postupka za primenu u realnim uslovima prerade",
						description:
							"Projekat je demonstrirao izvodljivost obogaćivanja ostatka iz industrije prerade voća i povrća cinkom kao ekološki prihvatljivog načina suplementacije. U toku je postupak patentiranja dobijenog proizvoda.",
					},
				],
			},

			sidebar: {
				label: "Centar",
				title: "Centar za zaštitu životne sredine",
				mainAreas: "Glavne oblasti",
				areas: [
					"Procene uticaja",
					"IPPC dozvole",
					"Upravljanje otpadom",
					"Monitoring životne sredine",
					"Valorizacija otpadne biomase",
				],
				experience: "Iskustvo",
				studies: "analiziranih studija",
				ippcPermits: "IPPC dozvola",
				organizationLink: "Organizaciona šema",
			},
		},
		metallurgicalTechnologiesCentre: {
			pageHeader: {
				title: "Centar za metalurške tehnologije",
				description:
					"Fundamentalna, razvojna i primenjena istraživanja u oblasti ekstraktivne metalurgije i reciklaže metaličnih sekundarnih sirovina.",
				breadcrumbAbout: "O Institutu",
				breadcrumbOrganization: "Organizacione jedinice",
				breadcrumbCurrent: "Centar za metalurške tehnologije",
			},

			intro: {
				eyebrow: "Delatnost centra",
				title: "Oblasti istraživanja",
				description:
					"Delatnost Centra za metalurške tehnologije obuhvata fundamentalna, razvojna i primenjena istraživanja u oblasti ekstraktivne metalurgije i reciklaže metaličnih sekundarnih sirovina.",
				mainActivities: [
					"Ekstraktivna metalurgija",
					"Reciklaža metaličnih sekundarnih sirovina",
				],
			},

			extractiveMetallurgy: {
				title: "Ekstraktivna metalurgija",
				paragraphs: [
					"Fundamentalna istraživanja obuhvataju fenomene prenosa mase i energije u heterogenim metalurškim sistemima, termodinamičku analizu i izučavanje mehanizama i kinetike procesa na granici faza.",
					"Razvojna i primenjena istraživanja realizuju se kroz razvoj tehnologija i tehničko-tehnoloških rešenja za dobijanje obojenih, retkih i plemenitih metala iz standardnih i nestandardnih primarnih sirovina.",
				],
				developmentActivities: [
					"Nove tehnologije prerade kompleksnih polimetaličnih ruda i koncentrata",
					"Tehnologije prerade međuprodukata metalurgije obojenih metala",
					"Tehnologije dobijanja metalnih i oksidnih prahova",
					"Tehnologije dobijanja soli tehničkog i PA kvaliteta",
				],
				processIntro:
					"Za njihovu uspešnu realizaciju koriste se hidrometalurški i pirometalurški procesi.",
			},

			processes: {
				hydrometallurgical: {
					title: "Hidrometalurški procesi",
					description:
						"Procesi se mogu odvijati pri standardnom i povišenom pritisku, za šta Centar poseduje adekvatnu opremu.",
					items: [
						"Procesi luženja u kiselim sistemima (hloridi, sulfati, nitrati i dr.)",
						"Procesi luženja u alkalnim sistemima (hidroksidi, amonijačne soli i dr.)",
						"Izdvajanje metala iz rastvora (hidroliza, kristalizacija, cementacija)",
					],
				},
				pyrometallurgical: {
					title: "Pirometalurški procesi",
					description:
						"Procesi se realizuju u metalurškim pećima na povišenim temperaturama.",
					items: [
						"Oksidaciono prženje",
						"Redukciono prženje",
						"Disocijacija sulfata i karbonata",
						"Rafinacija metala",
					],
				},
			},

			recycling: {
				title: "Reciklaža sekundarnih sirovina",
				description:
					"Istraživanja obuhvataju razvoj tehnologija i tehničko-tehnoloških rešenja za preradu i izdvajanje korisnih komponenti iz sekundarnih i nestandardnih metaličnih sirovina do metala, legura i metalnih jedinjenja.",
				items: [
					"Prerada međuprodukata metalurgije Pb, Zn, Cu i Al",
					"Prerada Pb i Pb legura (akumulatori i dr.)",
					"Prerada Sn i Sn legura (sunđer, šljaka, mulj)",
					"Prerada Cu i Cu-legura (šljake, brusotine, strugotine)",
					"Prerada Zn i Zn legura (šljake, brusotine, strugotine, muljevi)",
					"Prerada Ni i Ni legura (Ni-Cd akumulatori, muljevi, katalizatori, otpadne elektrode)",
					"Prerada sekundarnih sirovina retkih metala (Mo, V i W)",
				],
			},

			additionalResearch: {
				title: "Ostala istraživanja",
				items: [
					"Razvoj hemijskog i elektrohemijskog postupka za istovremenu demineralizaciju i desulfurizaciju uglja",
					"Razvoj i dizajn metalnih sistema i legura primenom savremenih računarskih i eksperimentalnih metoda",
					"Primena računarske simulacije za procese topljenja i livenja metala, ulivnih sistema i odlivaka",
					"Restoracija degradiranih zemljišta i odabir odgovarajućih biljnih vrsta za sanaciju, geobotanička i biogeohemijska istraživanja u sistemu zemljište–biljka, testiranje inovativnih đubriva za rast i razvoj biljnih vrsta, razvoj funkcionalnih materijala i zemljišnih dodataka iz otpadne biomase",
					"Ekstrakcija metala iz kontaminirane biomase hidrometalurškim postupcima, reciklaža nusproizvoda iz prerade kontaminirane biomase i njihova valorizacija",
					"Razvoj biotehnološkog postupka za valorizaciju metala iz nestandardnih sirovina",
					"Sinteza, karakterizacija i funkcionalizacija inovativnih multifunkcionalnih nanomaterijala",
					"Razvoj fotoaktivnih materijala iz otpadne biomase sa primenom u tretmanu otpadnih voda",
				],
			},

			team: {
				eyebrow: "Tim",
				title: "Saradnici u centru",
				profile: "Profil",

				positions: {
					scientificAdviserAssistant: "Naučni savetnik, pomoćnik direktora",
					scientificAdviser: "Naučni savetnik",
					seniorResearchAssociate: "Viši naučni saradnik",
					researchAssociate: "Naučni saradnik",
					researchAssistant: "Istraživač saradnik",
					researchTrainee: "Istraživač pripravnik",
				},
			},

			sidebar: {
				label: "Centar",
				title: "Centar za metalurške tehnologije",
				mainAreas: "Glavne oblasti",
				areas: [
					"Ekstraktivna metalurgija",
					"Reciklaža metaličnih sekundarnih sirovina",
				],
				collaboratorsCount: "Broj saradnika",
				organizationLink: "Organizaciona šema",
			},
		},
		inorganicTechnologiesCentre: {
			pageHeader: {
				title: "Centar za neorganske tehnologije",
				description:
					"Razvoj i unapređenje savremenih neorganskih materijala sa posebnim fokusom na staklaste, keramičke i staklo-keramičke materijale.",
				breadcrumbAbout: "O Institutu",
				breadcrumbOrganization: "Organizaciona šema",
				breadcrumbCurrent: "Centar za neorganske tehnologije",
			},

			intro: {
				eyebrow: "Delatnost centra",
				title: "Savremeni neorganski materijali",
				paragraphs: [
					"Centar za neorganske tehnologije bavi se razvojem i unapređenjem savremenih neorganskih materijala, sa posebnim fokusom na staklaste, keramičke i staklo-keramičke materijale.",
					"Kroz interdisciplinarni pristup povezana su fundamentalna istraživanja i primenjena rešenja u oblasti sinteze, obrade i karakterizacije materijala.",
					"Posebna pažnja posvećena je održivim tehnologijama, korišćenju sekundarnih sirovina i razvoju materijala sa širokim potencijalom primene u industriji, građevinarstvu, poljoprivredi, zaštiti životne sredine i biomedicini.",
				],
			},

			research: {
				eyebrow: "Istraživanja",
				title: "Glavne istraživačke oblasti",
				areas: [
					{
						title: "Bioaktivna keramika",
						text: "Sinteza i ispitivanje bioaktivne keramike na bazi hidroksiapatita i kompozita hidroksiapatit/bioaktivno staklo, sa mogućnošću kontrolisane supstitucije specifičnim jonima, za potencijalnu primenu u regeneraciji koštanog tkiva i kao nosača aktivnih komponenata.",
					},
					{
						title: "Bioaktivna fosfatna stakla",
						text: "Proučavanje, sinteza i ispitivanje bioaktivnih fosfatnih stakala i fosfatnih staklo-keramičkih materijala kao neorganskih biomaterijala za primenu u regenerativnoj medicini i povezanim biomedicinskim oblastima.",
					},
					{
						title: "Staklasta eko-đubriva",
						text: "Sinteza i karakterizacija staklastih eko-đubriva sa kontrolisanim oslobađanjem hranljivih elemenata na bazi fosfatnih stakala, uz optimizaciju sastava i ispitivanje njihovog uticaja na poljoprivredne kulture i održivo upravljanje zemljištem.",
					},
					{
						title: "Staklene pene",
						text: "Sinteza i karakterizacija staklenih pena na bazi sekundarnih sirovina, sa ciljem dobijanja visokoporoznih staklastih materijala sa dobrim termoizolacionim svojstvima i primenom principa cirkularne ekonomije.",
					},
				],
			},

			characterization: {
				title: "Karakterizacija materijala",
				paragraphs: [
					"U okviru Centra moguće je sprovesti detaljnu karakterizaciju keramičkih, staklastih i staklo-keramičkih materijala.",
					"Primena analitičkih metoda omogućava pouzdanu procenu kvaliteta materijala, optimizaciju procesa sinteze i razvoj materijala prilagođenih različitim tehnološkim i industrijskim primenama.",
				],
				items: [
					"Ispitivanje strukture i mikrostrukture materijala",
					"Određivanje faznog sastava",
					"Ispitivanje termičkih svojstava",
					"Ispitivanje mehaničkih svojstava",
					"Ispitivanje funkcionalnih svojstava",
					"Optimizacija procesa sinteze",
					"Procena kvaliteta materijala za različite tehnološke i industrijske primene",
				],
			},

			cooperation: {
				title: "Saradnja i mentorski rad",
				paragraphs: [
					"Centar ostvaruje saradnju sa univerzitetima i istraživačkim institucijama u zemlji i inostranstvu.",
					"Jedan od značajnih pravaca razvoja Centra je diseminacija naučnih rezultata u akademskoj i srednjoškolskoj zajednici, kroz saradnju sa master studentima, doktorandima i učenicima srednjih škola, uz razvijen mentorski rad.",
				],
			},

			sidebar: {
				label: "Centar",
				title: "Centar za neorganske tehnologije",
				focusTitle: "Fokus",
				focusItems: [
					"Keramički materijali",
					"Staklasti materijali",
					"Staklo-keramički materijali",
					"Biomaterijali",
					"Održivi materijali",
				],
				applicationsTitle: "Primene",
				applications:
					"Industrija, građevinarstvo, poljoprivreda, zaštita životne sredine i biomedicina.",
				organizationLink: "Organizaciona šema",
			},
		},
		newMaterialsCentre: {
			laboratory: {
				eyebrow: "Laboratorija Centra",
				title: "Laboratorija za fizičko-hemijska ispitivanja",

				intro: [
					"Istraživanja u Laboratoriji za fizičko-hemijska ispitivanja Instituta za tehnologiju nuklearnih i drugih mineralnih sirovina – ITNMS usmerena su na ispitivanje prirodnih nemetaličnih mineralnih sirovina, kao što su prirodni zeoliti (klinoptilolit i filipsit) i gline, uključujući bentonit – montmorilonit i kaolin – kaolinit.",

					"Posebna pažnja posvećena je modifikaciji ovih mineralnih sirovina u cilju dobijanja materijala za uklanjanje različitih zagađivača iz voda. Ispituje se uklanjanje katjona toksičnih metala, kao što su olovo, kadmijum, bakar i cink, kao i organskih molekula i farmaceutski aktivnih supstanci poput diklofenak-natrijuma, ibuprofena i ketoprofena.",

					"Istraživanja obuhvataju i primenu ovih materijala u stočnoj hrani, naročito za vezivanje mikotoksina kao što su aflatoksin B1, zearalenon i ohratoksin A.",

					"U novije vreme istraživanja su proširena na ispitivanje prirodnih zeolita i glina kao potencijalnih nosača farmaceutski aktivnih supstanci. Ovi materijali omogućavaju formiranje homogenih kompleksa sa lekovima i imaju potencijal za kontrolisano oslobađanje aktivnih supstanci.",
				],

				researchAreas: {
					title: "Oblasti istraživanja",
					items: [
						"Prirodni zeoliti i gline",
						"Modifikovani mineralni materijali",
						"Adsorpcija zagađivača iz voda",
						"Uklanjanje toksičnih metala",
						"Uklanjanje farmaceutskih supstanci",
						"Adsorpcija mikotoksina",
						"Nosači farmaceutski aktivnih supstanci",
						"Kontrolisano oslobađanje lekova",
					],
				},

				characterization: {
					title: "Karakterizacija materijala",
					description:
						"U laboratoriji se vrši karakterizacija polaznih mineralnih sirovina i dobijenih materijala primenom različitih instrumentalnih i fizičko-hemijskih metoda.",
					methods: [
						"Termalna analiza (DTA/TGA)",
						"Infracrvena spektroskopija (FTIR)",
						"Određivanje kapaciteta katjonske izmene",
						"Određivanje hemijskog sastava",
						"XRD analiza",
						"SEM/EDS analiza",
						"Optička mikroskopija",
						"Određivanje zeta potencijala",
					],
					conclusion:
						"Kombinacijom ovih metoda omogućena je kompletna karakterizacija polaznih mineralnih sirovina i dobijenih proizvoda.",
				},

				pollutants: {
					title: "Analiza zagađivača",
					description:
						"Koncentracije zagađivača pre i nakon procesa adsorpcije određuju se različitim instrumentalnim metodama.",

					methods: {
						hplc: {
							title: "HPLC",
							description:
								"Tečna hromatografija sa fluorescentnim i UV detektorom koristi se za određivanje mikotoksina i farmaceutski aktivnih supstanci.",
						},
						uvvis: {
							title: "UV/Vis spektrofotometrija",
							description:
								"Koristi se za određivanje koncentracija farmaceutski aktivnih supstanci.",
						},
						aas: {
							title: "AAS",
							description:
								"Koncentracije metala određuju se metodom atomske apsorpcione spektrometrije u Laboratoriji za hemijska ispitivanja.",
						},
					},
				},

				team: {
					eyebrow: "Istraživački tim",
					title: "Saradnici u laboratoriji",

					titles: {
						scientificAdviser: "naučni savetnik",
						researchAssociate: "naučni saradnik",
						researchAssistant: "istraživač saradnik",
					},
				},
			},
		},
		mineralRawMaterialsCentre: {
			pageHeader: {
				title: "Centar za pripremu mineralnih sirovina",
				description:
					"Istraživanje i razvoj savremenih tehnologija prerade, koncentracije i valorizacije mineralnih i sekundarnih sirovina.",
				breadcrumbAbout: "O Institutu",
				breadcrumbCentres: "Centri",
				breadcrumbCurrent: "Centar za pripremu mineralnih sirovina",
			},

			intro:
				"Centar za pripremu mineralnih sirovina Instituta za tehnologiju nuklearnih i drugih mineralnih sirovina bavi se istraživanjem, razvojem i primenom savremenih tehnologija za preradu mineralnih sirovina, sa ciljem efikasnog izdvajanja korisnih komponenti, povećanja iskorišćenja resursa i stvaranja proizvoda odgovarajućeg kvaliteta za različite industrijske namene.",

			technology: {
				title: "Od karakterizacije do tehnološkog rešenja",
				paragraphs: [
					"Dugogodišnje iskustvo Centra obuhvata metalične i nemetalične mineralne sirovine, kompleksne i siromašne rude, kao i sekundarne i tehnogene sirovine.",
					"Istraživanja obuhvataju kompletan tehnološki put – od detaljne karakterizacije sirovine i ispitivanja njenog ponašanja u procesu, preko usitnjavanja, mlevenja i klasiranja, do primene različitih metoda koncentracije i separacije.",
					"Na osnovu laboratorijskih i poluindustrijskih ispitivanja razvijaju se i optimizuju tehnološke šeme prilagođene specifičnim karakteristikama svake sirovine.",
				],
			},

			research: {
				title: "Oblasti istraživanja",

				areas: {
					characterization: {
						title: "Karakterizacija mineralnih sirovina",
						description:
							"Detaljno ispitivanje karakteristika mineralnih sirovina i njihovog ponašanja tokom procesa prerade predstavlja osnovu za izbor i razvoj odgovarajućih tehnoloških postupaka.",
					},
					crushing: {
						title: "Usitnjavanje, mlevenje i klasiranje",
						description:
							"Laboratorijska i poluindustrijska ispitivanja procesa pripreme materijala kroz usitnjavanje, mlevenje i klasiranje u cilju postizanja optimalnih uslova za dalje faze prerade.",
					},
					gravity: {
						title: "Gravitaciona separacija",
						description:
							"Razvoj i optimizacija procesa izdvajanja korisnih komponenti na osnovu razlika u gustini mineralnih faza.",
					},
					magnetic: {
						title: "Magnetna separacija",
						description:
							"Ispitivanje i razvoj tehnoloških postupaka za izdvajanje mineralnih komponenti primenom njihovih različitih magnetnih svojstava.",
					},
					flotation: {
						title: "Flotacija",
						description:
							"Razvoj i optimizacija flotacijskih procesa za koncentraciju korisnih minerala iz kompleksnih, siromašnih i drugih mineralnih sirovina.",
					},
					secondary: {
						title: "Sekundarne i tehnogene sirovine",
						description:
							"Razvoj procesa za ponovno izdvajanje vrednih komponenti iz industrijskih ostataka, jalovina i drugih materijala koji su ranije smatrani otpadom.",
					},
				},
			},

			poorResources: {
				title: "Valorizacija siromašnih i nedovoljno iskorišćenih resursa",
				paragraph:
					"Posebna oblast rada Centra predstavlja valorizacija siromašnih, kompleksnih i do sada nedovoljno iskorišćenih mineralnih resursa, kao i prerada rudarskih i industrijskih ostataka.",
				highlight:
					"Razvojem tehnologija za izdvajanje korisnih komponenti iz jalovina, tehnogenih sirovina i drugih materijala koji su ranije smatrani otpadom, istraživanja Centra doprinose smanjenju gubitaka resursa, smanjenju količine otpada i primeni principa cirkularne ekonomije.",
			},

			criticalResources: {
				title: "Kritične i strateške mineralne sirovine",
				paragraphs: [
					"Savremeni pravac razvoja Centra usmeren je i na kritične i strateške mineralne sirovine, reciklažu i ponovnu valorizaciju sekundarnih sirovina, kao i na razvoj energetski i ekološki efikasnijih procesa prerade.",
					"Kombinovanjem znanja iz mineralogije, geologije, hemije i procesnog inženjerstva, Centar pristupa svakom materijalu kao potencijalnom izvoru vrednih komponenti.",
				],
			},

			industry: {
				title: "Saradnja sa industrijom",
				paragraphs: [
					"Važna prednost Centra je mogućnost povezivanja naučnoistraživačkog rada sa konkretnim potrebama industrije.",
					"Od laboratorijskih ispitivanja i izbora optimalnih tehnoloških postupaka do razvoja i provere tehnoloških rešenja, Centar pruža podršku u rešavanju problema vezanih za preradu mineralnih sirovina i valorizaciju sekundarnih resursa.",
				],

				steps: [
					{
						title: "Karakterizacija",
						description: "Ispitivanje sastava i svojstava sirovine.",
					},
					{
						title: "Razvoj procesa",
						description: "Izbor i optimizacija tehnološkog postupka.",
					},
					{
						title: "Provera rešenja",
						description: "Laboratorijska i poluindustrijska ispitivanja.",
					},
				],
			},

			sustainability: {
				title: "Održivo korišćenje mineralnih resursa",
				description:
					"Kroz savremena istraživanja i primenu multidisciplinarnog pristupa, Centar za pripremu mineralnih sirovina doprinosi efikasnijem i održivijem korišćenju mineralnih resursa i razvoju tehnologija koje odgovaraju zahtevima savremene rudarske, metalurške i prerađivačke industrije.",
			},

			members: {
				title: "Članovi Centra",
			},

			sidebar: {
				mainAreas: "Glavne oblasti",
				areas: [
					"Prerada mineralnih sirovina",
					"Koncentracija i separacija",
					"Kompleksne i siromašne rude",
					"Sekundarne i tehnogene sirovine",
					"Kritične mineralne sirovine",
					"Reciklaža i cirkularna ekonomija",
				],

				recyclingTitle: "Od otpada do resursa",
				recyclingDescription:
					"Jedan od važnih pravaca rada Centra je ponovno izdvajanje korisnih komponenti iz jalovina, industrijskih ostataka i sekundarnih sirovina.",
			},
		},
		scientificCouncilRecords: {
			pageHeader: {
				title: "Zapisnici Naučnog veća",
				description:
					"Pregled zapisnika sa sednica Naučnog veća Instituta, razvrstanih prema godini održavanja.",
				breadcrumbAbout: "O institutu",
				breadcrumbCouncil: "Naučno veće",
				breadcrumbCurrent: "Zapisnici",
			},

			archive: {
				eyebrow: "Arhiva",
				title: "Godine",
				ariaLabel: "Godine zapisnika",
			},

			records: {
				eyebrow: "Dokumentacija",
				title: "Objavljeni zapisnici",
				searchLabel: "Pretražite zapisnike",
				searchPlaceholder: "Pretražite zapisnike",
				openDoc: "Otvori DOC",
				noResults: "Nema zapisnika koji odgovaraju pretrazi.",
			},
		},
		scientificCouncilMembers: {
			pageHeader: {
				title: "Sastav Naučnog veća",
				description:
					"Pregled predsednika, zamenika i članova Naučnog veća Instituta.",
				breadcrumbAbout: "O institutu",
				breadcrumbCouncil: "Naučno veće",
				breadcrumbCurrent: "Sastav",
			},

			leadershipSection: {
				eyebrow: "Rukovodstvo Naučnog veća",
				title: "Predsednik i zamenik",
			},

			membersSection: {
				eyebrow: "Članovi",
				title: "Članovi Naučnog veća",
				totalMembers: "Ukupno članova",
			},

			roles: {
				president: "Predsednik Naučnog veća",
				deputyPresident: "Zamenik predsednika",
			},

			scientificTitles: {
				scientificAdviser: "Naučni savetnik",
				seniorResearchAssociate: "Viši naučni saradnik",
				researchAssociate: "Naučni saradnik",
			},

			table: {
				fullName: "Ime i prezime",
				scientificTitle: "Naučno zvanje",
				profile: "Profil",
			},

			viewProfile: "Pogledajte profil →",
			openProfile: "Otvori profil",
			notAvailable: "Nije dostupan",
		},
		scientificCouncil: {
			pageHeader: {
				title: "Naučno veće",
				description:
					"Informacije o sastavu, radu i dokumentima Naučnog veća Instituta.",
				breadcrumbAbout: "O institutu",
				breadcrumbCurrent: "Naučno veće",
			},

			cards: {
				members: {
					title: "Sastav Naučnog veća",
					description:
						"Pregled predsednika, zamenika i članova Naučnog veća Instituta.",
				},
				minutes: {
					title: "Zapisnici",
					description:
						"Zapisnici sa sednica Naučnog veća, razvrstani prema godini i datumu održavanja.",
				},
				openPage: "Otvorite stranicu",
			},

			role: {
				eyebrow: "Naučno telo Instituta",
				title: "Uloga Naučnog veća",
				paragraph1:
					"Naučno veće je stručno i naučno telo Instituta koje razmatra pitanja od značaja za naučnoistraživački rad, razvoj istraživačkih oblasti i stručno napredovanje zaposlenih.",
				paragraph2:
					"Na ovoj stranici dostupni su podaci o članovima Naučnog veća, kao i zapisnici i druga javno dostupna dokumenta vezana za njegov rad.",
			},

			documents: {
				title: "Dokumenta Naučnog veća",
				description:
					"Pored zapisnika sa sednica, druga relevantna akta i dokumenta dostupna su u centralnoj sekciji Dokumenta.",
				button: "Sva dokumenta",
			},
		},
		leadership: {
			pageHeader: {
				title: "Rukovodstvo",
				description:
					"Pregled rukovodstva Instituta i odgovornih lica zaduženih za upravljanje naučnim, stručnim i administrativnim poslovima.",
				breadcrumbAbout: "O institutu",
				breadcrumbCurrent: "Rukovodstvo",
			},

			directorSection: {
				eyebrow: "Direktor Instituta",
				title: "Upravljanje i razvoj Instituta",
				description:
					"Direktor Instituta za tehnologiju nuklearnih i drugih mineralnih sirovina",
				viewProfile: "Pogledajte profil",
			},

			otherMembersSection: {
				eyebrow: "Ostali članovi rukovodstva",
				title: "Stručna i operativna podrška upravljanju",
			},

			positions: {
				director: "Direktor Instituta",
				assistantDirector: "Pomoćnik direktora",
			},

			scientificTitles: {
				scientificAdviser: "Naučni savetnik",
			},

			profile: "Profil",
		},
		organization: {
			pageHeader: {
				title: "Organizaciona šema",
				description:
					"Organizaciona struktura Instituta za tehnologiju nuklearnih i drugih mineralnih sirovina.",
				breadcrumbAbout: "O Institutu",
				breadcrumbCurrent: "Organizaciona šema",
			},

			labels: {
				management: "Rukovodstvo",
				governance: "Organi upravljanja",
				board: "Upravni odbor",
				service: "Služba",
				serviceHead: "Šef službe",
				moreInformation: "Više informacija",
				noData: "Podatak će biti naknadno unet",
				sharedServices: "Zajedničke službe Instituta",
				telephone: "Tel",
				mobile: "Mob",
			},

			director: {
				title: "Direktor Instituta",
				scientificTitle: "naučni savetnik",
				description:
					"Direktor Instituta za tehnologiju nuklearnih i drugih mineralnih sirovina",
			},

			assistants: {
				mineral: {
					title: "Pomoćnik direktora",
					scientificTitle: "naučni savetnik",
					description:
						"Pomoćnik direktora za pripremu mineralnih sirovina i neorgansku tehnologiju",
				},

				metallurgy: {
					title: "Pomoćnik direktora",
					scientificTitle: "Naučni savetnik",
					description:
						"Pomoćnik direktora za metalurške tehnologije i zaštitu životne sredine.",
				},

				science: {
					title: "Pomoćnik direktora",
					description:
						"Pomoćnik direktora za nauku, razvoj i međunarodnu saradnju",
				},
			},

			sectors: {
				mineral: {
					title: "Sektor",
					subtitle: "Za pripremu mineralnih sirovina i neorgansku tehnologiju",
				},

				metallurgy: {
					title: "Sektor",
					subtitle: "Za metalurške tehnologije i zaštitu životne sredine",
				},
			},

			centres: {
				mineralPreparation: {
					title: "Centar",
					subtitle: "Za pripremu mineralnih sirovina",
				},

				newMaterials: {
					title: "Centar",
					subtitle: "Za razvoj novih materijala",
				},

				inorganic: {
					title: "Centar",
					subtitle: "Za neorganske tehnologije",
				},

				metallurgy: {
					title: "Centar",
					subtitle: "Za metalurške tehnologije",
				},

				environment: {
					title: "Centar",
					subtitle: "Za zaštitu životne sredine",
				},

				production: {
					title: "Centar",
					subtitle: "Za proizvodnju",
				},

				centralLaboratory: {
					title: "Centralna laboratorija za ispitivanja",
					subtitle: "",
				},
			},

			services: {
				economic: {
					title: "Za ekonomske i finansijske poslove",
					professionalTitle: "diplomirani ekonomista",
				},

				administrative: {
					title: "Za administrativne, opšte i poslove tehničkog održavanja",
					professionalTitle: "diplomirani pravnik",
				},
			},

			boardMembers: {
				djordjeNikolic: {
					title: "prof. dr",
					description:
						"Redovni profesor, Tehnički fakultet u Boru, Univerzitet u Beogradu",
					role: "Predsednik UO ITNMS-a",
				},

				milicaNicetin: {
					title: "dr",
					description:
						"Viši naučni saradnik, Tehnološki fakultet Novi Sad, Univerzitet u Novom Sadu",
				},

				slavkoDimovic: {
					title: "dr",
					description:
						'Naučni savetnik, Institut za nuklearne nauke "Vinča" – Institut od nacionalnog značaja za Republiku Srbiju',
				},

				milosMladenovic: {
					title: "dipl. inž.",
					description: "JP „Nuklearni objekti Srbije“",
				},

				aleksandraDakovic: {
					title: "dr",
					description:
						"Naučni savetnik, Institut za tehnologiju nuklearnih i drugih mineralnih sirovina, Beograd",
					role: "Zamenik predsednika UO ITNMS-a",
				},

				branislavMarkovic: {
					title: "dr",
					description:
						"Naučni savetnik, Institut za tehnologiju nuklearnih i drugih mineralnih sirovina, Beograd",
				},

				vladimirJovanovic: {
					title: "dr",
					description:
						"Viši naučni saradnik, Institut za tehnologiju nuklearnih i drugih mineralnih sirovina, Beograd",
				},
			},
		},
		history: {
			pageHeader: {
				title: "Istorijat",
				description:
					"Razvoj Instituta, najvažnije etape njegovog rada i doprinos nauci, tehnologiji i industriji.",
				breadcrumbAbout: "O institutu",
				breadcrumbCurrent: "Istorijat",
			},

			intro: {
				eyebrow: "Razvoj Instituta",
				title: "Decenije naučnog, stručnog i tehnološkog razvoja",
				paragraph1:
					"Razvoj ITNMS-a obeležen je kontinuitetom naučnoistraživačkog rada, proširivanjem stručnih oblasti i unapređenjem laboratorijskih i tehnoloških kapaciteta.",
				paragraph2:
					"U nastavku su hronološki predstavljene ključne etape koje su oblikovale organizaciju, delatnosti i današnju ulogu Instituta.",
				imageAlt: "Arhivska fotografija zgrade Instituta",
				imageCaption:
					"Arhivska fotografija Instituta slikana juna 1948. godine.",
			},

			timeline: {
				eyebrow: "Ključne etape",
				title: "Institut kroz vreme",
				description:
					"Najvažniji događaji i razvojne faze izdvojeni iz zvaničnog istorijata Instituta.",

				items: [
					{
						year: "1948.",
						title: "Osnivanje Instituta",
						description:
							"Uredbom Vlade FNRJ osnovana je institucija iz koje će se kasnije razviti današnji ITNMS.",
					},
					{
						year: "1955.",
						title: "Definisanje delatnosti",
						description:
							"Institut dobija naziv Institut za tehnologiju nuklearnih mineralnih sirovina i usmerava rad na tehnološka ispitivanja i istraživanje mineralnih sirovina.",
					},
					{
						year: "1958.",
						title: "Poseta Nilsa Bora ITNMS-u",
						description:
							"Jedan od najznačajnijih fizičara 20. veka, nobelovac Nils Bor (Niels Bohr), posetio je Institut 1958. godine. Njegova poseta predstavlja značajan događaj u ranoj istoriji ITNMS-a i svedoči o međunarodnom naučnom značaju Instituta već u prvim godinama njegovog razvoja.",
					},
					{
						year: "1966.",
						title: "Formiranje ITNMS-a",
						description:
							"Podelom Zavoda za nuklearne sirovine formiran je Institut za tehnologiju nuklearnih i drugih mineralnih sirovina.",
					},
					{
						year: "1968.",
						title: "Proširenje oblasti rada",
						description:
							"Institut se okreće direktnoj saradnji sa privredom i proširuje delatnost na nemetalične sirovine, obojene i retke metale, zaštitu životne sredine, inženjering i konsalting.",
					},
					{
						year: "1991.",
						title: "Status naučnog instituta",
						description:
							"ITNMS se registruje kao jedinstvena naučnoistraživačka organizacija u statusu naučnog instituta.",
					},
					{
						year: "1994.",
						title: "Naučna državna ustanova",
						description:
							"Institut je registrovan kao naučna državna ustanova, u skladu sa Zakonom o naučnoistraživačkom radu.",
					},
					{
						year: "1999.",
						title: "Upis u sudski registar",
						description:
							"ITNMS je upisan u sudski registar, uz kasnije proširenje delatnosti 2003. godine.",
					},
					{
						year: "2007.",
						title: "Prva akreditacija",
						description:
							"Institut je akreditovan za obavljanje naučnoistraživačke delatnosti od opšteg interesa.",
					},
					{
						year: "2016.",
						title: "Obnova akreditacije",
						description:
							"ITNMS uspešno obnavlja akreditaciju i nastavlja razvoj naučne, istraživačke i stručne delatnosti.",
					},
				],
			},

			officialHistory: {
				eyebrow: "Zvanični istorijat",
				title: "Istorijat Instituta",

				paragraphs: [
					"Institut za tehnologiju nuklearnih i drugih mineralnih sirovina osnovan je 1948. god. Uredbom Vlade FNRJ. Pomenutom Uredbom od 27. marta 1948. god. osnovana je Uprava za koordinaciju rada naučnih instituta, pri Predsedništvu iste vlade. Iza ovog uopštenog naziva nije se moglo naslutiti da je osnovni cilj Uprave razvoj nuklearne tehnologije u našoj zemlji. U oktobru 1952. god. Uprava se seli u ulicu Franše d'Epere-a 86 (gde se ITNMS i danas nalazi), istovremeno, na osnovu nove uredbe, Uprava menja naziv u Uprava za rudarska istraživanja i rudarske studije. Sa preseljenjem, Upravi su pripojena dva instituta koja su radila u zgradi u Ul. Franše d'Epere-a: Savezni institut za metalurgiju (prenet u nadležnost Vlade NR Srbije 1951. god.) i Naučnoistraživački institut Ministarstva industrije NR Srbije. U aprilu 1953. god. Uprava menja naziv u Zavod za geološko-rudarska i tehnološka istraživanja.",

					"Juna 1955. god. Savezno izvršno veće ukida Zavod i donosi Rešenje o osnivanju Instituta za tehnologiju nuklearnih sirovina. Rešenjem se utvrđuje da je zadatak Instituta vršenje tehnoloških ispitivanja i istraživanja mineralnih, prvenstveno nuklearnih sirovina. Time se jasno definišu strogo namenska istraživanja na izdvajanju urana iz domaćih mineralnih i nekonvencionalnih sirovina, dobijanje nuklearno čistih soli i jedinjenja uranijuma pogodnih za dalju preradu, kao i razvoj reaktorskih materijala. Zahvaljujući zamahu geološko-rudarskih istraživanja, Institut je bio nosilac istraživanja koncentracije i prerade ruda obojenih, plemenitih i retkih metala.",

					"Dalje transformacije u poslovanju odigravaju se od 1961. do 1966. god. Uredbom iz 1961. god. formira se Zavod za nuklearne sirovine, čime se prvi put u našoj javnosti pojavljuje reč nuklearni kao delatnost, do tada strogo čuvana.",

					"Najzad u januaru 1966. god. Zavod za nuklearne sirovine se deli u dva dela i jasno se profiliše Institut za tehnologiju nuklearnih i drugih mineralnih sirovina. Rasformiranjem Savezne komisije za nuklearnu energiju (1968. god.) praktično se odustaje od zajedničkog nuklearnog programa u zemlji, što zbog prestanka finansiranja dovodi do ozbiljnih potresa u Institutu. Pravo osnivača preuzima Izvršno veće SR Srbije. Novonastale okolnosti dovode do nove programske koncepcije koja se bazira na uspostavljanju direktne saradnje sa privredom, proširenju delatnosti u oblast nemetaličnih sirovina, obojenih i retkih metala, zaštite životne sredine, inženjerizaciji tehničko-tehnoloških rešenja, konsaltinga i inženjeringa. Poseban napor je uložen u očuvanju primata u domenu analitičke hemije i karakterizacije uopšte.",

					"U periodu 1970–1985. godine izvršen je čitav niz transformacija unutrašnje organizacije, što kao posledica izmene zakonskih propisa, što u traganju za efikasnijom organizacijom istraživačkog rada. Posle transformacije na četiri osnovne organizacije udruženog rada iz 1977. god. u 1985. god. formirane su dve celine. Te dve celine su bile OOUR Institut za pripremu mineralnih sirovina i OOUR Institut za metalurgiju i tehnologiju.",

					"1991. god. ITNMS se registruje kao jedinstvena naučnoistraživačka organizacija u statusu naučnog instituta. Prema Zakonu o naučnoistraživačkom radu iz 1993. god. Institut je registrovan u statusu naučne državne ustanove (Rešenje Ministarstva za nauku i tehnologiju Republike Srbije br. 660-2-199/93 od 1.4.1994. god.).",

					"U skladu sa Zakonom o klasifikaciji delatnosti i registru jedinica razvrstavanja ITNMS je upisan u sudski registar, registarskog uloška br. 5-329-00, od 10.2.1999. sa proširenjem delatnosti od 27.05.2003.",

					"ITNMS je akreditovan 12.03.2007. godine od strane Ministarstva nauke i zaštite životne sredine, Rešenjem o ispunjenosti uslova za obavljanje naučnoistraživačke delatnosti od opšteg interesa, br. 110-00-34/24.",

					"ITNMS je reakreditovana naučnoistraživačka organizacija – istraživačko-razvojni institut, shodno Rešenju Ministra prosvete, nauke i tehnološkog razvoja br. 612-00-00303/2013-17 od 11.02.2013. kojim je utvrđeno da ITNMS ispunjava uslove propisane zakonom da obavlja naučnoistraživačku delatnost radi ostvarivanja opšteg interesa, a na osnovu pozitivne Odluke Odbora za akreditaciju naučnoistraživačkih organizacija br. 640-01-1/13 od 14.06.2011. godine.",

					"ITNMS je reakreditovana naučnoistraživačka organizacija – istraživačko-razvojni institut, shodno Rešenju Ministra prosvete, nauke i tehnološkog razvoja br. 660-01-019/2016-14 od 03.02.2016. kojim je utvrđeno da ITNMS ispunjava uslove propisane zakonom da obavlja naučnoistraživačku delatnost radi ostvarivanja opšteg interesa, a na osnovu pozitivne Odluke Odbora za akreditaciju naučnoistraživačkih organizacija br. 660-01-00013/18 od 12.01.2016. godine.",
				],

				accreditationPage: "Akreditacija, strana",
				downloadImage: "Preuzmi sliku ovde",
			},

			related: {
				title: "Povezane stranice",
				organization: "Organizacija",
				activities: "Delatnosti i oblasti rada",
				researchers: "Istraživači",
			},

			gallery: {
				eyebrow: "Arhiva",
				title: "Fotografije iz istorije Instituta",

				images: {
					institute: {
						alt: "Institut danas",
						caption:
							"Institut danas – savremena naučnoistraživačka ustanova usmerena ka razvoju i primeni novih tehnologija.",
					},
					fountain: {
						alt: "Fontana u dvorištu Instituta",
						caption:
							"Fontana u dvorištu Instituta – prepoznatljiv deo ambijenta ITNMS-a.",
					},
					order: {
						alt: "Orden Instituta",
						caption:
							"Orden dodeljen Institutu za doprinos razvoju nauke, tehnologije i privrede.",
					},
				},
			},
		},
		footer: {
			instituteName:
				"Institut za tehnologiju nuklearnih i drugih mineralnih sirovina",

			description:
				"Naučnoistraživački rad, razvoj tehnologija i stručne usluge u oblasti mineralnih sirovina, materijala, metalurgije i zaštite životne sredine.",

			repository: "Digitalni repozitorijum",

			quickLinksTitle: "Brzi linkovi",

			quickLinks: {
				about: "O institutu",
				researchers: "Istraživači",
				projects: "Naučni projekti",
				services: "Usluge",
				laboratories: "Laboratorije",
			},

			documentsTitle: "Dokumenta i kvalitet",

			documents: {
				acts: "Akta Instituta",
				reports: "Izveštaji",
				accreditations: "Akreditacije",
				scientificCouncil: "Dokumenta Naučnog veća",
			},

			contactTitle: "Kontakt",
			allContactDetails: "Svi kontakt podaci",

			address: {
				street: "Bulevar Franše d’Eperea 86",
				city: "11000 Beograd, Srbija",
			},

			copyright: "Sva prava zadržana.",

			privacyPolicy: "Politika privatnosti",
			cookiePolicy: "Politika kolačića",
			accessibility: "Pristupačnost",

			homeAriaLabel: "ITNMS početna stranica",
		},
		about: {
			pageHeader: {
				title: "O institutu",
				description:
					"Institut za tehnologiju nuklearnih i drugih mineralnih sirovina bavi se naučnoistraživačkim radom, razvojem tehnologija i stručnim uslugama za potrebe nauke i industrije.",
				breadcrumb: "O institutu",
			},

			intro: {
				eyebrow: "O ITNMS-u",
				title: "Naučnoistraživačka institucija sa dugom tradicijom",
				paragraph1:
					"ITNMS razvija znanja, metode i tehnološka rešenja u oblastima mineralnih sirovina, materijala, metalurgije, hemijskog inženjerstva i zaštite životne sredine.",
				paragraph2:
					"Institut povezuje fundamentalna i primenjena istraživanja sa potrebama privrede, državnih institucija i domaćih i međunarodnih partnera.",
				readMore: "Pročitajte više o Institutu",
				imageAlt: "Zgrada Instituta ITNMS",
			},

			structure: {
				eyebrow: "Struktura Instituta",
				title: "Informacije o radu i organizaciji",
				description:
					"Izaberite oblast da biste saznali više o istorijatu, organizaciji, rukovodstvu i naučnim telima Instituta.",
				openPage: "Otvorite stranicu →",

				sections: {
					about: {
						title: "O ITNMS-u",
						description:
							"Osnovne informacije o Institutu, njegovoj ulozi, misiji i naučnoistraživačkim delatnostima.",
					},

					history: {
						title: "Istorijat",
						description:
							"Razvoj Instituta od osnivanja do danas i najvažnije etape njegovog rada.",
					},

					organization: {
						title: "Organizacija",
						description:
							"Organizaciona šema, sektori, laboratorije i druge organizacione jedinice.",
					},

					management: {
						title: "Rukovodstvo",
						description:
							"Pregled rukovodstva Instituta i odgovornih lica organizacionih jedinica.",
					},

					scientificCouncil: {
						title: "Naučno veće",
						description:
							"Sastav Naučnog veća, zapisnici sa sednica i prateća dokumentacija.",
					},
				},
			},

			researchersCta: {
				title: "Upoznajte istraživačke timove Instituta",
				description:
					"Pogledajte profile zaposlenih, naučna zvanja, oblasti interesovanja i projekte na kojima učestvuju.",
				button: "Istraživači",
			},
		},
		aboutItnms: {
			pageHeader: {
				title: "O ITNMS-u",
				description:
					"Osnovne informacije o Institutu, njegovoj ulozi, delatnostima i načinu povezivanja naučnih istraživanja sa potrebama privrede.",
				breadcrumbAbout: "O institutu",
				breadcrumbCurrent: "O ITNMS-u",
			},

			intro: {
				eyebrow: "Institut",
				title: "Nauka i tehnologija u službi razvoja",
				paragraph1:
					"Institut za tehnologiju nuklearnih i drugih mineralnih sirovina je naučnoistraživačka organizacija koja se bavi razvojem i primenom znanja u oblastima mineralnih sirovina, materijala, metalurgije, hemijskog inženjerstva i zaštite životne sredine.",
				paragraph2:
					"Delatnost Instituta obuhvata fundamentalna i primenjena istraživanja, razvoj tehnoloških postupaka, laboratorijska ispitivanja, stručne studije i saradnju sa privredom i drugim naučnoistraživačkim organizacijama.",
				paragraph3:
					"Stručni timovi Instituta povezuju naučne rezultate sa konkretnim industrijskim i društvenim potrebama, sa ciljem razvoja efikasnijih, pouzdanijih i održivijih tehnologija.",
				imageAlt: "Prostor Instituta ITNMS",
			},

			mission: {
				title: "Misija",
				description:
					"Misija Instituta je razvoj naučnih i tehnoloških rešenja, unapređenje stručnih znanja i njihova primena u oblastima od značaja za privredu, industriju i zaštitu životne sredine.",
			},

			vision: {
				title: "Vizija",
				description:
					"Vizija Instituta je da bude prepoznat kao pouzdan naučnoistraživački i razvojni partner, sposoban da odgovori na savremene tehnološke, industrijske i ekološke izazove.",
			},

			approach: {
				eyebrow: "Način rada",
				title: "Nauka povezana sa praktičnom primenom",
				description:
					"Institut kombinuje istraživački rad, laboratorijske kapacitete i saradnju sa privredom kroz nekoliko osnovnih pravaca.",

				principles: {
					research: {
						title: "Naučnoistraživački rad",
						description:
							"Razvoj znanja, metoda i tehnoloških postupaka u oblastima kojima se Institut bavi.",
					},
					appliedResearch: {
						title: "Primenjena istraživanja",
						description:
							"Usmeravanje naučnih rezultata ka praktičnim rešenjima i potrebama privrede.",
					},
					industry: {
						title: "Saradnja sa industrijom",
						description:
							"Stručna podrška kompanijama kroz ispitivanja, razvoj procesa i konsultantske usluge.",
					},
					institutions: {
						title: "Međuinstitucionalna saradnja",
						description:
							"Povezivanje sa domaćim i međunarodnim naučnoistraživačkim organizacijama.",
					},
				},
			},

			workAreas: {
				eyebrow: "Oblasti delovanja",
				title: "Glavne naučne i stručne oblasti",
				description:
					"Rad Instituta obuhvata povezane oblasti istraživanja, tehnološkog razvoja i stručnih usluga.",
				link: "Detaljan pregled oblasti rada",

				items: [
					"Priprema i prerada mineralnih sirovina",
					"Metalurgija i procesno inženjerstvo",
					"Materijali i hemijsko inženjerstvo",
					"Zaštita životne sredine",
					"Laboratorijska i instrumentalna ispitivanja",
					"Razvoj i optimizacija tehnoloških procesa",
				],
			},

			historyCta: {
				title: "Saznajte više o razvoju Instituta",
				description:
					"Pogledajte istorijat, organizaciju i najvažnije etape razvoja ITNMS-a.",
				button: "Istorijat Instituta",
			},
		},
		home: {
			partners: {
				eyebrow: "Saradnja",
				title: "Partneri Instituta",
				description:
					"ITNMS sarađuje sa naučnoistraživačkim organizacijama, državnim institucijama, fondovima i partnerima iz industrije.",
				openNewWindow: "otvara se u novom prozoru",

				names: {
					scienceFund: "Fond za nauku Republike Srbije",
					universityBelgrade: "Univerzitet u Beogradu",
					ministry: "Ministarstvo nauke, tehnološkog razvoja i inovacija",
					partnerInstitution: "Partnerska institucija",
					industryPartner: "Industrijski partner",
				},
			},
			contact: {
				eyebrow: "Kontakt i saradnja",
				title: "Potrebna vam je stručna podrška ili saradnja sa Institutom?",
				description:
					"Pošaljite nam upit za laboratorijska ispitivanja, projekte, stručne usluge ili saradnju sa istraživačkim timovima Instituta.",
				sendInquiry: "Pošaljite upit",
				contactDetails: "Kontakt podaci",
			},
			featuredProjects: {
				eyebrow: "Projekti",
				title: "Naučnoistraživački projekti koji su u toku",
				description:
					"Pregled odabranih projekata koje Institut realizuje samostalno ili u saradnji sa domaćim i međunarodnim partnerima.",
				allProjects: "Svi naučni projekti",
			},
			news: {
				eyebrow: "Aktuelnosti",
				title: "Vesti i obaveštenja",
				description: "Najnovije vesti, aktivnosti i obaveštenja Instituta.",
				allNews: "Sve vesti",
				readMore: "Pročitajte više",
			},
		},
		nav: {
			about: "O Institutu",
			employees: "Istraživači",
			projects: "Projekti",
			services: "Usluge",
			quality: "Kvalitet i akreditacije",
			contact: "Kontakt",
			search: "Pretraga",

			aboutMenu: {
				naslov: "Institut sa bogatom istorijom",
				history: "Istorijat",
				aboutItNms: "O ITNMS-u",
				organization: "Organizacija",
				management: "Rukovodstvo",
				scientificCouncil: "Naučno veće",
				activities: "Delatnosti i oblasti rada",
			},

			employeesMenu: {
				naslov: "Ljudi koji znanje pretvaraju u rezultate",
				researchers: "Spisak istraživača",
				management: "Rukovodstvo",
			},

			projectsMenu: {
				naslov: "Svi naši projekti na jednom mestu",

				scientific: "Naučni projekti",
				industrial: "Industrijski projekti",
			},

			servicesMenu: {
				areas: "Oblasti usluga",
				laboratories: "Laboratorije",
				equipment: "Oprema",
				inquiry: "Pošaljite upit",
			},
		},

		common: {
			moreInfo: "Više informacija",
			openPage: "Otvorite stranicu",
			back: "Nazad",
			readMore: "Pročitaj više",
		},
	},

	en: {
		contactPage: {
			pageHeader: {
				title: "Contact",
				description:
					"Contact details, location and a form for contacting the Institute.",
				breadcrumbCurrent: "Contact",
			},

			contactDetails: {
				address: "Address",
				phone: "Phone",
				email: "Email",
				workingHours: "Working Hours",
				workingHoursValue: "Monday–Friday, 8:00–16:00",
			},

			location: {
				eyebrow: "Location",
				title: "How to Reach the Institute",
				description:
					"The Institute is located in Belgrade. Open the map for detailed directions.",
			},

			departments: {
				title: "Department Contacts",
				description:
					"For a faster response, please contact the relevant department directly.",

				general: "General and Administrative Affairs",
				laboratory: "Laboratory Testing and Services",
				research: "Scientific Research Cooperation",
			},

			formIntro: {
				eyebrow: "Contact Us",
				title: "General Contact Inquiry",
				paragraph1:
					"Use this form for general questions, suggestions, information about the Institute and inquiries that are not related to a specific laboratory service.",
				paragraph2:
					"For laboratory analyses and professional services, please use the dedicated “Send an Inquiry” form.",
				servicesLink: "Open the services inquiry form →",
			},

			form: {
				fullName: "Full Name",
				organization: "Organization",
				email: "Email Address",
				phone: "Phone Number",
				subject: "Subject",
				message: "Message",

				consentBefore:
					"I consent to the entered data being used to respond to my message, in accordance with the",
				privacyPolicy: "Privacy Policy",

				submit: "Send Message",
				submitting: "Sending...",
			},

			success: {
				title: "Message Recorded",
				description:
					"Once the form is connected to the backend, confirmation of the actual message delivery will be displayed here.",
				reset: "Send Another Message",
			},
		},
		underConstruction: {
			eyebrow: "Coming Soon",
			title: "This Page Is Under Construction",
			description:
				"We are currently preparing the content for this page. Please visit us again soon.",
			backHome: "Back to Home",
		},
		scientificProjects: {
			pageHeader: {
				title: "Scientific Projects",
				description:
					"An overview of scientific research projects, project teams, programmes, funding bodies and partner institutions.",
				breadcrumbProjects: "Projects",
				breadcrumbCurrent: "Scientific Projects",
			},

			filters: {
				title: "Search and Filters",

				searchLabel: "Search projects",
				searchPlaceholder: "Title, acronym or keyword",

				statusLabel: "Project status",
				allStatuses: "All statuses",

				funderLabel: "Funder",
				allFunders: "All funders",

				clear: "Clear",
			},

			statuses: {
				active: "Active",
				completed: "Completed",
			},

			results: {
				shown: "Showing",
				projects: "projects",
				total: "Total",
			},

			card: {
				abstract: "Project Abstract",
				team: "Project Team",
				projectLink: "Project Website",

				duration: "Project Duration",
				funder: "Funder",
				institutions: "Participating Research Organizations",
			},

			empty: {
				title: "No Projects Found",
				description: "Change the search term or select different filters.",
				clear: "Clear all filters",
			},
		},
		projectsPage: {
			pageHeader: {
				title: "Projects",
				description:
					"An overview of the Institute's scientific research and industrial projects.",
				breadcrumbCurrent: "Projects",
			},

			categories: {
				scientific: {
					title: "Scientific Projects",
					description:
						"An overview of active and completed scientific research projects, research teams, funding bodies and partner institutions.",
					button: "View projects",
				},

				industrial: {
					title: "Industrial Projects",
					description:
						"An overview of cooperation with industry and the Institute's industrial projects.",
					button: "Open website",
				},
			},

			intro: {
				eyebrow: "Science and Application",
				title: "Projects Connecting Research, Development and Industry",
				paragraphs: [
					"The Institute participates in national and international scientific research programmes, as well as development and professional projects carried out in cooperation with industry.",
					"Project teams bring together Institute researchers and collaborators from other research organizations, universities and industrial organizations.",
				],
				imageAlt: "ITNMS research team working on a project",
			},
		},
		researcherProfile: {
			breadcrumbResearchers: "Researchers",

			sidebar: {
				contact: "Contact",
				organizationalUnit: "Organizational Unit",
				notAvailable: "Not available",
			},

			profile: {
				eyebrow: "Researcher Profile",
				researchArea: "Research Interests",
				academicEducation: "Academic Education",
				backToResearchers: "Back to all researchers",
			},

			formerEmployee: {
				description: "Employee Information",
				eyebrow: "Information",
				titleSuffix: "is no longer employed by the Institute",
				descriptionText:
					"This person is no longer listed among the Institute's current employees.",
				back: "Back to employees",
			},
		},
		researchers: {
			card: {
				learnMore: "Learn more →",
			},
			pageHeader: {
				title: "All Researchers",
				description:
					"An overview of the Institute's employees by name, scientific title and position.",
				breadcrumbResearchers: "Researchers",
				breadcrumbCurrent: "All Researchers",
			},

			filters: {
				title: "Search and Filters",

				searchLabel: "Search researchers",
				searchPlaceholder: "First and last name",

				scientificTitleLabel: "Scientific title",
				allScientificTitles: "All scientific titles",

				positionLabel: "Position",
				allPositions: "All positions",

				clear: "Clear",
			},

			results: {
				shown: "Showing",
				researchers: "researchers",
				total: "Total",
			},

			empty: {
				title: "No Researchers Found",
				description:
					"Change your search term or select different filter values.",
				clear: "Clear all filters",
			},
		},
		centralLaboratory: {
			pageHeader: {
				title: "Central Testing Laboratory",
				description:
					"Modern ITNMS laboratory infrastructure for the characterization of materials, mineral raw materials and samples from various fields of science and industry.",
				breadcrumbAbout: "About the Institute",
				breadcrumbOrganization: "Organization",
				breadcrumbCurrent: "Central Testing Laboratory",
			},

			intro: [
				"The Central Laboratory for Chemical Testing combines professional analytical services with modern scientific research in the fields of chemistry, materials and environmental protection. The Laboratory team consists of five researchers holding scientific titles and two technical specialists, whose knowledge and experience contribute to connecting fundamental and applied research.",

				"A significant part of the Laboratory's work involves providing chemical analysis services and testing samples related to mineral raw materials. Various analytical methods are used to determine chemical composition and examine the characteristics of different materials. The results provide a reliable basis for the characterization of mineral raw materials and materials, quality control, assessment of their potential for further processing and application, as well as for various research and industrial activities.",

				"Scientific research is particularly focused on the valorization of waste biomass and the development of sustainable materials and technologies. Research includes the direct utilization, chemical modification or cross-linking of biomass with mineral raw materials, as well as its transformation into carbon-rich products using thermochemical conversion methods such as hydrothermal carbonization and pyrolysis. Particular attention is devoted to the development and characterization of materials obtained from waste biomass with potential applications in environmental protection and energy. The Laboratory's research activities also include the assessment of environmental and health risks associated with the presence of potentially toxic elements and other pollutants in the environment.",

				"Through a multidisciplinary approach combining analytical chemistry, materials science and environmental protection, the Laboratory contributes to waste valorization, more efficient resource use and the development of sustainable solutions based on circular economy principles.",
			],

			organization: {
				eyebrow: "Organizational Structure",
				title: "Central Laboratory",
				unitLabel: "Organizational Unit",
				unitTitle: "Central Testing Laboratory",
				laboratoryLabel: "Laboratory for",

				labs: {
					physicochemical: "Physicochemical Testing",
					chemical: "Chemical Testing",
					mineralogical: "Mineralogical Testing",
					environmental: "Environmental Protection",
					mineralPreparation: "Mineral Raw Material Preparation",
					microscopy: "Electron Microscopy",
				},
			},

			labs: {
				chemical: {
					title: "Laboratory for Chemical Testing",
					description:
						"The laboratory is intended for chemical analysis and testing of various types of samples, mineral raw materials, materials and products.",
				},

				physicochemical: {
					title: "Laboratory for Physicochemical Testing",
					subtitle: "Material Development and Characterization",
					description:
						"The laboratory performs physicochemical testing and material characterization in support of the development of new materials and technological processes.",
				},

				mineralogical: {
					title: "Laboratory for Mineralogical Testing",
					subtitle: "Preparation and Characterization of Mineral Raw Materials",
					description:
						"The laboratory provides sample preparation and mineralogical testing of mineral raw materials as a basis for the development and optimization of their processing.",
				},

				environmental: {
					title: "Laboratory for Environmental Protection",
					description:
						"The laboratory supports research and testing in environmental protection, quality monitoring and characterization of samples from different environmental media.",
				},

				pms: {
					title: "Laboratory for Mineral Raw Material Preparation",
					description:
						"A specialized laboratory unit of the Central Testing Laboratory.",
				},

				microscopy: {
					title: "Laboratory for Electron Microscopy",
					description:
						"The Laboratory for Electron Microscopy enables detailed examination of the microstructure, morphology and characteristics of various materials and samples at the microscopic level.",
				},
			},

			labLabel: "Laboratory",
			noPhotos: "Laboratory photographs will be added later.",
			openImage: "Open image",
			photoAlt: "photo",
		},
		productionCentre: {
			pageHeader: {
				title: "Centre for Production",
				description:
					"Production of metal salts and oxides from primary and secondary raw materials.",
				breadcrumbAbout: "About the Institute",
				breadcrumbOrganization: "Organizational Units",
				breadcrumbCurrent: "Centre for Production",
			},

			intro: {
				eyebrow: "Centre Activities",
				title: "Production and Processing",
				description:
					"The activity of the Centre for Experimental Production is the production of metal salts and oxides from primary and secondary raw materials.",
				mainActivities: [
					"Metal processing using hydrometallurgical processes",
					"Processing of secondary raw materials and metallurgical intermediates",
				],
			},

			hydrometallurgy: {
				title: "Metal Processing Using Hydrometallurgical Processes",
				description:
					"The production of technical-grade and p.a.-grade metal salts and oxides from primary and secondary raw materials includes the following groups of products:",
				products: [
					"Cobalt-based products",
					"Nickel-based products",
					"Zinc-based products",
					"Lead-based products",
					"Copper-based products",
				],
			},

			recycling: {
				title:
					"Processing of Secondary Raw Materials and Metallurgical Intermediates",
				description:
					"The Centre processes various secondary raw materials, waste solutions, spent batteries and catalysts, as well as intermediate products from non-ferrous and ferrous metallurgy.",
				items: [
					"Processing of non-ferrous metal slags and sludges (Pb, Sn, Cu, Zn, Al, etc.)",
					"Refining of non-ferrous metals and alloys",
					"Processing of waste solutions containing nickel, cobalt, copper, molybdenum, etc.",
					"Processing of spent Pb and Ni-Cd batteries",
					"Processing of spent Ni, Mo and V catalysts",
					"Processing of intermediate products from non-ferrous metallurgy",
					"Processing of intermediate products from ferrous metallurgy",
				],
			},

			sidebar: {
				label: "Centre",
				title: "Centre for Production",
				mainAreas: "Main Areas",
				areas: [
					"Metal processing using hydrometallurgical processes",
					"Processing of secondary raw materials and metallurgical intermediates",
				],
				productsTitle: "Products",
				productsDescription:
					"Technical-grade and p.a.-grade metal salts and oxides.",
				organizationLink: "Organizational Structure",
			},
		},
		environmentalProtectionCentre: {
			pageHeader: {
				title: "Centre for Environmental Protection",
				description: "Science supporting a cleaner environment.",
				breadcrumbAbout: "About the Institute",
				breadcrumbOrganization: "Organizational Units",
				breadcrumbCurrent: "Centre for Environmental Protection",
			},

			intro: {
				eyebrow: "Centre Activities",
				title: "Science Supporting a Cleaner Environment",
				description:
					"We combine professional expertise and scientific research to help companies and institutions responsibly manage their environmental impact – from assessment to permitting.",
				workAreas: [
					"Mining",
					"Energy",
					"Industry",
					"Agriculture",
					"Waste management",
				],
			},

			impactAssessment: {
				eyebrow: "Environmental Impact Assessment",
				title: "Environmental Impact Assessment Studies",

				paragraphs: [
					"The Centre guides clients through the entire environmental impact assessment procedure – from preparation of the initial documentation to obtaining final approval from the competent ministry.",
					"Depending on the type of project, a multidisciplinary team is formed to cover all stages of the procedure in accordance with applicable national and international regulations.",
				],

				procedure: [
					"Preparation of a request for a decision on the need for an environmental impact assessment",
					"Preparation of a request defining the scope and content of the Study",
					"Preparation of the Environmental Impact Assessment Study",
					"Public presentation of the Study at a location determined by the competent authority",
					"Presentation and defence of the Study before the Technical Commission and competent authorities",
					"Communication with competent authorities until final approval is obtained",
				],

				highlightBefore:
					"Researchers from the Centre participate in Technical Commissions of the Ministry of Environmental Protection of the Republic of Serbia and local authorities and have so far been involved in the analysis of more than",

				highlightStrong: "90 environmental impact assessment studies",

				highlightAfter: ".",

				closing:
					"The Centre also represents investors before competent authorities and manages communication with the Ministry of Environmental Protection from the initiation of the procedure until final approval.",

				referencesTitle: "Selected References",

				references: [
					"Environmental Impact Assessment Study for the Supplementary Mining Project for tailings disposal at the Mali Ujevac disposal site, Serbia Zijin Copper d.o.o. Bor, RBM Majdanpek Branch",
					"Environmental Impact Assessment Study for the Supplementary Mining Project for excavation at the Južni Revir open pit of the Majdanpek Copper Mine, with an annual capacity of 9.9 Mt of ore, Serbia Zijin Copper d.o.o. Bor, RBM Majdanpek Branch",
					"Environmental Impact Assessment Study for the Supplementary Mining Project for tailings disposal from the Severni Revir open pit, Serbia Zijin Copper d.o.o. Bor, RBM Majdanpek Branch",
					"Environmental Impact Assessment Study for the Main Mining Project of a mine wastewater treatment facility, Serbia Zijin Copper d.o.o. Bor",
					"Request for determining the need for environmental impact assessment for the DPR Pilot facility for technological testing of flotation processing of Pb-Zn ore from the Podvirovi and Popovica deposits in the Karamanica area, Municipality of Bosilegrad",
					"Environmental Impact Assessment Study for the exploitation of lead and zinc ore from the Kiževak deposit and its flotation processing in Rudnica, Municipality of Raška",
					"Environmental Impact Assessment Study for the construction of a bentonite alkaline activation plant in Šipovo, Bosnia and Herzegovina",
				],
			},

			ippc: {
				eyebrow: "Integrated Permits",
				title: "Integrated Environmental Protection Permits – IPPC",

				paragraphs: [
					"An integrated approach to environmental protection requires operators in the energy, metallurgy, chemical and food industries, waste management and other sectors to obtain an integrated permit before starting or modifying plant operations.",
					"The Centre provides comprehensive professional support in preparing and conducting the procedure until the integrated permit is obtained.",
				],

				activities: [
					"Assessment of plant compliance with requirements for obtaining an IPPC permit",
					"Assistance in collecting the required documentation",
					"Preparation of an application for an integrated permit",
					"Monitoring the procedure until the permit is obtained",
					"Preparation of a monitoring plan",
					"Preparation of a waste management plan",
					"Preparation of an energy efficiency measures plan",
					"Preparation of an accident prevention measures plan",
					"Preparation of an environmental protection plan following plant closure",
					"Comparison of the existing situation with BREF document requirements",
					"Preparation of a programme of measures for compliance with legal obligations",
				],

				bref: "The existing condition of the plant is compared with the requirements contained in BREF documents (Best Available Techniques Reference Documents), after which the measures necessary for compliance with legal obligations are defined.",

				highlight:
					"Researchers from the Centre actively monitor national and European regulations, participate in Technical Commissions and have been involved in preparing approximately ten integrated permits.",

				referencesTitle: "Facilities Covered by IPPC Projects",

				references: [
					"Kostolac B Thermal Power Plant – Units B1 and B2, Elektroprivreda Srbije a.d. Belgrade",
					"Titan Cementara Kosjerić d.o.o. Kosjerić",
					"Elixir Zorka – Mineralna đubriva d.o.o. Šabac",
					"Impol Seval Valjaonica aluminijuma a.d. Sevojno",
					"Jelen Do d.o.o. Jelen Do",
					"IGM Mladost d.o.o. Leskovac, Mala Plana Branch",
					"Yunirisk d.o.o. Belgrade",
					"Alumil YU Industry AD Stara Pazova",
					"Ruklada Broiler Farm, KO Rubibreza, Municipality of Lajkovac – Vindija d.o.o. Lajkovac",
					"Kruščić Laying Hen Farm, Municipality of Kula – Animal Commerce d.o.o. Belgrade",
				],

				additionalProjectsTitle: "Other Projects",

				additionalProjects: [
					"Preparation of a Monitoring Plan and Energy Efficiency Measures Plan as part of the application to extend the integrated permit for operation of the hot-dip galvanizing facility operated by Metal-Cinkara d.o.o. Inđija",
					"Study of air quality, soil quality and noise levels within the impact zone of the future tin anode casting facility in Šabac",
				],
			},

			biomass: {
				eyebrow: "Scientific Research",
				title: "From Waste Biomass to Useful Materials",

				paragraphs: [
					"In addition to cooperation with industry, the Centre investigates new methods for processing waste biomass from the food industry and agriculture.",
					"The aim of the research is the complete valorization of by-products and the development of new materials for applications in environmental protection, agriculture and nutrition.",
				],

				items: [
					"Development of biosorbents for removing pollutants from water",
					"Development of organic fertilizers from biomass unsuitable for food use",
					"Development of micronutrient carriers for supplementation and functional foods based on edible biomass",
					"Optimization of biochar production by slow pyrolysis",
					"Modification of obtained materials for specific applications",
					"Complete valorization of by-products from the food industry and agriculture",
				],
			},

			projects: {
				eyebrow: "Projects",
				title: "Research Projects",

				items: [
					{
						organization: "Science Fund of the Republic of Serbia",
						code: "WasteBridge7439",
						program: "PRISMA Programme",
						period: "2023–2026",
						title:
							"From Waste to Food and Soil Enrichment – Waste Reduction through Circular Economy Principles in the Fruit and Vegetable Processing Industry",
						description:
							"The project investigates the application of circular economy principles in the fruit and vegetable processing industry. Waste biomass is converted into valuable resources for nutrition and soil enrichment, reducing waste at its source.",
					},
					{
						organization:
							"Pavle Savić Bilateral Cooperation Programme – Serbia and France",
						code: "Bilateral Cooperation",
						program: "Pavle Savić",
						period: "2025–2026",
						title:
							"Improving the Properties of Biochar-Based Materials and Expanding Their Application for Soil Remediation and Enrichment",
					},
					{
						organization:
							"Pavle Savić Bilateral Cooperation Programme – Serbia and France",
						code: "Bilateral Cooperation",
						program: "Pavle Savić",
						period: "2023–2024",
						title:
							"Biochar Supporting the Circular Bioeconomy – Synthesis of Materials Based on Lignocellulosic Waste with Multifunctional Applications",
						description:
							"Development of biochar from lignocellulosic waste as a multifunctional material for water purification, remediation and soil enrichment.",
					},
					{
						organization: "Innovation Fund of the Republic of Serbia",
						code: "PoC5796",
						program: "Proof of Concept",
						period: "2020–2022",
						title:
							"Zinc Enrichment of Pomace as a Sustainable Strategy for Combating Micronutrient Deficiency in Nutrition",
					},
					{
						organization: "Innovation Fund of the Republic of Serbia",
						code: "TTP1139",
						program: "Technology Transfer",
						period: "2022–2023",
						title:
							"Continuation of the PoC Project through Industrial Scale-Up and Preparation of the Process for Application under Real Processing Conditions",
						description:
							"The project demonstrated the feasibility of enriching residues from the fruit and vegetable processing industry with zinc as an environmentally acceptable supplementation method. The resulting product is currently undergoing the patenting process.",
					},
				],
			},

			sidebar: {
				label: "Centre",
				title: "Centre for Environmental Protection",
				mainAreas: "Main Areas",
				areas: [
					"Environmental impact assessments",
					"IPPC permits",
					"Waste management",
					"Environmental monitoring",
					"Valorization of waste biomass",
				],
				experience: "Experience",
				studies: "studies analyzed",
				ippcPermits: "IPPC permits",
				organizationLink: "Organizational Structure",
			},
		},
		metallurgicalTechnologiesCentre: {
			pageHeader: {
				title: "Centre for Metallurgical Technologies",
				description:
					"Fundamental, developmental and applied research in the fields of extractive metallurgy and recycling of metallic secondary raw materials.",
				breadcrumbAbout: "About the Institute",
				breadcrumbOrganization: "Organizational Units",
				breadcrumbCurrent: "Centre for Metallurgical Technologies",
			},

			intro: {
				eyebrow: "Centre Activities",
				title: "Research Areas",
				description:
					"The Centre for Metallurgical Technologies conducts fundamental, developmental and applied research in the fields of extractive metallurgy and recycling of metallic secondary raw materials.",
				mainActivities: [
					"Extractive metallurgy",
					"Recycling of metallic secondary raw materials",
				],
			},

			extractiveMetallurgy: {
				title: "Extractive Metallurgy",
				paragraphs: [
					"Fundamental research includes mass and energy transfer phenomena in heterogeneous metallurgical systems, thermodynamic analysis, and the study of mechanisms and kinetics of processes at phase boundaries.",
					"Developmental and applied research is carried out through the development of technologies and technical-technological solutions for obtaining non-ferrous, rare and precious metals from standard and non-standard primary raw materials.",
				],
				developmentActivities: [
					"New technologies for processing complex polymetallic ores and concentrates",
					"Technologies for processing intermediate products from non-ferrous metallurgy",
					"Technologies for producing metallic and oxide powders",
					"Technologies for producing technical-grade and PA-grade salts",
				],
				processIntro:
					"Hydrometallurgical and pyrometallurgical processes are used for their successful implementation.",
			},

			processes: {
				hydrometallurgical: {
					title: "Hydrometallurgical Processes",
					description:
						"Processes can be carried out at standard or elevated pressure, for which the Centre has appropriate equipment.",
					items: [
						"Leaching processes in acidic systems (chlorides, sulfates, nitrates, etc.)",
						"Leaching processes in alkaline systems (hydroxides, ammonium salts, etc.)",
						"Metal recovery from solutions (hydrolysis, crystallization, cementation)",
					],
				},
				pyrometallurgical: {
					title: "Pyrometallurgical Processes",
					description:
						"Processes are carried out in metallurgical furnaces at elevated temperatures.",
					items: [
						"Oxidizing roasting",
						"Reducing roasting",
						"Decomposition of sulfates and carbonates",
						"Metal refining",
					],
				},
			},

			recycling: {
				title: "Recycling of Secondary Raw Materials",
				description:
					"Research includes the development of technologies and technical-technological solutions for processing and recovering valuable components from secondary and non-standard metallic raw materials into metals, alloys and metal compounds.",
				items: [
					"Processing of intermediate products from Pb, Zn, Cu and Al metallurgy",
					"Processing of Pb and Pb alloys (batteries, etc.)",
					"Processing of Sn and Sn alloys (sponge, slag, sludge)",
					"Processing of Cu and Cu alloys (slag, grinding waste, turnings)",
					"Processing of Zn and Zn alloys (slag, grinding waste, turnings, sludge)",
					"Processing of Ni and Ni alloys (Ni-Cd batteries, sludge, catalysts, waste electrodes)",
					"Processing of secondary raw materials of rare metals (Mo, V and W)",
				],
			},

			additionalResearch: {
				title: "Other Research",
				items: [
					"Development of chemical and electrochemical processes for simultaneous coal demineralization and desulfurization",
					"Development and design of metallic systems and alloys using modern computational and experimental methods",
					"Application of computer simulation to metal melting and casting processes, gating systems and castings",
					"Restoration of degraded soils and selection of suitable plant species for remediation, geobotanical and biogeochemical research in the soil–plant system, testing of innovative fertilizers for plant growth and development, and development of functional materials and soil amendments from waste biomass",
					"Extraction of metals from contaminated biomass using hydrometallurgical processes, recycling of by-products from contaminated biomass processing and their valorization",
					"Development of biotechnological processes for the valorization of metals from non-standard raw materials",
					"Synthesis, characterization and functionalization of innovative multifunctional nanomaterials",
					"Development of photoactive materials from waste biomass for wastewater treatment applications",
				],
			},

			team: {
				eyebrow: "Team",
				title: "Centre Researchers",
				profile: "Profile",

				positions: {
					scientificAdviserAssistant: "Scientific Adviser, Assistant Director",
					scientificAdviser: "Scientific Adviser",
					seniorResearchAssociate: "Senior Research Associate",
					researchAssociate: "Research Associate",
					researchAssistant: "Research Assistant",
					researchTrainee: "Research Trainee",
				},
			},

			sidebar: {
				label: "Centre",
				title: "Centre for Metallurgical Technologies",
				mainAreas: "Main Areas",
				areas: [
					"Extractive metallurgy",
					"Recycling of metallic secondary raw materials",
				],
				collaboratorsCount: "Number of researchers",
				organizationLink: "Organizational Structure",
			},
		},
		inorganicTechnologiesCentre: {
			pageHeader: {
				title: "Centre for Inorganic Technologies",
				description:
					"Development and advancement of modern inorganic materials with a particular focus on glass, ceramic and glass-ceramic materials.",
				breadcrumbAbout: "About the Institute",
				breadcrumbOrganization: "Organizational Structure",
				breadcrumbCurrent: "Centre for Inorganic Technologies",
			},

			intro: {
				eyebrow: "Centre Activities",
				title: "Modern Inorganic Materials",
				paragraphs: [
					"The Centre for Inorganic Technologies is engaged in the development and advancement of modern inorganic materials, with a particular focus on glass, ceramic and glass-ceramic materials.",
					"Through an interdisciplinary approach, fundamental research is combined with applied solutions in the synthesis, processing and characterization of materials.",
					"Particular attention is devoted to sustainable technologies, the use of secondary raw materials and the development of materials with broad application potential in industry, construction, agriculture, environmental protection and biomedicine.",
				],
			},

			research: {
				eyebrow: "Research",
				title: "Main Research Areas",
				areas: [
					{
						title: "Bioactive Ceramics",
						text: "Synthesis and testing of bioactive ceramics based on hydroxyapatite and hydroxyapatite/bioactive glass composites, with the possibility of controlled substitution by specific ions, for potential applications in bone tissue regeneration and as carriers of active components.",
					},
					{
						title: "Bioactive Phosphate Glasses",
						text: "Study, synthesis and testing of bioactive phosphate glasses and phosphate glass-ceramic materials as inorganic biomaterials for applications in regenerative medicine and related biomedical fields.",
					},
					{
						title: "Glass-Based Eco-Fertilizers",
						text: "Synthesis and characterization of glass-based eco-fertilizers with controlled release of nutrient elements based on phosphate glasses, including composition optimization and assessment of their effects on crops and sustainable soil management.",
					},
					{
						title: "Glass Foams",
						text: "Synthesis and characterization of glass foams based on secondary raw materials, with the aim of producing highly porous glass materials with good thermal insulation properties while applying circular economy principles.",
					},
				],
			},

			characterization: {
				title: "Material Characterization",
				paragraphs: [
					"The Centre provides detailed characterization of ceramic, glass and glass-ceramic materials.",
					"The application of analytical methods enables reliable assessment of material quality, optimization of synthesis processes and development of materials tailored to various technological and industrial applications.",
				],
				items: [
					"Analysis of material structure and microstructure",
					"Determination of phase composition",
					"Thermal property testing",
					"Mechanical property testing",
					"Functional property testing",
					"Optimization of synthesis processes",
					"Assessment of material quality for different technological and industrial applications",
				],
			},

			cooperation: {
				title: "Cooperation and Mentoring",
				paragraphs: [
					"The Centre cooperates with universities and research institutions in Serbia and abroad.",
					"One of the important directions of the Centre's development is the dissemination of scientific results within academic and secondary-school communities through cooperation with master's students, doctoral students and secondary-school students, supported by established mentoring activities.",
				],
			},

			sidebar: {
				label: "Centre",
				title: "Centre for Inorganic Technologies",
				focusTitle: "Focus",
				focusItems: [
					"Ceramic materials",
					"Glass materials",
					"Glass-ceramic materials",
					"Biomaterials",
					"Sustainable materials",
				],
				applicationsTitle: "Applications",
				applications:
					"Industry, construction, agriculture, environmental protection and biomedicine.",
				organizationLink: "Organizational Structure",
			},
		},
		newMaterialsCentre: {
			laboratory: {
				eyebrow: "Centre Laboratory",
				title: "Laboratory for Physicochemical Testing",

				intro: [
					"Research conducted in the Laboratory for Physicochemical Testing of the Institute for Technology of Nuclear and Other Mineral Raw Materials – ITNMS focuses on the study of natural non-metallic mineral raw materials, including natural zeolites such as clinoptilolite and phillipsite, as well as clays including bentonite–montmorillonite and kaolin–kaolinite.",

					"Particular attention is devoted to the modification of these mineral raw materials in order to obtain materials suitable for removing various pollutants from water. Research includes the removal of toxic metal cations such as lead, cadmium, copper and zinc, as well as organic molecules and pharmaceutically active substances including diclofenac sodium, ibuprofen and ketoprofen.",

					"Research also includes the application of these materials in animal feed, particularly for the binding of mycotoxins such as aflatoxin B1, zearalenone and ochratoxin A.",

					"More recent research has expanded to the investigation of natural zeolites and clays as potential carriers for pharmaceutically active substances. These materials enable the formation of homogeneous complexes with drugs and show potential for the controlled release of active substances.",
				],

				researchAreas: {
					title: "Research Areas",
					items: [
						"Natural zeolites and clays",
						"Modified mineral materials",
						"Adsorption of pollutants from water",
						"Removal of toxic metals",
						"Removal of pharmaceutical substances",
						"Adsorption of mycotoxins",
						"Carriers for pharmaceutically active substances",
						"Controlled drug release",
					],
				},

				characterization: {
					title: "Material Characterization",
					description:
						"The laboratory characterizes both initial mineral raw materials and the resulting materials using a range of instrumental and physicochemical methods.",
					methods: [
						"Thermal analysis (DTA/TGA)",
						"Infrared spectroscopy (FTIR)",
						"Determination of cation exchange capacity",
						"Determination of chemical composition",
						"XRD analysis",
						"SEM/EDS analysis",
						"Optical microscopy",
						"Determination of zeta potential",
					],
					conclusion:
						"The combination of these methods enables comprehensive characterization of the initial mineral raw materials and the resulting products.",
				},

				pollutants: {
					title: "Pollutant Analysis",
					description:
						"Pollutant concentrations before and after the adsorption process are determined using various instrumental methods.",

					methods: {
						hplc: {
							title: "HPLC",
							description:
								"Liquid chromatography with fluorescence and UV detection is used to determine mycotoxins and pharmaceutically active substances.",
						},
						uvvis: {
							title: "UV/Vis Spectrophotometry",
							description:
								"Used to determine the concentrations of pharmaceutically active substances.",
						},
						aas: {
							title: "AAS",
							description:
								"Metal concentrations are determined by atomic absorption spectrometry in the Laboratory for Chemical Testing.",
						},
					},
				},

				team: {
					eyebrow: "Research Team",
					title: "Laboratory Researchers",

					titles: {
						scientificAdviser: "Scientific Adviser",
						researchAssociate: "Research Associate",
						researchAssistant: "Research Assistant",
					},
				},
			},
		},
		mineralRawMaterialsCentre: {
			pageHeader: {
				title: "Centre for Mineral Raw Material Preparation",
				description:
					"Research and development of modern technologies for the processing, concentration and valorization of mineral and secondary raw materials.",
				breadcrumbAbout: "About the Institute",
				breadcrumbCentres: "Centres",
				breadcrumbCurrent: "Centre for Mineral Raw Material Preparation",
			},

			intro:
				"The Centre for Mineral Raw Material Preparation of the Institute for Technology of Nuclear and Other Mineral Raw Materials conducts research, development and application of modern technologies for mineral processing, with the aim of efficiently recovering valuable components, improving resource utilization and producing materials of suitable quality for various industrial applications.",

			technology: {
				title: "From characterization to technological solutions",
				paragraphs: [
					"The Centre's extensive experience covers metallic and non-metallic mineral raw materials, complex and low-grade ores, as well as secondary and technogenic raw materials.",
					"Research covers the complete technological pathway – from detailed raw material characterization and examination of its behaviour during processing, through crushing, grinding and classification, to the application of various concentration and separation methods.",
					"Based on laboratory and pilot-scale testing, technological flowsheets are developed and optimized according to the specific characteristics of each raw material.",
				],
			},

			research: {
				title: "Research Areas",

				areas: {
					characterization: {
						title: "Mineral Raw Material Characterization",
						description:
							"Detailed examination of the characteristics of mineral raw materials and their behaviour during processing provides the basis for selecting and developing appropriate technological processes.",
					},
					crushing: {
						title: "Crushing, Grinding and Classification",
						description:
							"Laboratory and pilot-scale testing of material preparation processes through crushing, grinding and classification in order to achieve optimal conditions for subsequent processing stages.",
					},
					gravity: {
						title: "Gravity Separation",
						description:
							"Development and optimization of processes for separating valuable components based on differences in the density of mineral phases.",
					},
					magnetic: {
						title: "Magnetic Separation",
						description:
							"Testing and development of technological processes for separating mineral components based on differences in their magnetic properties.",
					},
					flotation: {
						title: "Flotation",
						description:
							"Development and optimization of flotation processes for concentrating valuable minerals from complex, low-grade and other mineral raw materials.",
					},
					secondary: {
						title: "Secondary and Technogenic Raw Materials",
						description:
							"Development of processes for recovering valuable components from industrial residues, tailings and other materials previously regarded as waste.",
					},
				},
			},

			poorResources: {
				title: "Valorization of Low-Grade and Underutilized Resources",
				paragraph:
					"A particular area of the Centre's work is the valorization of low-grade, complex and previously underutilized mineral resources, as well as the processing of mining and industrial residues.",
				highlight:
					"By developing technologies for recovering valuable components from tailings, technogenic raw materials and other materials previously considered waste, the Centre's research contributes to reducing resource losses, decreasing waste volumes and implementing circular economy principles.",
			},

			criticalResources: {
				title: "Critical and Strategic Mineral Raw Materials",
				paragraphs: [
					"A modern direction of the Centre's development focuses on critical and strategic mineral raw materials, recycling and revalorization of secondary raw materials, as well as the development of more energy-efficient and environmentally sustainable processing technologies.",
					"By combining expertise in mineralogy, geology, chemistry and process engineering, the Centre approaches each material as a potential source of valuable components.",
				],
			},

			industry: {
				title: "Cooperation with Industry",
				paragraphs: [
					"An important advantage of the Centre is its ability to connect scientific research with the specific needs of industry.",
					"From laboratory testing and the selection of optimal technological processes to the development and verification of technological solutions, the Centre provides support in solving problems related to mineral processing and the valorization of secondary resources.",
				],

				steps: [
					{
						title: "Characterization",
						description: "Analysis of raw material composition and properties.",
					},
					{
						title: "Process Development",
						description:
							"Selection and optimization of technological processes.",
					},
					{
						title: "Solution Verification",
						description: "Laboratory and pilot-scale testing.",
					},
				],
			},

			sustainability: {
				title: "Sustainable Use of Mineral Resources",
				description:
					"Through modern research and a multidisciplinary approach, the Centre for Mineral Raw Material Preparation contributes to more efficient and sustainable use of mineral resources and to the development of technologies that meet the requirements of modern mining, metallurgical and processing industries.",
			},

			members: {
				title: "Centre Members",
			},

			sidebar: {
				mainAreas: "Main Areas",
				areas: [
					"Mineral raw material processing",
					"Concentration and separation",
					"Complex and low-grade ores",
					"Secondary and technogenic raw materials",
					"Critical mineral raw materials",
					"Recycling and circular economy",
				],

				recyclingTitle: "From Waste to Resources",
				recyclingDescription:
					"One of the Centre's important areas of work is the recovery of valuable components from tailings, industrial residues and secondary raw materials.",
			},
		},
		scientificCouncilRecords: {
			pageHeader: {
				title: "Scientific Council Meeting Minutes",
				description:
					"An overview of the minutes of Scientific Council meetings, organized by year.",
				breadcrumbAbout: "About the Institute",
				breadcrumbCouncil: "Scientific Council",
				breadcrumbCurrent: "Meeting Minutes",
			},

			archive: {
				eyebrow: "Archive",
				title: "Years",
				ariaLabel: "Meeting minutes by year",
			},

			records: {
				eyebrow: "Documentation",
				title: "Published Meeting Minutes",
				searchLabel: "Search meeting minutes",
				searchPlaceholder: "Search meeting minutes",
				openDoc: "Open DOC",
				noResults: "No meeting minutes match your search.",
			},
		},
		scientificCouncilMembers: {
			pageHeader: {
				title: "Scientific Council Members",
				description:
					"An overview of the president, deputy president and members of the Institute's Scientific Council.",
				breadcrumbAbout: "About the Institute",
				breadcrumbCouncil: "Scientific Council",
				breadcrumbCurrent: "Members",
			},

			leadershipSection: {
				eyebrow: "Scientific Council Leadership",
				title: "President and Deputy President",
			},

			membersSection: {
				eyebrow: "Members",
				title: "Scientific Council Members",
				totalMembers: "Total members",
			},

			roles: {
				president: "President of the Scientific Council",
				deputyPresident: "Deputy President",
			},

			scientificTitles: {
				scientificAdviser: "Scientific Adviser",
				seniorResearchAssociate: "Senior Research Associate",
				researchAssociate: "Research Associate",
			},

			table: {
				fullName: "Full name",
				scientificTitle: "Scientific title",
				profile: "Profile",
			},

			viewProfile: "View profile →",
			openProfile: "Open profile",
			notAvailable: "Not available",
		},
		scientificCouncil: {
			pageHeader: {
				title: "Scientific Council",
				description:
					"Information about the composition, work and documents of the Institute's Scientific Council.",
				breadcrumbAbout: "About the Institute",
				breadcrumbCurrent: "Scientific Council",
			},

			cards: {
				members: {
					title: "Scientific Council Members",
					description:
						"An overview of the president, deputy president and members of the Institute's Scientific Council.",
				},
				minutes: {
					title: "Meeting Minutes",
					description:
						"Minutes from Scientific Council meetings, organized by year and meeting date.",
				},
				openPage: "Open page",
			},

			role: {
				eyebrow: "Scientific body of the Institute",
				title: "Role of the Scientific Council",
				paragraph1:
					"The Scientific Council is the Institute's professional and scientific body responsible for considering matters relevant to scientific research, the development of research fields and the professional advancement of employees.",
				paragraph2:
					"This section provides information about the members of the Scientific Council, as well as meeting minutes and other publicly available documents related to its work.",
			},

			documents: {
				title: "Scientific Council Documents",
				description:
					"In addition to meeting minutes, other relevant acts and documents are available in the central Documents section.",
				button: "All documents",
			},
		},
		leadership: {
			pageHeader: {
				title: "Management",
				description:
					"An overview of the Institute's management and the persons responsible for scientific, professional and administrative operations.",
				breadcrumbAbout: "About the Institute",
				breadcrumbCurrent: "Management",
			},

			directorSection: {
				eyebrow: "Director of the Institute",
				title: "Management and development of the Institute",
				description:
					"Director of the Institute for Technology of Nuclear and Other Mineral Raw Materials",
				viewProfile: "View profile",
			},

			otherMembersSection: {
				eyebrow: "Other members of management",
				title: "Professional and operational support to management",
			},

			positions: {
				director: "Director of the Institute",
				assistantDirector: "Assistant Director",
			},

			scientificTitles: {
				scientificAdviser: "Scientific Adviser",
			},

			profile: "Profile",
		},
		organization: {
			pageHeader: {
				title: "Organizational Structure",
				description:
					"Organizational structure of the Institute for Technology of Nuclear and Other Mineral Raw Materials.",
				breadcrumbAbout: "About the Institute",
				breadcrumbCurrent: "Organizational Structure",
			},

			labels: {
				management: "Management",
				governance: "Governing bodies",
				board: "Management Board",
				service: "Service",
				serviceHead: "Head of Service",
				moreInformation: "More information",
				noData: "Information will be added later",
				sharedServices: "Institute Shared Services",
				telephone: "Tel",
				mobile: "Mobile",
			},

			director: {
				title: "Director of the Institute",
				scientificTitle: "Scientific Adviser",
				description:
					"Director of the Institute for Technology of Nuclear and Other Mineral Raw Materials",
			},

			assistants: {
				mineral: {
					title: "Assistant Director",
					scientificTitle: "Scientific Adviser",
					description:
						"Assistant Director for Mineral Raw Material Preparation and Inorganic Technology",
				},

				metallurgy: {
					title: "Assistant Director",
					scientificTitle: "Scientific Adviser",
					description:
						"Assistant Director for Metallurgical Technologies and Environmental Protection",
				},

				science: {
					title: "Assistant Director",
					description:
						"Assistant Director for Science, Development and International Cooperation",
				},
			},

			sectors: {
				mineral: {
					title: "Sector",
					subtitle:
						"For Mineral Raw Material Preparation and Inorganic Technology",
				},

				metallurgy: {
					title: "Sector",
					subtitle:
						"For Metallurgical Technologies and Environmental Protection",
				},
			},

			centres: {
				mineralPreparation: {
					title: "Centre",
					subtitle: "For Mineral Raw Material Preparation",
				},

				newMaterials: {
					title: "Centre",
					subtitle: "For New Materials Development",
				},

				inorganic: {
					title: "Centre",
					subtitle: "For Inorganic Technologies",
				},

				metallurgy: {
					title: "Centre",
					subtitle: "For Metallurgical Technologies",
				},

				environment: {
					title: "Centre",
					subtitle: "For Environmental Protection",
				},

				production: {
					title: "Centre",
					subtitle: "For Production",
				},

				centralLaboratory: {
					title: "Central Testing Laboratory",
					subtitle: "",
				},
			},

			services: {
				economic: {
					title: "For Economic and Financial Affairs",
					professionalTitle: "Graduate Economist",
				},

				administrative: {
					title:
						"For Administrative, General and Technical Maintenance Affairs",
					professionalTitle: "Graduate Lawyer",
				},
			},

			boardMembers: {
				djordjeNikolic: {
					title: "Prof. Dr.",
					description:
						"Full Professor, Technical Faculty in Bor, University of Belgrade",
					role: "Chair of the ITNMS Management Board",
				},

				milicaNicetin: {
					title: "Dr.",
					description:
						"Senior Research Associate, Faculty of Technology, University of Novi Sad",
				},

				slavkoDimovic: {
					title: "Dr.",
					description:
						"Scientific Adviser, Vinča Institute of Nuclear Sciences – National Institute of the Republic of Serbia",
				},

				milosMladenovic: {
					title: "Dipl. Eng.",
					description: "Public Company Nuclear Facilities of Serbia",
				},

				aleksandraDakovic: {
					title: "Dr.",
					description:
						"Scientific Adviser, Institute for Technology of Nuclear and Other Mineral Raw Materials, Belgrade",
					role: "Deputy Chair of the ITNMS Management Board",
				},

				branislavMarkovic: {
					title: "Dr.",
					description:
						"Scientific Adviser, Institute for Technology of Nuclear and Other Mineral Raw Materials, Belgrade",
				},

				vladimirJovanovic: {
					title: "Dr.",
					description:
						"Senior Research Associate, Institute for Technology of Nuclear and Other Mineral Raw Materials, Belgrade",
				},
			},
		},
		history: {
			pageHeader: {
				title: "History",
				description:
					"The development of the Institute, the key stages of its work and its contribution to science, technology and industry.",
				breadcrumbAbout: "About the Institute",
				breadcrumbCurrent: "History",
			},

			intro: {
				eyebrow: "Development of the Institute",
				title:
					"Decades of scientific, professional and technological development",
				paragraph1:
					"The development of ITNMS has been marked by continuous scientific research, the expansion of its fields of expertise and the advancement of its laboratory and technological capabilities.",
				paragraph2:
					"The key milestones that shaped the Institute's organization, activities and present-day role are presented below in chronological order.",
				imageAlt: "Archival photograph of the Institute building",
				imageCaption:
					"Archival photograph of the Institute taken in June 1948.",
			},

			timeline: {
				eyebrow: "Key milestones",
				title: "The Institute through time",
				description:
					"The most important events and stages of development from the Institute's official history.",

				items: [
					{
						year: "1948",
						title: "Foundation of the Institute",
						description:
							"A decree of the Government of the Federal People's Republic of Yugoslavia established the institution from which today's ITNMS would later develop.",
					},
					{
						year: "1955",
						title: "Definition of activities",
						description:
							"The institution was named the Institute for Technology of Nuclear Mineral Raw Materials and focused its work on technological testing and research of mineral raw materials.",
					},
					{
						year: "1958",
						title: "Niels Bohr visits ITNMS",
						description:
							"Nobel laureate Niels Bohr, one of the most prominent physicists of the 20th century, visited the Institute in 1958. His visit was an important event in the early history of ITNMS and reflects the Institute's international scientific significance during the early years of its development.",
					},
					{
						year: "1966",
						title: "Formation of ITNMS",
						description:
							"Following the division of the Institute for Nuclear Raw Materials, the Institute for Technology of Nuclear and Other Mineral Raw Materials was established.",
					},
					{
						year: "1968",
						title: "Expansion of activities",
						description:
							"The Institute shifted towards direct cooperation with industry and expanded its activities to include non-metallic raw materials, non-ferrous and rare metals, environmental protection, engineering and consulting.",
					},
					{
						year: "1991",
						title: "Scientific institute status",
						description:
							"ITNMS was registered as a unified scientific research organization with the status of a scientific institute.",
					},
					{
						year: "1994",
						title: "State scientific institution",
						description:
							"The Institute was registered as a state scientific institution in accordance with the Law on Scientific Research.",
					},
					{
						year: "1999",
						title: "Registration in the court register",
						description:
							"ITNMS was entered into the court register, with its registered activities subsequently expanded in 2003.",
					},
					{
						year: "2007",
						title: "First accreditation",
						description:
							"The Institute was accredited to perform scientific research activities of general interest.",
					},
					{
						year: "2016",
						title: "Renewal of accreditation",
						description:
							"ITNMS successfully renewed its accreditation and continued the development of its scientific, research and professional activities.",
					},
				],
			},

			officialHistory: {
				eyebrow: "Official history",
				title: "History of the Institute",

				paragraphs: [
					"The Institute for Technology of Nuclear and Other Mineral Raw Materials was founded in 1948 by a decree of the Government of the Federal People's Republic of Yugoslavia. The decree of 27 March 1948 established the Administration for the Coordination of Scientific Institutes under the Presidency of the Government. Its general name did not reveal that its principal objective was the development of nuclear technology in the country. In October 1952, the Administration moved to 86 Franše d'Eperea Street, where ITNMS is still located today. At the same time, under a new decree, it was renamed the Administration for Mining Research and Mining Studies. Following the relocation, two institutes operating in the same building were incorporated into the Administration: the Federal Institute of Metallurgy and the Scientific Research Institute of the Ministry of Industry of the People's Republic of Serbia. In April 1953, the Administration was renamed the Institute for Geological, Mining and Technological Research.",

					"In June 1955, the Federal Executive Council abolished the former institute and adopted a decision establishing the Institute for Technology of Nuclear Raw Materials. Its task was defined as conducting technological testing and research of mineral raw materials, primarily nuclear materials. This clearly established specialized research into the extraction of uranium from domestic mineral and unconventional raw materials, the production of nuclear-grade uranium salts and compounds suitable for further processing, and the development of reactor materials. With the expansion of geological and mining research, the Institute also became a leading institution in research into the concentration and processing of ores containing non-ferrous, precious and rare metals.",

					"Further organizational transformations took place between 1961 and 1966. A 1961 decree established the Institute for Nuclear Raw Materials, marking the first public use of the term 'nuclear' as an official field of activity, which had previously been treated as strictly confidential.",

					"In January 1966, the Institute for Nuclear Raw Materials was divided into two entities, resulting in the clear formation of the Institute for Technology of Nuclear and Other Mineral Raw Materials. Following the dissolution of the Federal Commission for Nuclear Energy in 1968, the country's joint nuclear programme was effectively abandoned. The resulting loss of funding caused significant disruption within the Institute, while founding rights were transferred to the Executive Council of the Socialist Republic of Serbia. These circumstances led to a new programme concept based on direct cooperation with industry and the expansion of activities into non-metallic raw materials, non-ferrous and rare metals, environmental protection, engineering of technical and technological solutions, consulting and engineering services. Particular attention was devoted to preserving the Institute's leading position in analytical chemistry and material characterization.",

					"Between 1970 and 1985, the Institute underwent a series of changes to its internal organization, partly as a result of legislative changes and partly in search of a more efficient organization of research activities. Following its transformation into four basic organizations of associated labour in 1977, two main organizational entities were established in 1985: the Institute for Mineral Raw Material Preparation and the Institute for Metallurgy and Technology.",

					"In 1991, ITNMS was registered as a unified scientific research organization with the status of a scientific institute. Under the 1993 Law on Scientific Research, the Institute was registered as a state scientific institution pursuant to Decision No. 660-2-199/93 of the Ministry of Science and Technology of the Republic of Serbia dated 1 April 1994.",

					"In accordance with the Law on the Classification of Activities and the Register of Classification Units, ITNMS was entered into the court register under registration file No. 5-329-00 on 10 February 1999, with its activities subsequently expanded on 27 May 2003.",

					"On 12 March 2007, ITNMS was accredited by the Ministry of Science and Environmental Protection through a decision confirming that it met the requirements for performing scientific research activities of general interest, No. 110-00-34/24.",

					"ITNMS was reaccredited as a scientific research organization and research and development institute pursuant to Decision No. 612-00-00303/2013-17 of the Minister of Education, Science and Technological Development dated 11 February 2013, confirming that ITNMS met the statutory requirements for carrying out scientific research activities in the general interest, based on the positive decision of the Accreditation Board for Scientific Research Organizations No. 640-01-1/13 dated 14 June 2011.",

					"ITNMS was again reaccredited as a scientific research organization and research and development institute pursuant to Decision No. 660-01-019/2016-14 of the Minister of Education, Science and Technological Development dated 3 February 2016, confirming that ITNMS met the statutory requirements for carrying out scientific research activities in the general interest, based on the positive decision of the Accreditation Board for Scientific Research Organizations No. 660-01-00013/18 dated 12 January 2016.",
				],

				accreditationPage: "Accreditation, page",
				downloadImage: "Download image",
			},

			related: {
				title: "Related pages",
				organization: "Organization",
				activities: "Activities and fields of work",
				researchers: "Researchers",
			},

			gallery: {
				eyebrow: "Archive",
				title: "Photographs from the Institute's history",

				images: {
					institute: {
						alt: "The Institute today",
						caption:
							"The Institute today – a modern scientific research institution focused on the development and application of new technologies.",
					},
					fountain: {
						alt: "Fountain in the Institute courtyard",
						caption:
							"The fountain in the Institute courtyard – a recognizable feature of the ITNMS surroundings.",
					},
					order: {
						alt: "Order awarded to the Institute",
						caption:
							"Order awarded to the Institute for its contribution to the development of science, technology and industry.",
					},
				},
			},
		},
		aboutItnms: {
			pageHeader: {
				title: "About ITNMS",
				description:
					"Basic information about the Institute, its role, activities and the way it connects scientific research with the needs of industry.",
				breadcrumbAbout: "About the Institute",
				breadcrumbCurrent: "About ITNMS",
			},

			intro: {
				eyebrow: "The Institute",
				title: "Science and technology supporting development",
				paragraph1:
					"The Institute for Technology of Nuclear and Other Mineral Raw Materials is a scientific research organization engaged in the development and application of knowledge in the fields of mineral raw materials, materials, metallurgy, chemical engineering and environmental protection.",
				paragraph2:
					"The Institute's activities include fundamental and applied research, development of technological processes, laboratory testing, professional studies and cooperation with industry and other scientific research organizations.",
				paragraph3:
					"The Institute's expert teams connect scientific results with specific industrial and societal needs, with the aim of developing more efficient, reliable and sustainable technologies.",
				imageAlt: "ITNMS Institute facilities",
			},

			mission: {
				title: "Mission",
				description:
					"The Institute's mission is to develop scientific and technological solutions, advance professional knowledge and apply it in areas important to industry, the economy and environmental protection.",
			},

			vision: {
				title: "Vision",
				description:
					"The Institute's vision is to be recognized as a reliable scientific research and development partner capable of responding to modern technological, industrial and environmental challenges.",
			},

			approach: {
				eyebrow: "Our approach",
				title: "Science connected with practical application",
				description:
					"The Institute combines research, laboratory capabilities and cooperation with industry through several key areas of activity.",

				principles: {
					research: {
						title: "Scientific research",
						description:
							"Development of knowledge, methods and technological processes in the Institute's fields of expertise.",
					},
					appliedResearch: {
						title: "Applied research",
						description:
							"Translating scientific results into practical solutions that address the needs of industry.",
					},
					industry: {
						title: "Industry cooperation",
						description:
							"Professional support for companies through testing, process development and consulting services.",
					},
					institutions: {
						title: "Interinstitutional cooperation",
						description:
							"Cooperation with domestic and international scientific research organizations.",
					},
				},
			},

			workAreas: {
				eyebrow: "Areas of activity",
				title: "Main scientific and professional fields",
				description:
					"The Institute's work covers interconnected areas of research, technological development and professional services.",
				link: "Detailed overview of our fields of work",

				items: [
					"Mineral raw material preparation and processing",
					"Metallurgy and process engineering",
					"Materials and chemical engineering",
					"Environmental protection",
					"Laboratory and instrumental testing",
					"Development and optimization of technological processes",
				],
			},

			historyCta: {
				title: "Learn more about the Institute's development",
				description:
					"Explore the history, organization and key stages in the development of ITNMS.",
				button: "Institute history",
			},
		},
		about: {
			pageHeader: {
				title: "About the Institute",
				description:
					"The Institute for Technology of Nuclear and Other Mineral Raw Materials conducts scientific research, develops technologies and provides professional services for science and industry.",
				breadcrumb: "About the Institute",
			},

			intro: {
				eyebrow: "About ITNMS",
				title: "A research institution with a long tradition",
				paragraph1:
					"ITNMS develops knowledge, methods and technological solutions in the fields of mineral raw materials, materials, metallurgy, chemical engineering and environmental protection.",
				paragraph2:
					"The Institute connects fundamental and applied research with the needs of industry, public institutions and domestic and international partners.",
				readMore: "Learn more about the Institute",
				imageAlt: "ITNMS Institute building",
			},

			structure: {
				eyebrow: "Institute structure",
				title: "Information about our work and organization",
				description:
					"Choose a section to learn more about the Institute's history, organization, management and scientific bodies.",
				openPage: "Open page →",

				sections: {
					about: {
						title: "About ITNMS",
						description:
							"Basic information about the Institute, its role, mission and scientific research activities.",
					},

					history: {
						title: "History",
						description:
							"The development of the Institute from its foundation to the present day and the key stages of its work.",
					},

					organization: {
						title: "Organization",
						description:
							"Organizational structure, sectors, laboratories and other organizational units.",
					},

					management: {
						title: "Management",
						description:
							"An overview of the Institute's management and the persons responsible for its organizational units.",
					},

					scientificCouncil: {
						title: "Scientific Council",
						description:
							"Members of the Scientific Council, meeting minutes and related documentation.",
					},
				},
			},

			researchersCta: {
				title: "Meet the Institute's research teams",
				description:
					"Explore employee profiles, scientific titles, research interests and the projects they participate in.",
				button: "Researchers",
			},
		},
		footer: {
			instituteName:
				"Institute for Technology of Nuclear and Other Mineral Raw Materials",

			description:
				"Scientific research, technology development and professional services in the fields of mineral raw materials, materials, metallurgy and environmental protection.",

			repository: "Digital Repository",

			quickLinksTitle: "Quick links",

			quickLinks: {
				about: "About the Institute",
				researchers: "Researchers",
				projects: "Scientific projects",
				services: "Services",
				laboratories: "Laboratories",
			},

			documentsTitle: "Documents and quality",

			documents: {
				acts: "Institute Acts",
				reports: "Reports",
				accreditations: "Accreditations",
				scientificCouncil: "Scientific Council Documents",
			},

			contactTitle: "Contact",
			allContactDetails: "All contact details",

			address: {
				street: "86 Bulevar Franše d’Eperea",
				city: "11000 Belgrade, Serbia",
			},

			copyright: "All rights reserved.",

			privacyPolicy: "Privacy Policy",
			cookiePolicy: "Cookie Policy",
			accessibility: "Accessibility",

			homeAriaLabel: "ITNMS home page",
		},
		home: {
			partners: {
				eyebrow: "Collaboration",
				title: "Institute Partners",
				description:
					"ITNMS collaborates with research organizations, government institutions, funding bodies and industry partners.",
				openNewWindow: "opens in a new window",

				names: {
					scienceFund: "Science Fund of the Republic of Serbia",
					universityBelgrade: "University of Belgrade",
					ministry:
						"Ministry of Science, Technological Development and Innovation",
					partnerInstitution: "Partner Institution",
					industryPartner: "Industry Partner",
				},
			},
			contact: {
				eyebrow: "Contact and collaboration",
				title:
					"Do you need expert support or collaboration with the Institute?",
				description:
					"Send us an inquiry regarding laboratory testing, projects, professional services or cooperation with the Institute's research teams.",
				sendInquiry: "Send an inquiry",
				contactDetails: "Contact details",
			},
			featuredProjects: {
				eyebrow: "Projects",
				title: "Ongoing scientific research projects",
				description:
					"An overview of selected projects carried out by the Institute independently or in cooperation with domestic and international partners.",
				allProjects: "All scientific projects",
			},
			news: {
				eyebrow: "Latest",
				title: "News and announcements",
				description:
					"Latest news, activities and announcements from the Institute.",
				allNews: "All news",
				readMore: "Read more",
			},
		},
		nav: {
			about: "About",
			employees: "Researchers and employees",
			projects: "Projects",
			services: "Services",
			quality: "Quality and accreditation",
			contact: "Contact",
			search: "Search",

			aboutMenu: {
				naslov: "Institute with ritch history",
				history: "History",
				aboutItNms: "About ITNMS",
				organization: "Organization",
				management: "Management",
				scientificCouncil: "Scientific Council",
				activities: "Activities and research areas",
			},

			employeesMenu: {
				naslov: "People who turn knowledge into results",
				researchers: "Researchers",
				management: "Management",
			},

			projectsMenu: {
				naslov: "Our projects",
				scientific: "Scientific projects",
				industrial: "Industrial projects",
			},

			servicesMenu: {
				areas: "Service areas",
				laboratories: "Laboratories",
				equipment: "Equipment",
				inquiry: "Send an inquiry",
			},
		},

		common: {
			moreInfo: "More information",
			openPage: "Open page",
			back: "Back",
			readMore: "Read more",
		},
	},
} as const;
export function getDictionary(language: Language) {
	return dictionary[language];
}
