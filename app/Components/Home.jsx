import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TopMainSection from "./TopMainSection";

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
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      {/* Navbar & HeroSection */}
      <TopMainSection/>
    </div>
  );
};

export default Home;
