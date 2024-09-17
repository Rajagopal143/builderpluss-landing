import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ReverseCard from "./Components/ReverseCard";
import MainSection from "./Components/Section1/MainSection";
import SectionTwo from "./Components/section2/SectionTwo";
import Sectionthree from "./Components/Section3/Sectionthree";
import Sectionfour from "./Components/Section4/Sectionfour";
import Testimonial from "./Components/Testimonial";
import Write from "./Components/Write";

export default function Home() {
  return (
    <div className="  w-full h-full ">
      <div className="mx-auto w-full h-full relative">
        <Header />
        <MainSection />
        <div>

        <Sectionthree />
        <SectionTwo />
        <Sectionfour />
        </div>
        <h1 className="text-4xl font-bold text-ligthGreen text-center max-sm:mt-10">Role-Based Solutions</h1>
        <Card
          title="Architects"
          discription="Accelerate design reviews and automations for 2D CAD workflows. Export seamlessly to Revit for future BIM integration when needed."
          imgurl="/role1.webp"
        />
        <ReverseCard
          title="Owners/Developers"
          discription="Monitor costs and optimize procurement based on real-time data pulled from 2D CAD files. Ensure every design choice aligns with project budgets."
          imgurl="/role2.png"
        />
        <Card
          title="Engineers"
          discription="Easily integrate design changes into pre-construction workflows. Automate repetitive tasks based on 2D CAD without worrying about BIM until later."
          imgurl="/role3.jpg"
        />
        <ReverseCard
          title="Contractors"
          discription="Simplify procurement planning and tendering with accurate BOQ and material cost data, linked directly to 2D CAD designs. Move smoothly to BIM with Revit whenever necessary."
          imgurl="/role4.jpg"
        />
        <Write />
        <Testimonial/>
        <Footer />
        {/* <section className="h-[150vh] w-full bg-slate-300"></section> */}
      </div>
    </div>
  );
}
