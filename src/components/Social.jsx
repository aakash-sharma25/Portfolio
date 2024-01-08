import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Social = () => {
  return (
    <div className="flex gap-x-5">
      <a href="https://github.com/aakash-sharma25">
        <FaGithub className=" transition ease-in-out delay-150 text-2xl text-blue-700  hover:scale-150" />
      </a>
      <a href="https://www.linkedin.com/in/aakash25/">
        <FaLinkedin className=" transition ease-in-out delay-150 text-2xl text-blue-700 hover:scale-150" />{" "}
      </a>
      <a href="https://leetcode.com/aakash-sharma/">
        <SiLeetcode className=" transition ease-in-out delay-150 text-2xl text-blue-700 hover:scale-150" />{" "}
      </a>
      <a href="https://www.codechef.com/users/aakash60">
        <SiCodechef className=" transition ease-in-out delay-150 text-2xl text-blue-700 hover:scale-150" />{" "}
      </a>
      <a href="https://auth.geeksforgeeks.org/user/as024hhpfb">
        <SiGeeksforgeeks className=" transition ease-in-out delay-150 text-2xl text-blue-700 hover:scale-150" />
      </a>
    </div>
  );
};

export default Social;
