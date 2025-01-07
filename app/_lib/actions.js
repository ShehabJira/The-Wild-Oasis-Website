"use server";

import { signIn, signOut } from "./auth";

// this function will only be executed on the server
export async function signInAction() {
	await signIn("google", { redirectTo: "/account" }); // it takes the provider name, and object of options.
}

// it can also be called on client and only executed on the server.
export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
