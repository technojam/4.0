import { IoMenu } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
const Navbar = () => {
  // Animation Using Gsap
  const comp = useRef();
  const [theme, setTheme] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  // Theme
  useEffect(() => {
    // Default Dark Mode...
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  // Dark Mode Checking...
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <nav
        ref={comp}
        className="px-5 w-screen border-b border-[#ffffff2c] z-20 text-white gap-8 absolute top-0 left-0 h-[11vh] bg-transparent flex items-center justify-between navbar"
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
        <div className="hidden lg:flex text-xl items-center gap-8">
          <div
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
            className={`cursor-pointer duration-200 hover:scale-110`}
          >
            About
          </div>
          <div
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
            className={`cursor-pointer duration-200 hover:scale-110`}
          >
            Schedule
          </div>
          <div
            onClick={() =>
              window.scrollTo({
                top: 2 * window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
            className={`cursor-pointer duration-200 hover:scale-110`}
          >
            Events
          </div>
          <div
            onClick={() =>
              window.scrollTo({
                top: 3 * window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
            className={`cursor-pointer duration-200 hover:scale-110`}
          >
            Sponsors
          </div>
          <div
            onClick={() =>
              window.scrollTo({
                top: 4 * window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
            className={`cursor-pointer duration-200 hover:scale-110`}
          >
            FAQs
          </div>
          <div
            onClick={() =>
              window.scrollTo({
                top: 5 * window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
            className={`cursor-pointer duration-200 hover:scale-110`}
          >
            Contact Us
          </div>
          {/* <div
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
            className="cursor-pointer rounded-xl"
          >
            {theme == "dark" ? <FaSun /> : <FaMoon className="text-black" />}
          </div> */}
        </div>
        {/* Mobile Optimization */}
        <div className="flex lg:hidden gap-5 items-center">
          {/* <div
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
            className="text-lg md:text-2xl cursor-pointer rounded-xl"
          >
            {theme == "dark" ? <FaSun /> : <FaMoon className="text-black" />}
          </div> */}
          <IoMenu
            onClick={() => setSidebar(!sidebar)}
            className="text-2xl md:text-3xl mr-5"
          />
        </div>
      </nav>
      {/* Sidebar */}
      <div
        className={`${
          sidebar ? "top-0 right-0" : "top-0 right-[-400px]"
        } duration-300 lg:hidden flex flex-col border border-l border-[#ffffff2c] backdrop-blur bg-transparent justify-start pt-[12vh] items-start px-8 z-10 text-xl md:text-2xl gap-2 dark:text-white text-black absolute max-w-fit h-screen`}
      >
        <div
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              left: 0,
              behavior: "smooth",
            })
          }
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          About
        </div>
        <div
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              left: 0,
              behavior: "smooth",
            })
          }
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          Schedule
        </div>
        <div
          onClick={() =>
            window.scrollTo({
              top: 2 * window.innerHeight,
              left: 0,
              behavior: "smooth",
            })
          }
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          Events
        </div>
        <div
          onClick={() =>
            window.scrollTo({
              top: 3 * window.innerHeight,
              left: 0,
              behavior: "smooth",
            })
          }
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          Sponsors
        </div>
        <div
          onClick={() =>
            window.scrollTo({
              top: 4 * window.innerHeight,
              left: 0,
              behavior: "smooth",
            })
          }
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          FAQs
        </div>
        <div
          onClick={() =>
            window.scrollTo({
              top: 5 * window.innerHeight,
              left: 0,
              behavior: "smooth",
            })
          }
          className={`cursor-pointer duration-200 hover:scale-110`}
        >
          Contact Us
        </div>
      </div>
    </>
  );
};

export default Navbar;
