import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giulia Gabriela | Full Stack Developer",
  description:
    "Full Stack Developer from Brazil, open to remote opportunities worldwide. React, Node.js, TypeScript, PHP, Laravel.",
  keywords: [
    "Full Stack Developer",
    "Remote Work",
    "React",
    "Node.js",
    "TypeScript",
    "PHP",
    "Laravel",
    "Brazil",
  ],
  authors: [{ name: "Giulia Gabriela" }],
  openGraph: {
    title: "Giulia Gabriela | Full Stack Developer",
    description:
      "Full Stack Developer from Brazil, open to remote opportunities worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#06080f] text-slate-200`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
