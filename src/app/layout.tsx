import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { GetFooterData } from "./utils";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nsonga",
  description: "Nsonga",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerData = await GetFooterData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  );
}
