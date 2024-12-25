import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { dir } from 'i18next'
import { languages } from "../i18n/settings";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enretag",
  description: "Enretag LLC",
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}: { children: React.ReactNode, params: { lng: string } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body style={{overflowX: 'hidden'}} className={inter.className}>
      <Toaster position="top-center" />
        {children}
        {/* <div className="elfsight-app-ebcbeb84-d046-414b-9158-1f627a079e2e" data-elfsight-app-lazy></div> */}
        <Footer lng={lng} />
        <link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
        {/* <script src="https://static.elfsight.com/platform/platform.js" async></script> */}
        {lng !== 'tr' && <script src="//code.jivosite.com/widget/v4pCqDBYLq" async></script>}
        {lng === "tr" && (
          <>
            <script src="//code.jivosite.com/widget/1UM22JYiPk" async></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '545244048398834');
                  fbq('track', 'PageView');
                `,
              }}
            ></script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=545244048398834&ev=PageView&noscript=1"
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
