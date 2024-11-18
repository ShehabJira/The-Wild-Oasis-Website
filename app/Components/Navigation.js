import Link from "next/link";

function Navigation() {
	return (
		<ul>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/cabins">Cabins</Link>
			</li>
			<li>
				<Link href="/account">Account</Link>
			</li>
			<li>
				<Link href="/about">About</Link>
			</li>
		</ul>
	);
}
// Every href in Link will be prefetched and cashed, so they make the app as SPA.
export default Navigation;
