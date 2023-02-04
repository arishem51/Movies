import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import {
  MovieResponse,
  ErrorResponse,
  MovieType,
} from "../../components/types";

export default function useMoviesPopular(tabId: MovieType) {
  return useQuery<MovieResponse, AxiosError<MovieResponse, ErrorResponse>>(
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
