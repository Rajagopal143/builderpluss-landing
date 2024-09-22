export const NavItems: NavItem[] = [
  { name: "Features", hasDropdown: true },
  { name: "How it's Work", hasDropdown: true, label: "New" }, // Add a label for when there's no dropdown
  { name: "Use Case", hasDropdown: true },
  {name: "contact us", hasDropdown: true },
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
    name: "2D CAD to Graph Data Conversion",
    discription:
      "CAD drawings are broken down into logically chunked elements and stored as graph data for efficient data management. ",
    imgUrl: "/cards/BP1W.png",
  },
  {
    id: 2,
    name: "Metadata Integration",
    discription:
      "Semantic or metadata from unstructured sources such as PDFs, images, and text is matched to the corresponding CAD elements, enriching the design with relevant project information",
    imgUrl: "/cards/BP2W.png",
  },
  {
    id: 3,
    name: "Automated Reporting & Actions",
    discription:
      "Automation algorithms generate key project documents and outputs, including BOQs, tenders, invoices, and IFC exports, streamlining the entire construction workflow. ",
    imgUrl: "/cards/BP3W.png",
  },
];

export const howItsWork = [
  {
    id: 1,
    name: "2D CAD is Sufficient ",
    discription:
      "The platform processes 2D CAD files to Graph – BIM without needing 3D models",
  },
  {
    id: 2,
    name: "Works with Unstructured Data",
    discription:
      " Integrates data from documents, images, and PDFs, Spreadsheets, Website data directly to CAD. ",
  },
  {
    id: 3,
    name: "Leverages Previous Project Knowledge",
    discription:
      " Reuse data from past projects for cost predictions and workflow improvements. ",
  },
  {
    id: 4,
    name: "Export to IFC & Revit:",
    discription:
      " Allows seamless integration with industry-standard formats for 3D modeling and collaboration. ",
  },
];

export const features = [
  {
    id: 1,
    icon: "/template.png",
    name: "Dynamic BOQ (Bill of Quantities) Generation: ",
    discription:
      "Graph-based data enables dynamic BOQ generation tied to the project’s evolving design, ensuring precise cost estimations and material forecasting. ",
  },
  {
    id: 2,
    icon: "/data-collection.png",
    name: "Automated Procurement Processes: ",
    discription:
      "GraphBIM can link project specifications with procurement needs, automating purchase orders (POs) based on construction stages, material requirements, and timelines. This ensures materials are ordered just in time, minimizing storage costs.",
  },
  {
    id: 3,
    icon: "/cad.png",
    name: "Automated Billing and Payment Schedules: ",
    discription:
      "AI algorithms can track the completion of different project stages and automatically trigger billing cycles or vendor payments, ensuring financial workflows stay aligned with project progress.",
  },
  {
    id: 4,
    icon: "/revit.png",
    name: "Seamless Revit Integration: ",
    discription:
      "Automatically link your enriched 2D CAD files to Revit for 3D model development. Our platform supports data enrichment, allowing teams to expand their project models from CAD to BIM without starting from scratch. ",
  },
];