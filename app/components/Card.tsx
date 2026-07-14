import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className="rounded-xl
border border-stone-200
bg-white
p-6
shadow-sm
transition
hover:-translate-y-1
hover:shadow-md"
		>
			{children}
		</div>
	);
};

export default Card;
