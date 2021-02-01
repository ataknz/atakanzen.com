import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Atakan Zengin • Software &amp; Art"
        titleTemplate="%s"
        description="Hey I'm Atakan! I'm a software developer and an art enthusiast."
        canonical="https://zengin.me"
        twitter={{
          handle: "@atakanzzengin",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          url: "https://zengin.me",
          title: "Atakan Zengin",
          description:
            "Hey I'm Atakan! I'm a software developer and an art enthusiast",
          images: [
            {
              url: "https://zengin.me/logoWhiteBackground.png",
              width: 800,
              height: 800,
              alt: "My personal logo.",
            },
          ],
        }}
      ></NextSeo>
      <Hero />
      <section className="flex flex-col items-center text-center gap-8 my-6">
        <p>
          Istanbul, Turkey. I'm currently working at an{" "}
          <span className="font-medium">E-commerce</span> platform.
        </p>
        <p>
          I always want to create the best solutions and products for the
          people. I believe with hard work and passion, I'll be able to
          contribute to our ever-growing technology, and create immersive and
          unique works.
        </p>
        <p>
          Lastly if you have any enquiries, please don't hesitate to contact me
          from{" "}
          <a href="mailto:atakanzzengin@gmail.com" id="link">
            atakanzzengin@gmail.com
          </a>
        </p>
      </section>
    </>
  );
}
