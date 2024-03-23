import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import { SmileIcon } from "@/utils/icons";
import Image from "next/image";
import ServiceTable from "./ServiceTable";

const Services = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center gap-20 py-20">
      <div className="md:w-1/2 w-full flex gap-6">
        <h2 className="flex-grow font-semibold sm:text-xl text-lg leading-9">
          Welcome to my portfolio! I deliver 100% satisfaction and fine results.
          Let&apos;s achieve success together!
        </h2>
        <div className="relative h-16 w-16">
          <Image src={SmileIcon} alt="smileIcon" fill />
        </div>
      </div>
      <ServiceTable />
    </MaxWidthWrapper>
  );
};

export default Services;
