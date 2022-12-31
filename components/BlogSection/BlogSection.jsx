import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function BlogSection() {
  return (
    <section>
      <div className="w-full bg-slate-50 mb-16">
        <h1 className="text-center text-3xl font[Heebo] pt-10 font-semibold text-slate-600">
          Latest <span className="text-green-400">posts</span> from our blog
        </h1>
        <div className="relative py-16">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              <div className="group space-y-6 border  border-slate-300  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10  hover:scale-105 transition-transform hover:shadow-xl ">
                <div
                  className="mx-auto w-32 bg-cover bg-top h-20 "
                  style={{
                    backgroundImage: `url("assets/images/dev.svg")`,
                  }}
                ></div>
                <h3 className="text-2xl font-semibold text-green-400 ">
                  Web development
                </h3>
                <p className="font-[Roboto] text-slate-500">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <div className="relative mx-auto flex h-10 w-10 cursor-pointer items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125">
                  <Link href="#" passHref>
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>

              <div className="group space-y-6 border border-slate-300  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 hover:scale-105 transition-transform hover:shadow-xl">
                <div
                  className="mx-auto w-32 bg-cover bg-top h-20 "
                  style={{
                    backgroundImage: `url("assets/images/seo.svg")`,
                  }}
                ></div>
                <h3 className="text-2xl font-semibold text-green-400 ">Seo</h3>
                <p className="font-[Roboto] text-slate-500">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>

                <div className="relative mx-auto flex h-10 w-10 cursor-pointer items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125">
                  <Link href="#" passHref>
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>

              <div className="group space-y-6 border border-slate-300 rounded-3xl bg-white px-8 py-12 text-center shadow-2xl shadow-gray-600/10  hover:scale-105 transition-transform hover:shadow-xl">
                <div
                  className="mx-auto w-32 bg-cover bg-top h-20 "
                  style={{
                    backgroundImage: `url("assets/images/design.svg")`,
                  }}
                ></div>
                <h3 className="text-2xl font-semibold text-green-400 ">
                  Web Design
                </h3>
                <p className="font-[Roboto] text-slate-500">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <div className="relative mx-auto flex h-10 w-10 cursor-pointer items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125">
                  <Link href="#" passHref>
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
