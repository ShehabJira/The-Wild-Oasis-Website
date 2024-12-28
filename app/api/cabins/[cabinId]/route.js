import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
	// In order to send back a response or even to check out the request itself, these route handlers use web standards such as Request and Response.
	// We're gonna build an API endpoint for affiliates, where these affiliates can get data about a cabin, based on an ID passed as a parameter.
	const { cabinId } = params;

	try {
		const [cabin, bookedDates] = await Promise.all([getCabin(cabinId), getBookedDatesByCabinId(cabinId)]);
		return Response.json({ cabin, bookedDates }); // And so this is the data that we want to provide to our imaginary affiliates. And doing it like this, so creating our own API endpoint, is really nice because this way we don't have to expose or Supabase API endpoint to these affiliates. Plus, we can also very easily aggregate different data sources from parts of the Supabase API that are not even publicly accessible. And while doing this, we can also keep our API keys hidden. So basically, creating a nice and easy to use abstraction for someone who might want to consume our data in a custom way.
	} catch {
		return Response.json({ message: "Cabin not found" });
	}
}

// export async function POST(){}
// it should be really that name POST, GET, PATCH, DELETE,.. we cannot use another name.

/* Creating our own API endpoints with Route Handlers
  [1] Creating our own API endpoints in Next.js is not as important anymore as it was previously in the Pages Router,
  because now, in order to mutate data, we have server actions.
  previously, in the Pages Router, the main way of mutating data was to create API endpoints.
  But again, that's no longer really necessary in Next.js now.

  [2] We can create our own API endpoints, by using a feature called Route Handlers.
  So we can create a route handler by creating another convention file called route.js
  in this case, this route.js file can be in any folder that doesn't have a page.js yet.
  And that's important because when a request is sent to the URL that corresponds to the route handler,
  no HTML is returned, but instead, the route handler is gonna be executed and then usually returns some JSON data.
  And so if there was also a page.js file in the same folder, that would then create a conflict,
  because of course, we cannot send HTML and JSON data at the same time.

  [3] From this route.js, we can export one or more functions where each of them can correspond to one of 
  the HTTP verbs.

*/
