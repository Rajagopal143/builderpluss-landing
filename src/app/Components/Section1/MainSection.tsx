import React from "react";
import { MotionDiv } from "../AnimatedDiv";
import Image from "next/image";
import DynamicTextWithParagraph from "../DynamicText";

const MainSection = () => {
  
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
        <DynamicTextWithParagraph/>
        <div className="flex  items-center gap-2 mx-auto max-sm:w-[80%]">
          <input
            type="text"
            placeholder="Email"
            className="w-[300px] h-[50px] border-2 outline-none shadow-lg shadow-theme pl-3 rounded-md max-sm:h-[50px] "
          />
          <button className="w-[140px] h-[50px] bg-[#28263C] text-white text-1xl  rounded-md max-sm:w-full max-sm:h-[50px] ">
            Schedule a Demo
          </button>
        </div>
      </MotionDiv>
    </div>
  );
};

export default MainSection;
