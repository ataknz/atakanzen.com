import ProfileImage from "./ProfileImage";

export const Hero = () => {
  return (
    <section className="border-b border-gray-200 dark:border-gray-500 mt-12">
      <div className="my-1">
        <div className="mt-4 flex flex-col items-center">
          <ProfileImage size={130} />
          <h1 className="robotoSlab text-4xl ">Atakan Zengin</h1>
          <h2 className="robotoSlab font-extralight tracking-wide text-gray-500 dark:text-gray-500 mt-2">
            Full-Stack Problem Solver
          </h2>
          <div className="max-w-sm flex mt-2">
            <a
              className="transform hover:scale-105 mr-3"
              rel="me"
              href="https://hachyderm.io/@atakan"
            >
              Mastodon
            </a>
            <a
              className="transform hover:scale-105 mr-3"
              target="_blank"
              rel="noopener noreferrer"
              href="http://github.com/atakanzen"
            >
              GitHub
            </a>
            <a
              className="transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              href="http://linkedin.com/in/atakanzen"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
