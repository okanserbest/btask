import {
  arrowRightIcon,
  pictures,
  podcastIcon,
  roketIcon,
  screenIcon,
  searchIcon,
  settingsIcon,
  shildCheckIcon,
  wavesShape,
} from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const FourthSection = (props: Props) => {
  return (
    <div className="relative">
      <Image
        loading="lazy"
        src={wavesShape}
        alt="wavesShape"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="max-w-1440 mx-auto relative">
        <div className="flex flex-col justify-center pt-10 lg:pt-20">
          <div className="mx-4 lg:mx-20 text-3xl lg:text-6xl font-bold lg:font-extrabold leading-9 lg:leading-[61.6px] text-center lg:text-left text-slate-900 ">
            Grow your collection
          </div>
          <div className="mx-4 lg:mx-20 mt-8 text-base lg:text-lg leading-7 lg:leading-7 text-center lg:text-left text-slate-900  ">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
            amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
            sit rhoncus.
            <br />
            Nec magna sed interdum sit purus tellus. Et volutpat proin neque
            placerat at bibendum quam tellus.
          </div>
          <div className="flex overflow-hidden flex-col ml-4 lg:mx-20 pb-20 mt-8 lg:mt-20 ">
            <div className=" mx-5 mb-6  ">
              <div className="flex gap-5  flex-col lg:flex-row ">
                <div className="flex flex-col  lg:w-[21%]">
                  <div className="flex  gap-4   lg:flex-col text-xl font-medium tracking-wide leading-6 text-slate-900 whitespace-nowrap overflow-x-scroll lg:overflow-x-visible  no-scrollbar ">
                    <div className="flex gap-4 p-4 whitespace-nowrap bg-white rounded-lg shadow-md min-w-52 lg:min-w-64">
                      <Image
                        src={searchIcon}
                        loading="lazy"
                        alt="searchIcon"
                        className=" w-6 aspect-square"
                      />
                      <div className="grow self-center">Bibendum tellus</div>
                      <Image
                        src={arrowRightIcon}
                        alt="arrowRightIcon"
                        loading="lazy"
                        className="hidden lg:block  w-6 aspect-square"
                      />
                    </div>
                    <div className="flex gap-4 p-4  rounded-lg">
                      <Image
                        src={shildCheckIcon}
                        alt="shildCheckIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Cras eget</div>
                    </div>
                    <div className="flex gap-4 p-4  rounded-lg">
                      <Image
                        src={roketIcon}
                        alt="roketIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Dolor pharetra</div>
                    </div>
                    <div className="flex gap-4 p-4  rounded-lg">
                      <Image
                        src={screenIcon}
                        alt="screenIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Amet, fringilla</div>
                    </div>
                    <div className="flex gap-4 p-4  rounded-lg">
                      <Image
                        src={podcastIcon}
                        alt="podcastIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Amet nibh</div>
                    </div>
                    <div className="flex gap-4 p-4  rounded-lg">
                      <Image
                        src={settingsIcon}
                        alt="settingsIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Sed velit</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 lg:w-[79%]">
                  <div className=" justify-center">
                    <Image
                      src={pictures}
                      alt="pictures"
                      loading="lazy"
                      className="w-full rounded-3xl aspect-[1.69] max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
