import { NextSeo } from 'next-seo'
import React from 'react'
import Layout from '../../components/Layout'
import { Blogs } from '../../components/Blogs'
import { getAllPosts } from '../../lib/posts'
import { getOpenGraphImage } from '../../utils/og-image'

export const getStaticProps = async () => {
  const blogs = await getAllPosts(process.env.BLOG_TABLE_ID)

  const publishedBlogs = blogs
    .filter((post) => process.env.NODE_ENV === 'development' || post.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

  return {
    props: {
      blogs: publishedBlogs,
    },
  }
}

const index = ({ blogs }) => {
  return (
    <>
      <NextSeo
        titleTemplate="Blog • %s"
        title="Atakan Zengin"
        description="My blog, where I write about software, art and sometimes not that boring stuff."
        canonical="https://atakanzen.com/blog"
        twitter={{
          handle: '@atakanzen_',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          url: 'https://atakanzen.com/blog',
          title: "Atakan Zengin's Blog",
          site_name: 'Blog • Atakan Zengin',
          description:
            'Hey! I write about software, art and sometimes not that boring stuff.',
          images: [getOpenGraphImage('Blog • Atakan Zengin')],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `Atakan Zengin Blog, Zengin Blog, Blog, Technology Blog, Art Blog, Personal Blog`,
          },
        ]}
      ></NextSeo>
      <Layout>
        <div className="flex flex-col items-center justify-center w-full mt-12">
          <div className="pb-1 border-b border-gray-200 mt-5 w-full">
            <h1 className="text-gray-800 dark:text-gray-200 text-center robotoSlab text-4xl">
              Posts
            </h1>
          </div>
          <Blogs blogs={blogs}></Blogs>
        </div>
      </Layout>
    </>
  )
}

export default index
