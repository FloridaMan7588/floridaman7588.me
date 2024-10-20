import ToTop from '@components/nav/toTop';
import ONeko from "@components/neko";

export const metadata = {
	title: "Pascalrr's Links",
	description: "Pascalrr's Personal Website built with Next.js",
	robots: {
		index: true,
		follow: true,
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className='scroll-smooth scrollbar-none'>
			<body className='font-sans'>
				<code><a rel="me" href="https://blahaj.zone/@floridaman"></a></code>
				{children}
				<ToTop />
				<ONeko />
			</body>
		</html>
	);
}
