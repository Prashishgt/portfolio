import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnLabel: React.ReactNode;
  className?: string;
}

const Button = ({ btnLabel, className, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={cn(
        "border-black border-[5px] py-7 px-12 w-72 h-20 rounded-full flex items-center justify-center bg-button-color font-bold text-2xl hover:bg-muted-button-color",
        className
      )}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
