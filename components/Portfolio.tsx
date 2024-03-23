import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import Image from "next/image";
import { StarBoxIcon } from "@/utils/icons";
import PortfolioCard from "./common/PortfolioCard";

const Portfolio = () => {
  return (
    <MaxWidthWrapper className="overflow-visible flex items-center justify-center flex-col py-20 sm:gap-8 gap-12">
      <div className="flex items-center gap-4">
        <h2 className="sm:text-5xl text-3xl font-semibold">
          My <span className="border-black border-b-[3px]">Portfolio</span>
        </h2>
        <div className="h-28 w-28 relative">
          <Image src={StarBoxIcon} alt="paperCard" fill />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center sm:gap-10 gap-12">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </MaxWidthWrapper>
  );
};

export default Portfolio;
