import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Write = () => {
    return (
      <div className="h-fit mb-10 max-sm:h-full w-full rounded-3xl backdrop-blur-sm relative maxsm:mt-20 bg-white">
        <div className=" xl:w-[70%] xl:mx-[15%]  h-fit max-sm:h-full  justify-around   rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
          <Image
            width={1000}
            height={1000}
            alt="thumbsup"
            className="absolute w-16 h-16 right-20 animate-bounce"
            src={"/like1.png"}
          />
          <div className=" text-center  golos-text ">
            <Heading className="font-bold text-[3rem]">Get Started</Heading>
            <Heading className=" font-semibold text-[2rem]">
              {" "}
              Optimize Your Pre-Construction Workflows
            </Heading>
            <p className=" mt-5 text-dark-text font-semibold text-[16px]">
              Enhance your pre-construction workflows with our AI-powered
              platform. Start with 2D CAD, automate tasks, and link to Revit for
              BIM when you&apos;re ready
            </p>
            <button className="px-3 py-1 rounded-sm bg-theme text-white mr-5 mt-5  hover:shadow-[lightgreen_0px_5px_15px]">
              Contact Us
            </button>
            <button className="px-3 py-1 rounded-sm bg-theme text-white hover:shadow-[lightYellow_0px_5px_15px]">
              Schedule a Demo
            </button>
          </div>
          <h1> </h1>
        </div>
      </div>
    );
};

export default Write;
