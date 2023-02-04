import { useQuery } from "@tanstack/react-query";
import { MovieResponse, MovieType, Trending } from "../../types";
import {
  fetchMoviesPupolar,
  fetchMoviesTopRated,
  fetchMoviesTrending,
} from "../api";

const MoviesKey = {
  popular: ["movies", "popular"],
  topRated: ["movies", "top-rated"],
  trending: ({ time_windown, media_type }: Trending) => [
    "movies",
    "trending",
    media_type,
    time_windown,
  ],
} as const;

export function useMoviesPopular(tabId: MovieType) {
  return useQuery<MovieResponse>({
    queryKey: MoviesKey.popular,
    queryFn: () => fetchMoviesPupolar(),
    enabled: tabId === "theaters",
  });
}

export function useMoviesTopRated() {
  return useQuery<MovieResponse>({
    queryKey: MoviesKey.topRated,
    queryFn: () => fetchMoviesTopRated(),
  });
}

export function useMoviesTrending(params: Trending) {
  return useQuery<MovieResponse>({
    queryKey: MoviesKey.trending(params),
    queryFn: () => fetchMoviesTrending(params),
  });
}
