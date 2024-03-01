import gsap, { Power3 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const LandingAnimation = () => {
  const comp = useRef();
  const t1 = gsap.timeline({ paused: true });
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      t1.to(
        ".typo",
        {
          x: 500,
          y: 100,
          duration: 1,
          rotation: 600,
          opacity: 0,
          ease: Power3.easeOut,
        },
        "start"
      ).to(
        ".bg_rocket",
        { scale: 55, duration: 1, transformOrigin: "85.5% 32%" },
        "start"
      ).to(".d-none",{display:"none"})
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={comp} className="relative h-screen">
      <img
        className="absolute object-cover top-0 left-0 w-screen -z-10 h-screen bg_rocket d-none"
        src="/bg_rocket.jpeg"
        alt="bg_rocket"
      />
      <img
        className="absolute object-cover top-0 left-0 w-screen -z-20 h-screen"
        src="/bg_interior.jpg"
        alt="bg_rocket"
      />
      {/* Typography */}
      <div className="pt-40 px-96 max-w-fit typo d-none">
        <h1 className="text-7xl font-semibold font-Tilt_Prism">Dexterix</h1>
        <div className="flex">
          <h6 className="text-lg capitalize font-Phudu">
            Finding the new dexters
          </h6>
          <h1 className="text-7xl font-semibold font-Tilt_Prism">4.0</h1>
        </div>
        <button
          onClick={() => t1.play()}
          className="mt-5 px-4 py-2 font-Phudu float-right rounded-md bg-[#974BD0] hover:bg-[#aa55eb]"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default LandingAnimation;