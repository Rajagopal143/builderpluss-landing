import Blur from "@/utils/Blur";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-full max-sm:h-full w-full rounded-3xl backdrop-blur-sm relative maxsm:mt-20 ">
      <Blur className="left-[45%] top-10 " />
      <div className=" xl:w-[70%] xl:mx-[15%]  h-fit max-sm:h-full  rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
        <div className="flex items-center justify-between max-sm:flex-col ">
          <div className="flex  items-center ">
            <Image
              src={"/cards/Graph Bim.png"}
              alt={"logo"}
              width={1000}
              height={1000}
              className="w-[150px] h-auto object-cotain rounded-md inline"
            />
          </div>
          <div className="max-sm:mt-5 flex gap-3 items-center max-sm:flex text-dark-text">
            {" "}
            <FaFacebook className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaXTwitter className="w-5 h-5" />
            <span className=" inline">Privacy Policy</span>
            <span className="inline">Subscribe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
