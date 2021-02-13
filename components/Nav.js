import ActiveLink from "./ActiveLink";

export const Nav = () => {
  return (
    <nav className="my-4 max-w-full">
      <ul className="flex items-center justify-center gap-6">
        <li>
          <ActiveLink activeClassName="underline" href="/">
            <a>Home</a>
          </ActiveLink>
        </li>
        <li className="">
          <ActiveLink activeClassName="underline" href="/blog">
            <a>Blog</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};
