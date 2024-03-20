import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { InstagramIcon, StarIcon } from "@/utils/icons";

const Footer = () => {
  return (
    <MaxWidthWrapper className="py-20 border-t-[4px] border-black flex justify-center items-center">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative bg-inherit">
            <Image
              title="Floripa+"
              src={StarIcon}
              alt="Floripa Mais Logo"
              loading="eager"
              fill
              className="bg-inherit"
            />
          </div>
          <h2 className="text-3xl">Prashish</h2>
        </div>
        <h2>Portfolio Ivey, 2024</h2>
        <ul className="flex items-center gap-3">
          <li className="relative h-10 w-10">
            <Image src={InstagramIcon} alt="instagramIcon" fill />
          </li>
          <li className="relative h-10 w-10">
            <Image src={InstagramIcon} alt="instagramIcon" fill />
          </li>
          <li className="relative h-10 w-10">
            <Image src={InstagramIcon} alt="instagramIcon" fill />
          </li>
        </ul>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
