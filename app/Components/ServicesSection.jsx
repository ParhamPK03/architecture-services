import React from "react";
import { services } from "./data/data";

const ServicesSection = () => {
  return (
    <div className="mt-48 flex items-center justify-center flex-col w-[76%] mx-auto">
      {/* Text */}
      <div>
        <h2 className="text-blue-950 font-extrabold text-[30px] sm:text-[40px]   sm:w-[500px] mx-auto text-center sm:text-start">
          Awesome Services in Meaningful Way
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-24 gap-12 lg:gap-12 mt-12 justify-items-center mx-auto">
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
