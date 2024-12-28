import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// export const metadata = {
// 	title: "Cabin",
// };

// Generate Dynamic Metadata
export async function generateMetadata({ params }) {
	const { name } = await getCabin(params.cabinId);

	return {
		title: `Cabin ${name}`,
	};
}

// Converting Dynamic Pages into Static with generateStaticParams function => which tells next.js about your set of values for a dynamic segment of a URL. Then this route can be entirely statically generated, which is a lot better for performance. As if all our routes are static we can do static site generation (SSG)
export async function generateStaticParams() {
	// we want to return an array of objects each object has cabinId property(as it is the name of the dynamic route) and it's value as string.
	const cabins = await getCabins();
	const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

	return ids;
}

export default async function Page({ params }) {
	const cabin = await getCabin(params.cabinId); // params name will be the same as the dynamic segment name.
	// const settings = await getSettings();
	// const bookedDates = await getBookedDatesByCabinId(params.cabinId);
	// ⬆ each one will await its previous one to be finished first, and this lead to "A Blocking Waterfall"

	// const [cabin, settings, bookedDates] = await Promise.all([getCabin(params.cabinId), getSettings(), getBookedDatesByCabinId(params.cabinId)]);
	// ⬆ This one is better but if one of them took 5s, the rest of them will wait for it so they can come all together.
	// Note! better than the previous one, we can just create a bunch of different components and then have each component fetch all the data that it needs, and then those components can be streamed in as they become ready.

	return (
		<div className="max-w-6xl mx-auto mt-8">
			<Cabin cabin={cabin} />
			<div>
				<h2 className="text-5xl font-semibold text-center text-accent-400 mb-10">Reserve {cabin.name} today. Pay on arrival.</h2>
				<Suspense fallback={<Spinner />}>
					<Reservation cabin={cabin} />
				</Suspense>
			</div>
		</div>
	);
}
