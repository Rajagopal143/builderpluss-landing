import Blur from "@/utils/Blur";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="h-[80vh] w-full rounded-3xl backdrop-blur-sm relative max-sm:mt-20 ">
      <Blur className="right-36 bottom-0 " />
      <Blur className="left-[45%] top-10 " />
      <div className=" xl:w-[70%] xl:mx-[15%]  h-[70vh] flex max-sm:flex-col rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
        <Image
          src={"/dashboard.jpg"}
          alt="image"
          width={1000}
          height={1000}
          className="h-full w-1/2 rounded-md max-sm:hidden "
        />
        <div className="pl-4 mt-28 w-1/2 max-sm:w-full">
          <span className="ml-9 px-3 py-1 bg-[#E9E9F9] rounded-full ">
            Advanced Dashboard • USL
          </span>
          <h1 className="text-[40px] font-bold text-ligthGreen ml-10">
            Automate your commits.
          </h1>
          <p className="ml-10 mt-5 font-semibold text-[15px] text-[#4C4C4C] ">
            We ve built a suite of AI-powered solutions that can help you make
            smarter decisions, faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
