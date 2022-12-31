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
    <div className="mt-[5rem] w-full">
      <div className="w-[70%]  mx-auto">
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-slate-600  ">
            {categories?.name ?? "Development"} Courses
          </h1>
          <h4 className="mt-3 font-medium text-slate-600">
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
