import React from "react";
import { getAllPosts, getAllCategories } from "../lib/posts";

const createSitemap = (
  posts,
  categories
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${posts
      .map(({ slug, category, date, published }) => {
        if (published) {
          return `
                <url>
                    <loc>${`${process.env.BASE_URL}/blog/${category}/${slug}`}</loc>
                    <lastmod>${date}</lastmod>
                </url>
            `;
        }
      })
      .join("")}
      ${categories.map((category) => {
        return `
            <url>
              <loc>${process.env.BASE_URL}/blog/${category}</loc>
            </url>
          `;
      })}
      <url>
        <loc>${process.env.BASE_URL}/blog</loc>
      </url>
      <url>
        <loc>${process.env.BASE_URL}</loc>
      </url>
</urlset>
`;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const categories = await getAllCategories();
    const posts = await getAllPosts(process.env.BLOG_TABLE_ID);

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(posts, categories));
    res.end();
  }
}

export default Sitemap;
