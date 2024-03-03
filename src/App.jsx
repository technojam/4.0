import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import gsap, { Power3 } from "gsap";
import { useLayoutEffect, useRef } from "react";
const App = () => {
  const isSmallScreen = window.innerWidth <=1024;
  const comp = useRef();
  const t1 = gsap.timeline({ paused: true });
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      t1
      // .to(
      //   ".typo",
      //   {
      //     x: 500,
      //     y: 100,
      //     duration: 2,
      //     rotation: 800,
      //     opacity: 0,
      //     ease: Power3.easeOut,
      //   },
      //   "start"
      // )
      .to(
          ".bg_rocket",
          {
            scale: `${isSmallScreen?40:55}`,
            duration: 2,
            transformOrigin: `${isSmallScreen?"91.5% 50.5%":"85.5% 32%"}`,
            ease: Power3.easeInOut,
          },
          "start"
        )
        .to(".d-none", { display: "none" })
        .from(".d-block", { display: "none" });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative font-Phudu overflow-hidden">
      <div className="relative bg-transparent">
        {/* Animation Page */}
        <div ref={comp} className="relative h-screen">
          {/* Rocket Image */}
          <img
            className="absolute object-cover top-0 left-0 w-screen -z-10 h-screen bg_rocket d-none"
            src="/bg_rocket.jpeg"
            alt="bg_rocket"
            />
            {/* Rocket Interior Image */}
          <img
            className="absolute object-cover top-0 left-0 w-screen -z-20 opacity-90 h-screen"
            src="/bg_interior.jpg"
            alt="bg_interior"
          />
          <div className="d-block block">
            <Navbar />
            <Hero />
          </div>
          {/* Typography */}
          <div className="pt-40 mx-auto lg:mx-0 lg:pl-96 max-w-fit typo d-none">
            <h1 className="md:text-7xl text-5xl font-semibold font-Tilt_Prism">Dexterix</h1>
            <div className="flex">
              <h6 className="md:text-lg capitalize font-Phudu">
                Finding the new dexters
              </h6>
              <h1 className="md:text-7xl text-5xl font-semibold font-Tilt_Prism">4.0</h1>
            </div>
            <button
              onClick={() => t1.play()}
              className="mt-5 px-4 py-2 font-Phudu md:float-right rounded-md bg-[#974BD0] hover:scale-110 duration-150 hover:bg-[#aa55eb]"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
