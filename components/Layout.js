import { Hero } from "./Hero";
import { Nav } from "./Nav";

const Layout = ({ children, index }) => {
  return (
    <>
      <Nav />
      <div
        className={
          index ? `h-screen flex flex-col items-center justify-center` : ""
        }
      >
        {index && (
          <div>
            <Hero />
          </div>
        )}
        {<div>{children}</div>}
      </div>
    </>
  );
};

export default Layout;
