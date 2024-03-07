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
    <div className="max-w-1440 mx-auto">
      <div className="flex flex-col justify-center px-20 py-12 max-md:px-5">
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
          <div className="grow text-6xl font-extrabold leading-[61.6px] text-slate-900 max-md:max-w-full max-md:text-4xl">
            Because they love us
          </div>
          <div className="flex gap-5 justify-between my-auto">
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
        <div className="my-20">
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
