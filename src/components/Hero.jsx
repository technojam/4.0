import React from "react";
import { ReactTyped } from "react-typed";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Logo3D from "./Logo3D";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white pt-[12vh] lg:pt-0 relative z-10 pb-20 h-screen overflow-hidden flex flex-col w-screen px-5 lg:px-0 items-center justify-center gap-10 lg:gap-0">
      {/* <Logo3D/> */}
      <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row justify-center gap-14">
        <div>
          <p className="text-[22px] font-bold">Organised by,</p>
          <p className="text-[18px] font-bold">
            School of Computing Science and Engineering and Team TechnoJam
          </p>
        </div>
        {/*REACT TYPED */}
        <div>
          <div>
            <ReactTyped
              className="text-2xl font-bold text-[#daa520]"
              strings={["April 13-14, 2024"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
          <p className="text-gray-300 text-[20px] font-bold">
            Galgotias University, Greater Noida
          </p>
        </div>
      </div>
      {/*REGISTER BUTTON */}

      <Link to='/register' className="bg-[#daa520] w-[150px] text-center lg:absolute top-[56%] right-0 rounded-md font-medium text-xl py-3 hover:bg-white ease-in-out duration-200 lg:rotate-90 hover:scale-95 hover:text-[#daa520]">
        Register
      </Link>
      {/* Social Media */}
      <ul className="lg:flex-col flex gap-3 text-3xl text-white lg:absolute top-1/2 left-10">
        <li className="hover:scale-110 hover:text-[#daa520] duration-150">
          <a href="https://www.linkedin.com/company/technojam/" target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="hover:scale-110 hover:text-[#daa520]  duration-150">
          <a href="https://www.facebook.com/teamtechnojam" target="_blank">
            <FaFacebookSquare />
          </a>
        </li>
        <li className="hover:scale-110 hover:text-[#daa520]  duration-150">
          <a href="https://www.instagram.com/teamtechnojam/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li className="hover:scale-110 hover:text-[#daa520] duration-150">
          <a href="https://twitter.com/technojam_gu" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li className="hover:scale-110 hover:text-[#daa520] duration-150">
          <a href="https://discord.gg/d3VZen7c" target="_blank">
            <FaDiscord />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Hero;