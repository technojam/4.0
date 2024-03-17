import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
let timerInterval; 


const Timer3 = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      let days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      let hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60));
      let seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

      days = days.toString().padStart(2, "0");
      hours = hours.toString().padStart(2, "0");
      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");

      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date("April 10, 2024 00:00:00").getTime();

    timerInterval = setInterval(() => {
      getTimeDifference(countDownDate);
    }, 1000);
  }, []);

  useEffect(() => {
    let timerInterval;
    startCountDown();

    return () => {
      clearInterval(timerInterval);
    };
  }, [startCountDown]);

  const timeCounter = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();

  useGSAP(() => {
    t1.to(".heading", {
      width: 0,
      scrollTrigger: {
        trigger: ".heading",
        start: "top 80%",
        end: "bottom center",
        scrub: 2.5,
      },
    }).to(
      ".revealBox",
      {
        height: 0,
        ease: Power4.easeInOut,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".revealBox",
          start: "top 70%",
          end: "center center",
          scrub: 2.5,
        },
      }
    );
  }, { scope: timeCounter });

  return (
    <div ref={timeCounter} className="flex flex-col items-center justify-center h-screen gap-8 sm:gap-16">
      <div className="text-2xl relative sm:text-3xl font-semibold text-[#daa520] text-center tracking-widest px-2">

        Registration Ends in
        <h1 className="absolute heading w-full h-full bg-cyan-400 top-0 right-0"></h1>
      </div>
      <div className="flex justify-center gap-3 sm:gap-8 font-Orbitron">
        {/* Day Box */}
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#daa520]"></div>
            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
              {countDownTime?.days}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#daa520]"></div>
          </div>
          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.days == 1 ? "Day" : "Days"}
          </span>
          <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-cyan-400 revealBox"></div>
        </div>
        {/* Hour Box */}
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#daa520]"></div>
            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
              {countDownTime?.hours}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#daa520]"></div>
          </div>
          <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
          </span>
          <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-cyan-400 revealBox"></div>
        </div>
        {/* Minute Box */}
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#daa520]"></div>
            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
              {countDownTime?.minutes}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#daa520]"></div>
          </div>
          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
          <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-cyan-400 revealBox"></div>
        </div>
        {/* Second Box */}
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#daa520]"></div>
            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#daa520]">
              {countDownTime?.seconds}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#daa520]"></div>
          </div>
          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
          <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-cyan-400 revealBox"></div>
        </div>
      </div>
    </div>
  );
};

export default Timer3;
