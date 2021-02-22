import React from "react";
import { NextSeo } from "next-seo";
import { Nav } from "../../components/Nav";
import { Blogs } from "../../components/Blogs";
import { ProfileImage } from "../../components/ProfileImage";
import { getOpenGraphImage } from "../../utils/og-image";
import { getBlogTable } from "../../lib/posts";

export const getStaticProps = async () => {
  const blogs = await getBlogTable(process.env.BLOG_TABLE_ID);

  const publishedBlogs = blogs
    .filter((post) => process.env.NODE_ENV === "development" || post.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      blogs: publishedBlogs,
    },
  };
};

const index = ({ blogs }) => {
  return (
    <>
      <NextSeo
        titleTemplate="%s • Blog"
        title="Atakan Zengin"
        description="My personal blog, where I write about software, art and sometimes not that boring stuff."
        canonical="https://zengin.me/blog"
        twitter={{
          handle: "@atakanzzengin",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: "https://zengin.me/blog",
          title: "Atakan Zengin's Blog",
          site_name: "Atakan Zengin • Blog",
          description:
            "Hey! I write about software, art and sometimes not that boring stuff.",
          images: [getOpenGraphImage("Blog")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Atakan Zengin Blog, Zengin Blog, Blog, Technology Blog, Art Blog, Daily Blog",
          },
        ]}
      ></NextSeo>
      <Nav></Nav>

      <Blogs blogs={blogs}></Blogs>
    </>
  );
};

export default index;
