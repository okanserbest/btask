import { VideoPlayerImage, check } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const ThirdSection = (props: Props) => {
  return (
    <div className="max-w-1440 mx-auto ">
      <div className="max-w-1440  self-stretch px-20 py-12 my-40 mx-20 bg-white shadow-md rounded-[30px] max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-xl leading-9 text-slate-900 max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl font-extrabold leading-[61.6px] max-md:max-w-full max-md:text-4xl">
                Why join us
              </div>
              <div className="flex gap-2 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                <Image
                  alt="checkicon"
                  loading="lazy"
                  src={check}
                  className="my-auto w-6 aspect-square"
                />
                <div className="flex-auto max-md:max-w-full">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </div>
              </div>
              <div className="flex gap-2 justify-between max-md:flex-wrap max-md:max-w-full">
                <Image
                  alt="checkicon"
                  loading="lazy"
                  src={check}
                  className="my-auto w-6 aspect-square"
                />
                <div className="flex-auto max-md:max-w-full">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </div>
              </div>
              <div className="flex gap-2 justify-between max-md:flex-wrap max-md:max-w-full">
                <Image
                  alt="checkicon"
                  loading="lazy"
                  src={check}
                  className="my-auto w-6 aspect-square text-red-500"
                />
                <div className="flex-auto max-md:max-w-full">
                  Ullamcorper ornare in et egestas dolor orci.
                </div>
              </div>
              <div className="justify-center self-start px-8 py-4 mt-6 font-medium tracking-wide text-amber-900 whitespace-nowrap rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)] leading-[120%] max-md:px-5">
                Sign up now
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-4 pt-4 pb-12 my-auto w-full bg-white rounded-3xl border-solid shadow-lg border-[5px] border-[color:var(--White,#FFF)] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-1.5 pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="w-2 h-2 bg-rose-600 rounded-full" />
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <Image
                src={VideoPlayerImage}
                alt="VideoPlayerImage"
                loading="lazy"
                className="self-stretch max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
