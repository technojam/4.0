import React from "react";
import MovingCards2 from "./MovingCards2";

export function CommunityPartners() {
  

  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
    >
      <h1 className="text-[#daa520] text-4xl font-Phudu font-medium flex justify-center mb-5">
      Community Partners
      </h1>
      <div >
        <MovingCards2 key={"communityPartners"} items={testimonials} direction="right" speed="slow" />
        <MovingCards2 key={"communityPartnersSecond"} items={testimonials} direction="left" speed="slow" />
      </div>
      
    </div>
  );
}




const testimonials = [
  {
    src: "/rocket.png",
  },
  {
    src: "/rocket.png",
  },
  {
    src: "/rocket.png",
  },
  {
    src: "/rocket.png",
  },
  {
    src: "/rocket.png",
  },
  {
    src: "/rocket.png",
  },
];
