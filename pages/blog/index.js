import React from "react";
import { NextSeo } from "next-seo";
import { Nav } from "../../components/Nav";
import { ProfileImage } from "../../components/ProfileImage";

const index = () => {
  return (
    <>
      <NextSeo
        titleTemplate="%s • Blog"
        title="Atakan Zengin"
        description="My personal blog, where I write about software, art and sometimes not that boring stuff."
        canonical="https://zengin.me/blog"
        twitter={{
          handle: "@atakanzzengin",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: "https://zengin.me/blog",
          title: "Atakan Zengin's Blog",
          site_name: "Atakan Zengin • Blog",
          description:
            "Hey! I write about software, art and sometimes not that boring stuff.",
          images: [
            {
              url: "https://zengin.me/logoWhiteBackground.png",
              width: 800,
              height: 800,
              alt: "My personal logo.",
            },
          ],
        }}
      ></NextSeo>
      <Nav></Nav>
      <section className="flex items-center justify-center border-b border-gray-700">
        <ProfileImage size="130"></ProfileImage>
      </section>
      <div className="flex flex-col items-center my-16">
        <h1 className="text-9xl">My Blog</h1>
        <h2 className="text-4xl animate-pulse text-blue-500">soon</h2>
      </div>
    </>
  );
};

export default index;
