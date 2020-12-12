import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a full-stack developer and a 3D Art enthusiast in Istanbul,
          Turkey. I'm currently working at an E-commerce platform.
        </p>

        <p>
          I'm interested in 3D CG and animation. Hopefully I'll be sharing my
          works in the near future.
        </p>

        <p>
          I'm also a senior on Translation and Interpretation in English. So
          natural languages are one of my interests as well as programming
          languages. Apart from this, I like playing video games and come up
          with stories and characters in my free time.
        </p>

        <p>
          I always want to create the best solutions and products for the
          people. I believe with hardwork and passion, I'll be able to
          contribute to our ever-growing technology, and create immersive and
          unique works.
        </p>

        <p>
          Lastly if you have any enquiries, please contact me from{" "}
          <a href="mailto:atakanzzengin@gmail.com" id="link">
            atakanzzengin@gmail.com
          </a>
        </p>
      </section>
    </Layout>
  );
}
