// [...nextauth]  => called catch all segement
// and it means => all urls that starts with => /api/auth/[whatever we want] ex=> /api/auth/signout
// will be handled by this route.js file

// we will import GET and POST and immediately export them
export { GET, POST } from "@/app/_lib/auth";
