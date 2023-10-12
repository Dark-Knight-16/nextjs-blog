import React from "react";

// icons
import { FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Social = () => {
  return (
    <ul className="hidden md:flex md:gap-4 md:justify-center md:items-center">
      <li>
        <a
          href="https://t.me/The_Dark_knight_16"
          target="_blank"
          className="text-2xl text-blue-400"
        >
          <FaTelegramPlane />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/alex_127.0.0.1/"
          target="_blank"
          className="text-2xl text-pink-500"
        >
          <BiLogoInstagramAlt />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Dark-Knight-16"
          target="_blank"
          className="text-2xl text-gray-900 dark:text-white"
        >
          <BsGithub />
        </a>
      </li>
    </ul>
  );
};

export default Social;
