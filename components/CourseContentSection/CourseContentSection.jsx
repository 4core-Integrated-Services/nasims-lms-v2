import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Disclosure, Tab } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useModalStore } from "../store/store";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { RatingIcon } from "../mock/ratings";
import { MdQuiz } from "react-icons/md";

import { CoursesCarouselData } from "../mock/coursesCarouselData";
import Modal from "../Modal/Modal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CourseContentSection({ courseId }) {
  const course = CoursesCarouselData.find((data) => data.id == courseId);
  const { isModalOpen, setIsModalOpen } = useModalStore((state) => state);

  let [categories] = useState({
    Overview: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Annoucements: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Reviews: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Resources: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <section>
      {isModalOpen ? <Modal /> : ""}
      <div className=" flex   mt-[5rem]">
        <div className="w-[100%] overflow-hidden">
          <div className="w-full">
            {course?.videoUrl != undefined ? (
              <ReactPlayer
                width={"100%"}
                height={"38rem"}
                controls
                url={`${course?.videoUrl}`}
              />
            ) : (
              <div
                className="bg-cover bg-top w-[10rem] h-[10rem]"
                style={{
                  backgroundImage: `url(${course?.thumbnail})`,
                }}
              ></div>
            )}
          </div>
          <div className=" w-full ">
            {/* OVERVIEW TAB */}
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-sm bg-slate-100 p-1">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full  py-2.5 text-md font-semibold leading-5 text-slate-700",
                      "focus:outline-none ",
                      selected
                        ? "border-b-4 border-green-400 outline-none"
                        : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                    )
                  }
                >
                  Overviews
                </Tab>

                {/* ANNOUNCEMENT TAB */}
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full  py-2.5 text-md font-semibold leading-5 text-slate-700",
                      "focus:outline-none ",
                      selected
                        ? "border-b-4 border-green-400 outline-none"
                        : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                    )
                  }
                >
                  Announcements
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full  py-2.5 text-md font-semibold leading-5 text-slate-700",
                      "focus:outline-none ",
                      selected
                        ? "border-b-4 border-green-400 outline-none"
                        : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                    )
                  }
                >
                  {/* Review */}
                  Reviews
                </Tab>

                {/* RESOURCES */}
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full  py-2.5 text-md font-semibold leading-5 text-slate-700",
                      "focus:outline-none ",
                      selected
                        ? "border-b-4 border-green-400 outline-none"
                        : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                    )
                  }
                >
                  Resources
                </Tab>
                {/* <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full  py-2.5 text-md font-semibold leading-5 text-slate-700",
                      "focus:outline-none ",
                      selected
                        ? "border-b-4 border-green-400 outline-none"
                        : "text-slate-500  hover:border-b-4 border-green-400 transition-all"
                    )
                  }
                >
                  Quiz
                </Tab> */}
              </Tab.List>

              {/* OverView Tab PAnel */}
              <Tab.Panels className="mt-2 ">
                <Tab.Panel
                  className={classNames(" p-3", " focus:outline-none ")}
                >
                  <h4 className="mt-4 font-semibold text-xl pl-5 font-[Roboto] leading-none text-slate-600">
                    About this Course
                  </h4>
                  <p className="mt-4 pl-5 w-[80%] text-slate-500 font-normal">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ducimus architecto quisquam sed laborum repellat pariatur
                    magnam vitae aperiam necessitatibus qui soluta, delectus
                    omnis sit, saepe tempore! Quod eos voluptas veniam. Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                    sit placeat rem consequuntur sapiente maxime. Enim, tempora
                    ratione. Impedit dolore magni, incidunt enim amet voluptas
                    delectus architecto sapiente soluta similique!
                  </p>
                </Tab.Panel>

                {/* ANNOUNCEMENT TAB PAnel */}
                <Tab.Panel
                  className={classNames(" p-3", " focus:outline-none ")}
                >
                  <div className="flex justify-center flex-col items-center">
                    <h1 className="-mt-3 mb-2 font-semibold text-slate-600">
                      No New Announcements
                    </h1>
                    <div
                      className="w-[8rem] h-[9rem] bg-cover bg-top "
                      style={{
                        backgroundImage: `url("/assets/images/cancel.svg")`,
                      }}
                    ></div>
                  </div>
                </Tab.Panel>
                {/* Review Tab Panel */}
                <Tab.Panel
                  className={classNames(" p-3", " focus:outline-none ")}
                >
                  <div className="w-[90%] mx-auto">
                    <div className="flex">
                      {" "}
                      <div className="w-[70%] ">
                        <div className="flex gap-3">
                          <span className="flex text-[goldenrod]">
                            {"a"
                              .repeat(course?.ratings ?? 1)
                              .split("a")
                              .slice(0, course?.ratings ?? 0)
                              .map((_, index) => {
                                return <RatingIcon key={index} />;
                              })}
                          </span>
                          <p className="ml-2 text-sm font-medium text-gray-900 ">
                            4.95 out of 5
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-500 ">
                          1,745 global ratings
                        </p>
                        {/* BArs */}
                        <div className="flex items-center mt-2">
                          <span className="text-sm font-medium text-slate-600 ">
                            5 star
                          </span>
                          <div className="w-3/12 h-3 mx-4 bg-gray-300 rounded">
                            <div
                              className="h-3 bg-yellow-400 rounded"
                              style={{
                                width: "70%",
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-slate-600 ">
                            70%
                          </span>
                        </div>

                        <div className="flex items-center mt-2">
                          <span className="text-sm font-medium text-slate-600 ">
                            4 star
                          </span>
                          <div className="w-3/12 h-3 mx-4 bg-gray-300 rounded">
                            <div
                              className="h-3 bg-yellow-400 rounded"
                              style={{
                                width: "17%",
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-slate-600 ">
                            17%
                          </span>
                        </div>

                        <div className="flex items-center mt-2">
                          <span className="text-sm font-medium text-slate-600 ">
                            3 star
                          </span>
                          <div className="w-3/12 h-3 mx-4 bg-gray-300 rounded">
                            <div
                              className="h-3 bg-yellow-400 rounded"
                              style={{
                                width: "8%",
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-slate-600 ">
                            8%
                          </span>
                        </div>

                        <div className="flex items-center mt-2">
                          <span className="text-sm font-medium text-slate-600 ">
                            2 star
                          </span>
                          <div className="w-3/12 h-3 mx-4 bg-gray-300 rounded">
                            <div
                              className="h-3 bg-yellow-400 rounded"
                              style={{
                                width: "4%",
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-slate-600 ">
                            4%
                          </span>
                        </div>

                        <div className="flex items-center mt-2">
                          <span className="text-sm font-medium text-slate-600 ">
                            1 star
                          </span>
                          <div className="w-3/12 h-3 mx-4 bg-gray-300 rounded">
                            <div
                              className="h-3 bg-yellow-400 rounded"
                              style={{
                                width: "1%",
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-slate-600 ">
                            1%
                          </span>
                        </div>
                      </div>
                      <div className="w-[40%] flex items-center justify-center">
                        <div className="bg-slate-200 h-[9rem] w-[9rem] rounded-full mt-5 flex items-center justify-center flex-col">
                          <p
                            className="text-2xl text-slate-600 font-semibold
                          "
                          >
                            {course?.ratings}
                          </p>
                          <span className="flex mt-2 text-[goldenrod]">
                            {" "}
                            {"a"
                              .repeat(course?.ratings ?? 1)
                              .split("a")
                              .slice(0, course?.ratings ?? 0)
                              .map((_, index) => {
                                return <RatingIcon key={index} />;
                              })}
                          </span>
                        </div>
                      </div>
                    </div>

                    <article className="mt-16">
                      <div className="flex items-center mb-4 space-x-4">
                        <div
                          className="w-10 h-10 rounded-full bg-cover bg-top"
                          style={{
                            backgroundImage: `url(${course?.avatar})`,
                          }}
                        ></div>
                        <div className=" space-y-3 font-medium text-slate-700">
                          <p>
                            Jese Leos{" "}
                            <time
                              dateTime="2014-08-16 19:00"
                              className="block text-sm text-slate-500 "
                            >
                              Joined on August 2022
                            </time>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="flex text-[goldenrod]">
                          {"a"
                            .repeat(course?.ratings ?? 1)
                            .split("a")
                            .slice(0, course?.ratings ?? 0)
                            .map((_, index) => {
                              return <RatingIcon key={index} />;
                            })}
                        </span>
                        <h3 className="ml-2 text-sm font-semibold text-slate-500 ">
                          His course is very easy to understand
                        </h3>
                      </div>
                      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                        <p>
                          Reviewed in Lagos nigeria on{" "}
                          <time dateTime="2017-03-03 19:00">
                            September 3, 2022
                          </time>
                        </p>
                      </footer>
                      <p className="mb-2 font-normal text-sm text-slate-500 ">
                        This is my third Invicta Pro Diver. They are just
                        fantastic value for money. This one arrived yesterday
                        and the first thing I did was set the time, popped on an
                        identical strap from another Invicta and went in the
                        shower with it to test the waterproofing.... No
                        problems.
                      </p>
                      <p className="mb-3 font-normal text-sm text-slate-500 ">
                        It is obviously not the same build quality as those very
                        expensive watches. But that is like comparing a Citroën
                        to a Ferrari. This watch was well under £100! An
                        absolute bargain.
                      </p>
                      <a
                        href="#"
                        className="block mb-5 text-sm font-medium text-green-600 hover:underline"
                      >
                        Read more
                      </a>
                      <aside>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          19 people found this helpful
                        </p>
                        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                          <a
                            href="#"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            Helpful
                          </a>
                          <a
                            href="#"
                            className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                          >
                            Report abuse
                          </a>
                        </div>
                      </aside>
                    </article>
                    <article className="mt-16">
                      <div className="flex items-center mb-4 space-x-4">
                        <div
                          className="w-10 h-10 rounded-full bg-cover bg-top"
                          style={{
                            backgroundImage: `url(${course?.avatar})`,
                          }}
                        ></div>
                        <div className=" space-y-3 font-medium text-slate-700">
                          <p>
                            Jese Leos{" "}
                            <time
                              dateTime="2014-08-16 19:00"
                              className="block text-sm text-slate-500 "
                            >
                              Joined on August 2022
                            </time>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="flex text-[goldenrod]">
                          {"a"
                            .repeat(course?.ratings ?? 1)
                            .split("a")
                            .slice(0, course?.ratings ?? 0)
                            .map((_, index) => {
                              return <RatingIcon key={index} />;
                            })}
                        </span>
                        <h3 className="ml-2 text-sm font-semibold text-slate-500 ">
                          His course is very easy to understand
                        </h3>
                      </div>
                      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                        <p>
                          Reviewed in Lagos nigeria on{" "}
                          <time dateTime="2017-03-03 19:00">
                            September 3, 2022
                          </time>
                        </p>
                      </footer>
                      <p className="mb-2 font-normal text-sm text-slate-500 ">
                        This is my third Invicta Pro Diver. They are just
                        fantastic value for money. This one arrived yesterday
                        and the first thing I did was set the time, popped on an
                        identical strap from another Invicta and went in the
                        shower with it to test the waterproofing.... No
                        problems.
                      </p>
                      <p className="mb-3 font-normal text-sm text-slate-500 ">
                        It is obviously not the same build quality as those very
                        expensive watches. But that is like comparing a Citroën
                        to a Ferrari. This watch was well under £100! An
                        absolute bargain.
                      </p>
                      <a
                        href="#"
                        className="block mb-5 text-sm font-medium text-green-600 hover:underline"
                      >
                        Read more
                      </a>
                      <aside>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          19 people found this helpful
                        </p>
                        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                          <a
                            href="#"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            Helpful
                          </a>
                          <a
                            href="#"
                            className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                          >
                            Report abuse
                          </a>
                        </div>
                      </aside>
                    </article>
                  </div>
                </Tab.Panel>
                {/* Resource Tab Panel */}
                <Tab.Panel
                  className={classNames(" p-3", " focus:outline-none ")}
                >
                  <div className="flex justify-center flex-col items-center">
                    <h1 className="-mt-3 mb-2 font-semibold text-slate-600">
                      No Resources
                    </h1>
                    <div
                      className="w-[9rem] h-[9rem] bg-cover bg-top "
                      style={{
                        backgroundImage: `url("/assets/images/void.svg")`,
                      }}
                    ></div>
                  </div>
                </Tab.Panel>
                {/* Quiz Tab Panel */}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <div className="w-[35%] bg-slate-50 mt-2">
          {course?.sections.map((section) => {
            return (
              <Disclosure key={section.id} defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-[100%] justify-between mb-1 rounded-sm bg-slate-200 px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-300 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                      <span>{section.title}</span>
                      <BsChevronUp
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-slate-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {section.items.map((item) => {
                        return (
                          <>
                            <div className="mb-2 relative" key={item?.id}>
                              <BsFillPlayCircleFill className="absolute top-3 text-green-500 w-4 h-4" />
                              <Link href="#" passHref>
                                <p className="font-semibold text-sm text-slate-700  border-b py-1 pl-8 hover:text-slate-500">
                                  {item.title}
                                </p>
                              </Link>
                            </div>
                          </>
                        );
                      })}
                      <div className="flex gap-5 items-center">
                        <MdQuiz className=" text-red-500 w-4 h-4" />
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="font-semibold text-sm text-slate-700    hover:text-slate-500"
                        >
                          Quiz
                        </button>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
