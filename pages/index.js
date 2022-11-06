import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Script from "next/script";
import { getOpenGraphImage } from "../utils/og-image";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Atakan Zengin • Software Engineer"
        titleTemplate="%s"
        description="Hey I'm Atakan! I'm a full-stack software engineer."
        canonical="https://atakanzen.com"
        twitter={{
          handle: "@atakanzen_",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          url: "https://atakanzen.com",
          title: "Atakan Zengin",
          description: "Hey I'm Atakan! I'm a full-stack software engineer.",
          images: [getOpenGraphImage("Atakan Zengin")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "Atakan Zengin, Software Engineer",
          },
        ]}
      ></NextSeo>
      <Layout index={true}>
        <section className="flex flex-col items-center text-center mx-auto lg:max-w-2xl mt-3 text-lg">
          <p className="pb-4">
            I&apos;m a Full Stack Software Engineer, currently based in Poland.
          </p>
          <p className="pb-4">
            I admire contributing to our ever-growing technology by crafting
            software to solve people&apos;s problems.
          </p>
          <p>
            If you have any enquiries, please don&apos;t hesitate to contact me
            from{" "}
            <a href="mailto:atakanzzengin@gmail.com" id="link">
              atakanzzengin@gmail.com
            </a>
          </p>
        </section>
      </Layout>
    </>
  );
}
