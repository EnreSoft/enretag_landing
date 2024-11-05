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
        <Footer lng={lng} />
        <link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
        <Script id="amazon-connect-script" strategy="afterInteractive">
        {`
          (function(w, d, x, id) {
            var s = d.createElement('script');
            s.src = 'https://dtn7rvxwwlhud.cloudfront.net/amazon-connect-chat-interface-client.js';
            s.async = true;
            s.id = id;
            d.getElementsByTagName('head')[0].appendChild(s);
            w[x] = w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
          })(window, document, 'amazon_connect', 'aca169d6-a60d-4dba-9016-126104af36e2');

          amazon_connect('styles', {
            iconType: 'CHAT',
            openChat: { color: '#ffffff', backgroundColor: '#123456' },
            closeChat: { color: '#ffffff', backgroundColor: '#123456' }
          });

          amazon_connect('snippetId', 'QVFJREFIaWFZYXRVSlpIekdkUUg5YXhZenVQMktKRXNIWTVFQWpBYVErTEdzRnpvZHdIeHdLZjBQTE1qV0ZuSFVBeFpGVXplQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNV0dKN0ZsZkVOREtTbHkzYUFnRVFnQ3RZdXlPSFJLOXl0WS81UlVKTzZna0trd3h1QXlWSk5jVUFBWnpjNUNUTFZMdXdpekZ4TUMrbTRtSEw6OlpkTW0yR2JLcXY0YkgvaVR3L3Y1UzhyZmRkSTE1RmY4YktKQnBmZEx0OXVnc2o5aHdGaTN2OHkwTVpqT2ZLazY2clpybnhXWUJFejRkSDVsR3hKcGMzY0pDTE1QRFAzZ0JLUTFoT0RmNWF4RlJBdURLQVBVb2htaHM4WENqMlNqYlI2dHQwYmtHQ2ZEZksxeVBjWTNMNWVQbVRqV1JKQT0=');

          amazon_connect('supportedMessagingContentTypes', [
            'text/plain',
            'text/markdown',
            'application/vnd.amazonaws.connect.message.interactive',
            'application/vnd.amazonaws.connect.message.interactive.response'
          ]);
        `}
      </Script>
      </body>
    </html>
  );
}
