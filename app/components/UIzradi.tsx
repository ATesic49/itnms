import { Construction, Hammer, Wrench } from "lucide-react";
import Link from "next/link";

export default function UnderConstructionPage() {
	return (
		<main className="flex items-center justify-center min-h-screen px-6 py-16 bg-stone-50">
			<div className="w-full max-w-2xl text-center">
				<div className="relative flex items-center justify-center w-full h-64 max-w-md mx-auto overflow-hidden bg-white border shadow-sm rounded-3xl border-stone-200">
					<div className="absolute left-8 top-8 flex h-14 w-14 rotate-[-12deg] items-center justify-center rounded-2xl bg-mineral-100 text-mineral-700">
						<Hammer
							className="h-7 w-7"
							aria-hidden="true"
						/>
					</div>

					<div className="absolute flex items-center justify-center bottom-8 right-8 h-14 w-14 rotate-12 rounded-2xl bg-institute-100 text-institute-700">
						<Wrench
							className="h-7 w-7"
							aria-hidden="true"
						/>
					</div>

					<div className="flex items-center justify-center w-32 h-32 rounded-full bg-stone-100">
						<Construction
							className="w-16 h-16 text-institute-700"
							strokeWidth={1.5}
							aria-hidden="true"
						/>
					</div>

					<div className="absolute bottom-0 left-0 h-2 w-full bg-[repeating-linear-gradient(135deg,#eab308_0px,#eab308_20px,#1c1917_20px,#1c1917_40px)]" />
				</div>

				<p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-mineral-700">
					Uskoro dostupno
				</p>

				<h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 md:text-6xl">
					Stranica je u izradi
				</h1>

				<p className="max-w-xl mx-auto mt-5 text-base leading-7 text-stone-600 md:text-lg">
					Trenutno radimo na pripremi sadržaja ove stranice. Posetite nas ponovo
					uskoro.
				</p>

				<Link
					href="/"
					className="inline-flex items-center justify-center px-6 py-3 mt-8 text-sm font-semibold text-white transition rounded-lg bg-institute-800 hover:bg-institute-900"
				>
					Nazad na početnu
				</Link>
			</div>
		</main>
	);
}
