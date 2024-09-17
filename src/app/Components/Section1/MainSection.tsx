import React from "react";
import { MotionDiv } from "../AnimatedDiv";
import Image from "next/image";

const   MainSection = () => {
  return (
    <div className="w-full h-[100vh]    flex flex-col items-center justify-center relative">
      <Image
        width={1000}
        height={1000}
        src={"/landing banner.jpg"}
        alt="landing banner"
        className="absolute z-[-10] left-0 top-0 object-cover h-full w-full"
      />
      <MotionDiv className="flex flex-col">
        <div className="text-center flex flex-col  font-bold relative bg-clip-text text-transparent text-[3.5rem] max-lg:text-[45px] max-sm:text-[22px] bg-gradient-to-b from-custom-blue to-custom-purple">
          <span className="p-0 m-0 ">AI POWERED CONNECTED DATA </span>
          <span className="p-0 -mt-10 mb-5 max-lg:-mt-5 max-md:mb-2 max-sm:-mt-1">
            {" "}
            PLATFORM FOR CONSTRUCTION PROJECTS
          </span>
        </div>
        <p className=" text-dark-text font-bold text-[16px] max-sm:text-[12px] golos-text text-center my-3 ">
          Generate, Optimize & Control “Budget & Schedules“with greater Speed &
          efficiency right from 2D CAD.
        </p>
        <div className="flex  items-center gap-2 mx-auto max-sm:w-[80%]">
          <input
            type="text"
            className="w-[300px] h-[50px] border-2 outline-none shadow-lg shadow-theme pl-3 rounded-md max-sm:h-[30px] "
          />
          <button className="w-[140px] h-[50px] bg-[#28263C] text-white  rounded-md max-sm:w-full max-sm:h-[30px] text-[10px]">
            Subscribe
          </button>
        </div>
      </MotionDiv>
    </div>
  );
};

export default MainSection;
