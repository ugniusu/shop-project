"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const sliders = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://simp6.jpg5.su/images3/2025-01-20_3840x5376_432fb2b352fc91bec64510ea4389b26d17fd2f7d10c7531b.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://simp6.jpg5.su/images3/3840x5376_3c74e8209784d6264c3df319803647dab0892f030d496d4c.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://simp6.jpg5.su/images3/3840x5376_b034ffe28c58f39f54d695e2d68dd6276506077f9aac151f.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden ">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {sliders.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="xl:w-1/2 xl:h-full h-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="xl:w-1/2 xl:h-full h-1/2 relative">
              <Image
                src={slide.img}
                alt="Picture of season collection"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {sliders.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
