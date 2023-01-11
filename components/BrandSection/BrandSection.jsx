import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function BrandSection() {
  return (
    // <div className="w-full lg:h-[6rem] 2xl:h-[8rem] h-[4rem] xs:hidden md:block  md:h-[7rem]  bg-slate-50 flex justify-center md:items-center">
    <div className="w-full 2xl:h-[6rem] lg:h-[5rem] md:h-[5rem] xs:hidden md:block bg-slate-50 ">
      {/* <div className="container  2xl:pt-6 2xl:mx-auto lg:mx-auto lg:pt-1 md:pt-3   md:h-32"> */}
      <div className="container 2xl:px-4 mx-auto lg:mx-auto lg:px-4 md:px-5  ">
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5}
          loopFillGroupWithBlank="true"
          speed={3000}
          loop
          autoplay={{
            delay: "3000",
            // disableOnInteraction: false,
          }}
          centeredSlides="true"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              // className="h-9 w-11 md:h-20 md:w-24 bg-cover bg-top  "
              className=" 2xl:h-16 2xl:w-24 2xl:mt-3   lg:h-14 lg:w-16  lg:mt-3  md:h-14 md:w-16 md:mt-3  bg-cover bg-center "
              style={{
                backgroundImage: `url("assets/images/logo.png")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" 2xl:h-16 2xl:w-20 2xl:mt-3   lg:h-14 lg:w-16  lg:mt-3  md:h-14 md:w-16 md:mt-3  bg-cover bg-center "
              style={{
                backgroundImage: `url("assets/images/coat.png")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" 2xl:h-16 2xl:w-18 2xl:mt-3   lg:h-14 lg:w-14  lg:mt-3  md:h-14 md:w-14 md:mt-3  bg-cover bg-center "
              style={{
                backgroundImage: `url("assets/images/nasims-logo.jpg")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" 2xl:h-16 2xl:w-28 2xl:mt-3   lg:h-14 lg:w-28  lg:mt-3  md:h-14 md:w-22 md:mt-3  bg-cover bg-center "
              style={{
                backgroundImage: `url("assets/images/nircom.png")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" 2xl:h-20 2xl:w-32 2xl:mt-3   lg:h-20 lg:w-28  lg:mt-2  md:h-14 md:w-22 md:mt-3  bg-cover bg-center "
              style={{
                backgroundImage: `url("assets/images/edu.png")`,
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
