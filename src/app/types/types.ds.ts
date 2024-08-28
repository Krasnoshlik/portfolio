import { StaticImageData } from "next/image";

export interface Project {
    image: StaticImageData,
    tech: string[],
    name: string,
    dis: string,
    link: string,
}