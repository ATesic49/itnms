import Image, { type StaticImageData } from "next/image";

import {
	Atom,
	Beaker,
	FlaskConical,
	Microscope,
	Mountain,
	ShieldCheck,
	Sparkles,
} from "lucide-react";

import { Container } from "@/app/components/Container";
import { PageHeader } from "@/app/components/PageHeder";
import { Section } from "@/app/components/Section";

import { getLanguage } from "@/app/lib/language/getLanguage";
import { getDictionary } from "@/app/lib/language/dictionary";
import { routeTranslations } from "@/app/lib/language/routes";

/* =========================================================
   HEMIJSKA ISPITIVANJA
========================================================= */

import hemijska_001 from "@/public/imgs/IMG_0001.jpg";
import hemijska_002 from "@/public/imgs/IMG_0002.jpg";
import hemijska_003 from "@/public/imgs/IMG_0003.jpg";

/* =========================================================
   FIZIČKO-HEMIJSKA / RAZVOJ MATERIJALA
========================================================= */

import razvojMaterijala_005 from "@/public/imgs/IMG_0005.jpg";
import razvojMaterijala_006 from "@/public/imgs/IMG_0006.jpg";
import razvojMaterijala_007 from "@/public/imgs/IMG_0007.jpg";
import razvojMaterijala_012 from "@/public/imgs/IMG_0012.jpg";
import razvojMaterijala_013 from "@/public/imgs/IMG_0013.jpg";
import razvojMaterijala_015 from "@/public/imgs/IMG_0015.jpg";
import razvojMaterijala_017 from "@/public/imgs/IMG_0017.jpg";
import razvojMaterijala_021 from "@/public/imgs/IMG_0021.jpg";
import razvojMaterijala_023 from "@/public/imgs/IMG_0023.jpg";
import razvojMaterijala_027 from "@/public/imgs/IMG_0027.jpg";
import razvojMaterijala_028 from "@/public/imgs/IMG_0028.jpg";
import razvojMaterijala_032 from "@/public/imgs/IMG_0032.jpg";

/* =========================================================
   MINERALOŠKA / PRIPREMA MINERALNIH SIROVINA
========================================================= */

import mineralna_034 from "@/public/imgs/IMG_0034.jpg";
import mineralna_048 from "@/public/imgs/IMG_0048.jpg";
import mineralna_055 from "@/public/imgs/IMG_0055.jpg";
import mineralna_057 from "@/public/imgs/IMG_0057.jpg";

/* =========================================================
   ZAŠTITA ŽIVOTNE SREDINE
========================================================= */

import zastita_069 from "@/public/imgs/IMG_0069.jpg";
import zastita_071 from "@/public/imgs/IMG_0071.jpg";
import zastita_079 from "@/public/imgs/IMG_0079.jpg";
import zastita_083 from "@/public/imgs/IMG_0083.jpg";

/* =========================================================
   ELEKTRONSKA MIKROSKOPIJA
========================================================= */

import mikroskopija_9911 from "@/public/imgs/IMG_9911.jpg";
import mikroskopija_9912 from "@/public/imgs/IMG_9912.jpg";
import mikroskopija_9913 from "@/public/imgs/IMG_9913.jpg";
import mikroskopija_9914 from "@/public/imgs/IMG_9914.jpg";
import mikroskopija_9915 from "@/public/imgs/IMG_9915.jpg";
import mikroskopija_9916 from "@/public/imgs/IMG_9916.jpg";
import mikroskopija_9917 from "@/public/imgs/IMG_9917.jpg";
import mikroskopija_9918 from "@/public/imgs/IMG_9918.jpg";
import mikroskopija_9919 from "@/public/imgs/IMG_9919.jpg";
import mikroskopija_9920 from "@/public/imgs/IMG_9920.jpg";
import mikroskopija_9921 from "@/public/imgs/IMG_9921.jpg";
import mikroskopija_9922 from "@/public/imgs/IMG_9922.jpg";

const chemicalImages = [hemijska_001, hemijska_002, hemijska_003];

const materialDevelopmentImages = [
	razvojMaterijala_005,
	razvojMaterijala_012,
	razvojMaterijala_013,
	razvojMaterijala_017,
	razvojMaterijala_021,
	razvojMaterijala_023,
	razvojMaterijala_027,
	razvojMaterijala_028,
	razvojMaterijala_032,
];

const mineralImages = [mineralna_034, mineralna_048, mineralna_055];

const environmentImages = [zastita_069, zastita_079, zastita_083];

const microscopyImages = [mikroskopija_9915, mikroskopija_9916];

