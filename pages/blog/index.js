import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { getAllCategories } from "../../lib/posts";
import { getOpenGraphImage } from "../../utils/og-image";
import { capitalize } from "../../utils/common";

export const getStaticProps = async () => {
  const categories = await getAllCategories();

  return {
    props: {
      categories: [...new Set(categories)],
    },
  };
};

const index = ({ categories }) => {
  return (
    <>
      <NextSeo
        titleTemplate="Blog • %s"
        title="Atakan Zengin"
        description="My blog, where I write about software, art and sometimes not that boring stuff."
        canonical="https://zengin.me/blog"
        twitter={{
          handle: "@atakanzzengin",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: "https://zengin.me/blog",
          title: "Atakan Zengin's Blog",
          site_name: "Blog • Atakan Zengin",
          description:
            "Hey! I write about software, art and sometimes not that boring stuff.",
          images: [getOpenGraphImage("Blog • Atakan Zengin")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `Atakan Zengin Blog, Zengin Blog, Blog, Technology Blog, Art Blog, Personal Blog`,
          },
        ]}
      ></NextSeo>
      <Layout>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-gray-800 dark:text-gray-200 text-center robotoSlab font-extralight text-4xl w-full pb-1 border-b border-gray-200 mt-5">
            Categories
          </h2>
          <ul className="grid grid-cols-2 gap-4 md:gap-8 mt-4">
            {categories.map((category, i) => (
              <li key={i} className="p-1">
                <Link href={`blog/${category}`}>
                  <a className="text-3xl md:text-3xl">
                    {capitalize(String(category))}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default index;
