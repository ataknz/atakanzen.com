import { Hero } from "./Hero";
import { Nav } from "./Nav";

const Layout = ({ children, index }) => {
  return (
    <>
      <Nav />
      {index && (
        <div className="mt-12">
          <Hero />
        </div>
      )}
      {<div className="mt-12">{children}</div>}
    </>
  );
};

export default Layout;
