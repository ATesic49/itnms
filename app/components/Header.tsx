import { Menu, Search, X } from "lucide-react";
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
			<div className="hidden bg-institute-950 text-sm text-white lg:block">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
					<div className="flex items-center gap-6">
						<a
							href="mailto:itnms@itnms.ac.rs"
							className="transition hover:text-institute-200"
						>
							itnms@itnms.ac.rs
						</a>

						<a
							href="tel:+381113691722"
							className="transition hover:text-institute-200"
						>
							+381 11 3691 722
						</a>
					</div>

					<div className="flex items-center gap-5">
						<button
							type="button"
							className="flex items-center gap-2 transition hover:text-institute-200"
							aria-label="Pretraži sajt"
						>
							<Search className="h-4 w-4" />
							Pretraga
						</button>

						<div className="flex items-center gap-2">
							<a
								href="/"
								className="font-semibold"
							>
								SR
							</a>

							<span className="text-stone-400">|</span>

							<a
								href="/en"
								className="text-stone-300 transition hover:text-white"
							>
								EN
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Glavni navbar */}
			<div className="border-b border-stone-200 bg-white/95 backdrop-blur">
				<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
					{/* Logo */}
					<a
						href="/"
						className="flex shrink-0 items-center gap-3"
					>
						<div className="flex h-11 w-11 items-center justify-center rounded-md bg-institute-800 text-sm font-bold text-white">
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
					</a>

					{/* Desktop navigacija */}
					<nav
						className="hidden items-center gap-1 lg:flex"
						aria-label="Glavna navigacija"
					>
						{navigation.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="
                  rounded-md px-3 py-2
                  text-sm font-medium text-stone-700
                  transition
                  hover:bg-institute-50
                  hover:text-institute-800
                "
							>
								{item.label}
							</a>
						))}
					</nav>

					{/* Desktop dugme */}
					<a
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
					</a>

					{/* Mobilne kontrole */}
					<div className="flex items-center gap-2 lg:hidden">
						<button
							type="button"
							className="rounded-md p-2 text-stone-700 hover:bg-stone-100"
							aria-label="Pretraži sajt"
						>
							<Search className="h-5 w-5" />
						</button>

						<button
							type="button"
							onClick={() => setMobileMenuOpen((open) => !open)}
							className="rounded-md p-2 text-stone-700 hover:bg-stone-100"
							aria-label={mobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
							aria-expanded={mobileMenuOpen}
						>
							{mobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobilni meni */}
				{mobileMenuOpen && (
					<div className="border-t border-stone-200 bg-white lg:hidden">
						<nav
							className="mx-auto max-w-7xl px-6 py-5"
							aria-label="Mobilna navigacija"
						>
							<div className="flex flex-col gap-1">
								{navigation.map((item) => (
									<a
										key={item.href}
										href={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className="
                      rounded-md px-3 py-3
                      text-base font-medium text-stone-700
                      hover:bg-institute-50
                      hover:text-institute-800
                    "
									>
										{item.label}
									</a>
								))}
							</div>

							<div className="mt-5 border-t border-stone-200 pt-5">
								<div className="flex items-center justify-between">
									<a
										href="/kontakt"
										className="
                      rounded-md bg-institute-800
                      px-5 py-3
                      text-sm font-semibold text-white
                    "
									>
										Pošaljite upit
									</a>

									<div className="flex items-center gap-2 text-sm">
										<a
											href="/"
											className="font-semibold text-institute-800"
										>
											SR
										</a>

										<span className="text-stone-300">|</span>

										<a
											href="/en"
											className="text-stone-600"
										>
											EN
										</a>
									</div>
								</div>

								<div className="mt-5 space-y-2 text-sm text-stone-600">
									<a
										href="mailto:itnms@itnms.ac.rs"
										className="block hover:text-institute-800"
									>
										itnms@itnms.ac.rs
									</a>

									<a
										href="tel:+381113691722"
										className="block hover:text-institute-800"
									>
										+381 11 3691 722
									</a>
								</div>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
