import React, { useState, useRef } from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ThreeDModel from "./ThreeDModel"; // Your 3D model component

const Hero = () => {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="text-white pt-[12vh] lg:pt-0 relative z-10 pb-20 h-screen overflow-hidden flex flex-col w-screen px-5 lg:px-0 items-center justify-center gap-10 lg:gap-0">
      {showVideo && (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="src/components/Untitled.mp4"
            autoPlay
            muted
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
          />
        </div>
      )}
      {!showVideo && (
        <>
          <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row justify-start gap-14">
            <div>
              <p className="text-[22px] font-bold">Organised by,</p>
              <p className="text-[18px] font-bold">
                School of Computing Science and Engineering and Team TechnoJam
              </p>
            </div>
            <div style={{ textAlign: 'right', marginLeft: '600px' }}>
              <p className="text-gray-300 text-[20px] font-bold">
                Galgotias University, Greater Noida
              </p>
              <ReactTyped
                className="text-2xl font-bold"
                strings={["April 13-14, 2024"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
          </div>
          <button className="bg-[#39A8DC] w-[150px] lg:absolute top-[54%] right-0 rounded-md font-medium text-xl my-4 py-3 hover:bg-[#57c1f2] ease-in-out duration-200 lg:rotate-90 hover:scale-95">
            Register
          </button>
          <ul className="lg:flex-col flex gap-3 text-3xl text-white lg:absolute top-1/2 left-10">
            <li className="hover:scale-110 duration-150">
              <a href="https://discord.gg/d3VZen7c" target="_blank">
                <FaDiscord />
              </a>
            </li>
            <li className="hover:scale-110 duration-150">
              <a href="https://www.linkedin.com/company/technojam/" target="_blank">
                <FaLinkedinIn />
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
          </ul>
          <div className="absolute inset-0">
            <Canvas>
              <ambientLight />
              <OrbitControls />
              <ThreeDModel />
            </Canvas>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
