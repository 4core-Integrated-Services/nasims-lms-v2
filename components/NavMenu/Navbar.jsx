import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { categoriesListItems } from "../mock/categoriesListItems";

const navigationList = [
  {
    name: "Blog",
  },
  {
    name: "Tutor on Lms",
  },
];

export default function Navbar() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function handleUserMenu() {
    if (isUserMenuOpen) {
      setUserMenuOpen(false);
    } else {
      setUserMenuOpen(true);
    }
  }

  function handleHamburger() {
    if (isHamburgerOpen) {
      setIsHamburgerOpen(false);
    } else {
      setIsHamburgerOpen(true);
    }
  }
  return (
    <nav className=" px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b  border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/">
          <span className="flex items-center">
            <div
              className=" mr-3 h-10 md:h-16 bg-cover bg-top w-11 -ml-10  md:ml-6 md:w-20"
              style={{
                backgroundImage: `url("/assets/images/logo.png")`,
              }}
            ></div>
          </span>
        </Link>

        <div className="flex-initial hidden md:block md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className=" text-gray-400 md:absolute  focus:outline-none focus:ring-4  focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>

            <span className="sr-only">Search</span>
          </button>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-sm  border outline-none  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
            placeholder="What do you want to learn"
          />
        </div>

        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 relative  focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={handleUserMenu}
          >
            <span className="sr-only">Open user menu</span>

            <div
              className="w-10 h-10 rounded-full relative bg-top bg-cover"
              style={{
                backgroundImage: `url("/assets/images/avatar.svg")`,
              }}
            ></div>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            // className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
            className={
              isUserMenuOpen
                ? "z-50 block my-4 text-base list-none absolute md:mr-5 right-5 top-10 sm:right-10 md:right-0 lg:right-10 md:top-16 divide-y  rounded shadow bg-gray-700 divide-gray-600"
                : "hidden"
            }
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm  text-white">John doe</span>
              <span className="block text-sm font-medium  truncate text-slate-400">
                johndoe@gmail.com
              </span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link href="/my-courses" passHref>
                  <span className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white">
                    My courses
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/profile" passHref>
                  <span className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white">
                    Profile
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/certificates" passHref>
                  <span className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white">
                    Achievements
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <span className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white">
                    Sign out
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 -mr-11 text-sm  rounded-lg md:hidden transition-all  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={handleHamburger}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          // className={
          //   "items-center justify-between block w-full md:flex md:w-auto md:order-1 md:absolute md:top-0"
          // }
          // className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" //this is it
          className={
            isHamburgerOpen
              ? "items-center justify-between block w-full md:flex md:w-auto transition-all md:order-1"
              : "items-center justify-between hidden w-full md:flex md:w-auto transition-all md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border md:static  absolute md:h-auto top-11 h-[100vh] left-0 w-[70vw] md:w-auto transition-all md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-900 md:bg-gray-900 border-gray-900">
            <div className="group inline-block">
              <button className="outline-none focus:outline-none border-none px-3 py-1 bg-transparent rounded-sm flex items-center min-w-32 text-gray-400 hover:text-green-500">
                <span className="pr-1 font-semibold flex-1">Explore</span>
                <span>
                  <BsChevronDown />
                </span>
              </button>
              <ul
                className="bg-gray-800 z-50 border-none w-[14rem] py-2 rounded-sm transform scale-0 group-hover:scale-100 absolute 
                        transition duration-150 ease-in-out origin-top min-w-32"
              >
                {categoriesListItems.map((item) => {
                  return (
                    <li
                      className="rounded-sm relative px-3 py-1 hover:bg-gray-600 text-white"
                      key={item?.id ?? "1"}
                    >
                      <Link href={`/categories/${item.name}`} passHref>
                        <button className="w-full text-left flex items-center outline-none focus:outline-none">
                          <span className="pr-1 flex-1">
                            {item?.name ?? "List"}
                          </span>
                          <span className="mr-auto">
                            <BsChevronRight />
                          </span>
                        </button>
                      </Link>
                      <ul
                        className="bg-gray-800 border-none w-[12rem] rounded-sm absolute top-0 right-[3px] 
                    transition duration-150 ease-in-out origin-top-left md:block hidden py-2
                            min-w-32 "
                      >
                        {item.sub.map((subItem) => {
                          return (
                            <Link
                              href={`/categories/${item.name}/sub/${subItem.name}`}
                              key={subItem.id}
                            >
                              <li
                                className="px-3 py-1 hover:bg-gray-600 s text-white p-1"
                                key={subItem?.id ?? "2"}
                              >
                                {subItem?.name ?? "subList"}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
            {navigationList.map((navItems, navItemsInx) => {
              return (
                <li key={navItemsInx}>
                  <Link href="/" passHref>
                    <p
                      className="block py-2 pl-3 pr-4 mt-1  rounded   md:p-0 md:hover:text-green-500 text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                      aria-current="page"
                    >
                      {navItems?.name ?? "items"}
                    </p>
                  </Link>
                </li>
              );
            })}

            <div className="relative md:hidden  w-[90%] py-6 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm  border outline-none  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                placeholder="What do you want to learn"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
