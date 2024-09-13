import { features, howItsWork } from "@/constant/data";
import Blur from "@/utils/Blur"
import Image from "next/image";

const Sectionfour=()=>{
    return (
      <div className="h-screen w-full rounded-3xl backdrop-blur-sm relative maxsm:mt-20 ">
        <Blur className="right-36 bottom-0 " />
            <Blur className="left-[45%] top-10 " />
        <div className="bg-theme bg-clip-text text-transparent text-center text-[44px] font-bold  golos-text ">
          <span>Supercharge</span>
          <span className="mt-[-10] inline"> your apps.</span>
        </div>
        <div className=" xl:w-[70%] xl:mx-[15%]  h-[70vh] flex flex-col justify-around   rounded-lg mt-10 shadow-md border max-md:w-full p-3 relative">
            <Image src='http://hubhtml.liquid-themes.com/assets/images/demo/start-hub-x/features/new.svg' alt={"dec"} width={1000} height={1000} className="w-14 h-14 absolute top-10 left-[45%] animate-bounce" />
          <h1 className="text-ligthYellow font-bold text-3xl ml-5">key  Feature:</h1>
            <div className="pl-3 relative max-sm:pl-2 flex flex-wrap mt-10">
              {features.map((fea) => (
                <div key={fea.id} className="w-1/2 h-fit">
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
                    {fea.discription.slice(0, 150)}...
                  </p>
                </div>
              ))}
            </div>
        </div>
      </div>
    );
}
export default Sectionfour;
