"use client";
import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import Image from "next/image";
import { ImageBoxIcon, SpeakingEffectIcon, StarBoxIcon } from "@/utils/icons";
import Button from "./common/Button";
import StarFishIconWrapper from "./common/StarFishIcon";

const Hero = () => {
  const handleDownload = () => {
    const downloadUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "PrashishResume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <MaxWidthWrapper className="flex items-center justify-center overflow-visible sm:py-36 py-12 relative">
      <StarFishIconWrapper className="-left-12 bottom-0" />
      <div className="flex lg:flex-row flex-col items-center lg:justify-between lg:gap-4 sm:gap-0 gap-8">
        <div className="flex flex-col gap-12 h-full">
          <div className="sm:h-[203px] sm:w-[203px] h-40 w-40 relative">
            <Image src={StarBoxIcon} alt="paperCard" fill />
          </div>
          <h2 className="sm:text-5xl text-3xl font-semibold text-wrap">
            I create &lt;/&gt; top notch websites 💻
          </h2>
          <div className="relative  w-72">
            <Button onClick={handleDownload}>See Portfolio</Button>
            <div className="absolute sm:h-[5.3rem] sm:w-[4.6rem] h-14 w-14  top-1/2 -right-20">
              <Image src={SpeakingEffectIcon} alt="clicked" fill />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="sm:h-[537px] sm:w-[537px] w-[300px] h-[300px] relative py-10">
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
