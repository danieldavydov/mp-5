import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MP-5 | CS391",
  description: "MP-5 for CS391",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${indieFlower.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
