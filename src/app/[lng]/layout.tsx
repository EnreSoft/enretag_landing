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
      <body className={inter.className}>
      <Toaster position="top-center" />
        {children}
        <div className="elfsight-app-ebcbeb84-d046-414b-9158-1f627a079e2e" data-elfsight-app-lazy></div>
        <Footer lng={lng} />
        <link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
      </body>
    </html>
  );
}
