import { FrameLayoutIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

const PortfolioCard = () => {
  return (
    <div className="relative w-[33rem] h-[33rem] border-black border-[4px] ">
      <div className="absolute -top-1 -left-4 border-black border-[3px] w-5"></div>
      <div className="absolute top-0 right-0 w-4 h-4 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-black"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-black"></div>
    </div>
  );
};

export default PortfolioCard;
