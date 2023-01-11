import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { GiLightningBow } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";

export default function FeaturesSection() {
  return (
    // <div className="bg-white w-full xs:mb-[64rem] h-[40rem]">
    <div className="bg-white w-full h-[40rem] 2xl:mb-[62rem] lg:mb-[62rem] md:mb-[66rem]  xs:mb-[64rem]">
      <div
        className="w-full h-full bg-cover bg-top  "
        style={{
          backgroundImage: `url("assets/images/shape.png")`,
        }}
      >
        <div className="container mx-auto flex flex-col items-center mt-10 md:mt-28">
          <Fade bottom>
            <div className="text-center">
              <span className="font-sans block font-semibold uppercase leading-loose mb-1 md:ml-0 ml-6 text-lg text-gray-400">
                Perks
              </span>
              <h3 className="text-slate-700 font-bold md:ml-0 ml-4 xs:mb-[1rem] lg:mb-[2rem] md:mb-[2rem] md:leading-relaxed md:text-[42px] text-xl capitalize ">
                We Know that{" "}
                <span className="text-green-400">learning online</span> can be a
                bit difficult...
              </h3>
              <p className="mb-10 text-slate-400 md:w-[50%] mx-auto  font-semibold">
                So we invented a way to fix that by our state of the art
                <span className="text-green-400"> Study </span>
                tracking AI we have made it{" "}
                <span className="text-green-400">incredibly </span> easy to
                learn
                <span className="text-green-400"> online </span>
              </p>

              <Link href="/" passHref>
                <p className="text-white font-[Heebo] bg-gray-800 w-28 text-center py-3 px-2 mx-auto rounded-lg shadow-md hover:bg-green-400 transition-all mb-16">
                  Get started
                </p>
              </Link>
            </div>
          </Fade>

          <Fade bottom>
            <div className="grid grid-cols-1 items-center gap-0 relative  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm mb-8 w-full xs:-mt-32">
              <div className="mb-7 lg:w-[80%] md:translate-x-8 md:w-[77%] xs:translate-x-1 xs:translate-y-32 lg:translate-y-10">
                <div className="bg-slate-100 w-full hover:bg-green-200 transition-all hover:scale-105 shadow-md hover:shadow-lg">
                  <GiLightningBow className="w-36 h-36 py-10 text-gray-700 " />
                  <h4 className="px-8 font-[Roboto] capitalize text-xl font-medium text-slate-600 mt-3 ">
                    We are super fast
                  </h4>
                  <p className="px-10 py-10 text-slate-600 font-medium">
                    With our highly specially instructors we can assure that you
                    have the fastest learning curve in any course
                  </p>
                </div>
              </div>
              <div className="mb-7 lg:w-[80%] md:w-[77%] md:translate-x-8 md:translate-y-[18rem] mt-32 lg:translate-y-32 lg:translate-x-[.5rem]">
                <div className="bg-green-200 w-full shadow-md hover:scale-105 transition-all">
                  <IoDiamond className="w-36 h-36 py-10 text-gray-700 " />
                  <h4 className="px-8 font-[Roboto] capitalize text-xl font-medium text-slate-600 mt-3">
                    We are reliable
                  </h4>
                  <p className="px-10 py-10 text-slate-600 font-medium">
                    Our meetups and intense learning methods aids in our
                    reliablity frankly speaking our stats speak for themselves
                  </p>
                </div>
              </div>
              <div className="mb-7 lg:w-[80%] md:translate-x-8 md:w-[77%] lg:translate-y-10 md:translate-y-[5rem]">
                <div className="bg-slate-100 w-full hover:bg-green-200 transition-all hover:scale-105 shadow-md hover:shadow-lg">
                  <GrCertificate className="w-36 h-36 py-10 text-gray-700 " />
                  <h4 className="px-8 font-[Roboto] capitalize text-xl font-medium text-slate-600 mt-3">
                    We are certified
                  </h4>
                  <p className="px-10 py-10 text-slate-600 font-medium">
                    We are straight from the nigerian government so yeah, we
                    have all the rights in the world to grant you a certificate
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
