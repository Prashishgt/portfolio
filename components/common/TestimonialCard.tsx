import { cn } from "@/utils/cn";
import { BallIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

interface ITestimonialCard {
  personName: string;
  image: string;
  desc: string;
  company: string;
  rotateCLassName: string;
}

const TestimonialCard = ({
  rotateCLassName,
  personName,
  image,
  desc,
  company,
}: ITestimonialCard) => {
  return (
    <div
      className={cn(
        "md:h-60 sm:h-44 h-36 xl:w-[34rem]   w-full md:p-10 sm:p-5 p-3 bg-white border-black border-[3px] small-box-Shadow flex flex-col justify-between",
        rotateCLassName
      )}
    >
      <h2 className="md:text-lg text-sm font-semibold">{desc}</h2>
      <div className="flex gap-5 items-center">
        <div className="rounded-full border-black border-[3px] h-16 w-16 relative ">
          <Image src={BallIcon} alt="profile" fill />
        </div>
        <div>
          <h2 className="md:text-lg text-sm font-bold">{personName}</h2>
          <p className="md:text-sm text-xs font-medium">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
