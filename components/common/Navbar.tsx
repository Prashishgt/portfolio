"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { StarIcon } from "@/utils/icons";
import SmallBox from "./SmallBox";
import { navItems } from "@/data/constant";
import { cn } from "@/utils/cn";

const Navbar = () => {
  return (
    <MaxWidthWrapper className="h-60 flex items-center justify-center border-black border-b-[6px]">
      <nav className="relative h-24 w-[46rem] flex border-[6px] border-black bg-white box-Shadow ">
        <SmallBox className="absolute -top-3 -left-3 z-20" />
        <SmallBox className="absolute -top-3 -right-3 z-20" />
        <SmallBox className="absolute -bottom-3 -left-3 z-20" />
        <SmallBox className="absolute -bottom-3 -right-3 z-20" />
        <div className="flex items-center justify-center gap-4 pl-4 py-5 bg-inherit">
          <div className="md:h-20 md:w-20 w-10 h-10 relative bg-inherit">
            <Image
              quality={100}
              title="Floripa+"
              src={StarIcon}
              alt="Floripa Mais Logo"
              loading="eager"
              fill
              className="bg-inherit"
            />
          </div>
          <h2 className="text-4xl flex items-center bg-inherit">Prashish</h2>
        </div>
        <ul className="flex items-center bg-inherit">
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className={cn(
                "border-black border-l-[4px] flex items-center justify-center px-1 text-xl bg-inherit cursor-pointer transition-all duration-300 hover:underline"
              )}
            >
              {navItem.label}
            </li>
          ))}
        </ul>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
