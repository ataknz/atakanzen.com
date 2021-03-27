import React from "react";
import { ActiveLink } from "./ActiveLink";

const Menu = () => {
  return (
    <div className="h-screen -mt-12 w-full fixed flex flex-col items-end justify-center bg-white dark:bg-raisinBlack z-40">
      <ul className="text-5xl pr-10">
        <li className="mb-9">
          <ActiveLink activeClassName="underline" href="/">
            <a>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="underline" href="/blog">
            <a>Blog</a>
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
