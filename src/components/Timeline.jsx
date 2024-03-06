import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const Timeline = () => {
  const timeline = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to("#rocket", {
        scrollTrigger: {
          trigger: "#path",
          start: "top 40%",
          end: "bottom 70%",
          scrub: 1,
        },
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      })
        .from(".rightPlanet", {
          width:"60px",
          opacity: 0.3,
          x: 500,
          rotate: 300,
          stagger: 1,
          scrollTrigger: {
            trigger: "#path",
            start: "top 75%",
            end: "bottom 75%",
            scrub: 1,
          },
        })
        .from(".leftPlanet", {
          width:"60px",
          opacity: 0.3,
          rotate: 300,
          x: -500,
          stagger: 1,
          scrollTrigger: {
            trigger: "#path",
            start: "top 90%",
            end: "bottom 95%",
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
      className="relative z-10 text-3xl flex justify-center min-h-screen items-center"
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
      <img
        className="absolute leftPlanet top-0 left-52 w-48 aspect-square"
        src="/planet.png"
        alt="planet"
      />
      <div className="absolute leftPlanet top-0 flex justify-center items-center text-white text-lg left-52 w-48 p-5 aspect-square text-center z-50">
        <h1>Registration Starts</h1>
      </div>
      <img
        className="absolute rightPlanet top-24 right-48 w-48 aspect-square"
        src="/planet2.png"
        alt="planet2"
      />
      <div className="absolute rightPlanet top-24 right-48 flex justify-center items-center text-white text-lg w-48 p-5 aspect-square text-center z-50">
        <h1>Registration Starts</h1>
      </div>
      <img
        className="absolute rightPlanet right-24 top-[430px] w-48 aspect-square"
        src="/planet4.png"
        alt="planet3"
      />
      <div className="absolute rightPlanet right-24 top-[430px] flex justify-center items-center text-white text-lg w-48 p-5 aspect-square text-center z-50">
        <h1>Registration Starts</h1>
      </div>
      <img
        className="absolute leftPlanet top-[430px] left-[250px] w-48 aspect-square"
        src="/planet3.png"
        alt="planet4"
      />
      <div className="absolute leftPlanet top-[430px] left-[250px] flex justify-center items-center text-white text-lg w-48 p-5 aspect-square text-center z-50">
        <h1>Registration Starts</h1>
      </div>
      <img
        className="absolute rightPlanet top-[600px] right-[350px] w-48 h-64"
        src="/planet5.png"
        alt="planet5"
      />
      <div className="absolute rightPlanet top-[600px] right-[350px] flex justify-center items-center text-white text-lg w-48 h-64 p-5 text-center z-50">
        <h1>Registration End</h1>
      </div>
    </div>
  );
};

export default Timeline;
