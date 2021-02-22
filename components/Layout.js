import { Hero } from "./Hero";
import { Nav } from "./Nav";

const Layout = ({ children, index }) => {
  return (
    <div className="bg-red-500">
      <Nav />
      {index && <Hero />}
      {children}
    </div>
  );
};

export default Layout;
