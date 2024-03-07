import { brand1, brand2, brand3, reviewer1, reviewer2, reviewer3 } from "@/assets";
import { StaticImageData } from "next/image";

export type CaroselSectionData = {
    brand: string;
    brandImage: StaticImageData;
    review: string;
    reviewerName: string;
    reviewerPicture: StaticImageData
    position: string;
};

const caroselSection: CaroselSectionData[] = [
    {
        brand: 'Zoomerr',
        brandImage: brand1,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'Hellen Jummy',
        reviewerPicture: reviewer3,
        position: 'Team Lead',
    },
    {
        brand: 'SHELLS',
        brandImage: brand3,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'Hellena John',
        reviewerPicture: reviewer2,
        position: 'Co-founder',
    },
    {
        brand: 'ArtVenue',
        brandImage: brand1,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'David Oshodi',
        reviewerPicture: reviewer1,
        position: 'Manager',
    },
    {
        brand: 'TechLabs',
        brandImage: brand2,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'Laura Smith',
        reviewerPicture: reviewer2,
        position: 'Developer',
    },
    {
        brand: 'InnovateX',
        brandImage: brand3,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'John Doe',
        reviewerPicture: reviewer3,
        position: 'CEO',
    },
    {
        brand: 'DigitalEdge',
        brandImage: brand2,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'Emma Johnson',
        reviewerPicture: reviewer1,
        position: 'Marketing Manager',
    },
    {
        brand: 'WebWorks',
        brandImage: brand1,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'Michael Brown',
        reviewerPicture: reviewer3,
        position: 'Designer',
    },
    {
        brand: 'DataTech',
        brandImage: brand3,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'Sarah Miller',
        reviewerPicture: reviewer1,
        position: 'Data Analyst',
    },
    {
        brand: 'CodeCraft',
        brandImage: brand1,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'James Wilson',
        reviewerPicture: reviewer2,
        position: 'Software Engineer',
    },
    {
        brand: 'TechGenius',
        brandImage: brand1,
        review: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        reviewerName: 'Emily Davis',
        reviewerPicture: reviewer1,
        position: 'IT Specialist',
    }
]

export { caroselSection };