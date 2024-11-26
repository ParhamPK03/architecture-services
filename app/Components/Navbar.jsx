"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; // Import menu and close icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

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
      <div className="flex justify-between items-center py-3 px-6">
        {/* Left: Logo */}
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

        {/* Right: Navigation */}
        <div className="hidden lg:flex relative">
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

        {/* Mobile Menu: Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-4xl transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-4 text-black text-[18px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsMenuOpen(false); // Close menu after clicking
                }}
                className={`cursor-pointer ${
                  activeIndex === index
                    ? "text-[#ffbb00] font-bold"
                    : "text-black"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
