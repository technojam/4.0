import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const Timeline = () => {
  const timeline = useRef();
  useGSAP(
    () => {
      // ScrollSmoother.create({
      //   smooth:1,
      //   effects:true,
      //   smoothTouch:0.1
      // })
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
      }).from(".timeContent", {
        opacity: 0,
        x: 1000,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#path",
          start: "top 90%",
          end: "90% 85%",
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
      className="relative z-10 text-3xl flex justify-center overflow-hidden h-screen items-center"
    >
      {/* Rocket Image */}
      <img
        className="w-40 relative z-50 aspect-square"
        src="/rocket.png"
        id="rocket"
        alt="rocket"
      />
      <svg
        width="775"
        height="632"
        viewBox="0 0 775 632"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path"
          d="M0.5 1C0.5 1 674 55 677 125.5C680 196 393.5 202.5 330 258.5C266.5 314.5 769.5 396 774 466.5C778.5 537 32.5 382 25 453.5C17.5 525 452.5 631 452.5 631"
          stroke="white"
        />
      </svg>
      <div className="absolute text-center p-5 top-5 left-64 w-80 h-40 rounded timeContent opacity-100 text-white border border-gray-500">
        First Timeline Info
      </div>
      <div className="absolute text-center p-5 top-32 right-48 w-80 h-40 rounded timeContent opacity-100 text-white border border-gray-500">
        Second Timeline Info
      </div>
      <div className="absolute text-center p-5 top-[550px] left-[400px] w-80 h-40 rounded timeContent opacity-100 text-white border border-gray-500">
        Third Timeline Info
      </div>
      <div className="absolute text-center p-5 top-[750px] right-20 w-80 h-40 rounded timeContent opacity-100 text-white border border-gray-500">
        Fourth Timeline Info
      </div>
      <div className="absolute text-center p-5 bottom-12 right-60 w-80 h-40 rounded timeContent opacity-100 text-white border border-gray-500">
        Fifth Timeline Info
      </div>
    </div>
  );
};

export default Timeline;
