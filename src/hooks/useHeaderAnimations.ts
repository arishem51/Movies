import { useAnimationControls, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function useHeaderAnimations() {
  const controls = useAnimationControls();
  const { scrollY } = useScroll();
  const scrollRef = useRef(scrollY.get());

  useEffect(() => {
    scrollY.on("change", (latest) => {
      if (latest > scrollRef.current) {
        // Scroll down goes here
        controls.start({ y: "-100%" }, { duration: 0.2, delay: 0.2 });
      } else if (latest < scrollRef.current) {
        // Scroll up goes here
        controls.start({ y: 0 }, { duration: 0.08, ease: "easeOut" });
      }
      scrollRef.current = latest;
    });
    return () => {
      controls.stop();
    };
  });
  return controls;
}
