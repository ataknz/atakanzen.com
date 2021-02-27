import axios from "axios";

const getAllPosts = async (blogId) => {
  const posts = axios
    .get(`https://notion-api.splitbee.io/v1/table/${blogId}`, {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((err) =>
      console.error(
        `Something went wrong while getting blog table ERROR: ${err}`
      )
    );

  return posts;
};

const getAllCategories = async () => {
  const posts = await getAllPosts(process.env.BLOG_TABLE_ID);

  const categories = posts
    .filter((post) => post.published)
    .map((post) => post.category);

  return [...new Set(categories)];
};

const getSinglePost = async (pageId) => {
  const post = axios
    .get(`https://notion-api.splitbee.io/v1/page/${pageId}`, {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((err) =>
      console.error(
        `Something went wrong while getting single page ERROR: ${err}`
      )
    );

  return post;
};

export { getAllPosts, getSinglePost, getAllCategories };
