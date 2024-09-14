import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ReverseCard from "./Components/ReverseCard";
import MainSection from "./Components/Section1/MainSection";
import SectionTwo from "./Components/section2/SectionTwo";
import Sectionthree from "./Components/Section3/Sectionthree";
import Sectionfour from "./Components/Section4/Sectionfour";
import Write from "./Components/Write";

export default function Home() {
  return <div className="  w-full h-full">
  <div className="mx-auto w-full h-full relative">
      <Header />
      <MainSection />
      <SectionTwo/>
      <Sectionthree/>
      <Sectionfour />
      <Card />
      <ReverseCard/>
      <Card />
      <Write/>
      <Footer/>
      {/* <section className="h-[150vh] w-full bg-slate-300"></section> */}
  </div>
  </div>
}
