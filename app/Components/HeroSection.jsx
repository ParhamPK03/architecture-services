import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="text-white items-start flex flex-col pl-48 pt-72">
        <div className="text-6xl font-bold w-[700px] leading-[70px]">
          Providing Meaningful Architecture Services
        </div>
        <p className="w-[550px] font-semibold pt-10 text-base leading-7">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna.
        </p>
        <button className="mt-10 bg-[#ffbb00] px-12 py-3 rounded-md font-semibold">All Services</button>
      </div>
    </div>
  );
};

export default HeroSection;
