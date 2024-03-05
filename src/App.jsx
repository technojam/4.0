import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useRef } from "react";
import Timeline from "./components/Timeline";
import { useGSAP } from "@gsap/react";
import gsap, { Power3 } from "gsap";
import TimerCounter from  "./components/TimerCounter"
const App = () => {
  const isSmallScreen = window.innerWidth <= 1024;
  const comp = useRef();
  const t1 = gsap.timeline({ paused: true });
  useGSAP(
    () => {
      t1.to(
        // to
        ".typo",
        {
          x: 500,
          y: 100,
          duration: 2,
          rotation: 800,
          opacity: 0,
          ease: Power3.easeOut,
        },
        "start"
      )
        .to(
          // to
          ".bg_rocket",
          {
            scale: `${isSmallScreen ? 40 : 55}`,
            duration: 2,
            transformOrigin: `${isSmallScreen ? "91.5% 50.5%" : "85.5% 32%"}`,
            ease: Power3.easeInOut,
          },
          "start"
        )
        .to(".d-none", { display: "none" }) // to
        .from(".d-block", { opacity: 0 }); // from
    },
    { scope: comp }
  );
  return (
    <div
      ref={comp}
      className="relative min-h-screen select-none font-Phudu overflow-x-hidden"
    >
      {/* Navbar */}
      <div className="d-block">
        <Navbar />
      </div>
      {/* Background Sky */}
      <div class="sky fixed top-0 left-0 -z-20 w-screen h-screen">
        <div class="stars"></div>
        <div class="stars1"></div>
        <div class="stars2"></div>
        <div class="shooting-stars absolute bottom-0 right-0"></div>
        <div class="shooting-stars absolute bottom-10 right-32"></div>
        <div class="shooting-stars absolute bottom-20 right-72"></div>
      </div>
      {/* Animation Page */}
        {/* Background Rocket Image */}
        <img
          className="fixed object-cover top-0 left-0 w-screen -z-10 h-screen bg_rocket d-none"
          src="/bg_rocket.jpeg"
          alt="bg_rocket"
        />
        {/* Typography */}
        <div className="pt-40 mx-auto fixed z-50 lg:mx-0 lg:pl-96 max-w-fit typo d-none">
          <h1 className="md:text-7xl text-5xl font-semibold font-Tilt_Prism">
            Dexterix
          </h1>
          <div className="flex">
            <h6 className="md:text-lg capitalize">Finding the new dexters</h6>
            <h1 className="md:text-7xl text-5xl font-semibold font-Tilt_Prism">
              4.0
            </h1>
          </div>
          <button
            onClick={() => t1.play()}
            className="mt-5 px-4 py-2 md:float-right rounded-md bg-[#974BD0] hover:scale-110 duration-150 hover:bg-[#aa55eb]"
          >
            Start
          </button>
        </div>
      {/* Pages */}
      <div className="d-block  opacity-100">
        <Hero />
        <Timeline />
        <TimerCounter/>
      </div>

    </div>
  );
};

export default App;
