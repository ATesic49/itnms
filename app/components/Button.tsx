import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

const Button = ({
	children,
	tip = 1,
	href,
}: {
	children: React.ReactNode;
	tip?: Number;
	href?: Url;
}) => {
	if (tip == 1) {
		return (
			<div className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold transition rounded-md cursor-pointer bg-institute-800 text-institute-50 hover:bg-institute-900 focus:outline-none focus:ring-2 focus:ring-institute-400 focus:ring-offset-2">
				{children}
			</div>
		);
	}
	if (tip == 2) {
		return (
			<div className="inline-flex items-center justify-center px-6 py-3 font-sans text-sm font-semibold transition border rounded-md cursor-pointer border-institute-700 text-institute-800 hover:bg-institute-50">
				{children}
			</div>
		);
	}
	if (tip == 3 && href) {
		return (
			<Link
				href={href}
				className="inline-flex items-center gap-2 font-semibold cursor-pointer text-institute-700 hover:text-institute-900"
			>
				{children}
			</Link>
		);
	}
};

export default Button;
