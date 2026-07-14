"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/imgs/load2.jpg";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";
import { Container } from "@/app/components/Container";

const Page = () => {
	const imageWrapperRef = useRef<HTMLImageElement | null>(null);
	const [imageHeight, setImageHeight] = useState<number | null>(null);

	const scrollRef = useRef<HTMLDivElement | null>(null);

	const targetScroll = useRef(0);
	const currentScroll = useRef(0);
	const animationFrame = useRef<number | null>(null);

	useEffect(() => {
		const updateHeight = () => {
			if (imageWrapperRef.current) {
				setImageHeight(imageWrapperRef.current.offsetHeight);
			}
		};

		updateHeight();

		window.addEventListener("resize", updateHeight);

		return () => {
			window.removeEventListener("resize", updateHeight);
		};
	}, []);

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		targetScroll.current = el.scrollTop;
		currentScroll.current = el.scrollTop;

		const animateScroll = () => {
			const diff = targetScroll.current - currentScroll.current;

			currentScroll.current += diff * 0.12;
			el.scrollTop = currentScroll.current;

			if (Math.abs(diff) > 0.5) {
				animationFrame.current = requestAnimationFrame(animateScroll);
			} else {
				el.scrollTop = targetScroll.current;
				currentScroll.current = targetScroll.current;
				animationFrame.current = null;
			}
		};

		const handleWheel = (e: WheelEvent) => {
			const maxScroll = el.scrollHeight - el.clientHeight;

			const goingDown = e.deltaY > 0;
			const goingUp = e.deltaY < 0;

			const isAtTop = el.scrollTop <= 0;
			const isAtBottom = el.scrollTop >= maxScroll - 1;

			// Kad tekst-div dođe do vrha ili dna,
			// pusti normalan scroll stranice.
			if ((goingUp && isAtTop) || (goingDown && isAtBottom)) {
				return;
			}

			e.preventDefault();

			// Ovde kontrolišeš brzinu scroll-a.
			// Manji broj = sporije.
			targetScroll.current += e.deltaY * 0.35;

			targetScroll.current = Math.max(
				0,
				Math.min(targetScroll.current, maxScroll),
			);

			if (!animationFrame.current) {
				animationFrame.current = requestAnimationFrame(animateScroll);
			}
		};

		el.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			el.removeEventListener("wheel", handleWheel);

			if (animationFrame.current) {
				cancelAnimationFrame(animationFrame.current);
			}
		};
	}, []);

	return (
		<>
			{" "}
			<PageHeader
				title="Istorijat"
				description="Razvoj Instituta od osnivanja do danas."
				breadcrumbs={[
					{
						label: "O institutu",
						href: "/o-institutu",
					},
					{
						label: "Istorijat",
					},
				]}
			/>
			{/* <div className="flex flex-col w-full"> */}
			{/* <h1 className="p-8 text-6xl text-center text-gray-800 underline uppercase underline-offset-8 font-prim">
					Istorijat
				</h1> */}
			{/* <div className="grid w-full grid-cols-2 gap-8 p-8">
					<Image
						ref={imageWrapperRef}
						className="max-w-full mx-auto p"
						alt=""
						src={logo}
						onLoad={() => {
							if (imageWrapperRef.current) {
								setImageHeight(imageWrapperRef.current.offsetHeight);
							}
						}}
					/>

					<div
						ref={scrollRef}
						className="flex flex-col gap-8 pr-4 overflow-y-scroll text-gray-700 custom-scrollbar font-prim text-fade-mask"
						style={{
							height: imageHeight ? `${imageHeight}px` : "auto",
						}}
					>
						<p className="pt-4">
							Institut za tehnologiju nuklearnih i drugih mineralnih sirovina
							osnovan je 1948. god. Uredbom Vlade FNRJ. Pomenutom Uredbom od 27.
							marta 1948. god. osnovana je Uprava za koordinaciju rada naučnih
							instituta, pri Predsedništvu iste vlade. Iza ovog uopštenog naziva
							nije se moglo naslutiti da je osnovni cilj Uprave razvoj nuklearne
							tehnologije u našoj zemlji.
						</p>

						<p>
							U oktobru 1952. god. Uprava se seli u ulicu Franše d'Epere-a 86
							(gde se ITNMS i danas nalazi), istovremeno, na osnovu nove uredbe,
							Uprava menja naziv u Uprava za rudarska istrživanja i rudarske
							studije. Sa preseljenjem, Upravi su pripojena dva instituta koja
							su radila u zgradi u Ul. Franše d'Epere-a: Savezni institut za
							metalurgiju (prenet u nadležnost Vlade NR Srbije 1951. god.) i
							Naučnoistraživački institut Ministarstva industrije NR Srbije. U
							aprilu 1953. god. Uprava menja naziv u Zavod za geološko-rudarska
							i tehnološka istraživanja.
						</p>

						<p>
							Juna 1955. god. Savezno izvršno veće ukida Zavod i donosi Rešenje
							o osnivanju Instituta za tehnologiju nuklearnih sirovina. Rešenjem
							se utvrđuje da je zadatak Instituta vršenje tehnoloških
							ispitivanja i istraživanja mineralnih, prvenstveno nuklearnih
							sirovina. Time se jasno definišu strogo namenska istraživanja na
							izdvajanju urana iz domaćih mineralnih i nekonvencionalnih
							sirovina, dobijanje nuklearno čistih soli i jedinjenja uranijuma
							pogodnih za dalju preradu, kao i razvoj reaktorskih materijala.
							Zahvaljujući zamahu geološko-rudarskih istraživanja, Institut je
							bio nosilac istraživanja koncentracije i prerade ruda obojenih,
							plemenitih i retkih metala.
						</p>

						<p>
							Dalje transformacije u poslovanju odigravaju se od 1961. do 1966.
							god. Uredbom iz 1961. god. formira se Zavod za nuklearne sirovine,
							čime se prvi put u našoj javnosti pojavljuje reč nuklearni kao
							delatnost, do tada strogo čuvana.
						</p>

						<p>
							Najzad u januaru 1966. god. Zavod za nuklearne sirovine se deli u
							dva dela i jasno se profiliše Institut za tehnologiju nuklearnih i
							drugih mineralnih sirovina. Rasformiranjem Savezne komisije za
							nuklearnu energiju (1968. god.) praktično se odustaje od
							zajedničkog nuklearnog programa u zemlji, što zbog prestanka
							finansiranja dovodi do ozbiljnih potresa u Institutu. Pravo
							osnivača preuzima Izvršno veće SR Srbije. Novonastale okolnosti
							dovode do nove programske koncepcije koja se bazira na
							uspostavljanju direktne saradnje sa privredom, proširenju
							delatnosti u oblast nemetaličnih sirovina, obojenih i retkih
							metala, zaštite životne sredine, inženjerizaciji
							tehničko-tehnoloških rešenja, konsaltinga i inženjeringa. Poseban
							napor je uložen u očuvanju primata u domenu analitičke hemije i
							karakterizacije uopšte.
						</p>

						<p>
							U periodu 1970-1985. godine izvršen je čitav niz transformacija
							unutrašnje organizacije, što kao posledica izmene zakonskih
							propisa, što u traganju za efikasnijom organizacijom istraživačkog
							rada. Posle transformacije na četiri osnovne organizacije
							udruženog rada iz 1977. god. u 1985. god. formirane su dve celine.
							Te dve celine su bile OOUR Institut za pripremu mineralnih
							sirovina i OOUR Institut za metalurgiju i tehnologiju.
						</p>

						<p>
							1991. god. ITNMS se registruje kao jedinstvena naučnoistraživačka
							organizacija u statusu naučnog instituta. Prema Zakonu o
							naučnoistraživačkom radu iz 1993. god. Institut je registrovan u
							statusu naučne državne ustanove (Rešenje Ministarstva za nauku i
							tehnologiju Republike Srbije br. 660-2-199/93 od 1.4.1994. god.).
						</p>

						<p>
							U skladu sa Zakonom o klasifikaciji delatnosti i registru jedinica
							razvrstavanja ITNMS je upisan u sudski registar, registarskog
							uloška br 5-329-00, od 10.2.1999. sa proširenjem delatnosti od
							27.05.2003
						</p>

						<p>
							ITNMS je je akreditovan 12.03.2007.godine od strane Ministarstva
							nauke i zaštite životne sredine, Rešenjem o ispunjenosti uslova za
							obavljanje naučnoistraživačke delatnosti od opšteg interesa,
							br.110-00-34/24.
						</p>

						<p>
							ITNMS je reakreditovana naučno istraživačka organizacija -
							istraživačko razvojni institut, shodno Rešenju Ministra prosvete,
							nauke i tehnološkog razvoja br. 612-00-00303/2013-17 od
							11.02.2013. kojim je uvrđeno da ITNMS ispunjava uslove propisane
							zakonom da obavlja naučnoistraživačku delatnost radi ostvarivanja
							opšteg interesa, a na osnovu pozitivne Odluke Odbora za
							akreditaciju naučnoistraživačkih organizacija br.640-01-1/13 od
							14.06.2011. godine.
						</p>

						<p className="pb-4">
							ITNMS je reakreditovana naučno istraživačka organizacija -
							istraživačko razvojni institut, shodno Rešenju Ministra prosvete,
							nauke i tehnološkog razvoja br. 660-01-019/2016-14 od 03.02.2016.
							kojim je uvrđeno da ITNMS ispunjava uslove propisane zakonom da
							obavlja naučnoistraživačku delatnost radi ostvarivanja opšteg
							interesa, a na osnovu pozitivne Odluke Odbora za akreditaciju
							naučnoistraživačkih organizacija br.660-01-00013/18 od 12.01.2016.
							godine.
						</p>
					</div>
				</div> */}
			{/* </div> */}
			<Section>
				<Container className="grid w-full grid-cols-2 gap-8 ">
					<Image
						src={logo}
						alt=""
						ref={imageWrapperRef}
					></Image>
					<div
						ref={scrollRef}
						className="flex flex-col gap-8 pr-4 overflow-y-scroll text-institute-700 custom-scrollbar font-prim text-fade-mask"
						style={{
							height: imageHeight ? `${imageHeight + 32}px` : "auto",
							marginTop: "-16px",
						}}
					>
						<p className="pt-4">
							Institut za tehnologiju nuklearnih i drugih mineralnih sirovina
							osnovan je 1948. god. Uredbom Vlade FNRJ. Pomenutom Uredbom od 27.
							marta 1948. god. osnovana je Uprava za koordinaciju rada naučnih
							instituta, pri Predsedništvu iste vlade. Iza ovog uopštenog naziva
							nije se moglo naslutiti da je osnovni cilj Uprave razvoj nuklearne
							tehnologije u našoj zemlji.
						</p>

						<p>
							U oktobru 1952. god. Uprava se seli u ulicu Franše d'Epere-a 86
							(gde se ITNMS i danas nalazi), istovremeno, na osnovu nove uredbe,
							Uprava menja naziv u Uprava za rudarska istrživanja i rudarske
							studije. Sa preseljenjem, Upravi su pripojena dva instituta koja
							su radila u zgradi u Ul. Franše d'Epere-a: Savezni institut za
							metalurgiju (prenet u nadležnost Vlade NR Srbije 1951. god.) i
							Naučnoistraživački institut Ministarstva industrije NR Srbije. U
							aprilu 1953. god. Uprava menja naziv u Zavod za geološko-rudarska
							i tehnološka istraživanja.
						</p>

						<p>
							Juna 1955. god. Savezno izvršno veće ukida Zavod i donosi Rešenje
							o osnivanju Instituta za tehnologiju nuklearnih sirovina. Rešenjem
							se utvrđuje da je zadatak Instituta vršenje tehnoloških
							ispitivanja i istraživanja mineralnih, prvenstveno nuklearnih
							sirovina. Time se jasno definišu strogo namenska istraživanja na
							izdvajanju urana iz domaćih mineralnih i nekonvencionalnih
							sirovina, dobijanje nuklearno čistih soli i jedinjenja uranijuma
							pogodnih za dalju preradu, kao i razvoj reaktorskih materijala.
							Zahvaljujući zamahu geološko-rudarskih istraživanja, Institut je
							bio nosilac istraživanja koncentracije i prerade ruda obojenih,
							plemenitih i retkih metala.
						</p>

						<p>
							Dalje transformacije u poslovanju odigravaju se od 1961. do 1966.
							god. Uredbom iz 1961. god. formira se Zavod za nuklearne sirovine,
							čime se prvi put u našoj javnosti pojavljuje reč nuklearni kao
							delatnost, do tada strogo čuvana.
						</p>

						<p>
							Najzad u januaru 1966. god. Zavod za nuklearne sirovine se deli u
							dva dela i jasno se profiliše Institut za tehnologiju nuklearnih i
							drugih mineralnih sirovina. Rasformiranjem Savezne komisije za
							nuklearnu energiju (1968. god.) praktično se odustaje od
							zajedničkog nuklearnog programa u zemlji, što zbog prestanka
							finansiranja dovodi do ozbiljnih potresa u Institutu. Pravo
							osnivača preuzima Izvršno veće SR Srbije. Novonastale okolnosti
							dovode do nove programske koncepcije koja se bazira na
							uspostavljanju direktne saradnje sa privredom, proširenju
							delatnosti u oblast nemetaličnih sirovina, obojenih i retkih
							metala, zaštite životne sredine, inženjerizaciji
							tehničko-tehnoloških rešenja, konsaltinga i inženjeringa. Poseban
							napor je uložen u očuvanju primata u domenu analitičke hemije i
							karakterizacije uopšte.
						</p>

						<p>
							U periodu 1970-1985. godine izvršen je čitav niz transformacija
							unutrašnje organizacije, što kao posledica izmene zakonskih
							propisa, što u traganju za efikasnijom organizacijom istraživačkog
							rada. Posle transformacije na četiri osnovne organizacije
							udruženog rada iz 1977. god. u 1985. god. formirane su dve celine.
							Te dve celine su bile OOUR Institut za pripremu mineralnih
							sirovina i OOUR Institut za metalurgiju i tehnologiju.
						</p>

						<p>
							1991. god. ITNMS se registruje kao jedinstvena naučnoistraživačka
							organizacija u statusu naučnog instituta. Prema Zakonu o
							naučnoistraživačkom radu iz 1993. god. Institut je registrovan u
							statusu naučne državne ustanove (Rešenje Ministarstva za nauku i
							tehnologiju Republike Srbije br. 660-2-199/93 od 1.4.1994. god.).
						</p>

						<p>
							U skladu sa Zakonom o klasifikaciji delatnosti i registru jedinica
							razvrstavanja ITNMS je upisan u sudski registar, registarskog
							uloška br 5-329-00, od 10.2.1999. sa proširenjem delatnosti od
							27.05.2003
						</p>

						<p>
							ITNMS je je akreditovan 12.03.2007.godine od strane Ministarstva
							nauke i zaštite životne sredine, Rešenjem o ispunjenosti uslova za
							obavljanje naučnoistraživačke delatnosti od opšteg interesa,
							br.110-00-34/24.
						</p>

						<p>
							ITNMS je reakreditovana naučno istraživačka organizacija -
							istraživačko razvojni institut, shodno Rešenju Ministra prosvete,
							nauke i tehnološkog razvoja br. 612-00-00303/2013-17 od
							11.02.2013. kojim je uvrđeno da ITNMS ispunjava uslove propisane
							zakonom da obavlja naučnoistraživačku delatnost radi ostvarivanja
							opšteg interesa, a na osnovu pozitivne Odluke Odbora za
							akreditaciju naučnoistraživačkih organizacija br.640-01-1/13 od
							14.06.2011. godine.
						</p>

						<p className="pb-4">
							ITNMS je reakreditovana naučno istraživačka organizacija -
							istraživačko razvojni institut, shodno Rešenju Ministra prosvete,
							nauke i tehnološkog razvoja br. 660-01-019/2016-14 od 03.02.2016.
							kojim je uvrđeno da ITNMS ispunjava uslove propisane zakonom da
							obavlja naučnoistraživačku delatnost radi ostvarivanja opšteg
							interesa, a na osnovu pozitivne Odluke Odbora za akreditaciju
							naučnoistraživačkih organizacija br.660-01-00013/18 od 12.01.2016.
							godine.
						</p>
					</div>
				</Container>
			</Section>
		</>
	);
};

export default Page;
