import React from "react";
import Link from "next/link";
import { getAllPosts, getSinglePost } from "../../../lib/posts";
import { NotionRenderer } from "react-notion";
import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "../../../utils/og-image";
import Layout from "../../../components/Layout";
import { capitalize } from "../../../utils/common";

export const getStaticPaths = async () => {
  const blogTable = await getAllPosts(process.env.BLOG_TABLE_ID);

  const paths = blogTable
    .filter((blog) => process.env.NODE_ENV === "development" || blog.published)
    .map((blog) => `/blog/${blog.category}/${blog.slug}`);

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

  const table = await getAllPosts(process.env.BLOG_TABLE_ID);

  const post = table.find((row) => row.slug === slug);

  if (!post || (!post.published && process.env.NODE_ENV !== "development")) {
    throw Error(`Blog post for ${slug} could not be found.`);
  }

  const blocks = await getSinglePost(post.id);

  return {
    props: {
      post,
      blocks,
    },
  };
};

const blogPost = ({ post, blocks }) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          type: "article",
          images: [getOpenGraphImage(post.title)],
          article: {
            publishedTime: new Date(post.date).toISOString(),
          },
        }}
        twitter={{
          handle: "@atakanzzengin",
          cardType: "summary_large_image",
        }}
        canonical={`https://zengin.me/blog/${post.category}/${post.slug}`}
        titleTemplate="%s • Atakan Zengin • Blog"
        additionalMetaTags={[
          {
            name: "date",
            content: new Date(post.date).toDateString(),
          },
        ]}
      ></NextSeo>
      <Layout>
        <div className="mt-8 px-4 pb-4 mb-12 md:mt-12 md:mb-14 border-b border-gray-200">
          <h1 className="mb-2 pt-4 text-2xl font-bold md:text-3xl sm:text-center rubik">
            {post.title}
          </h1>
          <div className="text-gray-600 dark:text-gray-400 sm:text-center rubik">
            <time dateTime={new Date(post.date).toDateString()}>
              {new Date(post.date).toDateString()}
            </time>
          </div>
          <div className="flex justify-center mt-2">
            <Link href={`/blog/${post.category}`}>
              <a className="p-1 text-sm bg-blue-50 dark:bg-chromeYellow dark:text-raisinBlack rounded-md">
                {capitalize(post.category)}
              </a>
            </Link>
          </div>
        </div>
        <article className="flex-1 w-full max-w-2xl pb-6 mx-auto rubik">
          <NotionRenderer blockMap={blocks} />
          <div className="flex flex-col w-full items-center">
            <Link href="/blog">
              <a className="pb-1">Back to blog</a>
            </Link>
            <Link href={`/blog/${post.category}`}>
              <a>{`Back to ${post.category} blog`}</a>
            </Link>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default blogPost;
