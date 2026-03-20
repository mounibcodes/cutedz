import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import SmoothScroll from "@/Components/SmoothScroll";


const workSans = localFont({
  src: [
    {
      path: "../public/Fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/Fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/Fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Fonts/WorkSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cutscnedz DZ - Video Making Agency & Academy",
  description: "Premier video editing and motion design academy in Algeria. Master Premiere Pro, After Effects, and Motion Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <SmoothScroll />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}


