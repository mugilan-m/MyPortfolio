"use client";
import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import Link from "next/link";
import Image from 'next/image'

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row m-0 p-0 items-center justify-center min-h-screen">
      <div className="flex flex-col gap-6 w-full lg:w-auto mt-5">
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mt-0 lg:mt-[-8vh] lg:ml-10 w-full sm:w-[90vw] md:w-[70vw] lg:w-[60vh] h-auto lg:h-[45vh]">
          <div className="text-xl sm:text-2xl font-bold mb-4 ">Work Experience</div>
          <AnimatedDiv />
        </div>
        {/* My Expert Area */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mt-5 lg:ml-10 w-full sm:w-[90vw] md:w-[70vw] lg:w-[60vh] h-auto lg:h-[35vh]">
          <div className="text-xl sm:text-2xl font-bold mb-4">My Expert Area</div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 overflow-hidden">
            <div className="flex flex-col items-center">
              <Image
                src="https://www.svgrepo.com/show/354259/react.svg"
                className="w-[6vh] h-[6vh] ml-2 shadow-sm"
                width={50}
                height={50}
                alt="React JS Logo"
              />
              <p>React JS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://www.svgrepo.com/show/378440/nextjs-fill.svg"
                className="w-[6vh] h-[6vh] ml-2 shadow-sm"
                width={50}
                height={50}
                alt="Next JS Logo"
              />
              <p>Next JS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://www.svgrepo.com/show/349419/javascript.svg"
                className="w-[6vh] h-[6vh] ml-2 shadow-sm"
                width={50}
                height={50}
                alt="JavaScript Logo"
              />

              <p>JavaScript</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="https://www.svgrepo.com/show/349540/typescript.svg"
                className="w-[6vh] h-[6vh] ml-2 shadow-sm"
                width={50}
                height={50}
                alt="TypeScript Logo"
              />

              <p>TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://www.svgrepo.com/show/333609/tailwind-css.svg"
                className="w-[6vh] h-[6vh] ml-2 shadow-sm"
                width={50}
                height={50}
                alt="Tailwind CSS Logo"
              />

              <p>tailwind CSS</p>
            </div>
            {/* <div className="flex flex-col items-center">
            <Image
              src="https://www.svgrepo.com/show/373669/html.svg"
              className="w-[6vh] h-[6vh] ml-2 shadow-sm"
            />

            <p>Html</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="	https://www.svgrepo.com/show/349330/css3.svg"
              className="w-[6vh] h-[6vh] ml-2 shadow-sm"
            />

            <p>CSS</p>
          </div> */}
            <div className="flex flex-col items-center">
              <Image
                src="https://www.svgrepo.com/show/448222/figma.svg"
                className="w-[6vh] h-[6vh] ml-2 shadow-sm"
                width={50}
                height={50}
                alt="Figma Logo"
              />

              <p>Figma</p>
            </div>
            {/* <div className="flex flex-col items-center">
            <Image
              src="https://www.svgrepo.com/show/448628/splunk.svg"
              className="w-[6vh] h-[6vh] ml-2 shadow-sm"
            />

            <p>Splunk</p>
          </div> */}
            <div className="flex flex-col items-center">
              <Image
                src="https://www.svgrepo.com/show/353805/google-cloud.svg"
                className="w-[6vh] h-[6vh] ml-2 shadow-sm"
                width={50}
                height={50}
                alt="Google Cloud Logo"
              />

              <p>Google Cloud</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://playwright.dev/img/playwright-logo.svg"
                className="w-[6vh] h-[6vh] ml-2 shadow-sm"
                width={50}
                height={50}
                alt="Playwright Logo"
              />

              <p>playwright</p>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Projects */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mt-8 lg:mt-[-2vh] lg:ml-10 w-full sm:w-[100vw] md:w-[70vw] lg:w-[60vh] h-auto lg:h-[90vh] flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between h-auto lg:h-full">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Recent Projects</h1>
          <Link href="/About" className="flex gap-2 flex-row text-[#4770ff] font-medium mb-4 sm:mb-0">
            All projects
            <svg
              className="icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 10H15.8337"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.833 15L15.833 10"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.833 5L15.833 10"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
          </Link>
        </div>
        <div className="flex flex-col lg:flex-col gap-4">
          <div className="shadow-md rounded-lg p-4 sm:p-6 w-full flex flex-col items-center justify-center">
            <Image src="/Mf.png" className="w-full h-full object-contain" width={100} height={100} alt="Mens Fashion Image" />
            <a href="https://green-fresh-sepia.vercel.app/" target="_blank" className="mb-4 hover:text-blue-400 ">Mens fashion </a>
          </div>
          <div className="shadow-md rounded-lg p-4 sm:p-6 w-full flex flex-col items-center justify-center">
            <Image src="/Greenfresh.png" className="w-full h-[90%] object-contain" width={100} height={100} alt="Green Fresh Image" />
            <a href="https://green-fresh-sepia.vercel.app/" target="_blank" className="mb-4 hover:text-blue-400 ">Green Fresh </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
