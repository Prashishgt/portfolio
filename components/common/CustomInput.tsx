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
    <div className="flex">
      <label
        htmlFor=""
        className={cn(
          "border-black border-l-[3px]  py-3 px-1 text-xl font-semibold",
          labelClassName
        )}
      >
        {labelName}
      </label>
      <input
        className={cn(
          "bg-transparent border-black border-b-[3px] outline-none h-10 py-1 pl-8 text-lg flex-grow",
          inputClassName
        )}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
