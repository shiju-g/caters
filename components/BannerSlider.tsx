"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

const BannerSlider = () => {
  return (
    <Swiper
      autoplay={{ delay: 1500 }}
      speed={1500}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper xl:w-7/12 lg:w-9/12 md:w-10/12 relative w-11/12 mx-auto  mt-5 bg-[#0346090D] text-center font-bold text-2xl tracking-wider rounded-full shadow-lg"
    >
      <SwiperSlide className="text-[#143e05] py-5">
        <h1>"Bringing the taste of celebration to your special event"</h1>
      </SwiperSlide>
      <SwiperSlide className="text-[#143e05] py-5">
        <h1>"Bringing the taste of celebration to your special event"</h1>
      </SwiperSlide>
      <SwiperSlide className="text-[#143e05] py-5">
        <h1>"Bringing the taste of celebration to your special event"</h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
