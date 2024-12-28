import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// export const revalidate = 0;  // opt out of caching
// export const revalidate = 3600; // every 1 hour (in secs)
// Note! we apply these ⬆ to static page, if we used searchParams this current page will be dynamic, so no need to use them.

export const metadata = {
	title: "Cabins",
};

// Note! searchParams only available at page.js files, so not in all server components.
// Note! changing searchParams will change the URL. In turn, this Page server component will get re-render whenever the searchParams changes.
export default function Page({ searchParams }) {
	const filter = searchParams?.capacity ?? "all"; // (small - medium - large - all)

	return (
		<div>
			<h1 className="text-4xl mb-5 text-accent-400 font-medium">Our Luxury Cabins</h1>
			<p className="text-primary-200 text-lg mb-10">
				Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending your days
				exploring the dark forests around, or just relaxing in your private hot tub under the stars. Enjoy nature&apos;s beauty in your own little home away
				from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.
			</p>
			<div className="flex justify-end mb-8">
				<Filter />
			</div>
			<Suspense fallback={<Spinner />} key={filter}>
				<CabinList filter={filter} />
				<ReservationReminder />
			</Suspense>
		</div>
	);
}

/* Note! in Suspense
  A navigation(just we did in Filter component by getting a new URL) in Next.js is always wrapped in a React transition.
  And in a transition, the suspense will not hide the content that has already been rendered earlier.
  So that's just the default behavior of suspense. So, Next.js automatically wraps this page with transition.
  we can actually fix this by passing in a unique key.
*/
