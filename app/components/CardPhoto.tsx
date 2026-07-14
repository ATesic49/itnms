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
		<div
			className="
    
    overflow-hidden
rounded-xl
border border-stone-200
bg-white
shadow-sm
    "
		>
			<Image
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
