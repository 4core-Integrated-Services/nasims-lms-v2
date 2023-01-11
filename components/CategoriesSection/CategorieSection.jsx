import React from "react";
import AllCoursesSection from "../AllCourseSection/AllCoursesSection";
import CategoriesCarousel from "../CategoriesCarousel/CategoriesCarousel";
import { categoriesListItems } from "../mock/categoriesListItems";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularTopics from "../PopularTopics/PopularTopics";

export default function CategorieSection({ categoriesId }) {
  const categories = categoriesListItems.find(
    (data) => data.name == categoriesId
  );
  return (
    <div className="mt-[5rem] w-full md:overflow-x-hidden lg:overflow-x-auto">
      <div className="w-[70%]  mx-auto">
        <div className="p-8">
          <h1 className="lg:text-3xl font-semibold xs:text-xl xs:-translate-x-16 md:translate-x-0 text-slate-600  ">
            {categories?.name ?? "Development"} Courses
          </h1>
          <h4 className="mt-3 font-medium xs:-translate-x-16  md:translate-x-0 xs:text-md text-slate-600">
            Courses to get you started
          </h4>
          <PopularTopics />
          <CategoriesCarousel />
          <PopularInstructor />
          <AllCoursesSection categories={categories} />
        </div>
      </div>
    </div>
  );
}
