import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ning Kang | Research Fellow",
  description:
    "Ning Kang is a Research Fellow at Nanyang Technological University specializing in wireless power transfer, electromagnetic field analysis, and AI applications in power electronics.",
  keywords: [
    "Ning Kang",
    "Research Fellow",
    "NTU",
    "Wireless Power Transfer",
    "Power Electronics",
    "AI",
    "Machine Learning",
  ],
  authors: [{ name: "Ning Kang" }],
  openGraph: {
    title: "Ning Kang | Research Fellow",
    description:
      "Research Fellow at Nanyang Technological University specializing in wireless power transfer and AI applications.",
    url: "https://ningkang.dev",
    siteName: "Ning Kang",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ning Kang | Research Fellow",
    description:
      "Research Fellow at Nanyang Technological University specializing in wireless power transfer and AI applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
