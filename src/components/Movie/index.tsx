import React from "react";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import { useInfiniteMoviePopular } from "../../service/hook/Movies.hook";
import MovieCard from "../MovieCard";
import useScrollToBottomAction from "../../hooks/useScrollToBottomAction";

export default function Movie() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteMoviePopular();

  useScrollToBottomAction({
    onBottom() {
      hasNextPage && fetchNextPage();
    },
  });

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
