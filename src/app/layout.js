import "aos/dist/aos.css";
import "./globals.css";

import { Outfit } from "next/font/google";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import PageSelect from "./layout/PageSelect";



const outfitFont = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Side",
  description: "The Exchange Layer of Web3",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfitFont.className}>
        <NavBar />
        {children}
        <PageSelect/>
        <Footer />
      </body>
    </html>
  );
}
