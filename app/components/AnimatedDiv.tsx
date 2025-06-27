"use client";
import React, { useState } from "react";
import Image from 'next/image'

function AnimatedDiv() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="relative w-[90vh] h-[30vh] overflow-hidden">
      <div
        className={`w-[300px] h-[50vh] ${
          paused ? "animate-paused" : "animate-example"
        }`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ zIndex: 10 }}
      >

<div className="flex flex-col gap-4 p-4">
                <div
                  className="text-gray-600  flex flex-row items-center  text-[10px] justify-between "
                >
                  <td className=" text-gray-500">Jan 2023</td>
                  <td >
                    <div className="flex flex-row items-center justify-center gap-5">

                      <Image
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        className="w-[4vh] h-[3vh] ml-2"
                        width={50}
                        height={50}
                        alt="Ford Logo"
                      />
                     <div>
                         <p className=" text-black font-bold  text-[13px]">Ford Motors</p>
                      <p className=" text-gray-500">Software Engineer</p>
                     </div>
                    </div>
                  </td>
                </div>

                {/* end of div 1 */}
                    <div
                  className="text-gray-600  flex flex-row items-center  text-[10px] justify-between "
                >
                  <td className=" text-gray-500">Jan 2023</td>
                  <td >
                    <div className="flex flex-row items-center justify-center gap-5">

                      <Image
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        className="w-[4vh] h-[3vh] ml-2"
                        width={50}
                        height={50}
                        alt="Ford Logo"

                      />
                     <div>
                         <p className=" text-black font-bold  text-[13px]">Ford Motors</p>
                      <p className=" text-gray-500">Software Engineer</p>
                     </div>
                    </div>
                  </td>
                </div>   
                {/* end of div 2           */}
                                <div
                  className="text-gray-600  flex flex-row items-center  text-[10px] justify-between "
                >
                  <td className=" text-gray-500">Jan 2023</td>
                  <td className="ml-[10px]" >
                    <div className="flex flex-row items-center justify-center gap-5">

                      <Image
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        className="w-[4vh] h-[3vh] ml-2"
                        width={50}
                        height={50}
                        alt="Ford Logo"
                      />
                     <div>
                         <p className=" text-black font-bold  text-[13px]">Ford Motor company </p>
                      <p className=" text-gray-500">Software Engineer</p>
                     </div>
                    </div>
                  </td>
                </div>
                {/* end of div 3 */}
                                <div
                  className="text-gray-600  flex flex-row items-center  text-[10px] justify-between "
                >
                  <td className=" text-gray-500">Jan 2023</td>
                  <td >
                    <div className="flex flex-row items-center justify-center gap-5">

                      <Image
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        className="w-[4vh] h-[3vh] ml-2"
                        width={50}    
                        height={50}
                        alt="Ford Logo"
                      />
                     <div>
                         <p className=" text-black font-bold  text-[13px]">Ford Motors</p>
                      <p className=" text-gray-500">Software Engineer</p>
                     </div>
                    </div>
                  </td>
                </div>
                {/* end of div 4 */}
                                <div
                  className="text-gray-600  flex flex-row items-center  text-[10px] justify-between "
                >
                  <td className=" text-gray-500">Jan 2023</td>
                  <td >
                    <div className="flex flex-row items-center justify-center gap-5">

                      <Image
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        className="w-[4vh] h-[3vh] ml-2"
                        width={50}
                        height={50}
                        alt="Ford Logo"

                      />
                     <div>
                         <p className=" text-black font-bold  text-[13px]">Ford Motors</p>
                      <p className=" text-gray-500">Software Engineer</p>
                     </div>
                    </div>
                  </td>
                </div>
                {/* end of div 5 */}
                                <div
                  className="text-gray-600  flex flex-row items-center  text-[10px] justify-between "
                >
                  <td className=" text-gray-500">Jan 2023</td>
                  <td >
                    <div className="flex flex-row items-center justify-center gap-5">

                      <Image
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        className="w-[4vh] h-[3vh] ml-2"
                        width={50}
                        height={50}
                        alt="Ford Logo"
                        
                      />
                     <div>
                         <p className=" text-black font-bold  text-[13px]">Ford Motors</p>
                      <p className=" text-gray-500">Software Engineer</p>
                     </div>
                    </div>
                  </td>
                </div>

</div>


        {/* <p className="text-gray-600 text-xl">first Company</p>
          <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                    <p className="text-gray-600 text-xl">Tech Company</p>
          <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                    <p className="text-gray-600 text-xl">Tech Company</p>
          <p className="text-sm text-gray-500">Jan 2020 - Present</p>

          <p className="text-gray-600 text-xl">Tech Company</p>
          <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                      <p className="text-gray-600 text-xl">Tech Company</p>
          <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                    <p className="text-gray-600 text-xl">Tech Company</p>
          <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                    <p className="text-gray-600 text-xl">Tech Company</p>
          <p className="text-sm text-gray-500">Jan 2020 - Present</p>

          <p className="text-gray-600 text-xl">Tech Company</p>
          <p className="text-sm text-gray-500">Jan 2020 - Present</p> */}
      </div>
    </div>
  );
}

export default AnimatedDiv;
