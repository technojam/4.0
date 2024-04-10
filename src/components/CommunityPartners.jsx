import React from "react";
import MovingCards from "./MovingCards";

export function CommunityPartners() {
  const blurredStyle = {
    filter: "blur(20px)", // Increased blur amount
  };

  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
    >
      <h1 className="text-[#daa520] text-4xl font-Phudu font-medium flex justify-center mb-5">
      Community Partners
      </h1>
      <div style={blurredStyle} >
        <MovingCards key={"communityPartners"} items={testimonials} direction="right" speed="fast" />
        <MovingCards key={"communityPartnersSecond"} items={testimonials} direction="left" speed="fast" />
      </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl font-bold">
          REVEALING SOON
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
