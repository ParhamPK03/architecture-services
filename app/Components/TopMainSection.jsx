import Image from "next/image";
import React from "react";

const TopMainSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 px-4 lg:mt-32 justify-items-center mx-auto w-[76%]  ">
      <div className="flex flex-col items-center">
        <Image
          src="/images/ProjectPlaning.jpg"
          alt="Project-Planing"
          width={370}
          height={270}
          className="rounded-3xl hover:scale-110 duration-300"
        />
        <h4 className="text-2xl md:text-3xl mt-5 font-bold text-blue-950 text-center">
          Project Planing
        </h4>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/images/Architecture1.jpg"
          alt="Architecture"
          width={370}
          height={270}
          className="rounded-3xl hover:scale-110 duration-300"
        />
        <h4 className="text-2xl md:text-3xl mt-5 font-bold text-blue-950 text-center">
          Architecture
        </h4>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/images/Construction.jpg"
          alt="Construction"
          width={370}
          height={270}
          className="rounded-3xl hover:scale-110 duration-300"
        />
        <h4 className="text-2xl md:text-3xl mt-5 font-bold text-blue-950 text-center">
          Construction
        </h4>
      </div>
    </div>
  );
};

export default TopMainSection;
