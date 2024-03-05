import { trophyIcon, tunnelIcon, tvIcon } from "@/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ContentBoxData = {
    title: string;
    content: string;
    image: StaticImport;
    shape: "blue" | "green" | "purple";
};

const contentBoxData: ContentBoxData[] = [
    {
        title: "Nibh viverra",
        content:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        image: trophyIcon,
        shape: "blue",
    },
    {
        title: "Cursus amet",
        content:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        image: tunnelIcon,
        shape: "green",
    },
    {
        title: "Ipsum fermentum",
        content:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        image: tvIcon,
        shape: "purple",
    },
];
export { contentBoxData };
