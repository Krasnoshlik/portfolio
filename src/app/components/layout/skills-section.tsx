import React from 'react';
import Image from 'next/image';
import DotsImage from '../../assets/dots.png';
import LinesImage from '../../assets/lines.png';
import CubeImage from '../../assets/gray-cube.png';

export default function SkillsSection() {
  return (
    <section className=' mt-20 mb-20'>
        <div className=' flex items-center gap-5'>
          <h3 className=' font-medium text-[32px] text-white'> <span className=' text-normal-purple'>#</span>skills</h3>
          <span className=' block w-full h-[1.5px] bg-normal-purple'></span>
        </div>

        <div className=' mt-20 flex justify-between'>

            <div className=' w-full h-full'>

                <div className=' relative '>
                <Image src={DotsImage} alt='Image' className=' absolute top-0 left-20'/>
                </div>

                <div className=' relative '>
                <Image src={LinesImage} alt='Image' className=' absolute top-60 left-10'/>
                </div>

                <div className=' relative '>
                <Image src={DotsImage} alt='Image' className=' absolute right-[180px] top-40'/>
                </div>

                <div className=' relative '>
                <Image src={CubeImage} alt='Image' className=' absolute right-28 -top-10'/>
                </div>

                <div className=' relative '>
                <Image src={CubeImage} alt='Image' className=' absolute right-10 top-80'/>
                </div>
            </div>

            <div className=' flex gap-5'>

                <div className=' w-[180px] border-[2px] border-p-gray p-3 h-min'>
                    <h5 className=' font-semibold text-white'>Languages</h5>
                    <span className=' block h-[2px] bg-p-gray -mx-3 my-2'></span>
                    <div className=' text-p-gray flex flex-wrap justify-between'>
                        <p>TypeScript</p>
                        <p>JavaScript</p>
                    </div>
                </div>

                <div className=' flex flex-col gap-5'>
                <div className=' w-[180px] border-[2px] border-p-gray p-3 h-min'>
                    <h5 className=' font-semibold text-white'>React stuff</h5>
                    <span className=' block h-[2px] bg-p-gray -mx-3 my-2'></span>
                    <div className=' text-p-gray flex flex-wrap justify-between'>
                        <p>Redux</p>
                        <p>React Router</p>
                        <p>React Forms</p>
                    </div>
                </div>

                <div className=' w-[180px] border-[2px] border-p-gray p-3 h-min'>
                    <h5 className=' font-semibold text-white'>Tools</h5>
                    <span className=' block h-[2px] bg-p-gray -mx-3 my-2'></span>
                    <div className=' text-p-gray flex flex-wrap justify-between'>
                        <p>VSCode</p>
                        <p>Figma</p>
                        <p>Git/Github</p>
                    </div>
                </div>
                </div>

                <div className=' flex flex-col gap-5'>
                <div className=' w-[180px] border-[2px] border-p-gray p-3 h-min'>
                    <h5 className=' font-semibold text-white'>Frameworks</h5>
                    <span className=' block h-[2px] bg-p-gray -mx-3 my-2'></span>
                    <div className=' text-p-gray flex flex-wrap justify-between'>
                        <p>React</p>
                        <p>Next.js</p>
                    </div>
                </div>

                <div className=' w-[180px] border-[2px] border-p-gray p-3 h-min'>
                    <h5 className=' font-semibold text-white'>Other</h5>
                    <span className=' block h-[2px] bg-p-gray -mx-3 my-2'></span>
                    <div className=' text-p-gray flex flex-wrap justify-between'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Axios</p>
                        <p>SCSS</p>
                        <p>Tailwind</p>
                        <p>REST api</p>
                    </div>
                </div>
                </div>

            </div>
        </div>

    </section>
  )
}
