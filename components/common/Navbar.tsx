"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { StarIcon, StarFishIcon, HamburgerIcon } from "@/utils/icons";
import SmallBox from "./SmallBox";
import { navItems } from "@/data/constant";
import { cn } from "@/utils/cn";
import StarFishIconWrapper from "./StarFishIcon";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick ";

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useOutsideClick(popoverRef, () => {
    setOpen(false);
  });

  return (
    <MaxWidthWrapper className="h-60 flex items-center justify-center border-black border-b-[6px] relative">
      <StarFishIconWrapper className="-right-14 -top-12 " />
      <StarFishIconWrapper className="-left-14 bottom-0 " />

      <nav className="flex items-center sm:pr-0 pr-2 md:pr-6 relative sm:h-24 h-16 w-full sm:w-[46rem] border-[6px] border-black bg-white box-Shadow ">
        <SmallBox className="absolute -top-3 -left-3 z-20" />
        <SmallBox className="absolute -top-3 -right-3 z-20" />
        <SmallBox className="absolute -bottom-3 -left-3 z-20" />
        <SmallBox className="absolute -bottom-3 -right-3 z-20" />
        <div className="flex h-full items-center  gap-4 pl-4  sm:py-5 bg-inherit flex-grow">
          <div className="sm:w-10 sm:h-10 h-7 w-7 relative bg-inherit">
            <Image
              title="Floripa+"
              src={StarIcon}
              alt="Floripa Mais Logo"
              loading="eager"
              fill
              className="bg-inherit"
            />
          </div>
          <h2 className="text-2xl sm:text-4xl flex items-center bg-inherit">
            Prashish
          </h2>
        </div>
        <ul className="lg:flex hidden items-center bg-inherit">
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className={cn(
                "border-black border-l-[4px] flex items-center justify-center px-4 text-xl bg-inherit cursor-pointer transition-all duration-300 hover:underline"
              )}
            >
              {navItem.label}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden relative w-8 h-8 md:h-12 md:w-12 transition-all"
        >
          <Image src={HamburgerIcon} alt="hamburgerIcon" fill />
        </button>
      </nav>

      <div
        ref={popoverRef}
        className={cn(
          "fixed top-0 -right-80 h-full w-80 bg-white z-50 transition-all duration-300",
          {
            "-right-80": !isOpen,
            "right-0": isOpen,
          }
        )}
      >
        <button onClick={() => setOpen(false)}>Close</button>
        {/* Add your drawer content here */}
        <span>sdfsdfg</span>
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
