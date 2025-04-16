import React from "react";
import Link from "next/link";
import ThemedIcon from "../themeIcon";
import { ModeToggle } from "../darkModeChange";

const Header = () => {
  return (
    <div
      className=" border-[rgba(228,228,231,0.3)] 
border-b "
    >
      <div className="w-[97%] mx-auto max-w-[1440px] sticky top-0 py-3 px-5 flex items-center justify-between">
        <div className="flex items-center gap-5 ">
          <Link className=" flex items-center gap-2 " href="/">
            <ThemedIcon />
            <span className="hidden font-bold lg:inline-block">shadcn/ui</span>
          </Link>
          <ul className="flex items-center gap-4 text-zinc-400 max-[580px]:hidden ">
            <li>
              <p>Docs</p>
            </li>
            <li>
              <p>Components</p>
            </li>
            <li>
              <p>Blocks</p>
            </li>
            <li>
              <p>Charts</p>
            </li>
            <li>
              <p>Themes</p>
            </li>
            <li>
              <p>Colors</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
