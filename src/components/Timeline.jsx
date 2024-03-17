"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "./utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHome } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa";

const Timeline = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight - 0);
    }
  }, []);
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  // Gsap Animation...
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();
  useGSAP(
    () => {
      if (window.innerWidth >= 1200) {
        t1.from(".leftBox", {
          x: -1000,
          opacity: 0.3,
          stagger: 1,
          scrollTrigger: {
            trigger: "#Timeline",
            start: "top center",
            end: "bottom 90%",
            scrub: 3,
          },
        }).from(".rightBox", {
          x: 1000,
          opacity: 0.3,
          stagger: 1,
          scrollTrigger: {
            trigger: "#Timeline",
            start: "top center",
            end: "bottom 90%",
            scrub: 3,
          },
        });
      } else {
        t1.from(".resBox", {
          x: 800,
          opacity: 0.3,
          stagger: 0.8,
          scrollTrigger: {
            trigger: "#Timeline",
            start: "top 90%",
            end: "bottom 80%",
            scrub: 2.5,
          },
        });
      }
    },
    { scope: ref }
  );
  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative lg:w-10/12 w-[95%] mx-auto min-h-screen",
        className
      )}
    >
      <div className="absolute lg:left-1/2 left-0 top-20">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center text-[#daa520]"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div
        ref={contentRef}
        id="Timeline"
        className="flex flex-col items-center md:items-start lg:items-center gap-16 w-full"
      >
        <h1 className="text-4xl font-semibold underline underline-offset-4 text-center w-full text-[#daa520]">Schedule</h1>
        <div className="flex flex-col gap-14 items-end md:items-start lg:items-end mt-5 md:ml-20 lg:ml-0">
          <div className="flex lg:items-center gap-28 items-start lg:flex-row flex-col">
            <div
              style={{
                background:
                  "linear-gradient(90deg, hsla(177, 87%, 79%, .7) 0%, hsla(235, 89%, 70%, .7) 100%)",
              }}
              className="max-w-fit leftBox resBox rounded px-4 py-2 lg:p-3 md:p-1 flex gap-8 items-center"
            >
              <h6 className="font-bold text-xl hover:text-xl">
                Registration Starts
              </h6>
              <FaHome />
            </div>
            <h1 className="text-xl text-white rightBox resBox font-semibold pr-28">
              10th March
            </h1>
          </div>
          <div className="flex lg:items-center gap-28 items-start lg:flex-row flex-col-reverse">
            <h1 className="text-xl text-white resBox leftBox font-semibold">
              1st April
            </h1>
            <div
              style={{
                background:
                  "linear-gradient(90deg, hsla(177, 87%, 79%, .7) 0%, hsla(235, 89%, 70%, .7) 100%)",
              }}
              className="max-w-fit rightBox resBox rounded px-4 py-2 lg:p-3 md:p-1 flex gap-8 mr-12 items-center"
            >
              <h6 className="font-bold text-xl hover:text-xl">Bootcamp</h6>
              <FaGift />
            </div>
          </div>
          <div className="flex lg:items-center gap-28 items-start lg:flex-row flex-col">
            <div
              style={{
                background:
                  "linear-gradient(90deg, hsla(177, 87%, 79%, .7) 0%, hsla(235, 89%, 70%, .7) 100%)",
              }}
              className="max-w-fit leftBox resBox rounded px-4 py-2 lg:p-3 md:p-1 flex gap-8 items-center"
            >
              <h6 className="font-bold text-xl hover:text-xl">
                Registration Ends
              </h6>
              <FaWalking />
            </div>
            <h1 className="text-xl text-white rightBox font-semibold pr-28">
              10th April
            </h1>
          </div>
          <div className="flex lg:items-center resBox gap-28 items-start lg:flex-row flex-col-reverse">
            <h1 className="text-xl text-white leftBox font-semibold">
              13th April
            </h1>
            <div
              style={{
                background:
                  "linear-gradient(90deg, hsla(177, 87%, 79%, .7) 0%, hsla(235, 89%, 70%, .7) 100%)",
              }}
              className="max-w-fit rightBox resBox rounded px-4 py-2 lg:p-3 md:p-1 flex gap-8 mr-8 items-center"
            >
              <h6 className="font-bold text-xl hover:text-xl">Dexterix 4.0</h6>
              <FaHourglassStart />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Timeline;
