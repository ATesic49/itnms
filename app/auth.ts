import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const adminEmails =
	process.env.ADMIN_EMAILS?.split(",")
		.map((email) => email.trim().toLowerCase())
		.filter(Boolean) ?? [];

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [Google],

	pages: {
		signIn: "/prijava",
	},

	callbacks: {
		async signIn({ user }) {
			const email = user.email?.trim().toLowerCase();

			if (!email) {
				return false;
			}

			return adminEmails.includes(email);
		},
	},
});
