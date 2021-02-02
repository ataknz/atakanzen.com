import { ProfileImage } from "./ProfileImage";
import { Nav } from "./Nav";

function Hero() {
  return (
    <section className="border-b border-gray-700">
      <Nav />
      <div className="my-6">
        <div className="mt-4 flex flex-col items-center gap-1">
          <ProfileImage size={130} />
          <h1 className="robotoSlab text-4xl">Atakan Zengin</h1>
          <h2 className="robotoSlab italic text-gray-700">
            Software Developer &amp; Art Enthusiast
          </h2>
          <div className="max-w-sm flex gap-3">
            <a
              className="transform hover:scale-105"
              href="http://twitter.com/atakanzzengin"
            >
              Twitter
            </a>
            <a
              className="transform hover:scale-105"
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
}

export default Hero;