export default async function CentralnaLaboratorijaPage() {
	const lang = await getLanguage();
	const dict = await getDictionary(lang);

	const content = dict.centralLaboratory;

	const localizeHref = (href: string) => {
		if (lang === "sr") return href;

		return routeTranslations[href] ?? `/en${href}`;
	};

	return (
		<>
			<PageHeader
				title={content.pageHeader.title}
				description={content.pageHeader.description}
				breadcrumbs={[
					{
						label: content.pageHeader.breadcrumbAbout,
						href: localizeHref("/o-institutu"),
					},
					{
						label: content.pageHeader.breadcrumbOrganization,
						href: localizeHref("/o-institutu/organizacija"),
					},
					{
						label: content.pageHeader.breadcrumbCurrent,
					},
				]}
			/>

			<Section>
				<Container>
					<div className="max-w-6xl mx-auto">
						<section className="flex flex-col max-w-4xl gap-5">
							{content.intro.map((paragraph) => (
								<p
									key={paragraph}
									className="leading-8 text-stone-700 md:text-lg"
								>
									{paragraph}
								</p>
							))}
						</section>

						<OrganizationDiagram content={content.organization} />

						<div className="mt-20 space-y-24">
							<LabSection
								number="01"
								icon={Beaker}
								title={content.labs.chemical.title}
								description={content.labs.chemical.description}
								images={chemicalImages}
								labLabel={content.labLabel}
								noPhotosLabel={content.noPhotos}
								openImageLabel={content.openImage}
								photoAltLabel={content.photoAlt}
							/>

							<LabSection
								number="02"
								icon={FlaskConical}
								title={content.labs.physicochemical.title}
								subtitle={content.labs.physicochemical.subtitle}
								description={content.labs.physicochemical.description}
								images={materialDevelopmentImages}
								labLabel={content.labLabel}
								noPhotosLabel={content.noPhotos}
								openImageLabel={content.openImage}
								photoAltLabel={content.photoAlt}
							/>

							<LabSection
								number="03"
								icon={Mountain}
								title={content.labs.mineralogical.title}
								subtitle={content.labs.mineralogical.subtitle}
								description={content.labs.mineralogical.description}
								images={mineralImages}
								labLabel={content.labLabel}
								noPhotosLabel={content.noPhotos}
								openImageLabel={content.openImage}
								photoAltLabel={content.photoAlt}
							/>

							<LabSection
								number="04"
								icon={ShieldCheck}
								title={content.labs.environmental.title}
								description={content.labs.environmental.description}
								images={environmentImages}
								labLabel={content.labLabel}
								noPhotosLabel={content.noPhotos}
								openImageLabel={content.openImage}
								photoAltLabel={content.photoAlt}
							/>

							<LabSection
								number="05"
								icon={Atom}
								title={content.labs.pms.title}
								description={content.labs.pms.description}
								labLabel={content.labLabel}
								noPhotosLabel={content.noPhotos}
								openImageLabel={content.openImage}
								photoAltLabel={content.photoAlt}
							/>

							<LabSection
								number="06"
								icon={Microscope}
								title={content.labs.microscopy.title}
								description={content.labs.microscopy.description}
								images={microscopyImages}
								labLabel={content.labLabel}
								noPhotosLabel={content.noPhotos}
								openImageLabel={content.openImage}
								photoAltLabel={content.photoAlt}
							/>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

type OrganizationDiagramProps = {
	content: {
		eyebrow: string;
		title: string;
		unitLabel: string;
		unitTitle: string;
		laboratoryLabel: string;
		labs: {
			physicochemical: string;
			chemical: string;
			mineralogical: string;
			environmental: string;
			mineralPreparation: string;
			microscopy: string;
		};
	};
};

function OrganizationDiagram({ content }: OrganizationDiagramProps) {
	const labs = [
		{
			label: content.laboratoryLabel,
			title: content.labs.physicochemical,
			icon: FlaskConical,
		},
		{
			label: content.laboratoryLabel,
			title: content.labs.chemical,
			icon: Beaker,
		},
		{
			label: content.laboratoryLabel,
			title: content.labs.mineralogical,
			icon: Mountain,
		},
		{
			label: content.laboratoryLabel,
			title: content.labs.environmental,
			icon: ShieldCheck,
		},
		{
			label: content.laboratoryLabel,
			title: content.labs.mineralPreparation,
			icon: Atom,
		},
		{
			label: content.laboratoryLabel,
			title: content.labs.microscopy,
			icon: Microscope,
		},
	];

	return (
		<section className="p-6 mt-16 border rounded-3xl border-stone-200 bg-stone-50 md:p-10">
			<div className="text-center">
				<p className="text-xs font-semibold uppercase tracking-[0.18em] text-mineral-700">
					{content.eyebrow}
				</p>

				<h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
					{content.title}
				</h2>
			</div>

			<div className="max-w-md mx-auto mt-10">
				<div className="px-6 py-6 text-center bg-white border shadow-sm rounded-2xl border-institute-200">
					<div className="flex items-center justify-center mx-auto h-11 w-11 rounded-xl bg-institute-50 text-institute-800">
						<Sparkles className="w-5 h-5" />
					</div>

					<p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
						{content.unitLabel}
					</p>

					<h3 className="mt-1 text-lg font-semibold text-stone-900">
						{content.unitTitle}
					</h3>
				</div>
			</div>

			<div className="w-px h-10 mx-auto bg-stone-300" />

			<div className="hidden md:block">
				<div className="mx-auto h-px w-[84%] bg-stone-300" />
			</div>

			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{labs.map((lab) => {
					const Icon = lab.icon;

					return (
						<div
							key={lab.title}
							className="relative"
						>
							<div className="hidden w-px mx-auto h-7 bg-stone-300 md:block" />

							<div className="flex flex-col items-center justify-center h-full p-6 text-center transition bg-white border shadow-sm min-h-40 rounded-2xl border-stone-200 hover:-translate-y-1 hover:border-institute-200 hover:shadow-md">
								<div className="flex items-center justify-center h-11 w-11 rounded-xl bg-institute-50 text-institute-800">
									<Icon className="w-5 h-5" />
								</div>

								<p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
									{lab.label}
								</p>

								<h3 className="mt-1 text-base leading-6 text-institute-600">
									{lab.title}
								</h3>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

type LabSectionProps = {
	number: string;
	title: string;
	subtitle?: string;
	description: string;

	icon: React.ComponentType<{
		className?: string;
	}>;

	images?: StaticImageData[];

	labLabel: string;
	noPhotosLabel: string;
	openImageLabel: string;
	photoAltLabel: string;
};

function LabSection({
	number,
	title,
	subtitle,
	description,
	icon: Icon,
	images = [],
	labLabel,
	noPhotosLabel,
	openImageLabel,
	photoAltLabel,
}: LabSectionProps) {
	return (
		<section>
			<div className="grid gap-7 border-t border-stone-200 pt-10 md:grid-cols-[80px_1fr]">
				<div>
					<div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-institute-50 text-institute-800">
						<Icon className="w-6 h-6" />
					</div>
				</div>

				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-mineral-700">
						{labLabel} {number}
					</p>

					<h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
						{title}
					</h2>

					{subtitle && (
						<p className="mt-2 text-sm font-medium text-institute-700">
							{subtitle}
						</p>
					)}

					<p className="max-w-3xl mt-5 text-sm leading-7 text-stone-600">
						{description}
					</p>
				</div>
			</div>

			{images.length > 0 ? (
				<LabGallery
					images={images}
					title={title}
					openImageLabel={openImageLabel}
					photoAltLabel={photoAltLabel}
				/>
			) : (
				<div className="px-6 py-10 mt-8 text-center border border-dashed rounded-2xl border-stone-300 bg-stone-50">
					<p className="text-sm text-stone-500">{noPhotosLabel}</p>
				</div>
			)}
		</section>
	);
}

function LabGallery({
	images,
	title,
	openImageLabel,
	photoAltLabel,
}: {
	images: StaticImageData[];
	title: string;
	openImageLabel: string;
	photoAltLabel: string;
}) {
	const getGridClass = () => {
		if (images.length === 2) {
			return "grid-cols-1 sm:grid-cols-2";
		}

		if (images.length === 3) {
			return "grid-cols-1 sm:grid-cols-3";
		}

		if (images.length === 5) {
			return "grid-cols-2 md:grid-cols-3";
		}

		if (images.length <= 8) {
			return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
		}

		return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
	};

	return (
		<div className={`mt-8 grid gap-4 ${getGridClass()}`}>
			{images.map((image, index) => {
				const isFeatured = images.length >= 5 && index === 0;

				return (
					<a
						key={index}
						href={image.src}
						target="_blank"
						rel="noreferrer"
						className={`group relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
							isFeatured ? "col-span-2 row-span-2" : ""
						}`}
					>
						<div
							className={`relative aspect-4/3 ${
								isFeatured ? "h-full min-h-70" : ""
							}`}
						>
							<Image
								src={image}
								alt={`${title} – ${photoAltLabel} ${index + 1}`}
								fill
								sizes={
									isFeatured
										? "(max-width: 768px) 100vw, 50vw"
										: "(max-width: 768px) 50vw, 25vw"
								}
								className="object-cover transition duration-500 group-hover:scale-[1.03]"
							/>

							<div className="absolute inset-0 transition bg-black/0 group-hover:bg-black/10" />

							<div className="absolute px-3 py-1 text-xs font-medium transition rounded-full shadow-sm opacity-0 right-3 bottom-3 bg-white/90 text-stone-700 backdrop-blur group-hover:opacity-100">
								{openImageLabel}
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
}
