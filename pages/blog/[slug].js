import React, { useEffect } from "react";
import Link from "next/link";
import { getAllPosts, getSinglePost } from "../../lib/posts";
import { NotionRenderer } from "react-notion";
import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "../../utils/og-image";
import Layout from "../../components/Layout";
import { extractCategories } from "../../utils/common";

import Prism from "prismjs";

export const getStaticPaths = async () => {
  const blogTable = await getAllPosts(process.env.BLOG_TABLE_ID);

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

const BlogPost = ({ post, blocks }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  const categories = extractCategories(post.category);

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
          handle: "@atakanzen_",
          cardType: "summary_large_image",
        }}
        canonical={`https://atakanzen.com/blog/${post.slug}`}
        titleTemplate="%s • Atakan Zengin • Blog"
        additionalMetaTags={[
          {
            name: "date",
            content: new Date(post.date).toDateString(),
          },
        ]}
      ></NextSeo>
      <Layout>
        <div className="mt-12 pb-4 mb-2 md:mt-12 border-b border-gray-200">
          <h1 className="mb-2 pt-4 text-4xl font-semibold md:text-4xl sm:text-center openSans">
            {post.title}
          </h1>
          <div className="text-gray-600 dark:text-gray-400 sm:text-center robotoSlab">
            <time dateTime={new Date(post.date).toDateString()}>
              {new Date(post.date).toDateString()}
            </time>
          </div>
          <div className="flex sm:justify-center mt-2">
            {categories.map((category) => (
              <p
                key={category}
                className="p-1 mx-1 text-sm bg-blue-50 dark:bg-chromeYellow dark:text-raisinBlack rounded-sm"
              >
                {category}
              </p>
            ))}
          </div>
        </div>
        <article className="flex-1 w-full max-w-2xl md:max-w-3xl pb-6 mx-auto line-numbers match-braces">
          <NotionRenderer blockMap={blocks} />
          <div className="flex flex-col w-full items-center">
            <Link href="/blog">
              <a className="pb-1">Back to blog</a>
            </Link>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default BlogPost;
