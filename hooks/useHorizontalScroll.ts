// useHorizontalScroll.ts
import { useRef } from "react";

const useHorizontalScroll = (scrollSpeed: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout | null = null;

  const startScroll = (direction: number) => {
    scrollInterval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += direction * scrollSpeed;
      }
    }, 10);
  };

  const stopScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  };

  return { containerRef, startScroll, stopScroll };
};

export default useHorizontalScroll;
