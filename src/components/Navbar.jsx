import React from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="px-5 w-screen z-30 text-white gap-8 absolute top-0 left-0 h-[11vh] bg-transparent flex items-center justify-between navbar">
        {/* Technojam Logo */}
        <LazyLoadImage src="/dexLogo.png" className="w-36" alt="logo" />
        {/* Page Navigation */}
        <div className="hidden lg:flex text-xl items-center gap-8 font-Gugi_sans-serif mr-10">
          <a
            href="#about"
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
            href="#prize"
            className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
          >
            Prize
          </a>
          <a
            href="mailto:technojam@galgotiasuniversity.edu.in"
            className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
          >
            Contact Us
          </a>
          {/* <button onClick={()=>navigate("/components/DigitalSwag.jsx")}>dS</button> */}
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
        <a
          href="#about"
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          About
        </a>
        <a
          href="#Timeline"
          className={`cursor-pointer duration-200 hover:scale-110`}
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
          href="#prize"
          className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
        >
          Prize
        </a>
        <a
          href="mailto:technojam@galgotiasuniversity.edu.in"
          className={`cursor-pointer duration-200 hover:scale-110 hover:text-[#daa520]`}
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Navbar;
