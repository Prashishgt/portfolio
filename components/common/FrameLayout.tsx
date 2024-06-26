import { cn } from "@/utils/cn";
import { ReactNode } from "react";

const FrameLayout = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative sm:w-[33rem] w-full border-black border-[4px] small-box-Shadow bg-white",
        className
      )}
    >
      <div className="absolute -top-[0.22rem] -left-4 border-black border-[2px] w-5"></div>
      <div className="absolute -top-[0.22rem] -right-4 border-black border-[2px] w-5"></div>
      <div className="absolute -bottom-[0.22rem] -right-4 border-black border-[2px] w-5"></div>
      <div className="absolute -bottom-[0.22rem] -left-4 border-black border-[2px] w-5"></div>
      <div className="absolute -top-4 -left-[0.21rem] border-black border-[2px] h-5"></div>
      <div className="absolute -top-4 -right-[0.21rem] border-black border-[2px] h-5"></div>
      <div className="absolute -bottom-4 -left-[0.21rem] border-black border-[2px] h-5"></div>
      <div className="absolute -bottom-4 -right-[0.21rem] border-black border-[2px] h-5"></div>

      {children}
    </div>
  );
};

export default FrameLayout;
