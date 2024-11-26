import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="text-white flex flex-col items-start pl-8 md:pl-20 lg:pl-48 pt-72">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-full w-[700px] leading-tight">
          Providing Meaningful Architecture Services
        </div>

        <p className="text-sm sm:text-base font-medium pt-6 sm:pt-8 md:pt-10 max-w-full  w-[550px] leading-6 sm:leading-7">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna.
        </p>

        {/* دکمه */}
        <button className="mt-6 sm:mt-8 lg:mt-10 bg-[#ffbb00] px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-md font-semibold hover:bg-opacity-70 duration-500">
          All Services
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
