import Blur from "@/utils/Blur";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-full max-sm:h-full w-full rounded-3xl backdrop-blur-sm relative maxsm:mt-20 ">
      <Blur className="left-[45%] top-10 " />
      <div className=" xl:w-[70%] xl:mx-[15%]  h-[30vh] max-sm:h-full  rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
        <div className="flex items-center justify-between max-sm:flex-col ">
          <div className="flex  items-center gap-2">
            <Image
              src={"/Untitled design(1).png"}
              alt={"logo"}
              width={1000}
              height={1000}
              className="w-10 h-10 bg-red-300 object-cover rounded-md inline"
            />
            <span className="text-2xl font-semibold font-serif ">
              Builderpluss
            </span>
          </div>
          <div className="max-sm:mt-5 flex gap-3 items-center max-sm:flex">
            <span className="mr-10">
              {" "}
              <Image
                src={"/linkedin.png"}
                alt={"linkedInIcon"}
                width={1000}
                height={1000}
                className="w-8 h-8 inline mr-1"
              />{" "}
              LinkedIn
            </span>
            <span className="mr-10">
              {" "}
              <Image
                src={"/twitter.png"}
                alt={"twitterIcon"}
                width={1000}
                height={1000}
                className="w-8 h-8 inline mr-1"
              />{" "}
              Twitter
            </span>
            <div className="max-sm:mt-5">
              <span className="mr-10 inline">Privacy Policy</span>
              <span className="inline">Subscribe</span>
            </div>
          </div>
        </div>
        <hr className=" mt-6" />
        <div className="flex items-center justify-center mt-10">
          <p className={"w-1/2 font-semibold text-[#4C4C4C] text-[12px]"}>
            This content emphasizes the focus on 2D CAD workflows, the ability
            to link to Revit for BIM, and the value of AI-powered automation to
            manage both structured and unstructured data.
          </p>
          <div className="w-1/2 flex items-end justify-end gap-3">
            {" "}
            <Image
              src={"/facebook.png"}
              alt={"twitterIcon"}
              width={1000}
              height={1000}
              className="w-8 h-8 inline"
            />{" "}
            <Image
              src={"/instagram.png"}
              alt={"twitterIcon"}
              width={1000}
              height={1000}
              className="w-8 h-8 inline"
            />{" "}
            <Image
              src={"/linkedin.png"}
              alt={"linkedInIcon"}
              width={1000}
              height={1000}
              className="w-8 h-8 inline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
