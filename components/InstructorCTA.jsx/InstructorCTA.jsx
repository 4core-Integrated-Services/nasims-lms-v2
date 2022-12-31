import React from "react";
import Link from "next/link";

export default function InstructorCTA() {
  return (
    <section className="mb-16 xs:-mt-48 lg:mt-0">
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-[80%] flex justify-between gap-16 xs:flex-col lg:flex-row">
          <div className="  w-full">
            <div
              className="lg:w-full lg:h-[35rem] bg-cover bg-top xs:hidden lg:block"
              style={{
                backgroundImage: `url("assets/images/teacher.svg")`,
              }}
            ></div>
          </div>
          <div className=" w-full pt-[9rem]">
            <h1 className="text-center text-3xl font-[Roboto] font-semibold text-slate-600">
              Become an <span className="text-green-400">Instructor</span>
            </h1>
            <p className="lg:text-start xs:text-center lg:w-[40%] xs:w-[60%] mx-auto py-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              quam nesciunt qui aspernatur id?
            </p>
            <Link href="/" passHref>
              <p className="text-white xs:text-center xs:block xs:mx-auto lg:mx-0 lg:text-start lg:ml-[14rem] font-[Heebo] block bg-gray-800 w-[9.4rem] text-sm text-center py-3 px-2  rounded-lg shadow-md hover:bg-green-400 transition-all mb-16">
                Start teaching today
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
