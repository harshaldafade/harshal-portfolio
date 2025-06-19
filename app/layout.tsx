import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import MouseTorch from "./components/MouseTorch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshal Dafade - Portfolio",
  description: "Full-stack developer and AI/ML enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-900"}>
        {/* <MouseTorch /> */}
        {children}
      </body>
    </html>
  );
}
