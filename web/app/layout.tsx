import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const blackFont = localFont({
  src: "../public/font/BLACK.otf",
  variable: "--font-blacko",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bolly",
  description: "landing page ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${blackFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav/>
        {children}</body>
    </html>
  );
}
