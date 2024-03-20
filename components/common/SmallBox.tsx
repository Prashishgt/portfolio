import { cn } from "@/utils/cn";
import React from "react";

const SmallBox = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("h-4 w-4 border-[4px] border-black bg-white", className)}
    ></div>
  );
};

export default SmallBox;
