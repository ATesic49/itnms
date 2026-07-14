import Image from "next/image";
import React from "react";
import logo1 from "@/public/imgs/vest.png";
import Vest from "./Vest";
import Card from "./Card";

import CardPhoto from "./CardPhoto";
const Vesti = () => {
	return (
		<div className="flex flex-col items-start justify-start w-full gap-16 px-16 py-16 cursor-pointer ">
			<h2 className="text-4xl font-bold underline text-primary w-fit underline-offset-8 font-naslov">
				Obaveštenja
			</h2>
			<div className="grid grid-cols-2 gap-8 ">
				<Card>
					<Vest></Vest>
				</Card>
				<Card>
					<Vest></Vest>
				</Card>
				<Card>
					<Vest></Vest>
				</Card>
			</div>
		</div>
	);
};

export default Vesti;
