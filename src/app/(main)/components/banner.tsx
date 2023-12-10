"use client";
import React, { useState, useEffect } from "react";
import Banner from "../../../../public/images/banners/Banner.jpg";
import Image from "next/image";
const banners = [Banner, Banner, Banner];

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    console.log("Effect is running");
    const interval = setInterval(() => {
      console.log("Changing slide");
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);
  return (
    <div className="lg:h-80 pt-[72px] sm:pt-0 md:sticky top-0 inset-0  max-w-[1366px]  mx-auto">
      <Image src={Banner} alt="Banner" layout="responsive" />
    </div>
    // <div className="relative overflow-hidden">
    //   {banners.map((banner, index) => {
    //     console.log(`Rendering slide ${index + 1}`);
    //     return (
    //       <div
    //         key={index}
    //         className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
    //           index === currentSlide ? "opacity-100" : "opacity-0"
    //         }`}
    //       >
    //         <Image
    //           src={banner}
    //           alt={`Banner ${index + 1}`}
    //           layout="responsive"
    //         />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default HomeBanner;
