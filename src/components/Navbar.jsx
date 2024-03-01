"use client";
// import gsap, { Power3 } from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
  // Animation Using Gsap
  const comp = useRef();
  const [theme, setTheme] = useState(null);
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
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.to(".navbar", { opacity: 100 })
  //       .from(".logo", { x: -150, duration: 0.6, ease: Power3.easeOut }, "-=.4")
  //       .from(
  //         ".page",
  //         {
  //           x: -200,
  //           y: -60,
  //           stagger: 0.15,
  //           ease: Power3.easeOut,
  //           duration: 0.7,
  //         },
  //         "-=.4"
  //       )
  //       .from(
  //         ".github",
  //         {
  //           x: -200,
  //           y: -60,
  //           ease: Power3.easeOut,
  //           duration: 0.4,
  //         },
  //         "-=.2"
  //       );
  //   }, comp);
  //   return () => ctx.revert();
  // }, []);
  return (
    <nav
      ref={comp}
      className="px-5 w-screen absolute top-0 left-0 h-[10vh] bg-transparent flex items-center justify-between navbar"
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
      <div className="text-xl flex items-center dark:text-white text-black gap-8">
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
        <div
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          className="cursor-pointer rounded-xl"
        >
          {theme == "dark" ? <FaSun /> : <FaMoon className="text-black" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
