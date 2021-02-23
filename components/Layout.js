import { Hero } from "./Hero";
import { Nav } from "./Nav";

const Layout = ({ children, index }) => {
  return (
    <div>
      <Nav />
      {index && <Hero />}
      {children}
    </div>
  );
};

export default Layout;
