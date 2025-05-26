import { cn } from "@/utils/cn";
import React, { InputHTMLAttributes } from "react";

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  labelClassName: string;
  inputClassName?: string;
}

const CustomInput = ({
  labelName,
  labelClassName,
  inputClassName,
  ...props
}: ICustomInput) => {
  return (
    <div className="flex items-center">
      <label
        htmlFor=""
        className={cn(
          "border-black border-l-[3px] text-center sm:py-3 py-1 px-1 sm:text-xl text-md font-semibold",
          labelClassName
        )}
      >
        {labelName}
      </label>
      <input
        className={cn(
          "bg-transparent border-black border-b-[3px] outline-none h-10 py-1 sm:pl-8 pl-4 sm:text-lg text-md flex-grow transition-all",
          {
            "!opacity-50 !cursor-not-allowed !text-gray-400": props.disabled,
          },
          inputClassName
        )}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
