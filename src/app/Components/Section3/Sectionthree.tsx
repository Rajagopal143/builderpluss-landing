import { howItsWork } from "@/constant/data";
import Image from "next/image";
import React from "react";
import { MotionDiv } from "../AnimatedDiv";

const Sectionthree = () => {
  
  return (
    <div className="h-screen w-full rounded-3xl backdrop-blur-sm relative max-sm:mt-20 mt-10">
      <h1 className="bg-theme bg-clip-text text-transparent text-center text-[44px] font-bold   ">
        Graph Bim
      </h1>
      <div className=" xl:w-[70%] xl:mx-[15%] flex h-[70vh] justify-between   rounded-lg mt-10 shadow-md border max-md:w-full bg-white">
        <MotionDiv className="w-1/2 max-sm:w-full h-full flex    justify-center flex-col">
          {howItsWork.map((work) => (
            <div key={work.id} className="pl-9 relative max-sm:pl-2">
              <div className="flex ">
                <Image src='/arrow.png' alt="point" className="w-5 h-5 mt-2 mr-3" width={100} height={100}/>
                                <div>
                <h1 className="font-extrabold text-ligthGreen text-2xl">
                  {work.name}
                </h1>
              <p className="text-[13px] mt-2 font-bold text-dark-text">
               &nbsp;&nbsp;&nbsp;&nbsp; {work.discription}
              </p>
                </div>
              </div>
            </div>
          ))}
        </MotionDiv>
        <Image
          src="/cards/1685163961040.png"
          alt={"static image"}
          width={1000}
          height={1000}
          className="w-1/2 h-full object-cover p-4 rounded-xl max-sm:hidden"
        />
      </div>
    </div>
  );
};

export default Sectionthree;
