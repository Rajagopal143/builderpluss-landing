import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import { MotionDiv } from "./AnimatedDiv";

type point = {
  title: string;
  discription: string;
}
type CardProps = {
  title: string;
  imgurl: string;
  points: point[];
  reverse?: boolean;
};
const Card = ({ title, imgurl, points ,reverse}: CardProps) => {
  return (
    <div className="h-[80vh] w-full rounded-3xl backdrop-blur-sm relative max-sm:mt-10 ">

      <MotionDiv
        className={`xl:w-[70%] xl:mx-[15%]  h-[70vh] flex max-sm:flex-col rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative bg-white ${
          reverse ? "flex-row-reverse" : ""
        }`}>
        <Image
          src={imgurl}
          alt="image"
          width={1000}
          height={1000}
          className="h-full w-1/2 rounded-md max-sm:w-full "
        />
        <div className="pl-4 my-auto w-1/2 max-sm:w-full max-sm:mt-0 max-sm:pl-1">
          <Heading className="text-[40px] font-bold text-ligthGreen ">
            {title}
          </Heading>
          {points.map((point,index) => (
            <div key={index} className="mt-3">
              <Heading className="text-[18px]">
                <span>{point.title}</span>
              </Heading>
              <p className=" font-semibold py-4 px-3 text-[#4C4C4C] ">
                {point.discription}
              </p>
            </div>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
};

export default Card;
