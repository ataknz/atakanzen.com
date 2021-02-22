import React from "react";
import Link from "next/link";

export const Blogs = ({ blogs }) => {
  return (
    <div className="py-8">
      <ul className="flex flex-col items-center">
        {blogs.map((blog) => (
          <li key={blog.id} className="border-b border-gray-200 px-4">
            <Link href={`/blog/${blog.slug}`}>
              <a className="my-2 py-4 px-4 -mx-4 dark:hover:bg-gray-800 rounded-md block">
                <div className="flex justify-between">
                  <span className="text-blue-500 dark:text-gray-200 rubik">
                    {blog.title}
                  </span>
                  <span className="text-blue-500 dark:text-gray-200 rubik">
                    {new Date(blog.date).toDateString()}
                  </span>
                </div>
                <div className="mt-2 text-gray-700 dark:text-gray-400 mr-4 rubik">
                  {blog.excerpt}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
