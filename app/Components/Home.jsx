import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TopMainSection from "./TopMainSection";
import ExperienceSection from "./ExperienceSection";
import ServicesSection from "./ServicesSection";
import ProjectSection from "./ProjectSection";
import AchievementsSection from "./AchievementsSection";
import TeamSection from "./TeamSection";

const Home = () => {
  return (
    <div className="h-[200vh]">
      {/* Navbar & HeroSection */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: `url('/images/HeroSection.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

        <div className="relative">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      <TopMainSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectSection />
      <AchievementsSection />
      <TeamSection />
    </div>
  );
};

export default Home;
