"use client";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import MaxWidthWrapper from "./common/MaxWidthWrapper";

import { frontendSkills, groupedFrontendSkills } from "@/data/constant";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { AccordionItem } from "./common/AccordionItem";

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
  const [isAccordionView, setAccordionView] = useState(false);
  const flatSkills = groupedFrontendSkills.flatMap((group) => group.skills);

  return (
    <div className="bg-black relative">
      {isAccordionView ? (
        <MaxWidthWrapper className="overflow-hidden bg-inherit">
          <section
            className="h-36 overflow-x-hidden bg-inherit whitespace-nowrap"
            id="skills-container"
            ref={containerRef}
          >
            <ul className="h-full flex items-center gap-10">
              {[...flatSkills, ...flatSkills, ...flatSkills].map(
                (skillItem, index) => {
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
                }
              )}
            </ul>
          </section>
        </MaxWidthWrapper>
      ) : (
        <MaxWidthWrapper className="flex flex-col gap-4 bg-inherit py-20">
          {groupedFrontendSkills.map((group, index) => (
            <AccordionItem key={index} title={group.category}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ">
                {group.skills.map((skillItem) => {
                  const randomColor =
                    textColors[Math.floor(Math.random() * textColors.length)];

                  return (
                    <li
                      key={skillItem.id}
                      className={cn(
                        "cursor-pointer text-sm sm:text-base flex items-center font-medium p-4 rounded-xl bg-white hover:bg-gray-200 border border-black shadow transition hover:shadow-md"
                        // randomColor
                      )}
                    >
                      {skillItem.skill}
                    </li>
                  );
                })}
              </ul>
            </AccordionItem>
          ))}
        </MaxWidthWrapper>
      )}
      <button
        className="absolute top-4 right-4 px-3 py-1 bg-white text-black rounded-md text-sm font-semibold"
        onClick={() => setAccordionView((prev) => !prev)}
      >
        Toggle View
      </button>
    </div>
  );
};

export default MiniSkills;
