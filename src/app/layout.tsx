import type { Metadata } from "next";
import { spaceGrotesk, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hawig Ventures | Web3 Investment & Contribution",
  description:
    "Hawig Ventures invests in and contributes to web3 projects building the decentralized future.",
  openGraph: {
    title: "Hawig Ventures",
    description: "Investing in the decentralized future.",
    siteName: "Hawig Ventures",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hawig Ventures",
    description: "Investing in the decentralized future.",
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
    </html>
  );
}
