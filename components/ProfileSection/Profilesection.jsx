import React from "react";

export default function Profilesection() {
  return (
    <div className="mt-[5rem] w-full bg-slate-50  flex justify-center items-center flex-col">
      <div
        className="bg-cover bg-top w-64 h-64 py-6 mt-6  rounded-full border border-slate-200"
        style={{
          backgroundImage: `url("/assets/images/avatar.svg")`,
        }}
      ></div>
      <h1 className="mt-6 capitalize font-semibold text-2xl text-slate-600">
        john doe
      </h1>
      <p className="text-green-500 font-medium capitalize">Software engineer</p>

      <div className="mb-[2.7rem]">
        <form>
          <label htmlFor="bio" className="block text-slate-400">
            Tell us more about yourself
          </label>
          <textarea
            name="bio"
            id="bio"
            cols="90"
            rows="4"
            className="bg-white outline-none border border-slate-100 p-5 text-slate-600 shadow-lg "
          ></textarea>
          <button className="text-end  bg-green-500 py-2 px-5 block text-white hover:bg-green-600">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
