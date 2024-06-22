import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import type { LayoutProps } from "@vercel/examples-ui/layout";
import { getLayout } from "@vercel/examples-ui";
import "@vercel/examples-ui/globals.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component);

  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
      <Script
        async
        id="adsbygoogle-init"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5058491449778369"
        crossOrigin="anonymous"
      ></Script>
      <Layout
        title="Power parity pricing"
        path="edge-middleware/power-parity-pricing"
      >
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}
