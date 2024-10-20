import Header from '@components/nav/header';
import Footer from '@components/nav/footer';
import ToTop from '@components/nav/toTop';
import ONeko from "@components/neko";

export default function RootLayout({ children }) {
	return (
		<html lang="en" className='scroll-smooth scrollbar-none'>
			<body className='font-sans bg-ctp-base'>
				<Header />
				{children}
				<ToTop />
				<Footer />
				<ONeko />
			</body>
		</html>
	);
}
