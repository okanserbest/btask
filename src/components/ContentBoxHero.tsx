import React from "react";
import Image from "next/image";
import { PlayCircle, triangleGreenShape } from "@/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  title: string;
  description: string;
  image: StaticImport;
  shape?: "blue" | "green" | "purple";
};

const ContentBoxHero = ({ title, description, image, shape }: Props) => {
  return (
    <div className="relative flex flex-col overflow-hidden">
      {shape === "blue" && (
        <div
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            left: "33px",
            top: "-10px",
            background: "#0369A1",
            opacity: "0.5",
            borderRadius: "10px",
            transform: "rotate(-45deg)",
            zIndex: 0,
          }}
        ></div>
      )}
      {shape === "green" && (
        <div className="absolute bottom-0 left-8 w-full h-full">
          <Image
            src={triangleGreenShape}
            width={40}
            height={40}
            alt="Triangle Green Shape"
          />
        </div>
      )}
      {shape === "purple" && (
        <div
          className="bg-fuchsia-700"
          style={{
            position: "absolute",
            width: "45px",
            height: "45px",
            left: "41px",
            background: "#7C3AED",
            opacity: "0.5",
            borderRadius: "16px",
            zIndex: "0",
          }}
        ></div>
      )}
      <Image
        width={64}
        height={64}
        loading="lazy"
        src={image}
        alt="Icon"
        className=""
      />
      <div className="mt-4 text-xl text-midnightBlue font-medium leading-6 whitespace-nowrap z-10">
        {title}
      </div>
      <div className="mt-4 text-lg text-midnightBlue leading-7 z-10">
        {description}
      </div>
    </div>
  );
};

export default ContentBoxHero;
