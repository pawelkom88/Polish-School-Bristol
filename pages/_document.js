import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        {/* <!-- link manifest.json --> */}
        <link rel="manifest" href="/manifest.json" />
        {/* <!-- this sets the color of url bar  --> */}
        <meta name="theme-color" content="#111827" />
        {/* <!-- this sets logo in Apple smatphones. --> */}
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        {/* <!-- this sets the color of url bar in Apple smatphones --> */}
        <meta name="apple-mobile-web-app-status-bar" content="#111827" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
