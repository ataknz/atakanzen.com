import React from 'react'
import Link from 'next/link'

export const Blogs = ({ blogs }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-8 w-full">
        <ul className="flex flex-col items-start">
          {blogs.map((blog) => (
            <li key={blog.id} className="px-4 w-full">
              <Link href={`/blog/${blog.slug}`}>
                <a className="my-2 py-4 px-4 -mx-4 dark:hover:bg-gray-800 hover:bg-blue-100 rounded-sm block">
                  <div className="flex flex-col">
                    <time className="text-sm text-gray-700 dark:text-gray-200 openSans">
                      {new Date(blog.date).toDateString()}
                    </time>
                    <h2 className="text-3xl text-gray-700 dark:text-gray-200 openSans">
                      {blog.title}
                    </h2>
                    <span className="text-blue-500 dark:text-chromeYellow mr-4 openSans">
                      {blog.excerpt}
                    </span>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
