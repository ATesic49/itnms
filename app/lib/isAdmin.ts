import "server-only";

import { auth } from "@/app/auth";

export async function isCurrentUserAdmin(): Promise<boolean> {
	const session = await auth();

	const adminEmails =
		process.env.ADMIN_EMAILS?.split(",")
			.map((email) => email.trim().toLowerCase())
			.filter(Boolean) ?? [];

	const userEmail = session?.user?.email?.trim().toLowerCase();

	return Boolean(userEmail && adminEmails.includes(userEmail));
}
