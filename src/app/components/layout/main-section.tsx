import React from "react";
import Image from "next/image";
import gImage from "../../assets/g.png";
import LinesImage from "../../assets/lines.png";
import DotesImage from "../../assets/dots.png";
import QuotaImage from "../../assets/quote.png";
import Link from "next/link";

export default function MainSection() {
  return (
    <section className=" flex flex-col items-center gap-5">
      <div className=" flex justify-between w-full">
        <div className=" max-w-[530px] flex flex-col gap-5 self-center">
          <h2 className=" text-white font-semibold text-3xl">
            My name Dimitr,I am
            <span className=" text-normal-purple"> React/Next.js </span>
            developer
          </h2>
          <p className=" text-p-gray">
            I am crafting responsive websites where technologies meet
            creativity.
            <br />
            Email:
            <span className=" text-normal-purple">
              dimakrasnoshluk@gmail.com
            </span>
          </p>

          <Link
            href="mailto:dimakrasnoshluk@gmail.com?subject=Your Subject Here&body=Your Pre-written Email Body Here"
            className="animated-button py-2 px-4 text-white border border-normal-purple self-start"
          >
            <span className="button-text">Contact me!!</span>
          </Link>
        </div>

        <div className=" mob:hidden">
          <div className=" relative">
            <Image
              src={LinesImage}
              alt="LinesImage"
              className=" absolute -z-10 top-20"
            />
          </div>
          <Image src={gImage} alt="gImage" className=" z-10" />
          <div className=" relative">
            <Image
              src={DotesImage}
              alt="DotesImage"
              className=" absolute z-10 -top-40 right-6"
            />
          </div>
        </div>
      </div>

      <div>
        <Image src={QuotaImage} alt="QuotaImage" width={500} />
      </div>
    </section>
  );
}
