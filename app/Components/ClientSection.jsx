"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 

const ClientSection = () => {

  const userReviews = [
    "This is an amazing product! Highly recommend to everyone.",
    "Excellent service, would definitely use it again.",
    "A game changer for my business, very satisfied!",
    "The team was very helpful, and the product is top-notch.",
    "Fantastic experience! I will be coming back for more."
  ];

  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[580px] mt-40 md:rounded-tl-[180px] md:rounded-br-[180px]"
         style={{ backgroundImage: `url('/images/Clients.jpg')` }}>
      {/* Glass Layer */}
      <div className="absolute inset-0 bg-blue-950 bg-opacity-70 md:rounded-tl-[180px] md:rounded-br-[180px]"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-white pt-24">
        {/* Text Layer */}
        <h1 className="md:text-5xl text-3xl font-bold">
          Our Achievements <br /> in Numbers
        </h1>

        {/* Swiper Slider for User Reviews */}
        <div className="w-full max-w-2xl mt-10">
          <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
            {userReviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-semibold">{review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
