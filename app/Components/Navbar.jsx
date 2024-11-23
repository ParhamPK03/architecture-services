"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Team",
    "Clients",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-around items-center py-3">
        {/* Left */}
        <div className="cursor-pointer">
          {isScrolled ? (
            <Image
              src="/images/logo-dark.png"
              alt="Logo Dark"
              width={160}
              height={100}
            />
          ) : (
            <Image src="/images/logo.png" alt="Logo" width={160} height={100} />
          )}
        </div>

        {/* Right */}
        <div className="relative">
          <ul
            className={`flex items-center gap-10 text-[18px] ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative group cursor-pointer ${
                  activeIndex === index ? "after:w-full" : "after:w-0"
                }`}
              >
                <span
                  className={`absolute left-0 bottom-[-5px] h-[3px] bg-[#ffbb00] transition-all duration-300 ${
                    activeIndex === index ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
