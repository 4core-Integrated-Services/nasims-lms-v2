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
    spaceBetween: 10,
  },
  1204: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
};
export default function Carousel() {
  return (
    <div className="xs:w-[150%] xs:translate-x-3 md:w-full">
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
              <div className=" xs:mx-[0rem] md:mx-[10rem] my-4 w-full">
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
                    <h4 className="font-medium md:text-sm lg:text-sm text-slate-600 capitalize">
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
