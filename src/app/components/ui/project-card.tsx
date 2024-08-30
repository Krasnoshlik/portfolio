"use client";
import React from "react";
import { Project } from "@/app/types/types.ds";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className=" border-[2px] border-p-gray max-w-[360px] h-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className=" border-b-2 border-p-gray">
        <Image src={project.image} alt="project image" />
      </div>

      <div className=" flex justify-between px-2 py-2 text-p-gray">
        {project.tech.map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      </div>

      <div className=" flex flex-col gap-4 justify-between border-t-[2px] border-p-gray p-4">
        <h4 className=" font-medium text-white text-2xl">{project.name}</h4>
        <p className=" text-p-gray">{project.dis}</p>
        <Link
          className=" py-2 px-4 text-white border border-normal-purple mt-4 hover:text-black hover:bg-normal-purple ease-in-out duration-300"
          href={project.link}
        >
          Live &#8592;
        </Link>
      </div>
    </motion.div>
  );
}
