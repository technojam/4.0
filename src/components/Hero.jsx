import React from "react";
import { ReactTyped } from "react-typed";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <div className="text-white pt-[12vh] lg:pt-0 relative z-10 pb-20 h-screen overflow-hidden flex flex-col w-screen px-5 my-10 lg:my-14  lg:px-0 items-center justify-center gap-10 lg:gap-0">
      <LazyLoadImage src="/dexLogo.png" className="w-full " />
      <div className="mt-10 lg:mt-0 flex flex-col md:flex-row gap-8 md:justify-between w-full lg:w-8/12">
        <div>
          <p className="text-[22px] font-bold">Organised by,</p>
          <p className="text-[18px] font-bold">Team TechnoJam</p>
        </div>
        {/* REACT TYPED */}
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
          <h1 className="text-gray-300 text-xl font-bold">
            Galgotias University, Greater Noida
          </h1>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-8 md:justify-between w-full lg:w-8/12 items-center">
        {/* Social Links */}
        <ul className="flex gap-3 text-3xl text-white">
          <li className="hover:scale-110 hover:text-[#daa520] duration-150">
            <a
              href="https://www.linkedin.com/company/technojam/"
              target="_blank"

            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="hover:scale-110 hover:text-[#daa520]  duration-150">
            <a
              href="https://www.facebook.com/teamtechnojam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className="hover:scale-110 hover:text-[#daa520]  duration-150">
            <a
              href="https://www.instagram.com/teamtechnojam/"
              target="_blank"
              
            >
              <FaInstagram />
            </a>
          </li>
          <li className="hover:scale-110 hover:text-[#daa520] duration-150">
            <a
              href="https://twitter.com/technojam_gu"
              target="_blank"
              
            >
              <FaTwitter />
            </a>
          </li>
          <li className="hover:scale-110 hover:text-[#daa520] duration-150">
            <a href="https://discord.gg/S5GhBJYNVg" target="_blank">
              <FaDiscord />
            </a>
          </li>
        </ul>
        <div className="flex md:flex-row  justify-center items-center lg:mr-28 gap-5">
          <Link to = "https://www.instagram.com/ar/345957361822810/"
           className="bg-gradient-to-r from-[#6ba4ad] to-[#505aaf] rounded-md font-medium text-xl px-5 py-3"

          >
            Try Filter
          </Link>
          
        </div>
      </div>
    </div>
  );
};
export default Hero;
