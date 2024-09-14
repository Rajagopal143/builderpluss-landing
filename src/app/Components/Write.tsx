import Image from "next/image";
import React from "react";

const Write = () => {
    return (
      <div className="h-fit mb-10 max-sm:h-full w-full rounded-3xl backdrop-blur-sm relative maxsm:mt-20 ">
        <div className=" xl:w-[70%] xl:mx-[15%]  h-[40vh] max-sm:h-full  justify-around   rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
          <Image
            width={1000}
            height={1000}
            alt="thumbsup"
            className="absolute w-16 h-16 right-20 animate-bounce"
            src={"/like1.png"}
          />
          <div className="text-ligthYellow text-center  golos-text ">
            <h1 className="font-bold text-3xl">Get Started</h1>
            <h1 className="mt-5 font-semibold text-2xl">
              {" "}
              Optimize Your 2D CAD Workflows
            </h1>
            <p className=" mt-5 text-ligthGreen">
              Enhance your pre-construction workflows with our AI-powered
              platform. Start with 2D CAD, automate tasks, and link to Revit for
              BIM when you&apos;re ready.
            </p>
            <button className="px-3 py-1 rounded-xl bg-ligthGreen text-white mr-5 mt-5  hover:shadow-[lightgreen_0px_5px_15px]">
              Contact Us
            </button>
            <button className="px-3 py-1 rounded-xl bg-ligthYellow text-white hover:shadow-[lightYellow_0px_5px_15px]">
              Schedule a Demo
            </button>
          </div>
          <h1> </h1>
        </div>
      </div>
    );
};

export default Write;
