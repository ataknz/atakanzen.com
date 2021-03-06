import React from "react";
import Link from "next/link";

export const Blogs = ({ blogs }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-8 max-w-md">
        <ul className="flex flex-col items-center">
          {blogs.map((blog) => (
            <li key={blog.id} className="border-b border-gray-200 px-4">
              <Link href={`/blog/${blog.category}/${blog.slug}`}>
                <a className="my-2 py-4 px-4 -mx-4 dark:hover:bg-gray-800 hover:bg-blue-100 rounded-md block">
                  <div className="flex justify-between">
                    <span className="text-blue-500 dark:text-gray-200 openSans">
                      {blog.title}
                    </span>
                    <span className="text-blue-500 dark:text-gray-200 openSans">
                      {new Date(blog.date).toDateString()}
                    </span>
                  </div>
                  <div className="mt-2 text-gray-700 dark:text-chromeYellow mr-4 openSans">
                    {blog.excerpt}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
