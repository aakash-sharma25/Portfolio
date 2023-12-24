import React, { useEffect, useState } from "react";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const name = "<> Aakash </>";

  const [open, setopen] = useState(false);

  const toggle = () => {
    setopen((prev) => !prev);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
    
      className=" font-bold navbar flex justify-between text-xl items-center p-[30px] w-[100%] fixed top-0 left-0 right-0 z-10  bg-blue-500 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
    >
      <h1 className="text-white text-3xl logo">{name}</h1>
      <div className="nav ">
        <ul className="flex gap-5 ">
          <li className="hover:text-white transition ease-in-out delay-100">
            <a href="# ">Home</a>
          </li>
          <li className="hover:text-white transition ease-in-out delay-100">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white transition ease-in-out delay-100">
            <a href="#project">Project</a>
          </li>
          <li className="hover:text-white transition ease-in-out delay-100">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>

      <div className="hamburger">
        <GiHamburgerMenu onClick={toggle} />
      </div>

      <div className=" bg-white absolute top-[100%] left-[0px]  w-[100vw] text-center">
        {open && <Drawer setopen={setopen} />}
      </div>
    </div>
  );
};

export default Navbar;
