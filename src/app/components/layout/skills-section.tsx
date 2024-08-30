"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DotsImage from '../../assets/dots.png';
import LinesImage from '../../assets/lines.png';
import CubeImage from '../../assets/gray-cube.png';
import SectionNameAndLine from '../ui/section-name-and-line';

export default function SkillsSection() {
  return (
    <section className="mt-20 mb-20">
      <SectionNameAndLine text={'skills'} />

      <div className="mt-20 flex justify-between mob:justify-center">
        <div className="w-full h-full mob:hidden">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={DotsImage} alt="Image" className="absolute top-0 left-20" />
          </motion.div>

         <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={LinesImage} alt="Image" className="absolute top-60 left-10" />
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={DotsImage} alt="Image" className="absolute right-[180px] top-40" />
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={CubeImage} alt="Image" className="absolute right-28 -top-10" />
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={CubeImage} alt="Image" className="absolute right-10 top-80" />
          </motion.div>
        </div>

        <div className="flex gap-5 mob:flex-col mob:items-center">
          <motion.div
            className="w-[180px] border-[2px] border-p-gray p-3 h-min"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h5 className="font-semibold text-white">Languages</h5>
            <span className="block h-[2px] bg-p-gray -mx-3 my-2"></span>
            <div className="text-p-gray flex flex-wrap justify-between">
              <p>TypeScript</p>
              <p>JavaScript</p>
            </div>
          </motion.div>

          <div className="flex flex-col mob:justify-center mob:flex-row mob:flex-wrap gap-5">
            <motion.div
              className="w-[180px] border-[2px] border-p-gray p-3 h-min"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h5 className="font-semibold text-white">React stuff</h5>
              <span className="block h-[2px] bg-p-gray -mx-3 my-2"></span>
              <div className="text-p-gray flex flex-wrap justify-between">
                <p>Redux</p>
                <p>React Router</p>
                <p>React Forms</p>
              </div>
            </motion.div>

            <motion.div
              className="w-[180px] border-[2px] border-p-gray p-3 h-min"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h5 className="font-semibold text-white">Tools</h5>
              <span className="block h-[2px] bg-p-gray -mx-3 my-2"></span>
              <div className="text-p-gray flex flex-wrap justify-between">
                <p>VSCode</p>
                <p>Figma</p>
                <p>Git/Github</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col mob:justify-center mob:flex-row mob:flex-wrap gap-5">
            <motion.div
              className="w-[180px] border-[2px] border-p-gray p-3 h-min"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h5 className="font-semibold text-white">Frameworks</h5>
              <span className="block h-[2px] bg-p-gray -mx-3 my-2"></span>
              <div className="text-p-gray flex flex-wrap justify-between">
                <p>React</p>
                <p>Next.js</p>
              </div>
            </motion.div>

            <motion.div
              className="w-[180px] border-[2px] border-p-gray p-3 h-min"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h5 className="font-semibold text-white">Other</h5>
              <span className="block h-[2px] bg-p-gray -mx-3 my-2"></span>
              <div className="text-p-gray flex flex-wrap justify-between">
                <p>HTML</p>
                <p>CSS</p>
                <p>Axios</p>
                <p>SCSS</p>
                <p>Tailwind</p>
                <p>REST api</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

