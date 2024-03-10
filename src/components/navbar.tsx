import { menuScaleIcon } from "@/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex gap-5 justify-between self-center p-4 lg:px-20 lg:py-6 w-full max-w-1440 text-amber-900">
      <div className="flex-auto self-start mt-2.5 text-3xl font-bold leading-9">
        Collers
      </div>
      <div className="hidden  lg:flex gap-4 justify-between items-center text-base font-medium tracking-wide leading-6">
        <button className="grow self-stretch my-auto">Products</button>
        <button className="self-stretch my-auto">Solutions</button>
        <button className="self-stretch my-auto">Pricing</button>
        <button className="self-stretch my-auto">Resources</button>
        <button className="self-stretch my-auto">Log In</button>
        <Link href="/quiz">
          <button className="grow justify-center self-stretch px-7 py-3 whitespace-nowrap rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)] hover:bg-amber-700 hover:text-white">
            Sign up now
          </button>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button className="self-stretch my-auto">
          <Image
            src={menuScaleIcon}
            alt="menuScaleIcon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
