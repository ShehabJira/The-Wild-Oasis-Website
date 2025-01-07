// import { NextResponse } from "next/server";

// export function middleware(request) {
// 	console.log(request);
// 	return NextResponse.redirect(new URL("/about", request.url));
// }

// // middleware runs on every single route, we can specify only needed routes by using matcher.
// export const config = {
// 	matcher: ["/account"],
// 	// if the user is unauthorized, and visited '/account', he will be redirected to '/about'
// };

//----------------------------------------------------------------

// Using the middleware that comes from auth.js (NextAuth)

import { auth } from "./app/_lib/auth";
// [1] export auth from middleware.js which is defined at the root level of our project.
export const middleware = auth; // we just changed the name of auth to middleware to be more explicit.

// [2] write the routes you wanna protect, and export it as well. (if the user is not authorized, they will be redirected to a signin page provided by next auth(we can replace it by our custom one) )
export const config = {
	matcher: ["/account"],
};
