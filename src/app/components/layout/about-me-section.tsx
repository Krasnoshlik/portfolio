"use client";
import React from "react";
import SectionNameAndLine from "../ui/section-name-and-line";
import g2Image from "../../assets/g2.png";
import DotesImage from "../../assets/dots.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section className=" mt-[170px] mob:mb-[100px]">
      <SectionNameAndLine text={"about-me"} />

      <div className=" flex justify-between items-center">
        <p className=" text-p-gray max-w-[515px] text-2xl mob:text-xl">
          Hi, I am Dimitr, a passionate front-end developer based in Plovdiv,
          Bulgaria. With a strong foundation in{" "}
          <span className=" text-normal-purple">Webflow</span>, I have crafted
          15+ responsive websites for clients. <br /> Now, armed with{" "}
          <span className=" text-normal-purple">JavaScript</span>,{" "}
          <span className=" text-normal-purple">React</span>, and{" "}
          <span className=" text-normal-purple">Next.js</span>, I specialize in
          building modern, user-friendly web experiences from the ground up.
        </p>

        <div className=" mob:hidden">
          <motion.div className=" relative"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={DotesImage}
              alt="DotesImage"
              className=" absolute z-10 top-10 right-30"
            />
          </motion.div>
          <Image src={g2Image} alt="g image" />
          <motion.div className=" relative"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={DotesImage}
              alt="DotesImage"
              className=" absolute z-10 -top-40 right-6"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
