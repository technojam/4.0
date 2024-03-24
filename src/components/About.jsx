import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const About = () => {
  // Gsap Animation...
  const about = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();
  useGSAP(
    () => {
      t1.from(".paragraph", {
        y: 100,
        duration: 4,
        opacity: 0,
        ease:Power4.easeIn,
        stagger: 3,
        scrollTrigger: {
          trigger: "#para",
          start: "top 120%",
          end: "bottom 90%",
          scrub: 3,
        },
      });
    },
    { scope: about }
  );
  return (
    <div
      ref={about}
      id="about"
      className="lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 mb-10 lg:mb-0 px-4 md:min-h-[60vh] font-Gugi, sans-serif relative z-10 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center" id="para">
        <h1 className="paragraph text-3xl self-center lg:text-4xl font-bold leading-9 text-[#daa520] pb-4">
          About Us
        </h1>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg">
        Organized by Team TechnoJam, the University's student-run Technical Club, and the School of Computing Science and Engineering, Dexterix 4.0 promises an electrifying 36-hour journey into the future of technology.


        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
        Following the success of previous 
        editions, Dexterix 4.0 is all set to welcome over 600 participants from across 100+ colleges and universities in India

        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
        From its humble beginnings in 2018, Dexterix has fostered a thriving community of innovators and collaborators, igniting passions and nurturing entrepreneurial dreams.
        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
        Galgotias University is proud to present the fourth edition of Dexterix, a prestigious hackathon fostering innovation and collaboration.
        </p>

      </div>
    </div>
  );
};
export default About;
