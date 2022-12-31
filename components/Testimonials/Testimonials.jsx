import React from "react";
import { Fade } from "react-reveal";

export default function Testimonials() {
  return (
    <section className="mb-16 bg-slate-50 w-full xs:-mt-[10rem]">
      <Fade bottom>
        <div className="py-16">
          <div className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl font-[Heebo]">
              What our <span className="text-green-400">Students</span> say
            </h2>
            <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
              <div className="row-span-2 rounded-3xl border border-slate-300  bg-white  p-8 text-center shadow-2xl shadow-gray-800/10  hover:scale-105 transition-transform">
                <div className="flex h-full flex-col justify-center space-y-4">
                  <div
                    className="mx-auto h-32 w-32 xs:w-28 xs:h-28 rounded-full bg-cover bg-top"
                    style={{
                      backgroundImage: `url("assets/images/m-1.jpg")`,
                    }}
                  ></div>
                  <p className="md:text-xl text-slate-500 xs:text-[1rem]">
                    <span className="font-[Roboto]">{`"`}</span>
                    {` Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quaerat repellat
                    perspiciatis excepturi est. Non ipsum iusto aliquam
                    consequatur repellat provident, omnis ut, sapiente
                    voluptates veritatis cum deleniti repudiandae ad doloribus.`}
                    <span className="font-[Rotobo]">{`"`}</span>
                  </p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none text-slate-600">
                      John Doe
                    </h6>
                    <span className="text-xs text-green-500">Student</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl sm:flex sm:space-x-8 border border-slate-300  bg-white 0 p-8 text-center shadow-2xl shadow-gray-800/10 hover:scale-105 transition-transform">
                <div
                  className="mx-auto lg:h-20 lg:w-60 xs:w-28 md:translate-y-5 md:w-[24rem] xs:h-28 rounded-full bg-cover bg-top"
                  style={{
                    backgroundImage: `url("assets/images/w-1.jpg")`,
                  }}
                ></div>
                <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-slate-500  xs:text-[1rem]">
                    <span className="font-[Roboto]">{`"`}</span>{" "}
                    {`Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quaerat repellat
                    perspiciatis excepturi est. Non ipsum iusto aliquam
                    consequatur repellat provident, omnis ut, sapiente
                    voluptates veritatis cum deleniti repudiandae ad doloribus.`}
                    <span className="font-[Roboto]">{`"`}</span>
                  </p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none text-slate-600">
                      Jenifer Doe
                    </h6>
                    <span className="text-xs text-green-500">Student</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl sm:flex sm:space-x-8 border border-slate-300  bg-white  p-8 text-center shadow-2xl shadow-gray-800/10  hover:scale-105 transition-transform ">
                <div
                  className="mx-auto lg:h-20 lg:w-60 xs:w-28 xs:h-28 md:translate-y-5 md:w-[24rem] rounded-full bg-cover bg-top"
                  style={{
                    backgroundImage: `url("assets/images/w-2.jpg")`,
                  }}
                ></div>
                <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-slate-500  xs:text-[1rem]">
                    <span className="font-[Roboto]">{`"`}</span>{" "}
                    {`Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quaerat repellat
                    perspiciatis excepturi est. Non ipsum iusto aliquam
                    consequatur repellat provident, omnis ut, sapiente
                    voluptates veritatis cum deleniti repudiandae ad doloribus.`}
                    <span className="font-[Roboto]">{`"`}</span>
                  </p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none text-slate-600 ">
                      Jane Doe
                    </h6>
                    <span className="text-xs text-green-500">Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
