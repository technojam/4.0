import {
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaDiscord,
  } from "react-icons/fa6";
  import { FaFacebookSquare } from "react-icons/fa";
  import { IoLogoYoutube } from "react-icons/io";
  import React from "react";
  const SocialMedia = () => {
    return (
      <div className="bg-black h-screen w-screen ">
        <ul className="flex gap-2 text-white ">
          <li className="">
            <a
              href="https://www.linkedin.com/company/technojam/
  
  "
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/teamtechnojam
  
  "
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/teamtechnojam/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/technojam_gu"
              target="_blank">
              <FaTwitter />
            </a>
          </li>
          {/* <li>
                      <a href="" ><IoLogoYoutube /></a>
                  </li> */}
          <li>
            <a href="https://discord.gg/d3VZen7c" target="_blank">
              <FaDiscord />
            </a>
          </li>
        </ul>
      </div>
    );
  };
  export default SocialMedia;