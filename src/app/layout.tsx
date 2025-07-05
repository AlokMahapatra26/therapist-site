import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google"; // 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
}); // ✅

export const metadata: Metadata = {
  title: "Serena Blake",
  description: "Serena Black Therapist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} font-sans antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
