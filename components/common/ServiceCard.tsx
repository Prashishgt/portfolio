import { YellowStarIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="flex flex-col  w-full border-black border-b-[3px]">
      <div className="sm:py-[3.75rem] py-12 sm:px-10 px-4 flex-grow space-y-4 border-black border-b-[3px]">
        <div className="relative sm:h-14 sm:w-14 h-12 w-12">
          <Image src={YellowStarIcon} alt="start" fill />
        </div>
        <h2 className="sm:text-2xl text-xl font-bold">User Research</h2>
        <p className="sm:text-xl text-lg font-medium">
          Services we&apos;re providing that derive 99% result
        </p>
      </div>
      <div className="sm:py-[1.9rem] py-5 sm:px-10 px-4">
        <h2 className="text-2xl font-semibold hover:underline">Learn More</h2>
      </div>
    </div>
  );
};

export default ServiceCard;
