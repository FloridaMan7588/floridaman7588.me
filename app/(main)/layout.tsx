import { Raleway } from "next/font/google";
import "@/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from '@/components/nav/header';
import Footer from '@/components/nav/footer';
import ToTop from '@/components/nav/toTop';
import Statistics from "@/components/statistics";
import ONeko from "@/components/neko";

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
        <Statistics />
        <Header />
        {children}
        <ToTop />
        <Footer />
        <ONeko />
      </body>
    </html>
  );
}