"use client";

import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@/data/loader.json";

const LottieAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    let anim: AnimationItem | undefined = undefined;

    if (containerRef.current) {
      anim = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      const timeoutId = setTimeout(() => {
        setShowAnimation(false);
      }, 5000);

      return () => {
        if (anim) {
          anim.destroy();
        }
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div
      style={{ display: showAnimation ? "block" : "none" }}
      ref={containerRef}
    ></div>
  );
};

export default LottieAnimation;
