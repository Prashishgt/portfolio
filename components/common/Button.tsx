import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={cn(
        "border-black border-[5px] py-7 px-12 w-72 sm:h-20 h-16 rounded-full flex items-center justify-center bg-button-color font-bold text-2xl hover:bg-muted-button-color",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
