import { NextSeo } from "next-seo";
import Head from "next/head";
import Me from "../components/me";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="../public/favicon.ico"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NextSeo
        title="Atakan Zengin • Software • Art"
        titleTemplate="%s"
        description="Hey I'm Atakan! I'm a software developer and an art enthusiast."
        canonical="https://zengin.me"
        twitter={{
          handle: "@ataknz",
          cardType: "summary_large_image",
        }}
      ></NextSeo>
      <div className="container mx-auto my-4 max-h-full">
        <Me
          name="Atakan Zengin"
          whoAmI="Software Developer &amp; Art Enthusiast"
        />
      </div>
    </>
  );
}
