import Image from "next/image";
import React from "react";
import logo1 from "@/public/imgs/vest.png";
import Link from "next/link";

const Vest = ({ link }: { link?: string }) => {
	return (
		<Link href={link ? link : "/"}>
			<div className="flex   justify-center gap-4  relative active:translate-y-1 overflow-hidden w-full group">
				<p className="absolute top-4 w-fit right-4 text-gray-500 group-hover:underline underline-offset-2	 ">
					26.5.2026.
				</p>
				<Image
					className="w-32 object-cover"
					src={logo1}
					alt=""
				></Image>
				<div className="flex flex-col gap-4 p-4">
					<h3 className="text-primary text-2xl underline underline-offset-4 ">
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
	<div className="flex  border justify-center font-eb  border-gray-300 gap-4 hover:bg-gray-100 relative duration-100 active:translate-y-1 overflow-hidden w-full group">
		<p className="absolute top-4 w-fit right-4 text-gray-500 group-hover:underline underline-offset-2	 ">
			26.5.2026.
		</p>
		<Image
			className="w-32 object-cover"
			src={logo1}
			alt=""
		></Image>
		<div className="flex flex-col gap-4 p-4">
			<h3 className="text-primary text-2xl underline underline-offset-4 ">
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
