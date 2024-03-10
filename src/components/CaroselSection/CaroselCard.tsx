import { CaroselSectionData } from "@/data/caroselSection";
import Image from "next/image";
import React from "react";

type Props = {
  reviewData: CaroselSectionData;
};

const CaroselCard = ({ reviewData }: Props) => {
  const { brand, brandImage, position, review, reviewerName, reviewerPicture } =
    reviewData;
  return (
    <div>
      <div className="flex flex-col flex-1 justify-center bg-white rounded-3xl border border-solid shadow-md border-[color:var(--Blue-Gray-200,#E2E8F0)]">
        <div className="flex flex-col px-8 py-10 max-md:px-5">
          <div className="flex gap-2 justify-between text-2xl font-bold leading-7 whitespace-nowrap text-slate-600">
            <Image
              src={brandImage}
              alt={brand}
              loading="lazy"
              className="aspect-[0.93] fill-slate-600 w-[30px]"
            />
            <div className="flex-auto my-auto">{brand}</div>
          </div>
          <div className="mt-6  lg:mt-8 text-base lg:text-xl leading-6 lg:leading-10 text-black">
            {review}
          </div>
          <div className="flex gap-4 justify-between pt-4 mt-4 whitespace-nowrap">
            <Image
              loading="lazy"
              src={reviewerPicture}
              alt={reviewerName}
              className="w-16 aspect-square"
            />
            <div className="flex flex-col flex-1 self-start mt-2">
              <div className="text-lg leading-7 text-black">{reviewerName}</div>
              <div className="text-base leading-6 text-slate-600">
                {position}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaroselCard;
