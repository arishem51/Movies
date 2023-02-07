import React from "react";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import { useInfiniteMoviePopular } from "../../service/hook/Movies.hook";
import MovieCard from "../MovieCard";

export default function Movie() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteMoviePopular();
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    scrollYProgress.on("change", (value) => {
      if (value === 1 && hasNextPage) {
        fetchNextPage();
      }
    });
    return () => scrollYProgress.destroy();
  }, [fetchNextPage, hasNextPage, scrollYProgress]);

  function renderItem() {
    return data?.pages.map((page) =>
      page.results.map((item) => <MovieCard item={item} key={item.id} />)
    );
  }

  return (
    <div className="flex-1 grid grid-cols-5 justify-items-center gap-8">
      {renderItem()}
    </div>
  );
}
