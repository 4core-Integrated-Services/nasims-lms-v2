import React from "react";
import Link from "next/link";

const topics = [
  { name: "Python" },
  { name: "Javascript" },
  { name: "ReactJs" },
  { name: "C#" },
  { name: "Machine Learning" },
  { name: "Web Development" },
  { name: "Data Science" },
  { name: "java" },
  { name: "Unity" },
  { name: "C++" },
];

export default function PopularTopics() {
  return (
    <div className="w-full mb-16 mt-16 xs:hidden md:block">
      <h4 className="font-bold capitalize text-xl mb-4 mt-4 text-slate-600">
        popular topics
      </h4>
      {/* <div className="w-[100%] mx-auto grid 2xlgrid-col-5 2xl:grid-rows-2  2xl:grid-flow-col-dense 2xl:gap-4   lg:grid-col-5 lg:grid-rows-2  lg:grid-flow-col lg:gap-4 md:grid-cols-2 md:grid-flow-row md:gap-3  "> */}
      <div className="w-full mx-auto grid lg:grid-flow-col lg:grid-rows-2 lg:gap-4  md:grid-flow-row md:grid-cols-2 md:gap-3  2xl:grid-cols-5 2xl:grid-rows-2 2xl:gap-4">
        {topics.map((item, itemIdx) => {
          return (
            <Link href="#" passHref key={itemIdx}>
              <div className="py-3 px-6 border border-slate-400 text-center rounded-sm text-slate-600 font-semibold capitalize hover:bg-slate-100">
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
