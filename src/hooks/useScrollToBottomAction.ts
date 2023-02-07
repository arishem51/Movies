import { useScroll } from "framer-motion";
import { useEffect } from "react";

type Props = {
  onBottom: () => void;
};

export default function useScrollToBottomAction({ onBottom }: Props) {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    scrollYProgress.on("change", (value) => {
      if (value === 1) {
        onBottom();
      }
    });
    return () => {
      scrollYProgress.stop();
      scrollYProgress.destroy();
    };
  }, [onBottom, scrollYProgress]);
}
