import React from "react";
import Link from "next/link";
import { getBlogTable, getSinglePage } from "../../lib/posts";
import { Nav } from "../../components/Nav";
import { NotionRenderer } from "react-notion";
import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "../../utils/og-image";

export const getStaticPaths = async () => {
  const blogTable = await getBlogTable(process.env.BLOG_TABLE_ID);

  const paths = blogTable
    .filter((blog) => process.env.NODE_ENV === "development" || blog.published)
    .map((blog) => `/blog/${blog.slug}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  if (!slug) {
    throw Error("No slug given");
  }

  const table = await getBlogTable(process.env.BLOG_TABLE_ID);

  const blogPost = table.find((blog) => blog.slug === slug);

  if (
    !blogPost ||
    (!blogPost.published && process.env.NODE_ENV !== "development")
  ) {
    throw Error(`Blog post for ${slug} could not be found.`);
  }

  const blocks = await getSinglePage(blogPost.id);

  return {
    props: {
      blogPost,
      blocks,
    },
  };
};

const blogPost = ({ blogPost, blocks }) => {
  return (
    <>
      <NextSeo
        title={blogPost.title}
        description={blogPost.excerpt}
        openGraph={{
          type: "article",
          images: [getOpenGraphImage(blogPost.title)],
          article: {
            publishedTime: new Date(blogPost.date).toISOString(),
          },
        }}
        twitter={{
          handle: "@atakanzzengin",
          cardType: "summary_large_image",
        }}
        canonical={`https://zengin.me/blog/${blogPost.slug}`}
        titleTemplate="%s • Atakan Zengin • Blog"
        additionalMetaTags={[
          {
            name: "date",
            content: new Date(blogPost.date).toDateString(),
          },
        ]}
      ></NextSeo>
      <Nav></Nav>
      <div className="px-4 mt-8 mb-12 md:mt-12 md:mb-18">
        <h1 className="mb-2 text-2xl font-bold md:text-3xl sm:text-center rubik">
          {blogPost.title}
        </h1>
        <div className="text-gray-600 sm:text-center rubik">
          <time dateTime={new Date(blogPost.date).toDateString()}>
            {new Date(blogPost.date).toDateString()}
          </time>
        </div>
      </div>
      <article className="flex-1 w-full max-w-2xl px-4 mx-auto rubik">
        <NotionRenderer blockMap={blocks} />
        <Link href="/blog">
          <a className="text-blue-500 hover:underline p-0 pb-5">
            Back to blogs
          </a>
        </Link>
      </article>
    </>
  );
};

export default blogPost;
