import React from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { CoursesCarouselData } from "../mock/coursesCarouselData";
import Carousel from "../Carousel/Carousel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const breakpoints = {
  1408: {
    slidesPerView: 5,
  },
  1204: {
    slidesPerView: 5,
  },
  768: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 2,
  },
  320: {
    slidesPerView: 1,
  },
};
export default function CategoriesCarousel() {
  return (
    <div className="mt-8 xs:-translate-x-16 md:translate-x-0">
      {" "}
      <Tab.Group>
        <Tab.List className="flex justify-start space-x-1 rounded-sm bg-slate-100 xs:w-[23rem] md:w-auto p-1">
          <div className="w-[60%} flex gap-16 ml-6">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-2.5 text-md  font-semibold leading-5 text-slate-700",
                  "focus:outline-none ",
                  selected
                    ? "border-b-4 border-green-400 outline-none"
                    : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                )
              }
            >
              <span className="flex gap-1 capitalize">
                <span>Most </span>
                <span> Popular</span>
              </span>
            </Tab>

            {/* ANNOUNCEMENT TAB */}
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-2.5 text-md   font-semibold leading-5 text-slate-700",
                  "focus:outline-none ",
                  selected
                    ? "border-b-4 border-green-400 outline-none"
                    : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                )
              }
            >
              New
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-2.5 text-md  font-semibold leading-5 text-slate-700",
                  "focus:outline-none ",
                  selected
                    ? "border-b-4 border-green-400 outline-none"
                    : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                )
              }
            >
              Trending
            </Tab>
          </div>
        </Tab.List>

        {/* OverView Tab PAnel */}
        <Tab.Panels className="-mt-2 ">
          {/* ANNOUNCEMENT TAB PAnel */}
          <Tab.Panel className={classNames(" p-3", " focus:outline-none ")}>
            <div>
              <Carousel />
            </div>
          </Tab.Panel>
          {/* Review Tab Panel */}

          {/* Resource Tab Panel */}
          <Tab.Panel className={classNames(" p-3", " focus:outline-none ")}>
            <div>
              {" "}
              <Carousel />
            </div>
          </Tab.Panel>
          {/* Quiz Tab Panel */}
          <Tab.Panel className={classNames(" p-3", " focus:outline-none ")}>
            <div>
              <Carousel />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
