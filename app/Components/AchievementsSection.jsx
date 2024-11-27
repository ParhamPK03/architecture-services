import React from "react";
import {
  IoHappyOutline,
  IoCheckmarkCircleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";

const AchievementsSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[580px] mt-40 md:rounded-tl-[180px]  md:rounded-br-[180px]"
        style={{
          backgroundImage: `url('/images/Achievements.jpg')`,
        }}
      >
        {/* Glass Layer */}
        <div className="absolute inset-0 bg-blue-950 bg-opacity-70 md:rounded-tl-[180px]  md:rounded-br-[180px]"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-white pt-24">
          {/* Text Layer */}
          <h1 className="md:text-5xl text-3xl font-bold">
            Our Achievements <br /> in Numbers
          </h1>
          {/* Icons & Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20 gap-y-4 md:gap-y-10 pt-20">
            {/* 1 */}
            <div className="flex flex-col items-center gap-y-5">
              <IoHappyOutline className="md:text-[70px]  text-[50px] " />
              <span className="md:text-4xl text-2xl  font-extrabold">1874</span>
              <p className="font-medium text-lg md:text-xl">Happy Clients</p>
            </div>
            {/* 2 */}
            <div className="flex flex-col items-center gap-y-5">
              <IoCheckmarkCircleOutline className="md:text-[70px]  text-[50px] " />
              <span className="md:text-4xl text-2xl  font-extrabold">717</span>
              <p className="font-medium text-lg md:text-xl">Projects Done</p>
            </div>
            {/* 3 */}
            <div className="flex flex-col items-center gap-y-5">
              <IoPersonOutline className="md:text-[70px]  text-[50px] " />
              <span className="md:text-4xl text-2xl  font-extrabold">943</span>
              <p className="font-medium text-lg md:text-xl">Team Members</p>
            </div>
            {/* 4 */}
            <div className="flex flex-col items-center gap-y-5">
              <TfiCup className="md:text-[70px]  text-[50px] " />
              <span className="md:text-4xl text-2xl  font-extrabold">74</span>
              <p className="font-medium text-lg md:text-xl">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
