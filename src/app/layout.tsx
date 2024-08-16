import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { GetFooterData, GetSitePaths } from "./utils";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nsonga",
  description: "Nsonga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerData = GetFooterData();
  const sitePaths = GetSitePaths();
  return (
    <html lang="en">
      <body className={`${inter.className} font-lora`}>
        <Header sitePaths={sitePaths} />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  );
}
