import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieResponse } from "../../types";
const page = 1;
export default function Movie() {
  const infiniteQuery = useInfiniteQuery(
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
  return <div className="flex-1">Movie</div>;
}
