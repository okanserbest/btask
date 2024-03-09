import { PexelsPhotoByRayPiedra, PlayCircle } from "@/assets";
import React from "react";
import Image from "next/image";
import ContentBoxHero from "./ContentBoxHero";
import { contentBoxData } from "@/data/heroSection";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className=" relative">
      <div
        className="hidden lg:block absolute bg-heroTriangle pl-3  top-0 left-0 w-full h-full z-0"
        style={{
          clipPath: "polygon(100% 12%, 0% 100%, 100% 100%)", // Üçgen oluşturan clip-path
        }}
      ></div>
      <div
        className="absolute bg-heroTriangle lg:hidden  top-0 left-0 w-full h-full z-0"
        style={{
          clipPath: "polygon(200% 12%, -360% 100%, 100% 100%)", // Üçgen oluşturan clip-path
        }}
      ></div>
      <div className="lg:px-20 lg:py-20 max-w-1440 mx-auto ">
        <div className="flex flex-col  lg:flex-row gap-5 ">
          <div className="flex flex-col lg:w-3/5 ">
            <div className="flex flex-col justify-center mx-4 lg:mx-0 lg:justify-start self-stretch my-auto  text-slate-900 max-md:mt-10 max-md:max-w-full z-30">
              <div className="text-6xl lg:text-7xl text-center lg:text-left font-extrabold lg:leading-[79.2px] max-md:max-w-full ">
                Collectible Sneakers
              </div>
              <div className="mt-8 text-lg leading-7 text-center lg:text-left max-lg:max-w-full">
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </div>
              <div className=" flex justify-between  place-self-center   lg:mx-0 gap-4 lg:place-self-start mt-8 font-medium tracking-wide text-amber-900 whitespace-nowrap ">
                <button className="grow justify-center px-8 py-4 text-xl leading-6 rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)] max-md:px-5 hover:bg-amber-700 hover:text-white">
                  Sign up now
                </button>
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
          <div className="flex flex-col lg:ml-5 px-4 lg:x-0 relative place-self-center">
            <div className="absolute top-[10%] left-[10%]   w-[272.61px] h-[276.32px] object-contain bg-heroOrange rounded-lg z-10"></div>
            <Image
              width={486}
              height={388}
              src={PexelsPhotoByRayPiedra}
              alt="Pexels Photo By Ray Piedra"
              className="z-20 relative   w-[361px] h-[288.21px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="px-20 py-20 max-w-1440 mx-auto   grid grid-cols-1  lg:grid-cols-3 gap-8 lg:gap-20 ">
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
