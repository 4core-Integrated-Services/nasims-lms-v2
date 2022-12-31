import React from "react";
import Link from "next/link";
import { CoursesCarouselData } from "../mock/coursesCarouselData";
import { RatingIcon } from "../mock/ratings";

export default function InstructorSection({ instructorId }) {
  const instructor = CoursesCarouselData.find(
    (data) => data.instructorName == instructorId
  );

  return (
    <div className="mt-[5rem] w-full">
      <div className="w-[70%] mx-auto pt-16 flex">
        <div className=" w-[60%] py-3">
          <h4 className="capitalize font-medium font-[Roboto] text-2xl text-green-500">
            Instructor
          </h4>
          <h1 className="text-4xl font-semibold capitalize text-slate-600">
            {instructor?.instructorName}
          </h1>
          <p className="text-md text-slate-500">
            Developer / Software Engineer / Dev ops
          </p>
          <div className="flex gap-4 mt-5">
            <span>
              <h4 className="font-medium text-slate-700">Total students</h4>
              <p className="font-semibold text-green-500">7,340</p>
            </span>
            <span>
              <h4 className="font-medium text-slate-700">Reviews</h4>
              <p className="font-semibold text-green-500">1,085</p>
            </span>
          </div>

          <div className="mt-16">
            <h3 className="font-medium text-xl text-slate-700">About me</h3>
            <p className="mt-8 text-slate-500">
              {` Lorem ipsum dolor sit amet, consectetur adipisicing elit. In optio
            quae cumque voluptatibus illo beatae pariatur iste, officiis
            tempore saepe? Libero aliquam quos laborum vel deserunt cum quasi
            neque aperiam?Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Adipisci, debitis. Similique, consequatur nulla maiores,
            laudantium amet quis odio deleniti illo vel nobis quod temporibus
            aperiam illum provident molestias incidunt numquam!Lorem Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            accusamus. Expedita nobis, nihil voluptatibus quibusdam obcaecati
            hic inventore, animi, repellendus dolorum vitae architecto
            quisquam debitis id explicabo autem quia voluptates.`}
            </p>
          </div>

          <div className="mt-14">
            <h3 className="font-medium text-xl text-slate-700">My Courses</h3>
            <div className="block h-[17rem] w-[17rem] mt-6 shadow-md rounded-md">
              <Link href={`/course-details/${instructor?.id}`}>
                <div
                  className="w-full h-[60%] bg-cover bg-no-repeat bg-center object-cover brightness-90 hover:brightness-50 transition-all"
                  style={{
                    backgroundImage: `url(${
                      instructor?.thumbnail ?? "/assets/images/t-1.jpg"
                    })`,
                  }}
                ></div>
              </Link>

              <div className="p-4">
                <h4 className="font-medium text-slate-600 capitalize">
                  {instructor?.title ?? "Course Development"}
                </h4>
                <p className="text-green-400 font-normal capitalize">
                  {instructor?.instructorName ?? "Dave chapelle"}
                </p>
                <span className="flex text-[goldenrod]">
                  {"a"
                    .repeat(instructor?.ratings ?? 1)
                    .split("a")
                    .slice(0, instructor?.ratings ?? 0)
                    .map((_, index) => {
                      return <RatingIcon key={index} />;
                    })}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[40%] flex flex-col -mt-[16rem] justify-center items-center gap-8">
          <div
            className="w-[25rem] h-[25rem] bg-cover bg-top rounded-full shadow-md"
            style={{
              backgroundImage: `url(${instructor?.avatar})`,
            }}
          ></div>

          <span>
            <Link href="#">
              <span className="border border-slate-600 py-2 px-16 font-medium hover:bg-slate-300 transition">
                Website
              </span>
            </Link>
          </span>
          <span>
            <Link href="#">
              <span className="border border-slate-600 py-2 px-16 font-medium hover:bg-slate-300 transition">
                Twitter
              </span>
            </Link>
          </span>

          <span>
            <Link href="#">
              <span className="border border-slate-600 py-2 px-16 font-medium hover:bg-slate-300 transition">
                LinkedIn
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
