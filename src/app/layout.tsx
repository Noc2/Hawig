import type { Metadata } from "next";
import Script from "next/script";
import { spaceGrotesk, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hawig Ventures | Web3 Investment & Contribution",
  description:
    "Hawig Ventures invests in and contributes to Web3 projects building the decentralized future.",
  openGraph: {
    title: "Hawig Ventures",
    description: "Where Web3 Connects Humans and AI",
    siteName: "Hawig Ventures",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hawig Ventures",
    description: "Where Web3 Connects Humans and AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
