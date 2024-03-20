import { YellowStarIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="flex flex-col  w-full border-black border-b-[3px]">
      <div className="py-[3.75rem] px-10 flex-grow space-y-4 border-black border-b-[3px]">
        <div className="relative h-14 w-14">
          <Image src={YellowStarIcon} alt="start" fill />
        </div>
        <h2 className="text-2xl font-bold">User Research</h2>
        <p className="text-xl font-medium">
          Services we&apos;re providing that derive 99% result
        </p>
      </div>
      <div className="py-[1.9rem] px-10">
        <h2 className="text-2xl font-semibold">Learn More</h2>
      </div>
    </div>
  );
};

export default ServiceCard;
