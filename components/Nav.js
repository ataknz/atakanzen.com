import ActiveLink from "./ActiveLink";

export const Nav = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      <nav className="py-3 bg-gray-50 w-full fixed top-0">
        <ul className="flex items-center justify-center">
          <li>
            <ActiveLink activeClassName="underline" href="/">
              <a>Home</a>
            </ActiveLink>
          </li>
          <li className="pl-4">
            <ActiveLink activeClassName="underline" href="/blog">
              <a>Blog</a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
