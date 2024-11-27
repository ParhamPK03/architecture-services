import Image from "next/image";
import React from "react";

const ExperienceSection = () => {
  return (
    <div className="mt-20 lg:mt-60 flex flex-col lg:flex-row items-center gap-8 lg:gap-5 px-4 w-[76%] mx-auto">
      <div className="w-full lg:w-1/2 max-w-[600px]">
        <Image
          src="/images/ExperianceYears.jpg"
          alt="WorkerImage"
          width={550}
          height={100}
          className="rounded-3xl w-full"
        />
      </div>

      <div className="w-full lg:w-1/2 max-w-[600px] text-center md:text-start">
        <h2 className="text-3xl lg:text-4xl border-l-4 lg:border-l-8 border-blue-950 text-blue-950">
          <span className="text-[#ffbb00] text-[50px] lg:text-[60px] font-extrabold ml-3 lg:ml-5">
            15{" "}
          </span>
          Years of Experience
        </h2>
        <div className="mt-6 lg:ml-9">
          <h3 className="text-2xl lg:text-4xl font-extrabold text-blue-950 mt-5 lg:mt-10">
            Providing the best quality service
          </h3>
          <p className="text-gray-500 font-medium leading-7 mt-6 lg:mt-10 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, serd diam
            nonumy eirmod tempor invidunt ut labore et dolore maali quyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
          </p>
          <button className="mt-8 lg:mt-12 bg-[#ffbb00] px-10 lg:px-12 py-2 lg:py-3 rounded-md font-semibold hover:bg-opacity-70 duration-500 text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
