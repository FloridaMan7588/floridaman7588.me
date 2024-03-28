import { Raleway } from "next/font/google";
import "@/app/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from '@/app/components/nav/header.jsx';
import Footer from '@/app/components/nav/footer.jsx';
import ToTop from '@/app/components/nav/toTop.jsx';


const raleway = Raleway({ subsets: ["latin"], preload: true, variable: "--font-raleway" });

export const metadata = {
  title: "FloridaMan7588",
  description: "FloridaMan's Personal Website built with Next.js and React",
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth scrollbar-none'>
      <body className={`${raleway.variable} font-sans bg-ctp-base`}>
        <Header />
        {children}
        <ToTop />
        <Footer />
      </body>
    </html>
  );
}
