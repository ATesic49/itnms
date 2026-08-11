import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const adminEmails = [process.env.ADMIN_EMAIL].filter((email): email is string =>
	Boolean(email),
);

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [Google],

	pages: {
		signIn: "/prijava",
	},

	callbacks: {
		async signIn({ user }) {
			const email = user.email?.trim().toLocaleLowerCase();

			if (!email) {
				return false;
			}

			return adminEmails.some(
				(adminEmail) => adminEmail.trim().toLocaleLowerCase() === email,
			);
		},
	},
});
