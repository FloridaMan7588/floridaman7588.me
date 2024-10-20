import { Raleway } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false
import "@/globals.css";
import Statistics from "@components/statistics";

const raleway = Raleway({ subsets: ["latin"], preload: true, variable: "--font-raleway" });

export const metadata = {
	title: "Pascalrr's Site",
	description: "Pascalrr's Personal Website built with Next.js",
	robots: {
		index: true,
		follow: true,
	}
};

export default function GlobalLayout({ children }) {
	return (
		<html lang="en" className='scroll-smooth scrollbar-none'>
			<body className={`${raleway.variable} font-sans bg-ctp-base`}>
				<Statistics />
				{children}
			</body>
		</html>
	);
}
