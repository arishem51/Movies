import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const controls = useAnimationControls();
  const { scrollY } = useScroll();
  const scrollRef = useRef(scrollY.get());
  useEffect(() => {
    scrollY.on("change", (latest) => {
      if (latest > scrollRef.current) {
        controls.start({ y: "-100%" }, { duration: 0.5, delay: 0.2 });
      } else if (latest < scrollRef.current) {
        controls.start({ y: 0 }, { duration: 0.5, delay: 0.2 });
      }
      scrollRef.current = latest;
    });
    return () => {
      controls.stop();
    };
  });
  return (
    <motion.div
      animate={controls}
      className="py-4 bg-slate-900 fixed left-0 right-0 z-10"
    >
      <nav className="md:container mx-auto flex items-center gap-12">
        <Link
          className="border-2 border-slate-50 p-1 text-xl text-slate-50 font-extrabold"
          to="/"
        >
          Home
        </Link>
        <span className="text-md font-bold text-slate-50 cursor-pointer ">
          Movies
        </span>
      </nav>
    </motion.div>
  );
}
