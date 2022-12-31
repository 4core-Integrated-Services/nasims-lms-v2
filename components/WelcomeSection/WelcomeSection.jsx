import React from "react";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";

export default function WelcomeSection() {
  return (
    <div className="w-full bg-slate-200  mt-[5rem]">
      <div className="w-[60%] px-20 py-10 h-full mx-auto">
        <h3 className="text-3xl font-medium text-slate-600 capitalize">
          Welcome back <span className="ml-3 text-green-500">John doe</span> !
        </h3>
        <div className="bg-white my-3 max-w-[60%] py-8 mt-6 flex shadow-lg">
          <div className="border-r border-green-500 h-[90%] my-auto">
            <h4 className="py-3 px-6 text-slate-500 font-medium">
              Tell us more about yourself
            </h4>
            <div className="px-6 py-1">
              <label
                htmlFor="career"
                className=" text-slate-500 font-normal font-[Roboto]"
              >
                I want to be a
              </label>
              <input
                className="ml-3 px-5 py-1 bg-slate-100 outline-none text-slate-500"
                type="text"
                placeholder="Software Developer"
              />
            </div>
            <div className="px-6 mt-4">
              <button className=" text-green-500 font-semibold hover:text-slate-400  rounded-md">
                Save to profile
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-light py-4 px-6 capitalize text-slate-500">
              set your learning goals
            </h4>

            <div className="px-7 py-2">
              <span className="flex items-center gap-1">
                <MdWorkOutline className="text-green-500" />
                <button className="text-slate-500 font-normal text-md font-[Roboto]">
                  Change my career
                </button>
              </span>

              <span className="flex items-center gap-1 mt-4">
                <AiOutlineRise className="text-green-500" />
                <button className="text-slate-500 font-normal text-md font-[Roboto]">
                  Level up my skills
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
