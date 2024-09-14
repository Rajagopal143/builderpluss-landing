export const NavItems: NavItem[] = [
  { name: "Features", hasDropdown: true },
  { name: "Developers", hasDropdown: false, label: "New" }, // Add a label for when there's no dropdown
  { name: "Use Case", hasDropdown: true },
  { name: "Partners", hasDropdown: true },
  { name: "Pricing", hasDropdown: true }
];

type NavItem = {
    name: string;
    hasDropdown: boolean;
    label?: string;
}


export type SectionTwoItem = {
  id: number;
  name: string;
  discription: string;
  imgUrl: string;
}



export const SectionTwoItems: SectionTwoItem[] = [
  {
    id: 1,
    name: "Seamless 2D CAD Management",
    discription:
      "Simplify your pre-construction workflows with intelligent automation based on 2D CAD files. Whether you're generating BOQs or managing procurement, our platform processes 2D CAD files with precision, eliminating the need for immediate 3D BIM modeling.",
    imgUrl: "/id1Png.webp",
  },
  {
    id: 2,
    name: "Link to Revit for Enriched BIM",
    discription:
      "Start with 2D CAD and easily export to Revit for enriched BIM modeling. Our platform ensures a smooth transition from 2D to BIM, so you can expand your project capabilities without sacrificing data accuracy or flexibility.",
    imgUrl: "/2.png",
  },
  {
    id: 3,
    name: "AI-Powered Automation",
    discription:
      "From BOQ generation to procurement optimization, our platform automates the manual tasks tied to your 2D CAD files. Use real-time data insights to streamline project planning and make informed decisions faster.",
    imgUrl: "/3.png",
  },
  {
    id: 4,
    name: "Unlock Unstructured Data",
    discription:
      "Our AI system can also process unstructured data—like emails, contracts, and reports—and connect them directly to your 2D CAD workflows. All data is unified, ensuring better collaboration and decision-making.",
    imgUrl: "/4.jpg",
  },
];

export const howItsWork = [
  {
    id: 1,
    name: "Integrated 2D CAD System",
    discription:
      "The platform is designed around 2D CAD workflows, making it simple to automate key pre-construction tasks without needing a 3D BIM model. Once ready, easily export data to Revit for further project development.",
  },
  {
    id: 2,
    name: "AI-Powered Automation",
    discription:
      "Automate routine tasks, from BOQ creation to procurement planning, based on your CAD files. Our AI ensures that your data is always accurate and up-to-date, reducing manual errors and speeding up workflows.",
  },
  {
    id: 3,
    name: "Connecting Unstructured Data",
    discription:
      "Leverage unstructured project data like contracts or emails by linking it directly to relevant 2D CAD files. AI identifies connections, making project management more holistic and efficient.",
  },
];

export const features = [
  {
    id: 1,
    icon: "/template.png",
    name: "BOQ Automation for 2D CAD",
    discription:
      "Generate precise Bill of Quantities directly from your 2D CAD files. Eliminate manual calculations and achieve real-time accuracy across all project stages.",
  },
  {
    id: 2,
    icon: "/revit.png",
    name: "Seamless Integration with Revit",
    discription:
      "Automatically link your 2D CAD files to Revit for 3D BIM development. Our platform supports data enrichment, allowing teams to expand their project models from CAD to BIM without starting from scratch.",
  },
  {
    id: 3,
    icon: "/cad.png",
    name: "Procurement Optimization",
    discription:
      "Optimize your procurement by linking 2D CAD designs to real-time material costs and availability. AI-driven insights ensure that your procurement process is both efficient and cost-effective.",
  },
  {
    id: 4,
    icon: "/data-collection.png",
    name: "Unstructured Data Integration",
    discription:
      "AI processes unstructured data—like documents, PDFs, and communication threads—and connects them to your 2D CAD workflows. Get insights from all your data sources in one place.",
  },
];