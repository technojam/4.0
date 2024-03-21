import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Prize = () => {
  return (
    <div id="prize" className="w-screen overflow-x-hidden">
      <h1 className=" text-3xl self-center lg:text-4xl font-bold leading-9 text-[#daa520] pb-1 text-center mb-4">
        Prize
      </h1>
      {/* Prize Cards */}
      <div className="flex flex-wrap gap-10 lg:gap-28 md:gap-4 justify-center items-center  max-w-fit mx-auto">
        
        <div className="hover:scale-110 duration-300">
          <LazyLoadImage
            src="/silver.jpeg"
            className="bg-cover rounded-lg w-[180px] lg:w-[200px] h-[250px] lg:h-[300px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-2xl text-xl text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md">
            🏆2nd Prize🏆
            <br />
            ₹15000
          </h2>
        </div>
        <div className="hover:scale-110 duration-300">
          <LazyLoadImage
            src="/gold.jpeg"
            className="bg-cover rounded-lg w-[250px] h-[300px] lg:w-[300px] lg:h-[400px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-2xl text-xl text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md">
            🏆1st Prize🏆
            <br />
            ₹21000
          </h2>
        </div>
        <div className="hover:scale-110 duration-300">
          <LazyLoadImage
            src="/bronze.jpeg"
            className="bg-cover rounded-lg w-[180px] lg:w-[200px] h-[250px] lg:h-[300px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-2xl text-xl text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md ">
            🏆3rd Prize🏆
            <br />
            ₹10000
          </h2>
        </div>
      
        <div className="lg:flex lg:ml-[50px] gap-10 lg:gap-28 md:gap-4 flex flex-wrap justify-center items-center gap-10 pb-10">
        <div className="hover:scale-110 duration-300 ">
          <img
            src="/download.jpg"
            className="bg-cover rounded-lg w-[180px] lg:w-[240px] h-[150px] lg:h-[200px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-xl text-l text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md w-[180px] lg:w-[240px]">
          🏆All Girls Team🏆
            <br />
            ₹5000
          </h2>
        </div>

        <div className="hover:scale-110 duration-300">
          <img
            src="/fresher.jpg"
            className="bg-cover rounded-lg w-[180px] lg:w-[240px] h-[150px] lg:h-[200px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-xl text-l text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md w-[180px] lg:w-[240px]">
            🏆All Freshers Team🏆
            <br />
            ₹5000
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;