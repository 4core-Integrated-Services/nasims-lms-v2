import Link from "next/link";
import react from "react";
import { RatingIcon } from "../mock/ratings";
import { FaChevronRight } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { BiCaptions } from "react-icons/bi";
import { CoursesCarouselData } from "../mock/coursesCarouselData";
import { Disclosure } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function CourseDetailsSection({ courseId }) {
  const course = CoursesCarouselData.find((data) => data.id == courseId);
  return (
    <section className="mt-[5rem]">
      <div className="w-full ">
        <div className="lg:bg-slate-100 xs:bg-white ">
          <div className="mx-auto container flex xs:flex-col-reverse md:flex-row ">
            <div className="w-[70%] ">
              {/* TOP LEFT SECTION */}
              <div className="py-8">
                <div className="p-8 flex items-center lg:static xs:absolute  xs:top-12 xs:left-0 ">
                  <Link href="#" passHref>
                    <span className="capitalize font-semibold text-green-400">
                      {course?.category}
                    </span>
                  </Link>

                  <FaChevronRight className="mx-1 text-slate-400" />
                  <Link href="#" passHref>
                    <span className="capitalize font-semibold text-green-400">
                      Web Development
                    </span>
                  </Link>
                </div>
                <h1 className="px-8 font-extrabold lg:ml-6 text-[2.5rem] xs:-ml-5  xs:font-bold xs:text-xl xs:px-0 xs:w-[20rem] text-slate-700 uppercase">
                  {course?.title}
                </h1>
                <p className="px-8 lg:w-[50%] lg:ml-6 xs:px-0 text-slate-500 xs:-ml-5 xs:w-[20rem] xs:text-start font-[Heebo] pt-4">
                  Become a Full-Stack Web Developer with just ONE course. HTML,
                  CSS, Javascript, Node, React, MongoDB, Web3 and DApps
                </p>
                <div className="px-8  pt-3 xs:px-0 lg:ml-5 xs:-ml-5 xs:gap-3 xs:text-sm flex items-center">
                  <span className="px-1 font-extrabold font-[Roboto] text-amber-700 mt-1">
                    {course?.ratings}
                  </span>
                  <span className="flex  text-[goldenrod] pr-1 xs:-ml-3">
                    {" "}
                    {"a"
                      .repeat(course?.ratings ?? 1)
                      .split("a")
                      .slice(0, course?.ratings ?? 0)
                      .map((_, index) => {
                        return <RatingIcon key={index} />;
                      })}
                  </span>
                  <span className="text-green-600 xs:flex xs:gap-1 font-bold text-sm pr-1">
                    <span> (14,213 </span>
                    <span>ratings)</span>
                  </span>
                  <span className="text-slate-600 font-semibold  flex gap-1">
                    <span> 124,233</span> <span>students</span>
                  </span>
                </div>
                <div className="flex pl-8 xs:-ml-12 lg:-ml-3 xs:mt-2">
                  <span className="text-slate-600 font-bold">
                    Created by{" "}
                    <Link href={`/instructor/${course?.instructorName}`}>
                      <span className="text-green-500 underline">
                        {" "}
                        {course?.instructorName}
                      </span>
                    </Link>
                  </span>
                </div>
                <div className="flex lg:-ml-[25rem] items-center pt-2 pl-8 xs:flex-col lg:flex-row lg:gap-[12rem] xs:gap-2 xs:justify-center xs:items-center">
                  <span className="capitalize flex items-center gap-1 font-medium pr-4 xs:-ml-[5.5rem]">
                    <AiFillExclamationCircle className="text-gray-700 " />
                    <span> Last</span> <span>updated </span>{" "}
                    <span>12/8/22</span>
                  </span>

                  <span className="capitalize flex items-center gap-1 font-medium xs:-ml-[11.6rem] pr-4">
                    <BsGlobe className="text-gray-700 " />
                    English
                  </span>

                  <span className="capitalize lg:-translate-x-10 flex items-center gap-1 xs:-ml-[8.6rem] font-medium">
                    <BiCaptions className="text-gray-700 " />
                    Auto generated
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-[40%] mt-1">
              <div
                className="w-full h-[90%] mx-auto xs:w-[24rem] xs:-ml-10 xs:mt-8 xs:h-64 mt-4 bg-cover bg-top rounded-sm object-cover hover:scale-105 transition-transform hover:shadow-md"
                style={{
                  backgroundImage: `url(${course?.thumbnail})`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* BOtTom */}
        <div className="mx-auto container flex mt-10">
          {/* TOP LEFT BOTTOM */}
          <div className="w-[70%] ">
            <div className="pl-8">
              <h4 className="capitalize font-medium font-[Roboto] text-xl text-gray-600">
                {`  what you'll learn`}
              </h4>
              <p className="w-[80%] text-gray-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                modi ullam autem aliquam eum, similique veniam sequi eius
                reiciendis cupiditate. Quaerat rerum facilis libero officiis
                veniam. Necessitatibus, porro tenetur! Aliquam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maxime, totam.
                Natus provident nisi libero labore illo architecto, iure
                voluptatum quia modi ut perspiciatis, similique corrupti nemo
                maiores accusamus minima error!Lorem Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Suscipit eius labore ducimus minus
                repudiandae voluptates, ratione molestiae necessitatibus itaque
                nisi, quia ipsum blanditiis cumque aliquam debitis animi! Hic,
                optio nesciunt!
              </p>
            </div>
            <div className="pl-8 mt-10 mb-10">
              <h3 className="font-bold text-slate-700 text-2xl">
                Course Content
              </h3>

              <div className="w-[80%]  pt-5">
                <div className="mx-auto w-full  rounded-2xl bg-white p-2">
                  {course?.sections.map((section) => {
                    return (
                      <Disclosure key={section.id}>
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
                                  <div className="mb-2 relative" key={item?.id}>
                                    <BsFillPlayCircleFill className="absolute top-3 text-green-500 w-4 h-4" />
                                    <Link href="#" passHref>
                                      <p className="font-bold text-slate-700 text-lg border-b py-1 pl-8 hover:text-slate-500">
                                        {item.title}
                                      </p>
                                    </Link>
                                  </div>
                                );
                              })}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    );
                  })}
                </div>
              </div>
              <div className="mt-20">
                <h4 className="font-semibold text-slate-600 font-[Heebo]">
                  About the Instructor
                </h4>
                <div className="mt-4 flex items-center gap-4">
                  <div
                    className="w-14 h-14 bg-cover bg-top rounded-full object-cover"
                    style={{
                      backgroundImage: `url(${course?.avatar})`,
                    }}
                  ></div>
                  <Link href={`/instructor/${course?.instructorName}`} passHref>
                    <span className="font-semibold text-green-500 hover:underline transition-all">
                      {course?.instructorName}
                    </span>
                  </Link>
                </div>
                <p className="w-[70%] mt-3 text-slate-500 leading-6">
                  {course?.instructorName}{" "}
                  {`is an AWS Solutions Architect and a
                  Linux server administrator. He's written books on cloud and
                  Linux administration, IT security, and data analytics.`}
                </p>
                <div className="mt-[3rem] flex items-center gap-1">
                  <Link href="#" passHref>
                    <span className="text-slate-600 font-medium">
                      See more courses by{" "}
                      <span className="text-green-500">
                        {course?.instructorName}
                      </span>{" "}
                    </span>
                  </Link>
                  <AiOutlineArrowRight className="text-green-600 mt-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[40%] mx-auto ">
            <div className="w-[70%] mx-auto mb-12 mt-3">
              <Link href={`/course-content/${course?.id}`}>
                <button
                  type="button"
                  className="bg-green-500 w-full py-3 text-white font-[Roboto] font-semibold hover:bg-green-700 transition-all"
                >
                  Start Course
                </button>
              </Link>
            </div>
            <div className="w-[80%] mx-auto ml-[6rem]">
              <h4 className="font-semibold font-[Heebo] text-xl mt-1 text-slate-600">
                Course Info
              </h4>
              <div className="mt-6 w-[80%]">
                <div className="flex items-center justify-between border-b py-3 mb-3">
                  <span className="font-medium text-slate-600">Rating</span>
                  <span className="flex text-[goldenrod]">
                    {"a"
                      .repeat(course?.ratings ?? 1)
                      .split("a")
                      .slice(0, course?.ratings ?? 0)
                      .map((_, index) => {
                        return <RatingIcon key={index} />;
                      })}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b py-3 mb-3">
                  <span className="font-medium text-slate-600">Level</span>
                  <span className="flex text-slate-500 font-bold">
                    {course?.level}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b py-3 mb-3">
                  <span className="font-medium text-slate-600">Updated</span>
                  <span className="flex text-slate-500 font-bold">
                    12/8/2022
                  </span>
                </div>
                <div className="flex items-center justify-between border-b py-3 mb-3">
                  <span className="font-medium text-slate-600">Duration</span>
                  <span className="flex text-slate-500 font-bold">
                    11hr 19m
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 mb-3">
                  <span className="font-medium text-slate-600">Language</span>
                  <span className="flex text-slate-500 font-bold">English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
