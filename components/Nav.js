import { ActiveLink } from "./ActiveLink";
import { ThemeSwitch } from "./ThemeSwitch";

export const Nav = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      <nav className="justify-between px-3 py-3 z-50 bg-white border-b border-gray-200 dark:border-gray-500 dark:bg-raisinBlack bg-opacity-100 w-full fixed top-0">
        <ul className="flex items-center justify-center">
          <li className="absolute left-4">
            <ThemeSwitch />
          </li>
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
