import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import {
  ErrorResponse,
  MovieResponse,
  MovieType,
} from "../../components/types";

export default function useTVPopular(tabId: MovieType) {
  return useQuery<MovieResponse, AxiosError<MovieResponse, ErrorResponse>>(
    ["movies", "popular", "tv"],
    async () => {
      const result = await axios.get(`
      https://api.themoviedb.org/3/tv/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=1`);
      return result.data;
    },
    {
      enabled: tabId === "tv",
    }
  );
}
