"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

const sliderArray = [
  {
    id: 1,
    qoutes: "Bringing the taste of celebration to your special event",
  },
  {
    id: 2,
    qoutes: "Savor the flavor: Experience our exquisite catering services",
  },
  {
    id: 3,
    qoutes: "Elevate your event with our gourmet catering options",
  },
  {
    id: 4,
    qoutes: "Impress your guests with our mouth-watering catering menu",
  },
  {
    id: 5,
    qoutes: "Indulge in our delicious catering creations",
  },
  {
    id: 6,
    qoutes: "Catering that delights the senses and satisfies the palate",
  },
];

const BannerSlider = () => {
  return (
    <Swiper
      autoplay={{ delay: 1500 }}
      speed={1500}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper xl:w-7/12 lg:w-9/12 md:w-10/12 relative w-11/12  mx-auto  md:mt-5  text-center font-bold xl:text-2xl sm:text-xl text-sm tracking-wider md:rounded-full rounded-3xl px-5 shadow-lg"
      style={{ background: "rgba(0, 255, 26, 0.08);" }}
    >
      {sliderArray &&
        sliderArray.map((list) => (
          <SwiperSlide key={list.id} className="text-[#237706] py-5">
            <h1>{`${`"`}${list.qoutes}${`"`}`}</h1>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default BannerSlider;
