"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/imgs/Logo ITNMS eng prozirni.png";

const Map = dynamic(() => import("@/app/components/Map"), {
	ssr: false,
});

type FooterProps = {
	content: {
		contactTitle: string;
		fullName: string;
		email: string;
		message: string;
		send: string;
	};
	lang: "sr" | "en";
};

const Footer = ({ content, lang }: FooterProps) => {
	const homeHref = lang === "en" ? "/en" : "/";

	return (
		<footer className="w-full px-8 py-16 text-gray-200 bg-black font-text">
			<div className="grid gap-16 lg:grid-cols-5">
				<div className="flex flex-col gap-8 lg:col-span-3">
					<h2 className="text-4xl font-bold">{content.contactTitle}</h2>

					<form className="flex flex-col w-full max-w-xl gap-6">
						<div>
							<label
								htmlFor="footer-name"
								className="block mb-2 text-sm font-medium text-gray-300"
							>
								{content.fullName}
							</label>

							<input
								id="footer-name"
								name="name"
								type="text"
								className="w-full px-4 py-3 text-gray-800 transition bg-white rounded-md outline-none focus:ring-2 focus:ring-mineral-500"
							/>
						</div>

						<div>
							<label
								htmlFor="footer-email"
								className="block mb-2 text-sm font-medium text-gray-300"
							>
								{content.email}
							</label>

							<input
								id="footer-email"
								name="email"
								type="email"
								className="w-full px-4 py-3 text-gray-800 transition bg-white rounded-md outline-none focus:ring-2 focus:ring-mineral-500"
							/>
						</div>

						<div>
							<label
								htmlFor="footer-message"
								className="block mb-2 text-sm font-medium text-gray-300"
							>
								{content.message}
							</label>

							<textarea
								id="footer-message"
								name="message"
								rows={5}
								className="w-full px-4 py-3 text-gray-800 transition bg-white rounded-md outline-none resize-y focus:ring-2 focus:ring-mineral-500"
							/>
						</div>

						<button
							type="submit"
							className="px-5 py-3 ml-auto text-base font-semibold text-white transition rounded-md bg-primary hover:opacity-90"
						>
							{content.send}
						</button>
					</form>

					<Link
						href={homeHref}
						aria-label="ITNMS"
						className="w-fit"
					>
						<Image
							sizes="(min-width: 1024px) 50vw, 100vw"
							className="w-48 brightness-200"
							src={logo}
							alt="ITNMS"
						/>
					</Link>
				</div>

				<div className="w-full overflow-hidden min-h-105 rounded-xl lg:col-span-2">
					<Map />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
