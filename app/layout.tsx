import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
