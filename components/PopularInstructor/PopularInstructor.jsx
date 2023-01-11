import React from "react";
import { useRef, useEffect, useState } from "react";

import { instructorData } from "../mock/InstructorData";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

export default function PopularInstructor() {
  const [newInstructorData, setNewInstructor] = useState([]);
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setNewInstructor(instructorData.slice(0, 2));
      console.log(window.innerWidth);
    } else {
      setNewInstructor(instructorData.slice(0, 4));
    }
  }, [setNewInstructor]);

  return (
    <div className="w-full xs:hidden md:block">
      <div>
        <h1 className="font-bold capitalize text-xl mb-4 mt-10 text-slate-600">
          Popular Instructors
        </h1>

        <div className=" mx-auto grid grid-col-4 grid-rows-1  grid-flow-col gap-4">
          {newInstructorData.map((item) => {
            return (
              <Link href="#" passHref key={item.id}>
                <div className="flex border border-slate-400 py-4 hover:bg-slate-100">
                  <div
                    className="w-[4rem] h-[4rem] rounded-full mx-5 bg-cover bg-top"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                  <div>
                    <h4 className="font-medium lg:text-sm 2xl:text-lg text-slate-600 mt-2 ml-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-400">
                      Python, data science
                    </p>
                    <span className=" text-amber-700 font-bold text-sm flex items-center ">
                      4.7 <AiFillStar className="text-[goldenrod]" />
                    </span>
                    <p className="font-medium text-slate-500 ">
                      123,324{" "}
                      <span className=" text-sm text-green-500">Students</span>
                    </p>
                    <p className="text-slate-500 font-medium text-sm">
                      12 <span className="text-green-500">courses</span>{" "}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
