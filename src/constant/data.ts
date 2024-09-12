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
    name: "Seamless 2D CAD Management",
    discription:
      "Simplify your pre-construction workflows with intelligent automation based on 2D CAD files. Whether you're generating BOQs or managing procurement, our platform processes 2D CAD files with precision, eliminating the need for immediate 3D BIM modeling.",
    imgUrl: "/id1Png.webp",
  },
  {
    id: 3,
    name: "Seamless 2D CAD Management",
    discription:
      "Simplify your pre-construction workflows with intelligent automation based on 2D CAD files. Whether you're generating BOQs or managing procurement, our platform processes 2D CAD files with precision, eliminating the need for immediate 3D BIM modeling.",
    imgUrl: "/id1Png.webp",
  },
  {
    id: 4,
    name: "Seamless 2D CAD Management",
    discription:
      "Simplify your pre-construction workflows with intelligent automation based on 2D CAD files. Whether you're generating BOQs or managing procurement, our platform processes 2D CAD files with precision, eliminating the need for immediate 3D BIM modeling.",
    imgUrl: "/id1Png.webp",
  },
];