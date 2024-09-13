"use client";
import { SectionTwoItem, SectionTwoItems } from "@/constant/data";
import Blur from "@/utils/Blur";
import Image from "next/image";
import React, { useState } from "react";

const SectionTwo = () => {
  const [selectedItem, setSelectedItem] = useState<SectionTwoItem>(
    SectionTwoItems[0]
  );
  return (
    <div className="h-screen w-full rounded-3xl backdrop-blur-sm relative ">
      <Blur className="right-36 top-10 "/>
      <Blur className="left-36 top-72 "/>
      <h1 className="bg-theme bg-clip-text text-transparent text-center text-[44px] font-bold">
        AI-Powered Pre-Construction
      </h1>
      <div className=" xl:w-[70%] xl:mx-[15%]  rounded-lg mt-10 shadow-md border max-md:w-full">
        <div className=" flex  justify-between text-ligthYellow mt-4">
          {SectionTwoItems.map((item) => (
              <div
                  key={item.id}
              className="w-full flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedItem(item)}>
              <h1 className=" pb-3 text-center">{item.name} </h1>
              <hr
                className={`border-2 w-full mt-2 ${
                  item.id === selectedItem?.id ? "border-ligthGreen" : "White"
                } transition-all `}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-around gap-10 w-full h-[400px] px-3">
          <p className="w-[50%] pl-5 text-[19px] max-md:hidden">
            {selectedItem?.discription}
          </p>
          <Image
            src={selectedItem?.imgUrl}
            alt={selectedItem.name}
            width={1000}
            height={1000}
            className="w-[50%] h-full object-contain max-md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
