import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function useListPreviewSlide() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress, scrollX } = useScroll({
    container: scrollContainerRef,
  });
  const opacity = useTransform(scrollXProgress, [0, 0.3], [1, 0]);
  return { scrollContainerRef, opacity, scrollX };
}
