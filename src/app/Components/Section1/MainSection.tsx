import Blur from '@/utils/Blur'
import React from 'react'

const MainSection = () => {
  return (
    <div className="w-full h-[100vh] max-sm:h-[100vh]   flex flex-col items-center justify-center relative">
      <Blur className='top-0 right-28'/>
      <div className="absolute w-32 h-32 -z-[10] bottom-0 left-0   bg-theme blur-3xl"></div>
      <div className=" flex flex-col ">
        <h1 className="text-center font-bold bg-ligthGreen bg-clip-text text-transparent text-[65px] max-sm:text-[32px]">
          AI-Powered Pre-Construction
        </h1>
        <h1 className="text-center font-bold bg-ligthYellow bg-clip-text text-transparent text-[65px] max-sm:text-[32px] -mt-10 max-sm:mt-0">
          Platform for 2D CAD
        </h1>
      </div>
      <p className=" text-[#575252] font-semibold text-[16px] golos-text text-center my-3 ">
        Drive growth and rank higher on search engines <br /> with the most
        advanced SEO tools.
      </p>
      <div className="flex max-sm:flex-col items-center gap-3 ">
        <input
          type="text"
          className="w-[300px] h-[50px] border outline-none shadow-lg shadow-theme pl-3 rounded-md "
        />
        <button className="w-[140px] h-[50px] bg-[#28263C] text-white ml-3 rounded-md">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default MainSection
