import React from "react";
import { FaDraftingCompass, FaRegBuilding } from "react-icons/fa";
import { GiCargoCrane, GiPaintRoller, GiElectric } from "react-icons/gi";
import { LuPencilRuler } from "react-icons/lu";

const ServicesSection = () => {
  const services = [
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

  return (
    <div className="mt-48 flex items-center justify-center flex-col">
      {/* Text */}
      <div>
        <h2 className="text-blue-950 font-extrabold text-[30px] sm:text-[40px]   sm:w-[500px] mx-auto text-center sm:text-start">
          Awesome Services in Meaningful Way
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-24 gap-12 lg:gap-12 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex sm:block items-center justify-center flex-col text-center sm:text-start"
          >
            {/* Service Logo */}
            <div className="text-[#ffbb00] shadow-md shadow-gray-400 bg-gray-100 w-[62px] h-[70px] p-3 rounded-lg">
              <div className="hover:scale-110 duration-500">{service.icon}</div>
            </div>
            <h3 className="text-blue-950 text-3xl mt-8 font-bold">
              {service.title}
            </h3>
            <p className="w-[260px] lg:w-[340px] font-medium text-gray-500 mt-8 text-[17px] ">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
