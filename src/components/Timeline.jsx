"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "./utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      setSvgHeight(contentRef.current.offsetHeight - 60);
      console.log(contentRef.current.offsetHeight);
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
      t1.from(".leftBox", {
        x: -800,
        opacity: 0.3,
        stagger: 1,
        scrollTrigger: {
          trigger: "#Timeline",
          start: "top center",
          end: "bottom 90%",
          scrub: 3,
        },
      }).from(".rightBox", {
        x: 800,
        opacity: 0.3,
        stagger: 1,
        scrollTrigger: {
          trigger: "#Timeline",
          start: "top center",
          end: "bottom 90%",
          scrub: 3,
        },
      });
    },
    { scope: ref }
  );
  return (
    <motion.div
      ref={ref}
      className={cn("relative w-10/12 mx-auto min-h-full", className)}
    >
      <div className="absolute left-1/2 top-5">
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
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
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
          className=" ml-4 block"
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
            strokeWidth="1.25"
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
        className="flex justify-between py-5 min-h-screen w-full"
      >
        {/* Left Side Div */}
        <div className="flex flex-col items-start">
          <div
            style={{
              background:
                "linear-gradient(90deg, hsla(177, 87%, 79%, .7) 0%, hsla(235, 89%, 70%, .7) 100%)",
            }}
            className="w-5/6 leftBox rounded h-64 p-3 flex flex-col justify-around items-center"
          >
            <h1 className="text-2xl font-semibold ">Timeline Title</h1>
            <h6>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              quis, quae incidunt ducimus cupiditate ullam hic quaerat soluta
              reprehenderit unde id, eius obcaecati laudantium earum quisquam,
              rem laboriosam adipisci? Ea mollitia cumque est excepturi,
              provident quisquam consectetur omnis. Eos.
            </h6>
          </div>
          <div className="w-5/6 leftBox rounded h-64 p-3 flex flex-col justify-around items-end">
            <h1 className="text-2xl text-white font-semibold ">
              Timeline Date
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, hsla(177, 87%, 79%, .7) 0%, hsla(235, 89%, 70%, .7) 100%)",
            }}
            className="w-5/6 leftBox rounded h-64 p-3 flex flex-col justify-around items-center"
          >
            <h1 className="text-2xl font-semibold ">Timeline Title</h1>
            <h6>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              quis, quae incidunt ducimus cupiditate ullam hic quaerat soluta
              reprehenderit unde id, eius obcaecati laudantium earum quisquam,
              rem laboriosam adipisci? Ea mollitia cumque est excepturi,
              provident quisquam consectetur omnis. Eos.
            </h6>
          </div>
          <div className="w-5/6 leftBox rounded h-64 p-3 flex flex-col justify-around items-end">
            <h1 className="text-2xl text-white font-semibold ">
              Timeline Date
            </h1>
          </div>
        </div>
        {/* Right Side Div */}
        <div className="flex flex-col gap-5 items-end">
          <div className="w-5/6 rightBox rounded h-64 p-3 flex flex-col justify-around items-start">
            <h1 className="text-2xl text-white font-semibold ">
              Timeline Date
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, hsla(177, 87%, 79%, .7) 0%, hsla(235, 89%, 70%, .7) 100%)",
            }}
            className="w-5/6 rightBox rounded h-64 p-3 flex flex-col justify-around items-center"
          >
            <h1 className="text-2xl font-semibold ">Timeline Title</h1>
            <h6>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              quis, quae incidunt ducimus cupiditate ullam hic quaerat soluta
              reprehenderit unde id, eius obcaecati laudantium earum quisquam,
              rem laboriosam adipisci? Ea mollitia cumque est excepturi,
              provident quisquam consectetur omnis. Eos.
            </h6>
          </div>
          <div className="w-5/6 rightBox rounded h-64 p-3 flex flex-col justify-around items-start">
            <h1 className="text-2xl text-white font-semibold ">
              Timeline Date
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, hsla(177, 87%, 79%, .7) 0%, hsla(235, 89%, 70%, .7) 100%)",
            }}
            className="w-5/6 rightBox rounded h-64 p-3 flex flex-col justify-around items-center"
          >
            <h1 className="text-2xl font-semibold ">Timeline Title</h1>
            <h6>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              quis, quae incidunt ducimus cupiditate ullam hic quaerat soluta
              reprehenderit unde id, eius obcaecati laudantium earum quisquam,
              rem laboriosam adipisci? Ea mollitia cumque est excepturi,
              provident quisquam consectetur omnis. Eos.
            </h6>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Timeline;
