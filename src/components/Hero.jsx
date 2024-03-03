import React from "react";
import { ReactTyped } from "react-typed";
import Navbar from "./Navbar";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="text-white pt-[12vh] lg:pt-0 realtive z-10 h-screen lg:flex-row flex-col flex px-5 items-center justify-between">
      {/*Left SECTION DIV  */}
      <div className="flex flex-col justify-center">
        <h1
          className="text-[#82aea4]
              md:text-6xl sm:text-5xl text-3xl font-bold md:py-3 "
        >
          Dexterix 4.0
        </h1>
        <p className="text-[25px] font-bold">Organised by,</p>
        <p className="text-[20px] font-bold">
          School of Computing Science and Engineering and Team TechnoJam
        </p>
        {/*REACT TYPED */}
        <div>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-2xl font-bold"
            strings={["Mar 11-12, 2024"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="text-gray-300 text-[20px] font-bold">
          Galgotias University, Greater Noida
        </p>

        {/*REGISTER BUTTON */}
        <button className="bg-[#5e887e] w-[150px] rounded-md font-medium text-xl my-4 py-3 hover:bg-[#486961] ease-in-out duration-200 transform hover:scale-95">
          Register
        </button>
        {/* Social Media */}
        <ul className="flex gap-3 text-2xl text-white ">
          <li className="hover:scale-110 duration-150">
            <a
              href="https://www.linkedin.com/company/technojam/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="hover:scale-110 duration-150">
            <a href="https://www.facebook.com/teamtechnojam" target="_blank">
              <FaFacebookSquare />
            </a>
          </li>
          <li className="hover:scale-110 duration-150">
            <a href="https://www.instagram.com/teamtechnojam/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li className="hover:scale-110 duration-150">
            <a href="https://twitter.com/technojam_gu" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li className="hover:scale-110 duration-150">
            <a href="https://discord.gg/d3VZen7c" target="_blank">
              <FaDiscord />
            </a>
          </li>
        </ul>
      </div>
      {/* Right SECTION DIV */}
      <div className="flex text-6xl py-8 items-center">
        <h1 className="font-Tilt_Prism">3d Model Here</h1>
      </div>
    </div>
  );
};
export default Hero;
