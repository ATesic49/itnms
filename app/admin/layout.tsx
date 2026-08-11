// import { redirect } from "next/navigation";

// import { auth } from "@/app/auth";

// type AdminLayoutProps = {
// 	children: React.ReactNode;
// };

// export default async function AdminLayout({ children }: AdminLayoutProps) {
// 	const session = await auth();

// 	const adminEmails =
// 		process.env.ADMIN_EMAILS?.split(",")
// 			.map((email) => email.trim().toLocaleLowerCase())
// 			.filter(Boolean) ?? [];

// 	const userEmail = session?.user?.email?.trim().toLocaleLowerCase();

// 	if (!userEmail || !adminEmails.includes(userEmail)) {
// 		redirect("/prijava");
// 	}

// 	return <>{children}</>;
// }

// import { signOut } from "@/app/auth";

// export default async function AdminLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	// Provera admina...

// 	return (
// <>
// 	<header className="bg-white border-b border-stone-200">
// 		<div className="flex items-center justify-between max-w-6xl px-5 py-4 mx-auto">
// 			<p className="font-semibold text-stone-900">ITNMS administracija</p>

// 			<form
// 				action={async () => {
// 					"use server";

// 					await signOut({
// 						redirectTo: "/prijava",
// 					});
// 				}}
// 			>
// 				<button
// 					type="submit"
// 					className="text-sm font-semibold text-stone-600 hover:text-stone-900"
// 				>
// 					Odjavi se
// 				</button>
// 			</form>
// 		</div>
// 	</header>

// 	{children}
// </>
// 	);
// }
import { redirect } from "next/navigation";

import { auth, signOut } from "@/app/auth";

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	const userEmail = session?.user?.email?.trim().toLowerCase();

	const adminEmails =
		process.env.ADMIN_EMAILS?.split(",")
			.map((email) => email.trim().toLowerCase())
			.filter(Boolean) ?? [];

	console.log("ADMIN LAYOUT SESSION:", session);
	console.log("PRIJAVLJEN EMAIL:", userEmail);
	console.log("ADMIN EMAILS:", adminEmails);

	if (!userEmail) {
		console.log("Nema emaila u sesiji");
		redirect("/");
	}

	if (!adminEmails.includes(userEmail)) {
		console.log("Email nije na listi admina");
		redirect("/");
	}

	return (
		<>
			<header className="bg-white border-b border-stone-200">
				<div className="flex items-center justify-between max-w-6xl px-5 py-4 mx-auto">
					<p className="font-semibold text-stone-900">ITNMS administracija</p>

					<form
						action={async () => {
							"use server";

							await signOut({
								redirectTo: "/prijava",
							});
						}}
					>
						<button
							type="submit"
							className="text-sm font-semibold text-stone-600 hover:text-stone-900"
						>
							Odjavi se
						</button>
					</form>
				</div>
			</header>

			{children}
		</>
	);
}
