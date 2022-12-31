import React from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { CoursesCarouselData } from "../mock/coursesCarouselData";
import BlogSection from "../BlogSection/BlogSection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyCoursetab() {
  return (
    <div className="w-full  ">
      <div className="py-1 h-full mx-auto">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-sm bg-slate-100 p-1">
            <div className="w-[60%} mx-auto flex gap-36">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2.5 text-md px-6 font-semibold leading-5 text-slate-700",
                    "focus:outline-none ",
                    selected
                      ? "border-b-4 border-green-400 outline-none"
                      : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                  )
                }
              >
                Home
              </Tab>

              {/* ANNOUNCEMENT TAB */}
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2.5 text-md  px-6 font-semibold leading-5 text-slate-700",
                    "focus:outline-none ",
                    selected
                      ? "border-b-4 border-green-400 outline-none"
                      : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                  )
                }
              >
                <span className="flex gap-1 capitalize">
                  <span>in </span>
                  <span> progress</span>
                </span>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2.5 text-md px-6 font-semibold leading-5 text-slate-700",
                    "focus:outline-none ",
                    selected
                      ? "border-b-4 border-green-400 outline-none"
                      : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                  )
                }
              >
                {/* Review */}
                Completed
              </Tab>
            </div>
          </Tab.List>

          {/* OverView Tab PAnel */}
          <Tab.Panels className="mt-2 ">
            {/* ANNOUNCEMENT TAB PAnel */}
            <Tab.Panel className={classNames(" p-3", " focus:outline-none ")}>
              <div className="flex justify-center flex-col items-center mb-10 mt-4 w-full">
                <Link href="#" passHref>
                  <div className="flex py-2 items-center bg-slate-50 border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100   ">
                    <div
                      className="w-[12rem] h-[7rem] ml-8 bg-cover bg-top object-cover"
                      style={{
                        backgroundImage: `url("${CoursesCarouselData[0].thumbnail}")`,
                      }}
                    ></div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-xl font-bold tracking-tight capitalize text-slate-600 ">
                        {CoursesCarouselData[0].title}
                      </h5>

                      <p className="mb-3 font-normal text-slate-400 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="flex items-center gap-1">
                        <div className="w-[90%] bg-green-200 rounded-full h-1 mb-4 ">
                          <div
                            className="bg-green-500 h-1 rounded-full "
                            style={{
                              width: "29%",
                            }}
                          ></div>
                        </div>
                        <span className="-mt-5 text-sm text-slate-500">
                          29%
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <BlogSection />
            </Tab.Panel>
            {/* Review Tab Panel */}

            {/* Resource Tab Panel */}
            <Tab.Panel className={classNames(" p-3", " focus:outline-none ")}>
              <div className="flex justify-center flex-col items-center w-full">
                <Link href="#" passHref>
                  <div className="flex py-2 items-center bg-slate-50 border mb-16 mt-6 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100   ">
                    <div
                      className="w-[12rem] h-[7rem] ml-8 bg-cover bg-top object-cover"
                      style={{
                        backgroundImage: `url("${CoursesCarouselData[0].thumbnail}")`,
                      }}
                    ></div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-xl font-bold tracking-tight capitalize text-slate-600 ">
                        {CoursesCarouselData[0].title}
                      </h5>

                      <p className="mb-3 font-normal text-slate-400 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="flex items-center gap-1">
                        <div className="w-[90%] bg-green-200 rounded-full h-1 mb-4 ">
                          <div
                            className="bg-green-500 h-1 rounded-full "
                            style={{
                              width: "29%",
                            }}
                          ></div>
                        </div>
                        <span className="-mt-5 text-sm text-slate-500">
                          29%
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Tab.Panel>
            {/* Quiz Tab Panel */}
            <Tab.Panel className={classNames(" p-3", " focus:outline-none ")}>
              <h4 className="font-semibold font-xl text-center text-slate-500 ">
                No completed course
              </h4>
              <div className="flex justify-center mt-12  flex-col items-center">
                <div
                  className="w-[21rem] h-[21rem] bg-cover bg-top "
                  style={{
                    backgroundImage: `url("/assets/images/steps.svg")`,
                  }}
                ></div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
