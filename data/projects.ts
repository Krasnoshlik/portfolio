import ShopCOImage from '../src/app/assets/shop-co-main-screen.png';
import RoobyImage from '../src/app/assets/roooby-main-screen.png';
import EstateryImage from '../src/app/assets/estatery-main-screen.png';
import SikapuduoImage from '../src/app/assets/sikapuduo-main-screen.png';
import TripmaImage from '../src/app/assets/tripma-main-screen.png';

import { Project } from '../src/app/types/types.ds'

export const projects: Project[] = [
    {
        image: ShopCOImage,
        tech: ['React','Next.js','Tailwind','Typescript'],
        name: 'SHOP.CO',
        dis: 'Functional e-commerce website for clothes,you can add items to cart and check all items on page shop with filters and pagination',
        link: 'https://shop-n3cmyrhe5-krasnoshliks-projects.vercel.app',
    },
    {
        image: RoobyImage,
        tech: ['React','Next.js','Tailwind','Typescript'],
        name: 'Roooby',
        dis: 'Functional e-commerce CRM what help you to work on your buiseness,you can check pricing page,blog page and contact page with all functional what needed for similar type CRMs',
        link: 'https://roooby-next-js.vercel.app',
    },
    {
        image: EstateryImage,
        tech: ['React','Next.js','Tailwind','Typescript'],
        name: 'Estatery',
        dis: 'Website with houses for rent or buy, you can add houses to licked and find needed house in input on main section.',
        link: 'https://estatery-psi.vercel.app',
    },
    {
        image: TripmaImage,
        tech: ['React','Redux','Tailwind','Typescript'],
        name: 'Tripma',
        dis: 'Website for airplane tickets booking',
        link: 'https://tripma-nu.vercel.app',
    },
    {
        image: SikapuduoImage,
        tech: ['React','Next.js','Tailwind','Typescript'],
        name: 'Sikapuduo',
        dis: 'Website for banking service',
        link: 'https://sikapuduo.vercel.app',
    },
]
