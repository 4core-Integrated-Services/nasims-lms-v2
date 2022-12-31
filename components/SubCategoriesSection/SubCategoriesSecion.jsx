import React from "react";
import AllCoursesSection from "../AllCourseSection/AllCoursesSection";
import CategoriesCarousel from "../CategoriesCarousel/CategoriesCarousel";
import { categoriesListItems } from "../mock/categoriesListItems";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularTopics from "../PopularTopics/PopularTopics";

export default function SubCategorieSection({ subId }) {
  // const sub = categoriesListItems.find((data) =>
  //   data.sub.map((item) => item.name == subId)
  // );
  const sub = categoriesListItems.find((data) => {
    data.sub.find((item) => item.name == subId);
  });

  return (
    <div className="mt-[5rem] w-full">
      <div className="w-[70%]  mx-auto">
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-slate-600 ">
            {sub?.name ?? "null"} Courses
          </h1>
          <h4 className="mt-3 font-medium text-slate-600">
            Courses to get you started
          </h4>
          <CategoriesCarousel />
          <PopularTopics />
          <PopularInstructor />
          <AllCoursesSection categories={sub} />
        </div>
      </div>
    </div>
  );
}
