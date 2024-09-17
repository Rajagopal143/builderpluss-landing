import Image from "next/image";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Heading from "./Components/Heading";
import MainSection from "./Components/Section1/MainSection";
import SectionTwo from "./Components/section2/SectionTwo";
import Sectionthree from "./Components/Section3/Sectionthree";
import Sectionfour from "./Components/Section4/Sectionfour";
import Write from "./Components/Write";

export default function Home() {
  return (
    <div className="  w-full h-full ">
      <div className="mx-auto w-full h-full relative">
        <Header />
        <MainSection />
        <div className="">
          <Image
            width={1000}
            height={1000}
            alt="thumbsup"
            className="absolute w-full h-full top-0 -z-10"
            src={"/page-bg.svg"}
          />
          <Sectionthree />
          <SectionTwo />
          <Sectionfour />
        <Heading className="text-4xl font-bold text-ligthGreen text-center max-sm:mt-10 mb-10">
          Role-Based Solutions
        </Heading>
        <Card
          title="ARCHITECTS"
          imgurl="/cards/architectural-services.jpg.avif"
          reverse={true}
          points={[
            {
              title: "Streamlined Design-to-BOQ Process",
              discription:
              "Architects can focus on 2D CAD designs, which the platform converts to graph data for easy generation of BOQs and material lists without needing complex 3D models",
            },
            {
              title: "Automated Reporting",
              discription:
              "Reports such as tenders, design updates, and invoices are generated automatically, saving time and minimizing errors.",
            },
          ]}
          />
        <Card
          title="ENGINEERS"
          imgurl="/cards/Untitled_design.png.webp"
          points={[
            {
              title: "Accurate Data Extraction",
              discription:
              "Engineers benefit from the platform’s ability to convert 2D CAD drawings into a structured graph, allowing them to work with logically organized building components.",
            },
            {
              title: "Integrated Metadata",
              discription:
              "Unstructured data (e.g., technical specifications, material properties) is matched to CAD elements, providing engineers with all the necessary technical information in one place.",
            },
          ]}
          />
        <Card
          title="CONTRACTORS"
          imgurl="/cards/owners-developers.jpg"
          reverse={true}
          points={[
            {
              title: "LLM-Enabled Queries",
              discription:
              "Contractors can use natural language queries to quickly retrieve information on construction progress, materials needed, or vendor data. ",
            },
            {
              title: "Invoicing & Billing",
              discription:
              "Automated invoice generation linked to project milestones makes financial management more efficient. ",
            },
          ]}
          />
        <Card
          title="OWNERS "
          imgurl="/cards/how-to-become-a-general-contractor-hero.webp"
          reverse={false}
          points={[
            {
              title: "Cost Transparency",
              discription:
              "The platform provides detailed cost breakdowns, helping owners monitor budgets and control expenditures.  ",
            },
            {
              title: "Scenario Analysis & Predictions",
              discription:
              "Owners can leverage past project data to forecast costs and timelines, giving them more control over the project’s future stages",
            },
          ]}
          />
          </div>
        <Write />
        <Footer />
        {/* <section className="h-[150vh] w-full bg-slate-300"></section> */}
      </div>
    </div>
  );
}
