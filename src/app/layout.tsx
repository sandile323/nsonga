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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MT4WMJ53');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XFFYMH80GB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XFFYMH80GB');
            `,
          }}
        />
        {/* End Google Analytics */}
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
