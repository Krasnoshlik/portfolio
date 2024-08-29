import React from "react";

export default function SectionNameAndLine({text}: {text: string}) {
  return (
    <div className=" flex items-center gap-5 justify-between">
      <h3 className=" font-medium text-[30px] text-white w-max mob:text-xl">
        <span className=" text-normal-purple ">#</span>{text}
      </h3>
      <span className=" block w-10/12 h-[1.5px] bg-normal-purple"></span>
    </div>
  );
}
