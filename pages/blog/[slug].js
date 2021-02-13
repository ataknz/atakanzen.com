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
      <div className="mt-8 px-4 pb-4 mb-12 md:mt-12 md:mb-14 border-b border-gray-200">
        <h1 className="mb-2 pt-4 text-2xl font-bold md:text-3xl sm:text-center rubik">
          {blogPost.title}
        </h1>
        <div className="text-gray-600 sm:text-center rubik">
          <time dateTime={new Date(blogPost.date).toDateString()}>
            {new Date(blogPost.date).toDateString()}
          </time>
        </div>
        <div className="w-full mt-2">
          <ul className="flex flex-row sm:justify-center">
            {Array.from(blogPost.categories).map((category, i) => (
              <li key={i} className="p-1 text-sm mr-1 bg-blue-50 rounded-md">
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <article className="flex-1 w-full max-w-2xl px-4 pb-6 mx-auto rubik">
        <NotionRenderer blockMap={blocks} />
        <div className="flex w-full justify-center">
          <Link href="/blog">
            <a>Back to blogs</a>
          </Link>
        </div>
      </article>
    </>
  );
};

export default blogPost;
