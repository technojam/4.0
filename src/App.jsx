import Navbar from "./components/Navbar";
import { IoMenu } from "react-icons/io5";
import Card from "./components/Card";
import Hero from "./components/Hero";
import { useRef } from "react";
import Timeline from "./components/Timeline";
import cardTheme from "./components/cardTheme";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import TimerCounter from "./components/TimerCounter";
import ChatBox from "./components/ChatBox";
import ImageSlider from "./components/ImageSlider";
import About from "./components/About";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import { useState } from "react";
const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const about = useRef(null);
  const timeline = useRef(null);
  const sponsors = useRef(null);
  const events = useRef(null);
  const scrollToSection = (element) => {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth",
    });
  };
  // Gsap Animation
  const comp = useRef();
  const t1 = gsap.timeline();
  useGSAP(
    () => {
      t1.to(".sky", { width: "100%", duration: 2, top: 0, ease: Power4.easeIn }) // to
        .to(".d-none", { display: "none" }) // to
        .from(".d-block", { opacity: 0 }); // from
    },
    { scope: comp }
  );
  return (
    <div
      ref={comp}
      className="relative scroll-smooth min-h-screen select-none font-Phudu overflow-x-hidden"
    >
      {/* Background Sky */}
      <div className="sky bg-center fixed left-0 -z-20 w-0 h-screen">
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="shooting-stars absolute bottom-0 right-0"></div>
        <div className="shooting-stars absolute bottom-10 right-32"></div>
        <div className="shooting-stars absolute bottom-20 right-72"></div>
        <img
          src="/rocket.png"
          className="absolute top-60 -right-20 w-56 aspect-square d-none"
          alt="rocket"
        />
      </div>
      <div className="d-block opacity-100">
        {/* navbar */}
        <div>
          <nav
            ref={comp}
            className="px-5 w-screen z-30 text-white gap-8 absolute top-0 left-0 h-[11vh] bg-transparent flex items-center justify-between navbar"
          >
            {/* Technojam Logo */}
            <div className="logo">
              <img
                src="/TechnoJam.png"
                className="w-[45px] mx-auto logo"
                alt="logo"
              />
            </div>
            {/* Page Navigation */}
            <div className="hidden lg:flex text-xl items-center gap-8 font-Product_Sans mr-10">
              <div
                onClick={() => scrollToSection(about)}
                className={`cursor-pointer duration-200 hover:scale-110`}
              >
                About
              </div>
              <div
                onClick={() => scrollToSection(timeline)}
                className={`cursor-pointer duration-200 hover:scale-110`}
              >
                Schedule
              </div>
              <div
                onClick={() => scrollToSection(events)}
                className={`cursor-pointer duration-200 hover:scale-110`}
              >
                Events
              </div>
              <div
                onClick={() => scrollToSection(sponsors)}
                className={`cursor-pointer duration-200 hover:scale-110`}
              >
                Sponsors
              </div>
              <div
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className={`cursor-pointer duration-200 hover:scale-110`}
              >
                FAQs
              </div>
              <div
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className={`cursor-pointer duration-200 hover:scale-110`}
              >
                Contact Us
              </div>
            </div>
            {/* Mobile Optimization */}
            <div className="flex lg:hidden cursor-pointer gap-5 items-center">
              <IoMenu
                onClick={() => setSidebar(!sidebar)}
                className="text-2xl md:text-3xl mr-5"
              />
            </div>
          </nav>
          {/* Small Devices Sidebar */}
          <div
            className={`${
              sidebar ? "top-0 right-0" : "top-0 right-[-400px]"
            } duration-300 lg:hidden flex flex-col border border-l border-[#ffffff2c] backdrop-blur bg-transparent justify-start pt-[12vh] items-start px-8 z-20 text-xl md:text-2xl gap-2 dark:text-white text-black absolute max-w-fit h-screen`}
          >
            <div
              onClick={() => scrollToSection(about)}
              className={`cursor-pointer duration-200 hover:scale-110`}
            >
              About
            </div>
            <div
              onClick={() => scrollToSection(timeline)}
              className={`cursor-pointer duration-200 hover:scale-110`}
            >
              Schedule
            </div>
            <div
              onClick={() => () => scrollToSection(events)}
              className={`cursor-pointer duration-200 hover:scale-110`}
            >
              Events
            </div>
            <div
              onClick={() => () => scrollToSection(sponsors)}
              className={`cursor-pointer duration-200 hover:scale-110`}
            >
              Sponsors
            </div>
            <div
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className={`cursor-pointer duration-200 hover:scale-110`}
            >
              FAQs
            </div>
            <div
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className={`cursor-pointer duration-200 hover:scale-110`}
            >
              Contact Us
            </div>
          </div>
        </div>
        <Hero />
        <div ref={about}>
          <About />
        </div>
        <div ref={timeline}>
          <Timeline />
        </div>
        <TimerCounter />
        <div ref={sponsors}>
          <Sponsors />
        </div>
        <div ref={events}>
          <ImageSlider />
        </div>
        {/* Card Section */}
        <h1 className="text-white text-4xl font-Phudu font-medium flex justify-center">
          Themes
        </h1>
        <div className="flex justify-center min-h-screen py-10 items-center text-white gap-10 flex-wrap">
          {cardTheme.map((theme) => (
            <Card key={theme.hueDeg} theme={theme} />
          ))}
        </div>
        <Footer />
      </div>
      {/* Scroll To Top Button */}
      <div className="d-block">
        <ChatBox />
      </div>
    </div>
  );
};
export default App;
