import React from "react";
import Link from "next/link";

export const Blogs = ({ blogs }) => {
  return (
    <div>
      <ul className="flex flex-col items-center my-8">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="border-b border-blue-200 px-4 transition duration-700 ease-in-out hover:translate-y-1 transform hover:scale-105"
          >
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
