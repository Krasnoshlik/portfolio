"use client"
import Image from "next/image";
import React from "react";
import GithubImage from "../../assets/Github.png";
import EmailImage from "../../assets/Email.png";
import Link from "next/link";
import LinkedinImage from '../../assets/linkedin.png';
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer className=" fixed bottom-0 w-full flex justify-center border-t-[2px] border-p-gray py-5 bg-purple-dark"
    initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className=" flex justify-between mob:flex-wrap mob:mx-4 gap-10">
        <h4 className=" text-2xl text-normal-purple">Contact me:</h4>
          <Link
            href={"https://github.com/Krasnoshlik"}
            className=" flex gap-1 items-center text-xl text-p-gray"
          >
            <Image src={GithubImage} alt="GithubImage" />
            <h4>Github</h4>
          </Link>

          <Link
            href={`mailto:dimakrasnoshluk@gmail.com?subject=Your Subject Here&body=Your Pre-written Email Body Here`}
            className="flex gap-1 items-center text-xl text-p-gray"
          >
            <Image src={EmailImage} alt="EmailImage" />
            <h4>Email</h4>
          </Link>

          <Link
            href={`https://www.linkedin.com/in/dimitr-krasnoshlyk-0b5a84241/`}
            className="flex gap-1 items-center text-xl text-p-gray"
          >
            <Image src={LinkedinImage} alt="LinkedinImage" width={32} height={32} className=" max-w-[26px]"/>
            <h4>Linkedin</h4>
          </Link>

      </div>
    </motion.footer>
  );
}
