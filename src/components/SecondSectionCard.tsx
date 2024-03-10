import { cartIcon } from "@/assets";
import { SecondSectionCardData } from "@/data/secondSection";
import Image from "next/image";

type SecondSectionCardProps = SecondSectionCardData & {
  index: number;
};

const SecondSectionCard = ({
  title,
  description,
  image,
  index,
}: SecondSectionCardProps) => {
  return (
    <div className="relative  flex flex-col w-full   shadow-secondSectionCard rounded-lg  ">
      {index === 0 && (
        <>
          <div className="hidden lg:block">
            <div className="absolute w-64 h-64 left-[-35px] top-[176px] bg-pink-700 opacity-75 rounded-[50px]"></div>
          </div>
          <div className="lg:hidden">
            <div className="absolute w-[202px] h-[202px] left-5 -bottom-8 bg-pink-700 opacity-75 rounded-[50px]"></div>
          </div>
        </>
      )}
      {index === 1 && (
        <>
          <div className="hidden lg:block">
            <div className="absolute w-[161px] h-[161px] -left-5 top-[-31px] bg-blue-700 opacity-75 rounded-[50px]"></div>
            <div className="absolute w-[130px] h-[130px] -right-4 top-[294px] bg-amber-700 opacity-75 rounded-[30px]"></div>
          </div>

          <div className="lg:hidden">
            <div className="absolute w-[161px] h-[161px] -right-4 top-[139px] bg-blue-700 opacity-75 rounded-[50px]"></div>
          </div>
        </>
      )}
      {index === 2 && (
        <>
          <div className="hidden lg:block">
            <div className="absolute w-1/2 h-[202px] right-24  -bottom-5 bg-fuchsia-700 opacity-75 rounded-[30px]"></div>
            <div className="absolute w-1/2 h-[232px] -right-11 top-8 bg-green-700 opacity-75 rounded-[50px]"></div>
          </div>
          <div className="lg:hidden">
            <div className="absolute  w-[150px] h-[150px]  -left-4  top-8 bg-green-700 opacity-75 rounded-[50px]"></div>
          </div>
        </>
      )}

      <div className="flex flex-col grow pb-8 w-full text-white  border  border-solid shadow-lg bg-slate-900 boder border-slate-900   rounded-lg z-20">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          className="w-full aspect-[1.79] rounded-t-lg"
        />
        <div className="flex flex-col px-8 pt-8 ">
          <div className="text-2xl font-bold leading-7"> {title} </div>
          <div className="mt-4 text-lg leading-7">{description}</div>
        </div>
        <button className="flex justify-center items-center self-center px-16 py-4 mt-8 max-w-full text-xl font-medium tracking-wide leading-6  border-2 border-solid border-white hover:bg-slate-600  rounded-lg">
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
