import Image from "next/image";
import React from "react";

import { projects } from "./data/data";

const ProjectSection = () => {
  return (
    <div className="w-[76%] mx-auto">
      <div className="text-center text-blue-950 font-extrabold text-4xl mt-20 mb-20">
        Latest Projects That <br /> We Did and Doing
      </div>
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative overflow-hidden rounded-3xl ${project.roundedClass}`}
          >
            <Image
              src={project.src}
              alt="Project"
              width={370}
              height={100}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-950 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 text-white">
              <h2 className="absolute left-14 bottom-20 text-3xl">
                {project.title}
              </h2>
              <p className="absolute bottom-14 left-14">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
