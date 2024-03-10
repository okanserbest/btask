import { mapProduct, worldMap } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const FifthSection = (props: Props) => {
  return (
    <div className="bg-amber-900 w-full z-30">
      <div className="max-w-1440 mx-auto relative overflow-x-clip px-20">
        <div className=" min-w-max min-h-full ">
          <Image
            src={worldMap}
            width={1049}
            height={633}
            alt="worldMap"
            loading="lazy"
            className="min-w-full min-h-full object-contain object-left"
          />
        </div>

        <div className="absolute flex flex-col  z-10 top-0 right-0 bottom-0 left-0">
          <div className="absolute flex flex-col left-16  -top-6 items-center">
            <Image
              src={mapProduct}
              alt="mapProduct"
              loading="lazy"
              className="w-full border-white border-solid shadow-md  border-[5px] rounded-lg  max-w-[256px] z-30"
            />
            <div className="px-4 pt-4 pb-2 text-sm leading-5 rounded-md shadow-lg bg-slate-200 max-w-[240px] z-20  -mt-2 text-slate-900">
              Emma Simpson collected o
              <span className="text-slate-900">ne pair of </span>
              <span className="font-medium leading-4 text-slate-900">
                Cool Shoes
              </span>
              .
            </div>
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-16 border-t-blue-500"></div>

            <div className="w-8 h-8 bg-lime-200 rounded-full border-lime-400 border-solid border-[3px] min-h-[32px] z-10  stroke-[3px]" />
          </div>
        </div>

        <div className="absolute flex flex-col items-center justify-center self-stretch font-extrabold text-center text-amber-50 leading-[110%] z-10 top-0 right-0 bottom-0 left-0">
          <div className=" text-4xl lg:text-6xl  xl:text-8xl max-md:text-4xl">
            11,658,467
          </div>
          <div className="mt-2  text-3xl  lg:text-4xl   xl:text-6xl max-md:text-3xl">
            Shoes Collected
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
