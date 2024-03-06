import { cartIcon } from "@/assets";
import { SecondSectionCardData } from "@/data/SecondSection";
import Image from "next/image";

const SecondSectionCard = ({
  title,
  description,
  image,
}: SecondSectionCardData) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full shadow-secondSectionCard">
      <div className="flex flex-col grow pb-8 w-full text-white rounded-xl border border-solid shadow-lg bg-slate-900 border-[color:var(--Blue-Gray-900,#0F172A)] max-md:mt-10">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          className="w-full aspect-[1.79]"
        />
        <div className="flex flex-col px-8 pt-8 max-md:px-5">
          <div className="text-2xl font-bold leading-7"> {title} </div>
          <div className="mt-4 text-lg leading-7">{description}</div>
        </div>
        <button className="flex justify-center items-center self-center px-16 py-4 mt-8 max-w-full text-xl font-medium tracking-wide leading-6 rounded-lg border-2 border-solid border-[color:var(--White,#FFF)] w-[331px] max-md:px-5 hover:bg-slate-600">
          <div className="flex gap-4">
            <Image
              src={cartIcon}
              alt="Cart Icon"
              loading="lazy"
              className="w-6 aspect-square"
            />
            <div>Buy Now</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SecondSectionCard;
