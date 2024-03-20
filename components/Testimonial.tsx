import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import TestimonialCard from "./common/TestimonialCard";
import Image from "next/image";
import { NewIcon } from "@/utils/icons";

const Testimonial = () => {
  return (
    <MaxWidthWrapper className="overflow-visible flex flex-col items-center justify-center py-10">
      <div className="w-1/2 text-2xl font-bold relative">
        Here&apos;s what my clients are saying about my work
        <div className="h-8 w-8 absolute right-0">
          <Image src={NewIcon} alt="newIcon" fill />
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-2 gap-x-0 justify-center items-center">
        <TestimonialCard rotateCLassName="rotate-3" />
        <TestimonialCard rotateCLassName="-rotate-3 mt-32" />

        <TestimonialCard rotateCLassName="rotate-3" />
        <TestimonialCard rotateCLassName="-rotate-3 mt-32" />
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonial;
