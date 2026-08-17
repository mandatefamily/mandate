import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mandate.",
  description: "trading. building. documenting.",
  metadataBase: new URL("https://mandate.vercel.app"),
  openGraph: {
    title: "mandate.",
    description: "trading. building. documenting.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mandate.",
    description: "trading. building. documenting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
