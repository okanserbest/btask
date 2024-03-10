"use client";
import { caroselSection } from "@/data/caroselSection";
import React from "react";
import CaroselCard from "./CaroselCard";
import { nextButtonIcon, prewButtonIcon } from "@/assets";
import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";
import { usePrevNextButtons } from "./CaroselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

type Props = {};
const OPTIONS: EmblaOptionsType = { align: "start" };

const CaroselSection = (props: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-1440 mx-auto w-full">
      <div className="flex flex-col justify-center px-4 lg:px-20 py-12 ">
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
          <div className="grow text-center lg:text-start text-3xl lg:text-6xl font-extrabold leading-[61.6px] text-slate-900 max-md:max-w-full">
            Because they love us
          </div>
          <div className="hidden lg:flex gap-5 justify-between my-auto">
            <button
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className="flex justify-center items-center px-3 w-12 h-12 border-2 border-solid shadow aspect-square border-[color:var(--Amber-900,#78350F)] rounded-[100px]"
            >
              <Image
                src={prewButtonIcon}
                alt="prew"
                loading="lazy"
                className="w-full aspect-square"
              />
            </button>
            <button
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className="flex justify-center items-center px-3 w-12 h-12 border-2 border-solid shadow aspect-square border-[color:var(--Amber-900,#78350F)] rounded-[100px]"
            >
              <Image
                src={nextButtonIcon}
                alt="next"
                loading="lazy"
                className="w-full aspect-square"
              />
            </button>
          </div>
        </div>
        <div className="my-8 lg:my-20 relative">
          <div className="absolute -top-[40px] w-full h-56 lg:h-96    bg-amber-200 z-0"></div>
          <EmblaCarousel
            slides={caroselSection}
            emblaRef={emblaRef}
            emblaApi={emblaApi}
          />
        </div>
      </div>
    </div>
  );
};

export default CaroselSection;
