import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./CaroselButtons";
import useEmblaCarousel from "embla-carousel-react";
import stylesEmbla from "./embla.module.css";
import CaroselCard from "./CaroselCard";
import { CaroselSectionData, caroselSection } from "@/data/caroselSection";

type PropType = {
  slides: CaroselSectionData[];
  options?: EmblaOptionsType;
  emblaRef?: any;
  emblaApi?: any;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, emblaRef, emblaApi } = props;
  //   const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={stylesEmbla.embla}>
      <div className={stylesEmbla.embla__viewport} ref={emblaRef}>
        <div className={stylesEmbla.embla__container}>
          {slides.map((data, index) => (
            <div className={stylesEmbla.embla__slide} key={index}>
              <CaroselCard key={index} reviewData={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
