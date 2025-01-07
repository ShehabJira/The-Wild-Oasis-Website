import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
	const session = await auth();
	/* Note!
    since we're calling this auth function in the navigation, which is part of the layout,
    so it is part of every single route, this makes our entire website becomes dynamic because this component 
    is on every single route. So every single route is now dynamic, because we called the auth function.
    And so indirectly we are reading headers right here in this navigation now.
    So if you didn't want that, then here you would have to go back and not do that.
    that's just something very, very important to keep in mind.  
    
    auth function makes the route dynamic because
    this authentication works with cookies and headers.
    And so this auth function needs to read these cookies from the incoming request.
    And as we know, reading cookies actually switches the route to dynamic rendering
    because, of course, these cookies can only be known at runtime, so never at build time.
    So if we just statically built this site, we cannot know all the users that might eventually be logged in.
    So, of course, this needs to be dynamic.
  */
	return (
		<nav className="z-10 text-xl">
			<ul className="flex gap-16 items-center">
				<li>
					<Link href="/cabins" className="hover:text-accent-400 transition-colors">
						Cabins
					</Link>
				</li>
				<li>
					<Link href="/about" className="hover:text-accent-400 transition-colors">
						About
					</Link>
				</li>
				<li>
					{session?.user?.image ? (
						<Link href="/account" className="hover:text-accent-400 transition-colors flex items-center gap-4">
							<img className="h-8 rounded-full" src={session.user.image} alt={session.user.name} referrerPolicy="no-referrer" />
							<span>Guest area</span>
						</Link>
					) : (
						<Link href="/account" className="hover:text-accent-400 transition-colors">
							Guest area
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
