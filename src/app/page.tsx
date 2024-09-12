import Header from "./Components/Header";
import MainSection from "./Components/Section1/MainSection";
import SectionTwo from "./Components/section2/SectionTwo";

export default function Home() {
  return <div className="  w-full h-full">
  <div className="mx-auto w-full h-full relative">
      <Header />
      <MainSection />
      <SectionTwo/>
      {/* <section className="h-[150vh] w-full bg-slate-300"></section> */}
  </div>
  </div>
}
