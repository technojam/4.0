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
          end: "bottom 60%",
          // markers: true,
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
      className="lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 mb-10 lg:mb-0 px-4 min-h-screen font-Ethnocentric relative z-10 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center" id="para">
        <h1 className="paragraph text-3xl self-center lg:text-4xl font-bold leading-9 text-[#daa520] pb-4">
          About Us
        </h1>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg">
          Welcome to Dexterix 4.0, Galgotias University's premier hackathon!
          Organized in collaboration between Team TechnoJam, the Technical Club
          under GU Student Council, and the University’s School of Computing
          Science and Engineering, Dexterix 4.0 promises to be an exhilarating
          journey into the world of technology and innovation.
        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
          Building upon the success of its predecessors, Dexterix 4.0 invites
          participants from over 100+ colleges and universities across India to
          showcase their skills and creativity in a 36-hour coding marathon.
          This year, we are proud to introduce two tracks: corporate level and
          student level, opening doors for graduates and professionals in the
          tech industry to compete alongside students for exciting prizes and
          opportunities.
        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
          With the unwavering support of the School of Computing Science and
          Engineering, Dexterix 4.0 aims to push the boundaries of innovation
          and collaboration. From the bustling campus of GU to the guidance of
          esteemed faculty members, every aspect of Dexterix is fueled by the
          spirit of technological advancement.
        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
          Join us as we embrace the limitless possibilities of tech in Greater
          Noida and beyond. Together, let’s embark on a journey of creation,
          learning, and growth. From humble beginnings in 2024, Dexterix has
          become a beacon of inspiration for thousands, igniting passions and
          sparking entrepreneurial dreams.
        </p>
        <p className="paragraph font-light leading-6 text-white text-sm md:text-base lg:text-lg mt-5">
          As we launch into our fourth iteration, Dexterix 4.0 promises to
          surpass all expectations, delivering an experience that is bigger,
          better, and more transformative than ever before.
        </p>
      </div>
    </div>
  );
};
export default About;
