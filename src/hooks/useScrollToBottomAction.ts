import { useScroll } from "framer-motion";
import { useEffect } from "react";

type Props = {
  onBottom: () => void;
};

export default function useScrollToBottomAction({ onBottom }: Props) {
  const { scrollY } = useScroll();

  useEffect(() => {
    const scrollValue =
      document.documentElement.offsetHeight -
      document.documentElement.clientHeight;
    scrollY.on("change", (value) => {
      if (Math.round(value) === scrollValue) {
        onBottom();
      }
    });
    return () => {
      scrollY.stop();
      scrollY.destroy();
    };
  }, [onBottom, scrollY]);
}
