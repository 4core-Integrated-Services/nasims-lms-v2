import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function BrandSection() {
  return (
    <div className="w-full lg:h-[6rem] 2xl:h-[8rem] h-[4rem] xs:hidden md:block  md:h-[7rem]  bg-slate-50 flex justify-center md:items-center">
      <div className="container  2xl:pt-6 2xl:mx-auto lg:mx-auto lg:pt-1 md:pt-3   md:h-32">
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
              className="h-9 w-11 md:h-20 md:w-24 bg-cover bg-top  "
              style={{
                backgroundImage: `url("assets/images/logo.png")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" h-9 w-9 md:h-20 md:w-24 bg-cover bg-top "
              style={{
                backgroundImage: `url("assets/images/coat.png")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-9 w-9 md:h-24 md:w-24 bg-cover bg-top "
              style={{
                backgroundImage: `url("assets/images/nasims-logo.jpg")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-9 w-9 md:h-20 md:w-32  bg-cover bg-top "
              style={{
                backgroundImage: `url("assets/images/nircom.png")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" h-9 w-9 md:h-20 md:w-32  bg-cover bg-top "
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
