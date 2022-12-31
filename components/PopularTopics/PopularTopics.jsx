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
    <div className="w-full mb-16 mt-16">
      <h4 className="font-bold capitalize text-xl mb-4 mt-4 text-slate-600">
        popular topics
      </h4>
      <div className="w-[100%] mx-auto grid grid-col-5 grid-rows-2  grid-flow-col gap-4">
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
