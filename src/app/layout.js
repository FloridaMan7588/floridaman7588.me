import { Raleway } from "next/font/google";
import "./globals.css";
import Header from './components/header.js';


const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "FloridaMan7588",
  description: "FloridaMan's Personal Website built with Next.js and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="{raleway.className} bg-base">
        <Header />
        {children}
        </body>
    </html>
  );
}
