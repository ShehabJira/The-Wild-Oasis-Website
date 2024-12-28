import Link from "next/link";

function NotFound() {
	return (
		<main className="text-center space-y-6 mt-4">
			<h1 className="text-3xl font-semibold">This page could not be found :(</h1>
			<Link href="/" className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg">
				Go back home
			</Link>
		</main>
	);
}

export default NotFound;

/* Note!
  In Next.js, the not found page can actually be shown in two ways.
  First, an automatic way, simply if the URL doesn't exist in the static URLs we provided.
  And second, we can also manually trigger this page by calling the notFound function.
  And we're going to do that in the case of calling a dynamic url that is not found and cause an error like [cabinId]. 
  So we go to where we fetch the data. and say that if there is an error we want to call manually notFound function.
*/
