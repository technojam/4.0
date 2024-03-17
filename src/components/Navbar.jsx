import React from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <nav
        className="px-5 w-screen z-30 text-white gap-8 absolute top-0 left-0 h-[11vh] bg-transparent flex items-center justify-between navbar"
      >
        {/* Technojam Logo */}
        <div className="logo">
          <img
            src="/TechnoJam.png"
            className="w-[45px] mx-auto logo"
            alt="logo"
          />
        </div>
        {/* Page Navigation */}
        <div className="hidden lg:flex text-xl items-center gap-8 font-Product_Sans mr-10">
          <a href="#about"
            className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
          >
            About
          </a>
          <a
          href="#Timeline"
            className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
          >
            Schedule
          </a>
          <a
          href="#events"
            className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
          >
            Events
          </a>
          <a
          href="#sponsors"
            className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
          >
            Sponsors
          </a>
          <a
          href="#"
            className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
          >
            FAQs
          </a>
          <a
          href="#"
            className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
          >
            Contact Us
          </a>
        </div>
        {/* Mobile Optimization */}
        <div className="flex lg:hidden cursor-pointer gap-5 items-center">
          <IoMenu
            onClick={() => setSidebar(!sidebar)}
            className="text-2xl md:text-3xl mr-5"
          />
        </div>
      </nav>
      {/* Small Devices Sidebar */}
      <div
        className={`${
          sidebar ? "top-0 right-0" : "top-0 right-[-400px]"
        } duration-300 lg:hidden flex flex-col border border-l border-[#ffffff2c] backdrop-blur bg-transparent justify-start pt-[12vh] items-start px-8 z-20 text-xl md:text-2xl gap-2 dark:text-white text-black absolute max-w-fit h-screen`}
      >
        <a href="#about"
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          About
        </a>
        <a href="#Timeline"
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          Schedule
        </a>
        <a href="#events"
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          Events
        </a>
        <a href="#sponsors"
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          Sponsors
        </a>
        <a href="#"
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          FAQs
        </a>
        <a href="#"
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Navbar;
