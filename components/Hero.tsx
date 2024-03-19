import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import Image from "next/image";
import { ImageBoxIcon, StarBoxIcon } from "@/utils/icons";

const Hero = () => {
  return (
    <MaxWidthWrapper className=" flex items-center justify-center pt-52 pb-36 border border-red-600">
      <div className="border border-green-600 flex">
        <div className="border border-red-600">
          <div className="h-[203px] w-[203px] relative">
            <Image src={StarBoxIcon} alt="paperCard" fill />
          </div>
          <h2 className="text-[80px] font-semibold">
            I create &lt;/&gt; top notch websites 💻
          </h2>
          <div>fsdfsd</div>
        </div>
        <div className="border border-blue py-10 flex items-center justify-center">
          <div className="h-[537px] w-[537px] relative border border-blue-600 py-10">
            <Image
              title="Floripa+"
              src={ImageBoxIcon}
              alt="Floripa Mais Logo"
              fill
              className="bg-inherit"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
