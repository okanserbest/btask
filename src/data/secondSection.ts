import { SecondSectionCardPicture1, SecondSectionCardPicture2, SecondSectionCardPicture3 } from "@/assets";
import { StaticImageData } from "next/image";

export type SecondSectionCardData = {
    title: string;
    description: string;
    image: StaticImageData;
};

const secondSectionData: SecondSectionCardData[] = [
    {
        title: "Title",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: SecondSectionCardPicture1,
    },
    {
        title: "Title",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: SecondSectionCardPicture2,
    },
    {
        title: "Title",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: SecondSectionCardPicture3,
    },
]

export { secondSectionData };