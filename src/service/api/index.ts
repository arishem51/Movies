import { Trending } from "../../types";
import { MoviesAPI } from "./Movies";
import { TvMoviesAPI } from "./TvMovies";

const ServiceAPI = {
  movies: MoviesAPI,
  tvMovies: TvMoviesAPI,
};

export async function fetchMoviesPupolar() {
  const result = await ServiceAPI.movies.getPopular();
  return result.data;
}

export async function fetchMoviesTopRated() {
  const result = await ServiceAPI.movies.getTopRated();
  return result.data;
}

export async function fetchMoviesTrending(params: Trending) {
  const result = await ServiceAPI.movies.getTrending(params);
  return result.data;
}

export async function fetchTvMoviesPolular() {
  const result = await ServiceAPI.tvMovies.getPopular();
  return result.data;
}
