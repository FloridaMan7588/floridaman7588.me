import { Raleway } from "next/font/google";
import Header from '@components/nav/header';
import Footer from '@components/nav/footer';
import ToTop from '@components/nav/toTop';
import ONeko from "@components/neko";

const raleway = Raleway({ subsets: ["latin"], preload: true, variable: "--font-raleway" });


export default function RootLayout({ children }) {
	return (
		<html lang="en" className='scroll-smooth scrollbar-none'>
			<body className={`${raleway.variable} font-sans bg-ctp-base`}>
				<Header />
				{children}
				<ToTop />
				<Footer />
				<ONeko />
			</body>
		</html>
	);
}
