import ProfileImage from "./ProfileImage";

export const Hero = () => {
  return (
    <section className="border-b border-gray-200 dark:border-gray-500">
      <div className="my-1">
        <div className="mt-4 flex flex-col items-center">
          <ProfileImage size={130} />
          <h1 className="robotoSlab text-4xl ">Atakan Zengin</h1>
          <h2 className="robotoSlab tracking-wide text-gray-500 dark:text-gray-500">
            Software Developer &amp; Art Enthusiast
          </h2>
          <div className="max-w-sm flex mt-1">
            <a
              className="transform hover:scale-105 mr-1"
              href="http://twitter.com/atakanzzengin"
            >
              Twitter
            </a>
            <a
              className="transform hover:scale-105 mr-1"
              href="http://github.com/ataknz"
            >
              Github
            </a>
            <a
              className="transform hover:scale-105"
              href="http://linkedin.com/in/ataknz"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
