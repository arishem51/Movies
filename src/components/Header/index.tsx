import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useHeaderAnimations from "../../hooks/useHeaderAnimations";

export default function Header() {
  const controls = useHeaderAnimations();

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
