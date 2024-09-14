import { howItsWork } from "@/constant/data";
import Blur from "@/utils/Blur";
import Image from "next/image";
import React from "react";

const Sectionthree = () => {
  
  return (
    <div className="h-screen w-full rounded-3xl backdrop-blur-sm relative max-sm:mt-20 ">
      <Blur className="right-36 top-10 " />
      <Blur className="left-36 top-72 " />
      <h1 className="bg-theme bg-clip-text text-transparent text-center text-[44px] font-bold   ">
        How its Work?
      </h1>
      <div className=" xl:w-[70%] xl:mx-[15%] flex h-[70vh] justify-between   rounded-lg mt-10 shadow-md border max-md:w-full">
        <div className="w-1/2 max-sm:w-full h-full flex    justify-center flex-col">
          {howItsWork.map((work) => (
            <div key={work.id} className="pl-9 relative max-sm:pl-2">
              <div className="flex items-center gap-7">
                <span className="px-6 py-4 rounded-full bg-[#E7E3FA] text-ligthGreen font-bold  ">
                  {work.id}
                  <span className=" absolute h-full border left-[65px] z-[-10] max-sm:left-[35px]"></span>
                </span>
                <h1 className="font-extrabold text-ligthGreen text-2xl">{work.name}</h1>
              </div>
              <p className="text-[13px] pl-20">
                {work.discription.slice(0, 150)}...
              </p>
            </div>
          ))}
        </div>
        <Image
          src="/howitswork.jpg"
          alt={"static image"}
          width={1000}
          height={1000}
          className="w-1/2 h-full bg-blue-200 max-sm:hidden"
        />
      </div>
    </div>
  );
};

export default Sectionthree;
