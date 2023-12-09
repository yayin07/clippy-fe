import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clippy - Bite-sized Entertainment: Stream 1-Minute Episodes Free!",
  description:
    "Explore Clippy, your go-to video on demand platform for quick thrills! Enjoy the first 15 episodes of our captivating series for free. Unlock more with ease using our internal wallet. Dive into a world of short, engaging content. Start your Clippy journey today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
