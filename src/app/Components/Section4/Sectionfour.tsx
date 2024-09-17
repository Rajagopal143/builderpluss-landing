import { features } from "@/constant/data";
import Image from "next/image";

const Sectionfour=()=>{
    return (
      <div className="h-screen max-sm:h-full w-full rounded-3xl backdrop-blur-sm relative maxsm:mt-20 ">
        <div className="bg-theme bg-clip-text text-transparent text-center text-[44px] font-bold  golos-text  max-sm:mt-20">
          <span>SUPERCHARGE</span>
          <span className="mt-[-10] inline"> YOUR WORKFLOWS.</span>
        </div>
        <div className=" xl:w-[70%] xl:mx-[15%]  h-[70vh] max-sm:h-full flex flex-col justify-around   rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative bg-white">
          <Image
            src="http://hubhtml.liquid-themes.com/assets/images/demo/start-hub-x/features/new.svg"
            alt={"dec"}
            width={1000}
            height={1000}
            className="w-14 h-14 absolute top-10 left-[65%] animate-bounce  right-0"
          />
          <div className="pl-3 relative max-sm:pl-2 flex flex-wrap mt-10 max-sm:flex-col max-sm:w-full max-sm:py-10">
            {features.map((fea) => (
              <div key={fea.id} className="w-1/2 h-fit max-sm:w-full">
                <div className="flex items-center gap-5 ">
                  <span className="px-3 py-2 rounded-full bg-[#E7E3FA] text-ligthGreen font-bold  ">
                    <Image
                      src={fea.icon}
                      alt={fea.name}
                      width={1000}
                      height={1000}
                      className="w-8 h-8"
                    />
                  </span>
                  <h1 className="font-extrabold text-ligthGreen text-2xl">
                    {fea.name}
                  </h1>
                </div>
                <p className="text-[13px] pl-20">
                  {fea.discription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
export default Sectionfour;
