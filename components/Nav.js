import React, { useState, useEffect } from "react";
import { ActiveLink } from "./ActiveLink";
import { ThemeSwitch } from "./ThemeSwitch";
import { Burger } from "./Burger";
import { Menu } from "./Menu";

export const Nav = () => {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  // This seems very dodgy I know, will find a better way.
  if (mounted) {
    active
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "auto");
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <nav className="flex items-center justify-between md:justify-center px-3 py-3 z-50 bg-white border-b border-gray-200 dark:border-gray-500 dark:bg-raisinBlack w-full fixed top-0">
          <ul className="hidden md:flex items-center ">
            <li className="hidden md:block">
              <ActiveLink activeClassName="underline" href="/">
                <a>Home</a>
              </ActiveLink>
            </li>
            <li className="pl-4 hidden md:block">
              <ActiveLink activeClassName="underline" href="/blog">
                <a>Blog</a>
              </ActiveLink>
            </li>
          </ul>
          <Burger active={active} setActive={setActive} />
          <div className="absolute right-3 z-50">
            <ThemeSwitch />
          </div>
        </nav>
      </div>
      {active && <Menu />}
    </>
  );
};
