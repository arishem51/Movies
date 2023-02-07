import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieResponse } from "../../types";
import MovieCard from "../MovieCard";
const page = 1;
export default function Movie() {
  const { data } = useInfiniteQuery(
    ["movie", "popular", "infinite", page],
    async () => {
      const result = await axios.get<MovieResponse>(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`
      );
      return result.data;
    }
  );

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
