import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3ECBDB" />
        <meta name="msapplication-TileColor" content="#3ECBDB" />
        <meta name="theme-color" content="#3ECBDB" />
      </Head>
    </div>
  );
}
