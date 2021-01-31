import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between my-4 max-w-full">
      <Link href="/">
        <a>Home</a>
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li className="">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
