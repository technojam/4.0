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
import Prize from "./components/Prize";
import Navbar from "./components/Navbar";
import GoToTop from "./components/GoToTop";
import Judges from "./components/Judges";
import { judgesList } from "./components/judgeList";
import { mentorList } from "./components/mentorList";

const App = () => {
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
  const style = {
    fontFamily: "Gugi, sans-serif",
  };
  return (
    <div
      ref={comp}
      className="relative scroll-smooth w-screen min-h-screen font-Phudu overflow-x-hidden"
      style={style}
      id="home"
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
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <TimerCounter />
        <Prize />
        {/* <Sponsors />
        <CommunityPartners/> */}
        <ImageSlider />
        <Judges heading={"Judges"} lists={judgesList} />
        <Judges heading={"Mentors"} lists={mentorList} />
        {/* Card Section */}
        <h1
          id="themes"
          className="text-[#daa520] text-4xl font-Phudu font-medium flex justify-center"
        >
          Themes
        </h1>
        <div className="flex justify-center min-h-screen py-10 items-center text-white gap-10 flex-wrap">
          {cardTheme.map((theme) => (
            <Card key={theme.hueDeg} theme={theme} />
          ))}
        </div>
        <Footer />
        <ChatBox />
      </div>
      {/* Scroll To Top Button */}
      <div className="d-block">
        <GoToTop />
      </div>
    </div>
  );
};

export default App;
