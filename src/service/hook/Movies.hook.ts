import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { MovieResponse, MovieType, QueryError, Trending } from "../../types";
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
  infinitePopular: () => ["movies", "popular", "infinite"],
} as const;

export function useMoviesPopular(tabId: MovieType) {
  return useQuery<MovieResponse>({
    queryKey: MoviesKey.popular,
    queryFn: () => fetchMoviesPupolar({ page: 1 }),
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

export function useInfiniteMoviePopular() {
  return useInfiniteQuery<MovieResponse, QueryError<MovieResponse>>({
    queryFn: ({ pageParam = 1 }) => fetchMoviesPupolar({ page: pageParam }),
    queryKey: MoviesKey.infinitePopular(),
    getNextPageParam: (lastPage) => {
      return lastPage.total_pages < lastPage.total_results && lastPage.page + 1;
    },
  });
}
