import React from "react";
import MovingCards from "./MovingCards";

export function Sponsors() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden ">
      <h1 className="text-[#daa520] text-4xl font-Phudu font-medium flex justify-center mb-5">
        Sponsors
      </h1>
      <MovingCards
        key={"sponsors"}
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <MovingCards
        key={"sponsorsSecond"}
        items={testimonials}
        direction="left"
        speed="slow"
      />
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
