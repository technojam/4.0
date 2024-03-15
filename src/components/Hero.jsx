import React, { useRef } from "react";
import { ReactTyped } from "react-typed";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import Text_3D from "./Text_3D";
import { OrbitControls } from "@react-three/drei";

const Torus = () => {
  return (
    <mesh>
      <torusGeometry rotateX={100} args={[1.5, 0.1, 2, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};
const Hero = () => {
  return (
    <div className="text-white pt-[12vh] lg:pt-0 relative z-10 pb-20 h-screen overflow-hidden flex-col flex w-screen px-5 lg:px-0 items-center justify-center">
      {/* 3D Design using Three JS */}
      <div className="w-[80%] h-[65%]">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
          <OrbitControls enableZoom={false} />
          <directionalLight position={[0, 0, 3]} />
          <ambientLight />
          <Text_3D />
          <group position={[-0.085, 0, 0]}>
            {/* <Torus/> */}
            <mesh>
              <sphereGeometry args={[1, 32, 40]} />
              <meshStandardMaterial color="cyan" />
            </mesh>
          </group>
        </Canvas>
      </div>
      <div className="flex justify-center gap-14">
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
              className="text-2xl font-bold"
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
      <button className="bg-[#39A8DC] w-[150px] absolute top-[54%] right-0 rounded-md font-medium text-xl my-4 py-3 hover:bg-[#57c1f2] ease-in-out duration-200 rotate-90 hover:scale-95">
        Register
      </button>
      {/* Social Media */}
      <ul className="flex-col flex gap-3 text-3xl text-white absolute top-1/2 left-10">
        <li className="hover:scale-110 duration-150">
          <a href="https://www.linkedin.com/company/technojam/" target="_blank">
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
  );
};
export default Hero;