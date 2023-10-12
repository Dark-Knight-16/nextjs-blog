"use client";

import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex cursor-pointer gap-2 justify-center items-center rounded-[50px] w-[50px] bg-black px-1 relative p-1"
    >
      <BsFillSunFill className="text-yellow-400 w-[15px] h-[15px]" />
      <div
        className={`bg-white rounded-full w-[16px] h-[16px] absolute ${
          theme === "dark" ? "right-1" : "left-1"
        }`}
      ></div>
      <HiMoon className="text-yellow-400 w-[15px] h-[15px]" />
    </button>
  );
};

export default ToggleTheme;
