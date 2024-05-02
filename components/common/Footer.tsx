import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { InstagramIcon, StarIcon } from "@/utils/icons";
import { FooterLinksItems } from "@/data/constant";
import Link from "next/link";
import { cn } from "@/utils/cn";

const Footer = () => {
  return (
    <div className="sm:py-20 py-8 border-t-[4px] border-black flex justify-center items-center">
      <MaxWidthWrapper>
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-8 sm:justify-between md:items-center  items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-7 h-7 relative bg-inherit">
              <Image
                title="Floripa+"
                src={StarIcon}
                alt="Floripa Mais Logo"
                loading="eager"
                fill
                className="bg-inherit"
              />
            </div>
            <h2 className="sm:text-3xl text-2xl font-semibold">Prashish</h2>
          </div>
          <h2 className="md:text-xl text-lg font-light">
            Portfolio Ivey, 2024
          </h2>
          <ul className="md:w-auto w-full flex items-center md:justify-normal justify-around md:gap-3">
            {FooterLinksItems.map((footerItem, index) => (
              <li key={footerItem.id}>
                <Link
                  className={cn(
                    "px-4 py-1 border-l-[2px] border-black hover:underline",
                    {
                      "bg-button-color": index == 0,
                      "bg-secondary-color": index % 2 === 1,
                    }
                  )}
                  target="_blank"
                  href={footerItem.href}
                >
                  {footerItem.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
