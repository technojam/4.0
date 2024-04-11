import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Judges = () => {
  return (
    <div className="min-h-screen flex lg:py-28 py-16 text-white lg:w-10/12 mx-auto flex-wrap items-center justify-evenly font-Phudu gap-10 lg:gap-20 relative">
      <h1 className="absolute lg:top-2 top-0 text-4xl font-semibold font-Ethnocentric">
        Judges
      </h1>
      <div className="lg:w-1/6 md:w-1/3 w-10/12 h-[350px] flex flex-col items-center justify-between">
        <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"
          alt="Judge Profile"
          className="lg:w-full w-9/12 rounded-full object-cover aspect-square"
        />
        <h1 className="text-xl font-medium">Judge Name</h1>
        <h1 className="font-normal">Mentor</h1>
        <a href="https://www.linkedin.com/company/technojam/"  className="hover:scale-110 hover:text-[#daa520] text-xl duration-150" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 w-10/12 h-[350px] flex flex-col items-center justify-between">
        <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"
          alt="Judge Profile"
          className="lg:w-full w-9/12 rounded-full object-cover aspect-square"
        />
        <h1 className="text-xl font-medium">Judge Name</h1>
        <h1 className="font-normal">Mentor</h1>
        <a href="https://www.linkedin.com/company/technojam/"  className="hover:scale-110 hover:text-[#daa520] text-xl duration-150" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 w-10/12 h-[350px] flex flex-col items-center justify-between">
        <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"
          alt="Judge Profile"
          className="lg:w-full w-9/12 rounded-full object-cover aspect-square"
        />
        <h1 className="text-xl font-medium">Judge Name</h1>
        <h1 className="font-normal">Mentor</h1>
        <a href="https://www.linkedin.com/company/technojam/"  className="hover:scale-110 hover:text-[#daa520] text-xl duration-150" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 w-10/12 h-[350px] flex flex-col items-center justify-between">
        <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"
          alt="Judge Profile"
          className="lg:w-full w-9/12 rounded-full object-cover aspect-square"
        />
        <h1 className="text-xl font-medium">Judge Name</h1>
        <h1 className="font-normal">Mentor</h1>
        <a href="https://www.linkedin.com/company/technojam/"  className="hover:scale-110 hover:text-[#daa520] text-xl duration-150" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 w-10/12 h-[350px] flex flex-col items-center justify-between">
        <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"
          alt="Judge Profile"
          className="lg:w-full w-9/12 rounded-full object-cover aspect-square"
        />
        <h1 className="text-xl font-medium">Judge Name</h1>
        <h1 className="font-normal">Mentor</h1>
        <a href="https://www.linkedin.com/company/technojam/"  className="hover:scale-110 hover:text-[#daa520] text-xl duration-150" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 w-10/12 h-[350px] flex flex-col items-center justify-between">
        <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"
          alt="Judge Profile"
          className="lg:w-full w-9/12 rounded-full object-cover aspect-square"
        />
        <h1 className="text-xl font-medium">Judge Name</h1>
        <h1 className="font-normal">Mentor</h1>
        <a href="https://www.linkedin.com/company/technojam/"  className="hover:scale-110 hover:text-[#daa520] text-xl duration-150" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Judges;