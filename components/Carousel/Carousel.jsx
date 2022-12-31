import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { RatingIcon } from "../mock/ratings";
import "swiper/css";
import Link from "next/link";
import { CoursesCarouselData } from "../mock/coursesCarouselData";

const breakpoints = {
  1408: {
    slidesPerView: 4,
  },
  1204: {
    slidesPerView: 4,
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
export default function Carousel() {
  return (
    <div>
      {" "}
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
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
            <SwiperSlide key={course?.id}>
              {/* <div className="bg-white shadow-md w-full mb-8   flex flex-col rounded-md mt-10">
                <div className="block h-[12rem] w-full ">
                  <div
                    className="h-full w-full bg-cover bg-top"
                    style={{
                      backgroundImage: `url("${
                        course?.thumbnail ?? "/assets/images/hero-banner-sm.jpg"
                      }")`,
                    }}
                  ></div>
                </div>
                <div className="relative">
                  <span className="absolute -top-4 left-[50%] translate-x-[-50%] bg-green-500 py-1 px-4 text-white rounded-sm block font-[Noto sans] capitalize">
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
                      <span className="text-gray-500 font-medium">By </span>
                      <Link href="/" passHref>
                        <span className="underline">
                          {course?.instructorName ?? "Jeff Doe"}
                        </span>
                      </Link>
                    </span>
                  </div>
                  <h4 className="font-medium mt-2 ml-3 text-slate-700 block capitalize">
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

                    <span className="mr-3 text-green-500 font-bold font-[Roboto] capitalize">
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
              </div> */}
              <div className=" mx-[10rem] my-4 w-full">
                <div className="block h-[17rem] w-full shadow-md rounded-md">
                  <Link href={`/course-details/${course?.id}`}>
                    <div
                      className="w-full h-[60%] bg-cover bg-no-repeat bg-center object-cover brightness-90 hover:brightness-50 transition-all"
                      style={{
                        backgroundImage: `url(${
                          course?.thumbnail ?? "/assets/images/t-1.jpg"
                        })`,
                      }}
                    ></div>
                  </Link>

                  <div className="p-4">
                    <h4 className="font-medium text-slate-600 capitalize">
                      {course?.title ?? "Course Development"}
                    </h4>
                    <p className="text-green-400 font-normal capitalize">
                      {course?.instructorName ?? "Dave chapelle"}
                    </p>
                    <span className="flex text-[goldenrod]">
                      {"a"
                        .repeat(course.ratings ?? 1)
                        .split("a")
                        .slice(0, course.ratings ?? 0)
                        .map((_, index) => {
                          return <RatingIcon key={index} />;
                        })}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
