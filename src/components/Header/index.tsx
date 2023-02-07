import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useHeaderAnimations from "../../hooks/useHeaderAnimations";
import React from "react";

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
        <span className="relative py-2 text-md font-bold text-slate-50 cursor-pointer group">
          Movies
          <div className="absolute top-full hidden flex flex-col py-2 bg-slate-50 rounded whitespace-nowrap text-slate-900 group-hover:flex ">
            <Link
              to="movie"
              className="font-normal py-1 pl-4 pr-16 hover:bg-slate-300"
            >
              Popular
            </Link>
            <Link
              to="movie/now-playing"
              className="font-normal py-1 pl-4 pr-16 hover:bg-slate-300"
            >
              Now Playing
            </Link>
            <Link
              to="movie/upcoming"
              className="font-normal py-1 pl-4 pr-16 hover:bg-slate-300"
            >
              Upcoming
            </Link>
            <Link
              to="movie/top-rated"
              className="font-normal py-1 pl-4 pr-16 hover:bg-slate-300"
            >
              Top Rated
            </Link>
          </div>
        </span>
      </nav>
    </motion.div>
  );
}
