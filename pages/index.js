import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Script from "next/script";
import { getOpenGraphImage } from "../utils/og-image";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Atakan Zengin • Software &amp; Art"
        titleTemplate="%s"
        description="Hey I'm Atakan! I'm a software developer and an art enthusiast."
        canonical="https://atakanzen.com"
        twitter={{
          handle: "@atakanzen_",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          url: "https://atakanzen.com",
          title: "Atakan Zengin",
          description:
            "Hey I'm Atakan! I'm a software developer and an art enthusiast",
          images: [getOpenGraphImage("Atakan Zengin")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "Atakan Zengin, Zengin, Software Development, 3D Art",
          },
        ]}
      ></NextSeo>
      <Layout index={true}>
        <section className="flex flex-col items-center text-center mx-auto lg:max-w-2xl mt-3 text-lg">
          <p className="pb-4">
            I'm a Full stack Software Engineer, currently based in Poznań,
            Poland.
          </p>
          <p className="pb-4">
            I admire contributing to our ever-growing technology, and creating
            unique works.
          </p>
          <p>
            If you have any enquiries, please don't hesitate to contact me from{" "}
            <a href="mailto:atakanzzengin@gmail.com" id="link">
              atakanzzengin@gmail.com
            </a>
          </p>
        </section>
      </Layout>
    </>
  );
}
