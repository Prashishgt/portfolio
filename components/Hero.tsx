"use client";
import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import Image from "next/image";
import { ImageBoxIcon, SpeakingEffectIcon, StarBoxIcon } from "@/utils/icons";
import Button from "./common/Button";
import StarFishIconWrapper from "./common/StarFishIcon";

const Hero = () => {
  return (
    <MaxWidthWrapper className=" flex items-center justify-center py-36 relative">
      <StarFishIconWrapper className="-left-12 bottom-0" />
      <div className="flex">
        <div className="space-y-12">
          <div className="h-[203px] w-[203px] relative">
            <Image src={StarBoxIcon} alt="paperCard" fill />
          </div>
          <h2 className="text-[60px] font-semibold">
            I create &lt;/&gt; top notch websites 💻
          </h2>
          <div className="relative  w-72">
            <Button
              btnLabel="See Portfolio"
              onClick={() => alert("Love you")}
            />
            <div className="absolute h-[5.3rem] w-[4.6rem]  top-1/2 -right-20">
              <Image src={SpeakingEffectIcon} alt="clicked" fill />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[537px] w-[537px] relative py-10">
            <Image
              title="Floripa+"
              src={ImageBoxIcon}
              alt="Floripa Mais Logo"
              fill
              className="bg-inherit"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
