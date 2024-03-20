import { cn } from "@/utils/cn";
import { BallIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ rotateCLassName }: { rotateCLassName: string }) => {
  return (
    <div
      className={cn(
        "h-60 w-[34rem] p-10 bg-white border-black border-[3px] small-box-Shadow flex flex-col justify-between",
        rotateCLassName
      )}
    >
      <h2>“Design is a bridge that connects everyone and everything”</h2>
      <div className="flex gap-5 items-center">
        <div className="rounded-full border-black border-[3px] h-16 w-16 relative ">
          <Image src={BallIcon} alt="profile" fill />
        </div>
        <div>
          <h2>Client Name</h2>
          <p>Backend Developer, Sterling Wells</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
