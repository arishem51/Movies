import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CardPreviewMovie from "../CardPreviewMovie";
import PlaceholderCardMovie from "../PlaceholderCard";
import { Movie } from "../types";
type Props = {
  listMovies: Movie[];
  isLoading: boolean;
};

export default function ListMovies({ listMovies, isLoading }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress, scrollX } = useScroll({
    container: scrollContainerRef,
  });
  const opacity = useTransform(scrollXProgress, [0, 0.3], [1, 0]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex relative gap-6 py-4 overflow-x-scroll bg-slider bg-contain bg-no-repeat"
    >
      {isLoading || listMovies?.length === 0
        ? new Array(20)
            .fill("_")
            .map((_, index) => <PlaceholderCardMovie key={index} />)
        : listMovies.map((item) => {
            return <CardPreviewMovie key={item.id} item={item} />;
          })}
      <motion.div
        className="absolute inset-0 bg-slider-scroll-linearGradient pointer-events-none"
        style={{ opacity, translateX: scrollX }}
      />
    </div>
  );
}
