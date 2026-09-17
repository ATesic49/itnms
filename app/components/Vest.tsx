import Image from "next/image";
import React from "react";
import logo1 from "@/public/imgs/vest.png";
import Link from "next/link";

const Vest = ({ link }: { link?: string }) => {
	return (
		<Link href={link ? link : "/"}>
			<div className="relative flex justify-center w-full gap-4 overflow-hidden active:translate-y-1 group">
				<p className="absolute text-gray-500 top-4 w-fit right-4 group-hover:underline underline-offset-2 ">
					26.5.2026.
				</p>
				<Image
					sizes="(min-width: 1024px) 50vw, 100vw"
					className="object-cover w-32"
					src={logo1}
					alt=""
				></Image>
				<div className="flex flex-col gap-4 p-4">
					<h3 className="text-2xl underline text-primary underline-offset-4 ">
						Javni konkurs
					</h3>
					<p className="text-gray-400 max-w-[65em]  ">
						Institut za tehnologiju nuklearnih i drugih mineralnih sirovina
						(ITNMS) Beograd je dana 20.02.2026...
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Vest;

{
	/* <Link href={link ? link : "/"}>
	<div className="relative flex justify-center w-full gap-4 overflow-hidden duration-100 border border-gray-300 font-eb hover:bg-gray-100 active:translate-y-1 group">
		<p className="absolute text-gray-500 top-4 w-fit right-4 group-hover:underline underline-offset-2 ">
			26.5.2026.
		</p>
		<Image
			className="object-cover w-32"
			src={logo1}
			alt=""
		></Image>
		<div className="flex flex-col gap-4 p-4">
			<h3 className="text-2xl underline text-primary underline-offset-4 ">
				Javni konkurs
			</h3>
			<p className="text-gray-400 max-w-[65em]  ">
				Institut za tehnologiju nuklearnih i drugih mineralnih sirovina (ITNMS)
				Beograd je dana 20.02.2026...
			</p>
		</div>
	</div>
</Link>; */
}
