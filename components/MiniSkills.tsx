"use client";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import MaxWidthWrapper from "./common/MaxWidthWrapper";

import { frontendSkills } from "@/data/constant";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { cn } from "@/utils/cn";

const textColors = [
  "text-red-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-pink-400",
  "text-purple-400",
  "text-orange-400",
  "text-cyan-400",
  "text-lime-400",
];

const MiniSkills = () => {
  const scrollSpeed = 1;

  const { containerRef } = useInfiniteScroll(scrollSpeed);

  return (
    <div className="bg-black">
      <MaxWidthWrapper className="overflow-hidden bg-inherit">
        <section
          className="h-36 overflow-x-hidden bg-inherit whitespace-nowrap"
          id="skills-container"
          ref={containerRef}
        >
          <ul className="h-full flex items-center gap-10">
            {[...frontendSkills].map((skillItem, index) => {
              const randomColor =
                textColors[Math.floor(Math.random() * textColors.length)];
              return (
                <li
                  key={index}
                  className={cn(
                    " sm:text-2xl text-lg flex-shrink-0",
                    randomColor ? randomColor : "text-white"
                  )}
                >
                  {skillItem.skill}
                </li>
              );
            })}
          </ul>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default MiniSkills;
