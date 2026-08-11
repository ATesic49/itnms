// import "server-only";

// import { auth } from "@/app/auth";

// export async function requireAdmin() {
// 	const session = await auth();

// 	const adminEmails =
// 		process.env.ADMIN_EMAILS?.split(",")
// 			.map((email) => email.trim().toLocaleLowerCase())
// 			.filter(Boolean) ?? [];

// 	const userEmail = session?.user?.email?.trim().toLocaleLowerCase();

// 	if (!userEmail) {
// 		return {
// 			authorized: false as const,
// 			status: 401,
// 			session: null,
// 		};
// 	}

// 	if (!adminEmails.includes(userEmail)) {
// 		return {
// 			authorized: false as const,
// 			status: 403,
// 			session,
// 		};
// 	}

// 	return {
// 		authorized: true as const,
// 		status: 200,
// 		session,
// 	};
// }

import "server-only";

import { auth } from "@/app/auth";

export async function requireAdmin() {
	const session = await auth();

	const adminEmails =
		process.env.ADMIN_EMAILS?.split(",")
			.map((email) => email.trim().toLowerCase())
			.filter(Boolean) ?? [];

	const email = session?.user?.email?.trim().toLowerCase();

	console.log("Prijavljeni korisnik:", email);
	console.log("Dozvoljeni admini:", adminEmails);

	if (!email) {
		return {
			authorized: false as const,
			status: 401,
		};
	}

	if (!adminEmails.includes(email)) {
		return {
			authorized: false as const,
			status: 403,
		};
	}

	return {
		authorized: true as const,
		status: 200,
		email,
	};
}
