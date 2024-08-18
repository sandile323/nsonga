// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { GetFooterData, GetSitePaths } from "./utils";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const footerData = GetFooterData();
  const sitePaths = GetSitePaths();

  // Default metadata

  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Nsonga, HR, Consulting, Recruitment, Human Resources, Nsgonahc, Jobs"
        />
        <meta name="author" content="Thembi Nkosi" />
        {/* Google Tag Manager and Analytics scripts */}
      </head>
      <body className={`${inter.className} font-lora`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MT4WMJ53"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header sitePaths={sitePaths} />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  );
}
