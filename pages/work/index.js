import { Nav } from "../../components/Nav";
import { NextSeo } from "next-seo";
import { ProfileImage } from "../../components/ProfileImage";
import { getOpenGraphImage } from "../../utils/og-image";

const index = () => {
  return (
    <>
      <NextSeo
        titleTemplate="%s • Work"
        title="Atakan Zengin"
        description="Here you can find my own works."
        canonical="https://zengin.me/work"
        twitter={{
          handle: "@atakanzzengin",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: "https://zengin.me/work",
          title: "Atakan Zengin's Works",
          site_name: "Atakan Zengin • Work",
          description:
            "Hey! You can find my works and have an idea about what I do.",
          images: [getOpenGraphImage("Works")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Atakan Zengin Work, Zengin Work, Software Work, Technology Work, 3D Renders",
          },
        ]}
      ></NextSeo>
      <Nav></Nav>
      <section className="flex items-center justify-center border-b border-gray-700">
        <ProfileImage size="130"></ProfileImage>
      </section>
      <div className="flex flex-col items-center my-16">
        <h1 className="text-9xl">My Works</h1>
        <h2 className="text-4xl animate-pulse text-blue-500">soon</h2>
      </div>
    </>
  );
};

index.propTypes = {};

export default index;
