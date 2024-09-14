import Blur from "@/utils/Blur";
import Image from "next/image";
import React from "react";


type CardProps = {
  title: string;
  discription: string;
  imgurl: string;
}
const Card = ({title,discription,imgurl}:CardProps) => {
  return (
    <div className="h-[80vh] w-full rounded-3xl backdrop-blur-sm relative max-sm:mt-10 ">
      <Blur className="right-36 bottom-0 " />
      <Blur className="left-[45%] top-10 " />
      <div className=" xl:w-[70%] xl:mx-[15%]  h-[70vh] flex max-sm:flex-col rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
        <Image
          src={imgurl}
          alt="image"
          width={1000}
          height={1000}
          className="h-full w-1/2 rounded-md max-sm:w-full "
        />
        <div className="pl-4 mt-28 w-1/2 max-sm:w-full max-sm:mt-0 max-sm:pl-1">
        <h1 className="text-[40px] font-bold text-ligthGreen ml-10 max-sm:ml-">
           {title}
          </h1>
          <p className="ml-10 mt-5 font-semibold text-[15px] text-[#4C4C4C] ">
           {discription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
