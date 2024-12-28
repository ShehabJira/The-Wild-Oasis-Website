/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "jzaznxqivkamungjldfs.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/cabin-images/**",
			},
		],
	},
	// output: "export",
	//output => The type of build output. "export" => our site will be exported as static assets that we can deploy anywhere. (SSG) needs all routes to be static
};

export default nextConfig;
