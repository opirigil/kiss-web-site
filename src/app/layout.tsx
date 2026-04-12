import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Anton,
  Syne_Mono,
} from "next/font/google";
import "./globals.css";
import BurgerMenu from "@/components/BurgerMenu";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const syneMono = Syne_Mono({
  variable: "--font-syne-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "WILD CLUB",
  description: "Something is coming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${anton.variable} ${syneMono.variable} antialiased`}
    >
      <body>
        <BurgerMenu />
        {children}
      </body>
    </html>
  );
}
