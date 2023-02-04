import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieResponse, MovieType } from "../../types";

export default function useMoviesPopular(tabId: MovieType) {
  return useQuery<MovieResponse>(
    ["movies", "popular"],
    async () => {
      const result = await axios.get(`
    https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=1`);
      return result.data;
    },
    {
      enabled: tabId === "theaters",
    }
  );
}
