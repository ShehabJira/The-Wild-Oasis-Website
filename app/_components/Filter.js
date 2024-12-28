"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
	// we will share state from client to server by URL
	const params = new URLSearchParams();
	const router = useRouter(); // from "next/navigation" not "next/router"    => it makes programmtic navigation.
	const pathname = usePathname();

	const searchParams = useSearchParams();
	const activeFilter = searchParams?.get("capacity") ?? "all";

	function handleFilter(filter) {
		params.set("capacity", filter);
		router.replace(`${pathname}?${params.toString()}`, { scroll: false }); // scroll false to prevent the page from going up.
	}

	return (
		<div className="border border-primary-800 flex">
			<Button filter="all" activeFilter={activeFilter} handleFilter={handleFilter}>
				All cabins
			</Button>
			<Button filter="small" activeFilter={activeFilter} handleFilter={handleFilter}>
				1&mdash;3 guests
			</Button>
			<Button filter="medium" activeFilter={activeFilter} handleFilter={handleFilter}>
				4&mdash;7 guests
			</Button>
			<Button filter="large" activeFilter={activeFilter} handleFilter={handleFilter}>
				8&mdash;12 guests
			</Button>
		</div>
	);
}

function Button({ filter, activeFilter, handleFilter, children }) {
	return (
		<button
			className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`}
			onClick={() => handleFilter(filter)}
		>
			{children}
		</button>
	);
}
export default Filter;
