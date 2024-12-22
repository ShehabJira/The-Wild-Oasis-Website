import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
	return (
		<Link href="/" className="flex items-center gap-4 z-10">
			{/* <Image src="/logo.png" height="60" width="60" quality={100} alt="The Wild Oasis logo" /> */}
			<Image src={logo} height="60" width="60" quality={100} alt="The Wild Oasis logo" />
			<span className="text-xl font-semibold text-primary-100">The Wild Oasis</span>
		</Link>
	);
}

export default Logo;

/* Image component
  What this Image component does is three important things.
  #First, it will automatically serve correctly sized images in modern formats. For example, WebP.
  when it's actually necessary.
  #Second, the Image component prevents layout shifts because it forces us to specify the exact height and width.
  #finally, it also automatically lazy loads images only when they actually enter the viewport.

  Note!
  importing the image, and then we use that imported image. Next.js will be able to analyze the image first,
  and then we do not need to specify the height and width.
  At least, it is not gonna be mandatory and will not cause an error.
  
  Note!
  the default quality is less than 100 
  fill  => make image position absolute width and height: 100%, inset: 0 and make the image take the full screen
  placeholder="blur" => to plur image while loading. (used with statically imported images only)
  quality (used with statically imported images only)

  Note! 
  If you are using images from database and don't wanna use width and height to make image fluid.
  give the Image "fill" and give the div container of the image 'relative' and 'aspect-ratio' 
 */
