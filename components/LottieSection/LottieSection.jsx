import React from "react";
import Link from "next/link";
import Lottie from "react-lottie-player";
import LottieJson from "../../public/assets/images/teacherLottie.json";
import { Fade } from "react-reveal";

export default function LottieSection() {
  return (
    <Fade bottom>
      <div className="w-full  mt-[8rem] mb-[10rem] md:-mt-[5rem] xs:-mt-[10rem]">
        <div className="container flex mx-auto  w-[80%] gap-16  pt-16 xs:flex-col lg:flex-row 2xl:mt-[7rem] lg:-mt-[15rem] lg:py-[5rem]">
          <div className=" w-full flex items-center justify-end  ">
            <Lottie loop animationData={LottieJson} play />
          </div>
          <div className=" w-full lg:translate-y-[7rem] ">
            <span className="font-sans xs:text-center block text-end font-semibold uppercase leading-loose mb-1 text-lg text-gray-400">
              Know about us
            </span>
            <h3
              className={`text-end text-slate-700 xs:text-center xs:text-[1.6rem] xs:font-semibold font-bold mb-[1.6rem] font-["Heebo"] text-[42px] capitalize`}
            >
              Best online
              <span className="text-green-400"> learning platform</span> you
              would ever come across
            </h3>
            <span className="font-medium xs:text-center xs:text-sm xs:mt-4 xs:font-extralight text-xl text-end block leading-loose uppercase font-[Noto Sans]">
              we are Dedicated
            </span>
            <p className="mt-4 ml-[13rem] text-end block  font-normal font-[Roboto] xs:mx-auto text-slate-500 xs:w-full w-[70%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates dolorem nobis illo nisi quas, sit aliquam facilis
              tenetur saepe voluptate odio omnis id commodi qui obcaecati
              excepturi facere libero est.
              <br />
              <br />
              <span className="font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit,
                consequatur tempora tempore. Nam!
              </span>
            </p>
            <Link href="/" passHref>
              <p className=" block text-center xs:mx-auto my-8 ml-[38rem] text-white font-[Heebo] bg-gray-800 w-28  py-3 px-2 mx-auto rounded-lg shadow-md hover:bg-green-400 transition-all mb-16">
                Get started
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
