import { PexelsPhotoByRayPiedra, PlayCircle } from "@/assets";
import React from "react";
import Image from "next/image";
import ContentBoxHero from "./ContentBoxHero";
import { contentBoxData } from "@/data/heroSection";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="relative">
      <div
        className="absolute bg-heroTriangle ml-3  top-0 left-0 w-full h-full z-0"
        style={{
          clipPath: "polygon(100% 12%, 0% 100%, 100% 100%)", // Üçgen oluşturan clip-path
        }}
      ></div>
      <div className="px-20 py-20 w-full ">
        <div className="flex gap-5 ">
          <div className="flex flex-col w-3/5 ">
            <div className="flex flex-col self-stretch my-auto text-slate-900 max-md:mt-10 max-md:max-w-full">
              <div className="text-7xl font-extrabold leading-[79.2px] max-md:max-w-full max-md:text-4xl">
                Collectible Sneakers
              </div>
              <div className="mt-8 text-lg leading-7 max-md:max-w-full">
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </div>
              <div className="flex gap-4 self-start mt-8 font-medium tracking-wide text-amber-900 whitespace-nowrap">
                <div className="grow justify-center px-8 py-4 text-xl leading-6 rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)] max-md:px-5">
                  Sign up now
                </div>
                <div className="flex gap-2 justify-center px-2 py-3 my-auto text-base leading-6 rounded-lg">
                  <Image
                    width={24}
                    height={24}
                    loading="lazy"
                    src={PlayCircle}
                    alt="Play Circle Icon"
                    className="w-6 aspect-square"
                  />
                  <div className="grow">Watch Demo</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 relative">
            <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-heroOrange rounded-lg z-10"></div>
            <Image
              width={486}
              height={388}
              src={PexelsPhotoByRayPiedra}
              alt="Pexels Photo By Ray Piedra"
              className="z-20 relative "
            />
          </div>
        </div>
      </div>

      <div className="px-20 py-20 w-full  grid grid-cols-3 gap-20">
        {contentBoxData.map((item, index) => (
          <ContentBoxHero
            key={index}
            title={item.title}
            description={item.content}
            image={item.image}
            shape={item.shape}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
