import { useQuery } from "@tanstack/react-query";
import { MovieResponse, MovieType } from "../../types";
import { fetchTvMoviesPolular } from "../api";

const TvMoviesKey = {
  getPopular: ["tv-movies", "popular"],
};

export function useTvMoviesPopular(tabId: MovieType) {
  return useQuery<MovieResponse>({
    queryKey: TvMoviesKey.getPopular,
    queryFn: () => fetchTvMoviesPolular(),
    enabled: tabId === "tv",
  });
}
