import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ClientSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[580px] mt-40 md:rounded-tl-[180px]  md:rounded-br-[180px]"
        style={{
          backgroundImage: `url('/images/Clients.jpg')`,
        }}
      >
        {/* Glass Layer */}
        <div className="absolute inset-0 bg-blue-950 bg-opacity-70 md:rounded-tl-[180px]  md:rounded-br-[180px]"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-white pt-24">
          {/* Text Layer */}
          <h1 className="md:text-5xl text-3xl font-bold">
            Our Achievements <br /> in Numbers
          </h1>
          {/* Slider */}
          <div>
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {[
                  "Achievement 1",
                  "Achievement 2",
                  "Achievement 3",
                  "Achievement 4",
                  "Achievement 5",
                ].map((text, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-xl font-medium">{text}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
