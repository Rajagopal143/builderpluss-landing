import { features } from "@/constant/data";
import Image from "next/image";

const Sectionfour=()=>{
    return (
      <div className="h-fit mb-20 max-sm:h-full w-full rounded-3xl backdrop-blur-sm relative maxsm:mt-20 ">
        <div className="bg-theme bg-clip-text text-transparent text-center text-[44px] font-bold  golos-text  max-sm:mt-20">
          <span>SUPERCHARGE</span>
          <span className="mt-[-10] inline"> YOUR WORKFLOWS.</span>
        </div>
        <div className=" xl:w-[70%] xl:mx-[15%]  h-fit max-sm:h-full flex flex-col justify-around   rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative bg-white">
          <div className="pl-3 relative max-sm:pl-2 flex flex-wrap mt-5 max-sm:flex-col max-sm:w-full max-sm:py-10">
            {features.map((fea) => (
              <div key={fea.id} className="w-1/2 h-fit max-sm:w-full">
                <div className="flex gap-2 ">
                    <Image
                      src={fea.icon}
                      alt={fea.name}
                      width={1000}
                      height={1000}
                      className="w-10 h-10 p-2 bg-white rounded-full"
                    />
                  <div className="">
                  <h1 className="font-extrabold text-ligthGreen text-2xl">
                    {fea.name}
                  </h1>
                    <p className="text-[13px] p-5 pl-0 max-md:hidden font-semibold text-[#4C4C4C]"> &nbsp;&nbsp;&nbsp;&nbsp;{fea.discription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
export default Sectionfour;
