import React, { useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function LoginComponent() {
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };
  const renderError = (message) => (
    <p className="text-red-500 mt-1">{message}</p>
  );

  return (
    <div className="w-full relative h-screen bg-cover bg-center bg-transparent grid  place-items-center overflow-hidden  bloby">
      <style>before:</style>
      <div className=" bg-emerald-50 rounded-lg shadow-lg w-[60%] h-[70%] flex">
        <div className="  w-[50%] h-full">
          <div
            className="bg-cover bg-top h-full w-full"
            style={{
              backgroundImage: `url("assets/images/login-2.jpg")`,
              filter: "brightness(70%)",
            }}
          ></div>
        </div>
        <div className=" w-[50%]  flex mx-auto items-center h-full">
          <div className="w-[900%] h-full bg-slate-600 flex justify-center pt-20">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                await onSubmit(values);
                resetForm();
              }}
            >
              <Form>
                <div
                  className="bg-top bg-cover h-20 w-24 mx-auto mb-3"
                  style={{
                    backgroundImage: `url("/assets/images/logo.png")`,
                  }}
                ></div>
                <h4 className="text-3xl text-slate-100 mb-3 text-center font-medium">
                  Sign in
                </h4>
                <span className="text-slate-200  text-center block mb-8">
                  Sign in to your{" "}
                  <span className="text-green-500">account</span>
                </span>

                <label className="block text-sm mt-8">
                  <span className="text-slate-200 ">Email</span>
                  <Field
                    className="block w-[21rem] py-3 px-2 focus:border text-slate-500 rounded-md mt-1 text-sm focus:outline-none focus:shadow-outline-green   "
                    placeholder="Enter your email address"
                    required
                    name="email"
                    type="email"
                  />
                  <ErrorMessage name="email" render={renderError} />
                </label>

                <label className="block text-sm mt-4">
                  <span className="text-slate-200 ">Password</span>
                  <Field
                    className="block w-[21rem] py-3 px-2 focus:border text-slate-500 rounded-md mt-1 text-sm focus:outline-none focus:shadow-outline-green   "
                    placeholder="Enter your Password"
                    required
                    name="password"
                    type="password"
                  />
                  <ErrorMessage name="password" render={renderError} />
                </label>

                <button
                  type="submit"
                  className="text-center bg-green-500 w-[21rem] mt-8 hover:bg-green-600 transition-all py-2 rounded-md text-white"
                >
                  Sign in
                </button>

                <p className="text-end mt-4 text-slate-100">
                  Forgot{" "}
                  <span className="text-green-500 underline">
                    <Link href="#" passHref>
                      password?
                    </Link>
                  </span>
                </p>
              </Form>
            </Formik>
          </div>
          {/* <div className="">
            <form>
              <h4 className="pb-4 text-center font-[Roboto] font-semibold text-2xl text-slate-600 capitalize">
                Sign in to your <span className="text-green-500">account</span>
              </h4>

              <label htmlFor="email" className=" block py-3">
                <span className="text-green-500">Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className=" block border border-slate-200  py-1 p-3 outline-none focus:border rounded-md focus:border-green-500 w-[20rem]"
                />
              </label>

              <label htmlFor="email" className=" block pb-3">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className=" block"
                />
              </label>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}

{
  /* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="#D0E2FF"
    d="M51.5,-42.2C64.9,-24.2,72.7,-2.9,66.8,12.2C61,27.4,41.4,36.5,23.4,42.9C5.4,49.4,-11.1,53.3,-25.8,48.2C-40.5,43.2,-53.4,29.2,-61.4,9.6C-69.4,-10,-72.4,-35.1,-61.4,-52.6C-50.3,-70,-25.2,-79.9,-3.1,-77.4C19,-75,38,-60.2,51.5,-42.2Z"
    transform="translate(100 100)"
  />
</svg> */
}

{
  /* <svg
  viewBox="0 0 800 500"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="100%"
  id="blobSvg"
>
  <g transform="translate(155.3127555847168, -2.2368927001953125)">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
        <stop offset="100%" style="stop-color: rgb(100, 179, 244);"></stop>
      </linearGradient>
    </defs>
    <path
      class="blob"
      d="M419.5,351Q367,452,269,419Q171,386,90,318Q9,250,77.5,160Q146,70,245.5,78Q345,86,408.5,168Q472,250,419.5,351Z"
      fill="url(#gradient)"
    ></path>
  </g>
</svg> */
}
