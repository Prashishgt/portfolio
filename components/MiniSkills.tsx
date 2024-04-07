"use client";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import MaxWidthWrapper from "./common/MaxWidthWrapper";

import { frontendSkills } from "@/data/constant";

const MiniSkills = () => {
  const scrollSpeed = 5;
  const { containerRef, startScroll, stopScroll } =
    useHorizontalScroll(scrollSpeed);

  return (
    <div className="bg-black">
      <MaxWidthWrapper className="flex items-center justify-center gap-6 bg-inherit">
        <button
          className="text-black"
          onMouseDown={() => startScroll(-1)}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="white"
              d="M14.41 7.41L13 6l-6 6 6 6 1.41-1.41L9.83 12z"
            />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </button>
        <section
          className="h-36 overflow-x-auto bg-inherit"
          id="skills-container"
          ref={containerRef}
          onMouseLeave={stopScroll}
        >
          <ul className="h-full flex items-center sm:gap-28 gap-10">
            {frontendSkills.map((skillItem) => (
              <li key={skillItem.id} className="text-white sm:text-2xl text-lg">
                {skillItem.skill}
              </li>
            ))}
          </ul>
        </section>
        <button
          className="text-black"
          onMouseDown={() => startScroll(1)}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="white"
              d="M14.59 8.59L10 13.17 11.41 14.59 16.83 9.17 16.83 9.17 16.83 9.17 11.41 3.76 10 5.17 14.59 9.76z"
            />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </button>
      </MaxWidthWrapper>
    </div>
  );
};

export default MiniSkills;
