import React from "react";
import { CoursesCarouselData } from "../mock/coursesCarouselData";
import Link from "next/link";
import { RatingIcon } from "../mock/ratings";

export default function AllCoursesSection({ categories }) {
  return (
    <div className="w-full mt-10 xs:-translate-x-16 md:translate-x-0">
      <h1 className="font-bold text-2xl xs:text-lg text-slate-600 font-[Roboto]">
        All {categories?.name} Courses
      </h1>
      <div className="mt-6 xs:w-[23rem] md:w-auto">
        {CoursesCarouselData.map((courses) => {
          return (
            <div
              key={courses.id}
              className="w-full flex gap-8 border-b border-slate-400 py-4 last:border-0  "
            >
              <div className="pl-3 mb-3">
                <Link href={`/course-details/${courses.id}`} passHref>
                  <div
                    className="md:w-[15rem] xs:w-24  xs:h-28 xs:translate-y-6 md:translate-y-0 md:h-[8rem] bg-cover bg-top rounded-sm brightness-90 hover:brightness-50 transition-all"
                    style={{
                      backgroundImage: `url(${courses.thumbnail})`,
                    }}
                  ></div>
                </Link>
              </div>

              <div className="mt-3">
                <h4 className="capitalize xs:text-lg text-xl font-medium text-slate-600">
                  {courses?.title}
                </h4>
                <p className="w-full text-sm mt-2 text-slate-500">{`Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games`}</p>
                <span className="text-sm text-green-500">
                  {courses.instructorName}
                </span>
                <span className="flex text-[goldenrod]">
                  {"a"
                    .repeat(courses.ratings ?? 1)
                    .split("a")
                    .slice(0, courses.ratings ?? 0)
                    .map((_, index) => {
                      return <RatingIcon key={index} />;
                    })}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
