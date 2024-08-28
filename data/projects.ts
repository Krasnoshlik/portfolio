import ShopCOImage from '../src/app/assets/shop-co-main-screen.png';
import RoobyImage from '../src/app/assets/roooby-main-screen.png';
import EstateryImage from '../src/app/assets/estatery-main-screen.png';

import { Project } from '../src/app/types/types.ds'

export const projects: Project[] = [
    {
        image: ShopCOImage,
        tech: ['React','Next.js','Tailwind','Typescript'],
        name: 'SHOP.CO',
        dis: ' This is functional e-commerce website for clothes,you can add items to cart and check all items on page shop with filters and pagination',
        link: 'https://shop-n3cmyrhe5-krasnoshliks-projects.vercel.app',
    },
    {
        image: RoobyImage,
        tech: ['React','Next.js','Tailwind','Typescript'],
        name: 'Roooby',
        dis: ' This is functional e-commerce CRM what help you to work on your buiseness,you can check pricing page,blog page and contact page with all functional what needed for similar type CRMs',
        link: 'https://roooby-next-js.vercel.app',
    },
    {
        image: EstateryImage,
        tech: ['React','Next.js','Tailwind','Typescript'],
        name: 'Estatery',
        dis: ' This is website with houses for rent or buy, you can add houses to licked and find needed house in input on main section.',
        link: 'https://estatery-psi.vercel.app',
    },
]