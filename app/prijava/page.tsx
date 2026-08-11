import { redirect } from "next/navigation";

import { auth, signIn } from "@/app/auth";

export default async function LoginPage() {
	const session = await auth();

	if (session?.user?.email) {
		redirect("/admin/vesti/dodaj");
	}

	return (
		<main className="flex items-center justify-center min-h-screen px-5 bg-stone-50">
			<div className="w-full max-w-md p-8 bg-white border shadow-sm rounded-2xl border-stone-200">
				<p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-700">
					Administracija
				</p>

				<h1 className="mt-3 text-3xl font-semibold text-stone-900">Prijava</h1>

				<p className="mt-4 text-sm leading-6 text-stone-600">
					Prijavite se ovlašćenim Google nalogom kako biste dodavali vesti i
					fotografije.
				</p>

				<form
					action={async () => {
						"use server";

						await signIn("google", {
							redirectTo: "/admin/vesti/dodaj",
						});
					}}
					className="mt-8"
				>
					<button
						type="submit"
						className="w-full px-5 py-3 text-sm font-semibold text-white transition rounded-md bg-institute-800 hover:bg-institute-900"
					>
						Prijavi se Google nalogom
					</button>
				</form>
			</div>
		</main>
	);
}
