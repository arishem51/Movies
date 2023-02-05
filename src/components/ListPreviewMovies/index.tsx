import { AnimationControls, motion, AnimatePresence } from "framer-motion";
import CardPreviewMovie from "../CardPreviewMovie";
import PlaceholderCardMovie from "../PlaceholderCard";
import { Movie } from "../../types";
import useListPreviewSlide from "../../hooks/useListPreviewSlide";
type Props = {
  listMovies: Movie[];
  isLoading: boolean;
  controls: AnimationControls;
};

export default function ListMovies({ listMovies, isLoading, controls }: Props) {
  const { scrollContainerRef, opacity, scrollX } = useListPreviewSlide();

  return (
    <div className="bg-slider bg-contain bg-no-repeat">
      <motion.div
        ref={scrollContainerRef}
        animate={controls}
        className="flex relative gap-6 py-4 overflow-x-scroll bg-transparent"
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
      </motion.div>
    </div>
  );
}
