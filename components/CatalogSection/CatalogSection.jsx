import React from "react";
import Carousel from "../Carousel/Carousel";
import { CoursesCarouselData } from "../mock/coursesCarouselData";

export default function CatalogSection() {
  return (
    <div className="w-full mt-[5rem]">
      <div className="w-[70%]  mx-auto">
        <div className="p-8">
          <h1 className="capitalize text-2xl mb-14 mt-8 text-slate-600 font-bold">
            Top courses per <span className="text-green-500">category</span>
          </h1>
          {CoursesCarouselData.map((course) => {
            return (
              <div className="mb-5 mt-3" key={course.id}>
                <h1 className="capitalize text-xl font-semibold text-slate-600">
                  {course?.category} courses
                </h1>
                <Carousel />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
