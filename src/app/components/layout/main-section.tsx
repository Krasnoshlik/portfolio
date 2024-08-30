"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gImage from "../../assets/g.png";
import LinesImage from "../../assets/lines.png";
import DotesImage from "../../assets/dots.png";
import QuotaImage from "../../assets/quote.png";
import Link from "next/link";

export default function MainSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center gap-5"
    >
      <div className="flex justify-between w-full">
        <div
          className="max-w-[530px] flex flex-col gap-5 self-center"
        >
          <motion.h2 className="text-white font-semibold text-3xl"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
            My name Dimitr, I am
            <span className="text-normal-purple"> React/Next.js </span>
            developer
          </motion.h2>

          <motion.p className="text-p-gray"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          >
            I am crafting responsive websites where technologies meet
            creativity.
            <br />
            Email:
            <span className="text-normal-purple">
              dimakrasnoshluk@gmail.com
            </span>
          </motion.p>

          <motion.div 
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          >
          <Link
            href="mailto:dimakrasnoshluk@gmail.com?subject=Your Subject Here&body=Your Pre-written Email Body Here"
            className="animated-button py-2 px-4 text-white border border-normal-purple self-start"
          >
            <span className="button-text">Contact me!!</span>
          </Link>
          </motion.div>
        </div>

        <div className="mob:hidden">
          <motion.div
            className="relative"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={LinesImage}
              alt="LinesImage"
              className="absolute -z-10 top-20"
            />
          </motion.div>

          <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          >
          <Image src={gImage} alt="gImage" className="z-10" />
          </motion.div>

          <motion.div className="relative"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src={DotesImage}
              alt="DotesImage"
              className="absolute z-10 -top-40 right-6"
            />
          </motion.div>
        </div>
      </div>

      <div>
        <Image src={QuotaImage} alt="QuotaImage" width={500} />
      </div>
    </motion.section>
  );
}
