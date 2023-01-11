import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { RatingIcon } from "../mock/ratings";
import "swiper/css";
import { CoursesCarouselData } from "../mock/coursesCarouselData";

const breakpoints = {
  1408: {
    slidesPerView: 5,
  },
  1204: {
    slidesPerView: 5,
  },
  768: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 2,
  },
  320: {
    slidesPerView: 1,
  },
};

export default function CoursesCarousel() {
  return (
    // <section className=" mt-[20rem] flex-col flex items-center xs:hidden md:block lg:block lg:-mt-[45rem] md:-mt-[20rem]">
    <section className=" 2xl:-mt-[45rem] lg:-mt-[42rem]  md:-mt-[20rem] xs:-mt-[5rem] xs:mb-[10rem]">
      <h1 className="text-center font-[heebo] font-medium lg:text-5xl xs:text-xl md:text-3xl mb-8 capitalize  mx-auto  text-slate-700 w-[50%]">
        Explore our <span className="text-green-400">Wide range</span> of
        courses
      </h1>

      <div className="w-full bg-slate-100 h-[28rem]">
        <div className="lg:w-[80%] md:w-full mx-auto container h-full ">
          <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={5}
            loopFillGroupWithBlank="true"
            speed={3000}
            loop
            autoplay={{
              delay: "3000",
              // disableOnInteraction: false,
            }}
            centeredSlides="true"
            breakpoints={breakpoints}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {CoursesCarouselData.map((course) => {
              return (
                <SwiperSlide key={course.id}>
                  {/* <div className="bg-white shadow-md w-[90%] h-[100%] flex flex-col rounded-md mt-10"> */}
                  <div className="bg-white shadow-md 2xl:w-[90%] 2xl:h-full 2xl:flex 2xl:flex-col rounded-md 2xl:mt-10 lg:w-full  lg:h-full lg:flex lg:flex-col lg:mt-10">
                    <div className="block h-[11rem] w-full ">
                      <div
                        className="h-full w-full bg-cover bg-top"
                        style={{
                          backgroundImage: `url("${
                            course?.thumbnail ??
                            "/assets/images/hero-banner-sm.jpg"
                          }")`,
                        }}
                      ></div>
                    </div>
                    <div className="relative">
                      <span className="absolute -top-4 left-[50%] translate-x-[-50%] lg:text-sm 2xl:text-sm md:-mt-5  bg-green-500 py-1 px-4 text-white rounded-sm text-center font-[Noto sans] capitalize">
                        {course?.category ?? "Development"}
                      </span>
                      <div className="flex mt-5 items-center">
                        <div
                          className="bg-cover bg-top h-9 w-9 rounded-3xl ml-3"
                          style={{
                            backgroundImage: `url("${
                              course?.avatar ?? "assets/images/avatar.svg"
                            }")`,
                          }}
                        ></div>
                        <span className="text-green-400 ml-2">
                          {" "}
                          <span className="text-gray-500 lg:text-xs 2xl:text-sm  lg:pt-6 font-medium">
                            By{" "}
                          </span>
                          <Link href="/" passHref>
                            <span className="underline lg:text-xs">
                              {course?.instructorName ?? "Jeff Doe"}
                            </span>
                          </Link>
                        </span>
                      </div>
                      <h4 className="font-medium lg:text-xs 2xl:text-sm mt-2 md:text-sm ml-3 text-slate-700 block capitalize">
                        {course?.title ?? " Web development for beginners"}
                      </h4>
                      <div className="flex justify-between ">
                        <span className=" ml-3 mt-1 flex  text-[goldenrod]">
                          {"a"
                            .repeat(course.ratings ?? 1)
                            .split("a")
                            .slice(0, course.ratings ?? 0)
                            .map((_, index) => {
                              return <RatingIcon key={index} />;
                            })}
                        </span>

                        <span className="mr-3 text-green-500 lg:text-xs font-bold font-[Roboto] capitalize">
                          {course?.level ?? "Beginner"}
                        </span>
                      </div>
                      <hr className="w-[90%] mx-auto mt-3" />
                    </div>
                    <div>
                      <Link href={`/course-details/${course.id}`} passHref>
                        <p className="w-[90%] my-5 py-1 px-3 text-center text-white bg-green-600 mx-auto rounded-sm hover:bg-green-700 transition-all">
                          View course
                        </p>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
