import Blur from "@/utils/Blur";
import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  discription: string;
  imgurl: string;
};
const ReverseCard = ({ title, discription, imgurl }: CardProps) => {
  return (
    <div className="h-[80vh] w-full rounded-3xl backdrop-blur-sm relative max-sm:mt-10 max-sm:h-full">
      <Blur className="left-0 bottom-0 " />
      <Blur className="left-[45%] top-10 " />
      <div className=" xl:w-[70%] xl:mx-[15%]  h-[70vh] flex  max-sm:flex-col-reverse   rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
        <div className="p mt-28 w-1/2 max-sm:w-full max-sm:mt-0">
          <h1 className="text-[40px] font-bold text-ligthGreen ml-5">
            {title}
          </h1>
          <p className="ml-5 mt-5 font-semibold text-[15px] text-[#4C4C4C] ">
            {discription}
          </p>
        </div>
        <Image
          src={imgurl}
          alt="image"
          width={1000}
          height={1000}
          className="h-full w-1/2 rounded-md max-sm:w-full"
        />
      </div>
    </div>
  );
};

export default ReverseCard;
