import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link href="/favicon.ico" rel="icon" />
      {/* <link href="/manifest.json" rel="manifest" /> */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;