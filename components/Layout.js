import { Hero } from "./Hero";
import { Nav } from "./Nav";

const Layout = ({ children, index }) => {
  return (
    <>
      <Nav />
      {index && <Hero />}
      {children}
    </>
  );
};

export default Layout;
