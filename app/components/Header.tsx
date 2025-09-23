"use client";
import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between shadow-2xl h-auto md:h-15 items-center p-4 bg-white rounded-lg w-full">
      <nav className="mb-2 md:mb-0 cursor-pointer text-3xl md:text-5xl font-bold w-full md:w-auto text-center md:text-left">
        Mugilan
      </nav>
      <ul className="flex flex-row flex-wrap md:flex-nowrap overflow-x-auto md:overflow-visible justify-center md:justify-between gap-4 md:gap-10 text-base md:text-lg font-sans font-bold cursor-pointer w-full md:w-auto mb-2 md:mb-0">
        <li className="hidden" />
        <div className="flex items-center gap-2 min-w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"></path>
          </svg>
          <Link
            href="/"
            className="hover:text-blue-600 active text-purple-600"
          >
            Home
          </Link>
        </div>
        <div className="min-w-max">
          <Link href="/about" className="text-gray-400 hover:text-purple-600">
            About
          </Link>
        </div>
        <div className="min-w-max">
          <Link
            href="/projects"
            className="text-gray-400 hover:text-purple-600"
          >
            Services
          </Link>
        </div>
        <div className="min-w-max">
          <Link
            href="/contact"
            className="text-gray-400 hover:text-purple-600"
          >
            Works
          </Link>
        </div>
        <div className="min-w-max">
          <Link
            href="/contact"
            className="text-gray-400 hover:text-purple-600"
          >
            Blogs
          </Link>
        </div>
        <div className="min-w-max">
          <Link
            href="/contact"
            className="text-gray-400 hover:text-purple-600"
          >
            Contact
          </Link>
        </div>
      </ul>
      <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
        <button  className="bg-black text-white hover:bg-[#4770ff] rounded-xl font-bold py-3 px-6 w-full md:w-auto flex items-center justify-center transition-colors duration-300">
       <a href="/contact">   Let&#39;s Talk</a>
          <svg className="icon ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 11.6665V6.6665H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
