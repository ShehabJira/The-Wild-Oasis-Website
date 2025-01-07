// npm install next-auth@beta

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	callbacks: {
		authorized({ auth, request }) {
			// this function needs to return true of false, if true means this is an authorized user and allowed to go through the protected routes, else means unauthorized.
			// next auth will call this function whenever one user tries to access some protected route.
			return !!auth?.user; // !auth?.user => if there is no user will be true => then ! => will make it false.
		},
		// [1] We want to create a new user in supabase database if the user signing in now is not there.
		async signIn({ user, account, profile }) {
			// This callback here actually runs before the actual signup process happens. That means we can perform all kinds of operations here that are associated with the signing in process. So, it's a bit like middleware. It happens after the user has put in their credentials, but before they're actually logged into the application.
			try {
				const existingGuest = await getGuest(user.email); // if we have a guest, we are done here

				if (!existingGuest) await createGuest({ email: user.email, fullName: user.name }); // if not, then create one.

				// In order to move on in the sign in process, here, we need to return true if everything went well. So it's a little bit like we need to return true or false here in the authorized callback. So if everything went well here, then we need to return true, and if not, we return false. And so, if some error happens here in this getGuest function, then we will move to the catch block and then we return false. And so then the user is not going to become logged in.
				return true;
			} catch {
				return false;
			}
		},
		// [2] we want to get the logged-in guest id from supabase and add it to the user session, so we can see and update their information.
		async session({ session, user }) {
			// This callback runs after the sign in callback, and also each time that the session is checked out. So, for example, when we call that auth function.
			const guest = await getGuest(session.user.email);
			session.user.guestId = guest.id;
			// we cannot make the session in the signIn callback because the session in there has not been created yet.
			return session;
		},
	},
	pages: {
		signIn: "/login", // to replace the provided sign in page by our custom page. (when signing in go to route /login)
	},
};

export const {
	auth, // auth has many functionalities, it servers to get the current session, and also servers right as middleware
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth(authConfig);
