import React from "react";
import { NextSeo } from "next-seo";
import { Blogs } from "../../../components/Blogs";
import { getOpenGraphImage } from "../../../utils/og-image";
import { getAllPosts, getAllCategories } from "../../../lib/posts";
import { capitalize } from "../../../utils/common";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const categories = await getAllCategories();

  const paths = categories.map((category) => `/blog/${category}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { category } }) => {
  const blogs = await getAllPosts(process.env.BLOG_TABLE_ID);

  const publishedBlogs = blogs
    .filter(
      (post) =>
        (process.env.NODE_ENV === "development" || post.published) &&
        post.category == category // Type conversion is a must here.
    )
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      blogs: publishedBlogs,
    },
  };
};

const index = ({ blogs }) => {
  const { query } = useRouter();

  return (
    <>
      <NextSeo
        titleTemplate="Blog • %s"
        title={`${capitalize(query.category)}`}
        description="My blog, where I write about software, art and sometimes not that boring stuff."
        canonical={`https://zengin.me/blog/${query.category}`}
        twitter={{
          handle: "@atakanzzengin",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: `https://zengin.me/blog/${query.category}`,
          title: `Atakan Zengin's Blog • ${capitalize(query.category)}`,
          site_name: `Blog • ${capitalize(query.category)}`,
          description:
            "Hey! I write about software, art and sometimes not that boring stuff.",
          images: [getOpenGraphImage(`Blog • ${capitalize(query.category)}`)],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `Atakan Zengin Blog, ${query.category} Blog , Zengin Blog, Blog, Technology Blog, Art Blog, Personal Blog`,
          },
        ]}
      ></NextSeo>
      <Layout>
        <Blogs blogs={blogs}></Blogs>
      </Layout>
    </>
  );
};

export default index;
