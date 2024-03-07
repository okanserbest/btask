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
        <div className="flex flex-col justify-center pt-20">
          <div className="mx-20 text-6xl font-extrabold leading-[61.6px] text-slate-900 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
            Grow your collection
          </div>
          <div className="mx-20 mt-8 text-lg leading-7 text-slate-900 max-md:mr-2.5 max-md:max-w-full">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
            amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
            sit rhoncus.
            <br />
            Nec magna sed interdum sit purus tellus. Et volutpat proin neque
            placerat at bibendum quam tellus.
          </div>
          <div className="flex overflow-hidden relative flex-col px-16 pb-20 mt-20 w-full min-h-[684px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="relative mx-5 mb-6 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col text-xl font-medium tracking-wide leading-6 text-slate-900 max-md:mt-10">
                    <div className="flex gap-4 p-4 whitespace-nowrap bg-white rounded-lg shadow">
                      <Image
                        src={searchIcon}
                        loading="lazy"
                        alt="searchIcon"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex gap-2">
                        <div className="grow">Bibendum tellus</div>
                        <Image
                          src={arrowRightIcon}
                          alt="arrowRightIcon"
                          loading="lazy"
                          className="shrink-0 w-6 aspect-square"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 mt-4 rounded-lg">
                      <Image
                        src={shildCheckIcon}
                        alt="shildCheckIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Cras eget</div>
                    </div>
                    <div className="flex gap-4 p-4 mt-4 rounded-lg">
                      <Image
                        src={roketIcon}
                        alt="roketIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Dolor pharetra</div>
                    </div>
                    <div className="flex gap-4 p-4 mt-4 rounded-lg">
                      <Image
                        src={screenIcon}
                        alt="screenIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Amet, fringilla</div>
                    </div>
                    <div className="flex gap-4 p-4 mt-4 rounded-lg">
                      <Image
                        src={podcastIcon}
                        alt="podcastIcon"
                        loading="lazy"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="flex-auto">Amet nibh</div>
                    </div>
                    <div className="flex gap-4 p-4 mt-4 rounded-lg">
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
                <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
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
