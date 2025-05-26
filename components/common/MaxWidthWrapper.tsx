import { cn } from "@/utils/cn";
import React from "react";

interface IMaxWidthWrapper extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({
  children,
  className,
  ...props
}: IMaxWidthWrapper) => {
  return (
    <div
      className={cn(
        "overflow-hidden mx-auto px-6 sm:px-9 md:px-4 lg:px-40 bg-primary-color container",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
