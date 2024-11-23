import Image from "next/image";
import React from "react";

const TopMainSection = () => {
  return (
    <div className="flex justify-center gap-8 mt-32">
      <div className="flex flex-col items-center">
        <Image
          src="/images/ProjectPlaning.jpg"
          alt="Project-Planing"
          width={370}
          height={270}
          className="rounded-3xl"
        />
        <h4 className="text-3xl mt-5 font-bold text-blue-950">Project Planing</h4>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/images/Architecture1.jpg"
          alt="Architecture"
          width={370}
          height={270}
          className="rounded-3xl"
        />
        <h4 className="text-3xl mt-5 font-bold text-blue-950">Architecture</h4>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/images/Construction.jpg"
          alt="Construction"
          width={370}
          height={270}
          className="rounded-3xl"
        />
        <h4 className="text-3xl mt-5 font-bold text-blue-950">Construction</h4>
      </div>
    </div>
  );
};

export default TopMainSection;
