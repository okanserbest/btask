import React from "react";
import SecontSectionCard from "./SecondSectionCard";
import { secondSectionData } from "@/data/secondSection";

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div className="bg-slate-900">
      <div className="max-w-1440 mx-auto flex flex-col justify-center px-20 py-12 border-t border-b border-solid  border-b-[color:var(--Blue-Gray-200,#E2E8F0)] border-t-[color:var(--Blue-Gray-200,#E2E8F0)] max-md:px-5 ">
        <div className="max-w-1440">
          <div className="flex gap-5 justify-between mt-8 text-white max-md:flex-wrap ">
            <div className="grow text-6xl font-extrabold leading-[61.6px] max-md:max-w-full max-md:text-4xl">
              The best of the best
            </div>
            <button className="justify-center px-12 py-5 text-2xl font-bold tracking-wide leading-6 whitespace-nowrap rounded-lg border-2 border-solid border-[color:var(--White,#FFF)] max-md:px-5 hover:bg-slate-600">
              Sign up now
            </button>
          </div>
        </div>
        <div className="mt-20 max-md:mt-10">
          <div className="flex gap-10 max-w-1440 mx-auto">
            {secondSectionData.map((data, index) => (
              <SecontSectionCard
                key={index}
                title={data.title}
                description={data.description}
                image={data.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
