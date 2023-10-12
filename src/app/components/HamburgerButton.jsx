"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";

const HamburgerButton = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <button onClick={handleClick} className="text-2xl font-semibold md:hidden">
      {toggleMenu ? <AiOutlineClose /> : <HiMiniBars3 />}
    </button>
  );
};

export default HamburgerButton;
