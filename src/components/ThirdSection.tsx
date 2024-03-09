import { VideoPlayerImage, check } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const ThirdSection = (props: Props) => {
  return (
    <div className="w-full max-w-1440 mx-auto ">
      <div className="max-w-1440  self-stretch pt-8 px-4 pb-8 m-4 lg:px-20 lg:py-12 lg:my-40 lg:mx-20 bg-white shadow-md rounded-[30px] ">
        <div className="flex gap-5  flex-col items-center lg:flex-row ">
          <div className="flex flex-col  lg:w-6/12 ">
            <div className="flex flex-col items-center lg:items-start   self-stretch my-auto text-xl leading-9 text-slate-900 z-50">
              <div className="text-3xl  lg:text-6xl font-extrabold leading-[61.6px]  ">
                Why join us
              </div>
              <div>
                <div className="flex gap-2 justify-between mt-6">
                  <Image
                    alt="checkicon"
                    loading="lazy"
                    src={check}
                    className="self-start mt-1  w-6 aspect-square"
                  />
                  <div className="flex-auto ">
                    Est et in pharetra magna adipiscing ornare aliquam.
                  </div>
                </div>
                <div className="flex gap-2 justify-between ">
                  <Image
                    alt="checkicon"
                    loading="lazy"
                    src={check}
                    className="self-start mt-1 w-6 aspect-square"
                  />
                  <div className="flex-auto ">
                    Tellus arcu sed consequat ac velit ut eu blandit.
                  </div>
                </div>
                <div className="flex gap-2 justify-between ">
                  <Image
                    alt="checkicon"
                    loading="lazy"
                    src={check}
                    className="self-start mt-1 w-6 aspect-square "
                  />
                  <div className="flex-auto ">
                    Ullamcorper ornare in et egestas dolor orci.
                  </div>
                </div>
              </div>
              <button className=" self-center lg:self-start px-8 py-4 mt-6 my-auto  font-medium tracking-wide text-amber-900 whitespace-nowrap rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)] leading-[120%] max-md:px-5 z-50">
                Sign up now
              </button>
            </div>
          </div>
          <div className="relative   flex flex-col lg:ml-5  ">
            <div className="flex flex-col self-stretch  pt-4 my-auto w-full bg-white rounded-[20px] border-solid shadow-lg border-[5px] border-[color:var(--White,#FFF)] overflow-hidden  z-20 ">
              <div className="flex gap-1.5 pr-20 ">
                <div className="w-2 h-2 bg-rose-600 rounded-full" />
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <Image
                src={VideoPlayerImage}
                alt="VideoPlayerImage"
                loading="lazy"
                className="self-stretch max-w-full z-40"
              />
            </div>

            <div>
              <div className="absolute w-[130%]  h-1/2  top-1/4  -left-24  bg-amber-200 rotate-[-45deg] "></div>

              <div className="absolute w-[46px] h-[46px]  lg:w-[74px] lg:h-[74px] right-16 -bottom-[23px] lg:-bottom-[37px] bg-fuchsia-700 opacity-75 rounded-[30px]"></div>

              <div className="absolute w-[100px] h-[100px] -right-[10px]  -bottom-[60px]  lg:w-[218px] lg:h-[218px] lg:-right-[108px]  lg:-bottom-[109px]    bg-pink-700 opacity-75 rounded-[30px]"></div>

              <div className="absolute  w-[36px] h-[36px] lg:w-[59px] lg:h-[60px]  lg:right-[23px] lg:-top-[85px] right-[31px] -top-[75px] bg-blue-700 opacity-75 rounded-full"></div>
              <div className="absolute w-[36px] h-[36px] -left-[21px] top-[25px] lg:w-[90px] lg:h-[90px]  bg-amber-700 opacity-75 rounded-[30px] "></div>
              <div className="absolute  w-[50px] h-[50px] lg:w-[85px] lg:h-[85px] left-[43px] -bottom-[25px] bg-green-700 opacity-75 rounded-full z-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
