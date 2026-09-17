import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
	{ label: "O institutu", href: "/o-institutu" },
	{ label: "Istraživači", href: "/istrazivaci" },
	{ label: "Projekti", href: "/projekti" },
	{ label: "Usluge", href: "/usluge" },
	{ label: "Kvalitet", href: "/kvalitet-i-akreditacije" },
	{ label: "Dokumenta", href: "/dokumenta" },
	{ label: "Kontakt", href: "/kontakt" },
];

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full">
			{/* Gornja kontakt traka */}
			<div className="hidden text-sm text-white bg-institute-950 lg:block">
				<div className="flex items-center justify-between px-6 py-2 mx-auto max-w-7xl lg:px-8">
					<div className="flex items-center gap-6">
						<Link
							href="mailto:itnms@itnms.ac.rs"
							className="transition hover:text-institute-200"
						>
							itnms@itnms.ac.rs
						</Link>

						<Link
							href="tel:+381113691722"
							className="transition hover:text-institute-200"
						>
							+381 11 3691 722
						</Link>
					</div>

					<div className="flex items-center gap-5">
						<button
							type="button"
							className="flex items-center gap-2 transition hover:text-institute-200"
							aria-label="Pretraži sajt"
						>
							<Search className="w-4 h-4" />
							Pretraga
						</button>

						<div className="flex items-center gap-2">
							<Link
								href="/"
								className="font-semibold"
							>
								SR
							</Link>

							<span className="text-stone-400">|</span>

							<Link
								href="/en"
								className="transition text-stone-300 hover:text-white"
							>
								EN
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Glavni navbar */}
			<div className="border-b border-stone-200 bg-white/95 backdrop-blur">
				<div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl lg:px-8">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center gap-3 shrink-0"
					>
						<div className="flex items-center justify-center text-sm font-bold text-white rounded-md h-11 w-11 bg-institute-800">
							IT
						</div>

						<div className="hidden xl:block">
							<p className="text-base font-semibold leading-tight text-stone-900">
								ITNMS
							</p>

							<p className="mt-1 max-w-[260px] text-xs leading-4 text-stone-500">
								Institut za tehnologiju nuklearnih i drugih mineralnih sirovina
							</p>
						</div>
					</Link>

					{/* Desktop navigacija */}
					<nav
						className="items-center hidden gap-1 lg:flex"
						aria-label="Glavna navigacija"
					>
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="px-3 py-2 text-sm font-medium transition rounded-md  text-stone-700 hover:bg-institute-50 hover:text-institute-800"
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* Desktop dugme */}
					<Link
						href="/kontakt"
						className="
              hidden shrink-0 items-center justify-center
              rounded-md bg-institute-800
              px-5 py-2.5
              text-sm font-semibold text-white
              transition
              hover:bg-institute-900
              xl:inline-flex
            "
					>
						Pošaljite upit
					</Link>

					{/* Mobilne kontrole */}
					<div className="flex items-center gap-2 lg:hidden">
						<button
							type="button"
							className="p-2 rounded-md text-stone-700 hover:bg-stone-100"
							aria-label="Pretraži sajt"
						>
							<Search className="w-5 h-5" />
						</button>

						<button
							type="button"
							onClick={() => setMobileMenuOpen((open) => !open)}
							className="p-2 rounded-md text-stone-700 hover:bg-stone-100"
							aria-label={mobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
							aria-expanded={mobileMenuOpen}
						>
							{mobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobilni meni */}
				{mobileMenuOpen && (
					<div className="bg-white border-t border-stone-200 lg:hidden">
						<nav
							className="px-6 py-5 mx-auto max-w-7xl"
							aria-label="Mobilna navigacija"
						>
							<div className="flex flex-col gap-1">
								{navigation.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className="px-3 py-3 text-base font-medium rounded-md  text-stone-700 hover:bg-institute-50 hover:text-institute-800"
									>
										{item.label}
									</Link>
								))}
							</div>

							<div className="pt-5 mt-5 border-t border-stone-200">
								<div className="flex items-center justify-between">
									<Link
										href="/kontakt"
										className="px-5 py-3 text-sm font-semibold text-white rounded-md  bg-institute-800"
									>
										Pošaljite upit
									</Link>

									<div className="flex items-center gap-2 text-sm">
										<Link
											href="/"
											className="font-semibold text-institute-800"
										>
											SR
										</Link>

										<span className="text-stone-300">|</span>

										<Link
											href="/en"
											className="text-stone-600"
										>
											EN
										</Link>
									</div>
								</div>

								<div className="mt-5 space-y-2 text-sm text-stone-600">
									<Link
										href="mailto:itnms@itnms.ac.rs"
										className="block hover:text-institute-800"
									>
										itnms@itnms.ac.rs
									</Link>

									<Link
										href="tel:+381113691722"
										className="block hover:text-institute-800"
									>
										+381 11 3691 722
									</Link>
								</div>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
