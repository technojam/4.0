import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
const Timeline = () => {
  const timeline = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
      const tl = gsap.timeline();
      tl.to("#rocket", {
        scrollTrigger: {
          trigger: "#path",
          start: "top 40%",
          end: "120% 90%",
          scrub: 1,
          // markers: true,
        },
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      }).from(".d-none", {
        x:1000,
        duration:.1,
        scrollTrigger: {
          trigger: "#path",
          start: "top bottom",
          end: "50%% 85%",
          scrub: 1,
        },
      });
    },
    { scope: timeline }
  );
  return (
    <div
      ref={timeline}
      id="main"
      className="relative z-10 text-3xl flex justify-center pb-72 min-h-screen items-center"
    >
      <img
        className="w-40 relative z-50 aspect-square"
        src="/rocket.png"
        id="rocket"
        alt="bg_interior"
      />
      <svg
        width="1280"
        height="1080"
        viewBox="0 0 2086 4036"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path"
          d="M2 214.89C2 214.89 1010.88 -259.613 1474.41 214.89C1937.94 689.394 1588.87 1315.94 1405.06 1414.31C1221.25 1512.68 988.956 1667.38 863.535 1820.24C738.115 1973.1 511.588 2537.25 863.535 2769.45C1215.48 3001.66 2357.41 3430.08 2020.57 3107.63C1683.72 2785.17 2020.57 4035 2020.57 4035"
          stroke="white"
          stroke-width="6"
        />
      </svg>
      <div className="absolute text-center p-5 top-5 left-64 w-80 h-40 rounded text-white border border-gray-500">
        First Timeline Info
      </div>
      <div className="absolute text-center p-5 top-32 right-48 w-80 h-40 rounded text-white border border-gray-500">
        Second Timeline Info
      </div>
      <div className="absolute text-center p-5 top-[550px] left-[400px] w-80 h-40 rounded text-white border border-gray-500">
        Third Timeline Info
      </div>
      <div className="absolute text-center p-5 top-[750px] right-20 w-80 h-40 rounded text-white border border-gray-500">
        Fourth Timeline Info
      </div>
      <div className="absolute text-center p-5 bottom-12 right-60 w-80 h-40 rounded text-white border border-gray-500">
        Fifth Timeline Info
      </div>
    </div>
  );
};

export default Timeline;
