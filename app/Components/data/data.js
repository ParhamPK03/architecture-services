import { FaDraftingCompass, FaRegBuilding } from "react-icons/fa";
import { GiCargoCrane, GiPaintRoller, GiElectric } from "react-icons/gi";
import { LuPencilRuler } from "react-icons/lu";

export const services = [
  {
    icon: (
      <FaDraftingCompass className="text-[#ffbb00] shadow-md shadow-gray-400 bg-gray-100 w-[62px] h-[70px] p-3 rounded-lg" />
    ),
    title: "Planning",
    description:
      "Lorem ipsum dolor sit amet, conse adipsci ng elitr, serd diam nonumy eirmod temt dolore maali quyam.",
  },
  {
    icon: (
      <FaRegBuilding className="text-[#ffbb00] shadow-md shadow-gray-400 bg-gray-100 w-[62px] h-[70px] p-3 rounded-lg" />
    ),
    title: "Architecture",
    description:
      "Lorem ipsum dolor sit amet, conse adipsci ng elitr, serd diam nonumy eirmod temt dolore maali quyam.",
  },
  {
    icon: (
      <GiCargoCrane className="text-[#ffbb00] shadow-md shadow-gray-400 bg-gray-100 w-[62px] h-[70px] p-3 rounded-lg" />
    ),
    title: "Construction",
    description:
      "Lorem ipsum dolor sit amet, conse adipsci ng elitr, serd diam nonumy eirmod temt dolore maali quyam.",
  },
  {
    icon: (
      <LuPencilRuler className="text-[#ffbb00] shadow-md shadow-gray-400 bg-gray-100 w-[62px] h-[70px] p-3 rounded-lg" />
    ),
    title: "Interior",
    description:
      "Lorem ipsum dolor sit amet, conse adipsci ng elitr, serd diam nonumy eirmod temt dolore maali quyam.",
  },
  {
    icon: (
      <GiPaintRoller className="text-[#ffbb00] shadow-md shadow-gray-400 bg-gray-100 w-[62px] h-[70px] p-3 rounded-lg" />
    ),
    title: "Painting",
    description:
      "Lorem ipsum dolor sit amet, conse adipsci ng elitr, serd diam nonumy eirmod temt dolore maali quyam.",
  },
  {
    icon: (
      <GiElectric className="text-[#ffbb00] shadow-md shadow-gray-400 bg-gray-100 w-[62px] h-[70px] p-3 rounded-lg" />
    ),
    title: "Electricity",
    description:
      "Lorem ipsum dolor sit amet, conse adipsci ng elitr, serd diam nonumy eirmod temt dolore maali quyam.",
  },
];

export const projects = [
  {
    id: 1,
    src: "/images/Projects1.jpg",
    title: "Sunset Villa",
    location: "New York, USA",
    roundedClass: "rounded-bl-none",
  },
  {
    id: 2,
    src: "/images/Projects2.jpg",
    title: "The Grand Mansion",
    location: "Toronto, Canada",
    roundedClass: "rounded-bl-none",
  },
  {
    id: 3,
    src: "/images/Projects3.jpg",
    title: "Silver Residence",
    location: "Moscow, Russ",
    roundedClass: "rounded-br-none",
  },
  {
    id: 4,
    src: "/images/Projects4.jpg",
    title: "Starlight Haven",
    location: "Paris, France",
    roundedClass: "rounded-tl-none",
  },
  {
    id: 5,
    src: "/images/Projects5.jpg",
    title: "Greenfield Estate",
    location: "London, UK",
    roundedClass: "rounded-bl-none",
  },
  {
    id: 6,
    src: "/images/Projects6.jpg",
    title: "Golden Gate Villa",
    location: "Rome, Italy",
    roundedClass: "rounded-tr-none",
  },
];
