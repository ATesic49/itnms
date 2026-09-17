import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const CardPhoto = ({
	src,
	alt,
	children,
}: {
	children: React.ReactNode;
	alt: string;
	src: string | StaticImport;
}) => {
	return (
		<div className="overflow-hidden bg-white border shadow-sm  rounded-xl border-stone-200">
			<Image
				sizes="(min-width: 1024px) 50vw, 100vw"
				className="aspect-[4/3]
w-full
object-cover"
				src={src}
				alt={alt}
			></Image>
			<div className="p-6">{children}</div>
		</div>
	);
};

export default CardPhoto;
