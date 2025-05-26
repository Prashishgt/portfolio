import { useEffect, useRef } from "react";

const useInfiniteScroll = (scrollSpeed: number) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const original = container.innerHTML;
    container.innerHTML += original;

    let scrollPos = 0;

    const scroll = () => {
      if (!container) return;

      scrollPos += scrollSpeed;
      container.scrollLeft = scrollPos;

      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      container.innerHTML = original;
    };
  }, [scrollSpeed]);

  return { containerRef };
};

export default useInfiniteScroll;
