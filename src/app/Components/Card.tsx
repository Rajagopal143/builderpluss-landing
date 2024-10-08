import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import { MotionDiv } from "./AnimatedDiv";

type point = {
  title: string;
  discription: string;
};

type CardProps = {
  title: string;
  imgurl: string;
  points: point[];
  reverse?: boolean;
};

const Card = ({ title, imgurl, points, reverse }: CardProps) => {
  return (
    <div className="h-[80vh] w-full rounded-3xl backdrop-blur-sm relative max-sm:mt-10 max-sm:h-fit">
      <MotionDiv
        className={`xl:w-[70%] xl:mx-[15%]  h-[70vh] max-sm:h-fit flex max-sm:flex-col rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative bg-white ${
          reverse ? "flex-row-reverse" : ""
        }`}>
        <div className="h-full w-1/2 rounded-md max-sm:w-full object-cover relative">
          <Image
            src={imgurl}
            alt="image"
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl max-sm:w-full object-cover z-10 p-9 "
          />
          <Image src={'/cards/bg.png'} alt="image" width={1000} height={1000} className="top-0 absolute rounded-md h-full w-full object-cover -z-10"/>
        </div>

        <div className="px-4 my-auto w-1/2 max-sm:w-full max-sm:mt-0 max-sm:pl-1">
          <Heading className="text-[40px] font-bold text-ligthGreen ">
            {title}
          </Heading>
          {points.map((point, index) => (
            <div key={index} className="mt-3 ">
              <Heading className="text-[18px]">
                <span>{point.title}</span>
              </Heading>
              <p className="p-5 pl-0 font-semibold text-[#4C4C4C] ">
                &nbsp;&nbsp;&nbsp;&nbsp;{point.discription}
              </p>
            </div>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
};

export default Card;
