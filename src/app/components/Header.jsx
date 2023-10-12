"use client";

import React, { useState } from "react";
import Social from "./Social";
import ToggleTheme from "./ToggleTheme";
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";
import Link from "next/link";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="flex justify-between items-center p-5 md:p-5 lg:py-5 lg:px-20">
      <Social />
      <div className="text-2xl font-semibold">
        <h1>Dark Blog</h1>
      </div>
      <div className="flex gap-5 items-center">
        <ToggleTheme />
        <button
          onClick={handleClick}
          className="text-2xl font-semibold md:hidden"
        >
          {toggleMenu ? <AiOutlineClose /> : <HiMiniBars3 />}
        </button>
        <nav
          className={`${
            toggleMenu
              ? "flex absolute right-0 bottom-0 left-0 flex-col gap-10 justify-center items-center text-xl border-2 border-red-500 border-solid top-[74px]"
              : "hidden gap-5 md:flex"
          }`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
