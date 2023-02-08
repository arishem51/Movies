import React from "react";
import { useInfiniteMoviePopular } from "../../service/hook/Movies.hook";
import MovieCard from "../MovieCard";
import useScrollToBottomAction from "../../hooks/useScrollToBottomAction";
import { useFilterMovie } from "../../Context/FilterMovieContext";

export default function Movie() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteMoviePopular();
  const { genreId, isSearch } = useFilterMovie();

  useScrollToBottomAction({
    onBottom() {
      hasNextPage && fetchNextPage();
    },
  });

  function renderItem() {
    return data?.pages.map((page) => {
      if (isSearch) {
        return page.results
          .filter((movie) => movie.genre_ids.includes(+genreId))
          .map((movie) => <MovieCard key={movie.id} item={movie} />);
      }

      return page.results.map((item) => (
        <MovieCard item={item} key={item.id} />
      ));
    });
  }

  return (
    <div className="flex-1 grid grid-cols-5 justify-items-center gap-8">
      {renderItem()}
    </div>
  );
}
