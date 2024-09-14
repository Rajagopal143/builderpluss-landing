import Blur from "@/utils/Blur";
import React from "react";

const Write = () => {
    return (
      <div className="h-fit mb-10 max-sm:h-full w-full rounded-3xl backdrop-blur-sm relative maxsm:mt-20 ">
        <Blur className="right-36 bottom-0 " />
        <Blur className="left-0 top-10 " />
        <div className=" xl:w-[70%] xl:mx-[15%]  h-[40vh] max-sm:h-full  justify-around   rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
          <div className="text-ligthYellow text-center text-[44px] font-bold  golos-text ">
            <h1>What can it write</h1>
            <h1 className="mt-[-20] "> for your ? like ✏️</h1>
          </div>
          <h1> </h1>
        </div>
      </div>
    );
};

export default Write;
