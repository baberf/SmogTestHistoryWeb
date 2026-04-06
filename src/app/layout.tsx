import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smog Test History — iOS App Portfolio",
  description:
    "A native iOS utility that uses on-device OCR to read license plates and retrieve California vehicle emissions history from DMV databases.",
  keywords: [
    "iOS",
    "Swift",
    "OCR",
    "Vision",
    "smog test",
    "California",
    "DMV",
    "mobile app",
  ],
  openGraph: {
    title: "Smog Test History — iOS App Portfolio",
    description:
      "Native iOS app leveraging on-device OCR for California vehicle emissions history lookup.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 text-white">{children}</body>
    </html>
  );
}
