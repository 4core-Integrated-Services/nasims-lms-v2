import React from "react";
import Link from "next/link";

export default function Achievements() {
  return (
    <div className="w-full mt-[5rem]">
      <div className="w-[70%] mx-auto pt-14 flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-medium text-slate-600">
          My <span className="text-green-500">Achievements</span>
        </h1>
        <p className="text-center mt-8 text-xl text-slate-500">
          {` You haven't been <span className="text-green-500">awarded</span> any
          certificates yet`}
        </p>

        <div
          className="w-[10rem] h-[10rem] bg-cover bg-top my-6 "
          style={{
            backgroundImage: `url("/assets/images/cert.svg")`,
          }}
        ></div>
        <div>
          <Link href="/catalog" passHref>
            <button
              type="button"
              className="text-center mt-5 bg-green-500 py-2 px-5 rounded-md text-white hover:bg-green-600"
            >
              Browse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
