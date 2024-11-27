import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <div className="w-[74%] mx-auto ">
      {/* Text */}
      <div className="font-extrabold text-center mt-28 text-4xl text-blue-950">
        Meet Our <br />
        Team Members
      </div>
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-8 mt-16 text-center">
        {/* 1 */}
        <div>
          <Image
            src="/images/Engineer.jpg"
            alt="Team"
            width={350}
            height={100}
            className="rounded-br-none rounded-3xl"
          />
          <h2 className="text-blue-950 text-2xl font-semibold mt-6">
            Jack Thornton
          </h2>
          <h4 className="text-lg text-gray-500">Engineer</h4>
        </div>
        {/* 2 */}
        <div>
          <Image
            src="/images/Architecture.jpg"
            alt="Team"
            width={350}
            height={100}
            className="rounded-br-none rounded-3xl"
          />
          <h2 className="text-blue-950 text-2xl font-semibold mt-6">
            Jack Thornton
          </h2>
          <h4 className="text-lg text-gray-500">Architecture</h4>
        </div>
        {/* 3 */}
        <div className="md:col-span-2 xl:col-span-1">
          <Image
            src="/images/Contractor.jpg"
            alt="Team"
            width={350}
            height={100}
            className="rounded-br-none rounded-3xl"
          />
          <h2 className="text-blue-950 text-2xl font-semibold mt-6">
            Jack Thornton
          </h2>
          <h4 className="text-lg text-gray-500">Contractor</h4>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
