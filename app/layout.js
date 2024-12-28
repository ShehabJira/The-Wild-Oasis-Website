// [1] we import the font we need(will be imported as a function), [2] call that function with our configuration, [3] import the className from the font to the body className or any element.
import { Josefin_Sans } from "next/font/google"; // Nextjs allows us to easily self-host any google font we want, without that font being downloaded from google. (prevents layout shift, improve performance, and privacy) as downloading fonts from google is not good for privacy and might be a problem with GDPR regulation(General Data Protection Regulation).
// next/font/local if you want to import your local fonts from your PC
import "./_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
	subsets: ["latin"], // the set of characters.
	display: "swap", // display the text in a default while downloading the font, then swap to the font
	// this is a font with a variable fontweight, if it's not variable font then we need to specify weight: ['100', ..]
});
// console.log(josefin);

export const metadata = {
	// title: "The Wild Oasis",
	title: {
		template: "%s | The Wild Oasis", // we add whatever title is exported from each route in %s.
		default: "Welcome | The Wild Oasis",
	},
	description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
	//Note: if you put an image called icon in the app folder, it will be the favicon.
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}>
				<Header />
				<div className="flex-1 px-8 py-12 grid">
					<main className=" mx-auto max-w-7xl w-full">
						{/* we are passing here a server component inside a client component, but no problem at all, as we are passing it as children prop */}
						<ReservationProvider>{children}</ReservationProvider>
					</main>
				</div>
			</body>
		</html>
	);
}

// npm i @heroicons/react            (comming from tailwind)
