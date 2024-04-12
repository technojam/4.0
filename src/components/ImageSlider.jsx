import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ImageSlider() {
  const slides = [
    {
      url: "/Dex-1.1.png",
    },
    {
      url: "/Dex-1.2.png",
    },
    {
      url: "/Dex-2.1.png",
    },
    {
      url: "/Dex-2.2.png",
    },
    {
      url: "/Dex-2.3.png",
    },
    {
      url: "/Dex-3.1.png",
    },
    {
      url: "/Dex-3.2.png",
    },
    {
      url: "/Dex-3.2.png",
    },
    {
      url: "/nasa-1.1.png",
    },
    {
      url: "/nasa-2.1.png",
    },
    {
      url: "/nasa-2.2.png",
    },
    {
      url: "/alexa-student-day.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div id="events" className="max-w-[900px] h-[270px] md:h-[600px] lg:h-[610px] w-full m-auto px-4 relative group mb-52">
      <h1 className="text-[#daa520] text-3xl md:text-4xl font-Phudu font-medium flex justify-center mb-5">
        Our Past Events
      </h1>
      <LazyLoadImage src={`${slides[currentIndex].url}`} className="w-full h-full rounded-2xl object-cover duration-500" />
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 mt-16 bg-black/20 text-[#daa520] cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 mt-16 bg-black/20 text-[#daa520] cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled className="text-[#daa520] text-[16px] md:text-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
