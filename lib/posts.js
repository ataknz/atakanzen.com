import axios from "axios";

const getBlogTable = async (blogId) => {
  const blogTable = axios
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

  return blogTable;
};

const getSinglePage = async (pageId) => {
  const singlePage = axios
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

  return singlePage;
};

export { getBlogTable, getSinglePage };
