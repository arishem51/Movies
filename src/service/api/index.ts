import axios from "axios";
import { Trending } from "../../types";
import { GenresAPI } from "./Genres";
import { MoviesAPI } from "./Movies";
import { TvMoviesAPI } from "./TvMovies";

const BASE_URL = "https://api.themoviedb.org/3/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 2 * 10 * 1000, // 2 minutes
});

const API_KEY = import.meta.env.VITE_API_KEY;

const ServiceAPI = {
  movies: MoviesAPI(instance, API_KEY),
  tvMovies: TvMoviesAPI(instance, API_KEY),
  genres: GenresAPI(instance, API_KEY),
};

// Movies

export async function fetchMoviesPupolar(params: { page: number }) {
  const result = await ServiceAPI.movies.getPopular(params);
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

// TV - Movies

export async function fetchTvMoviesPolular() {
  const result = await ServiceAPI.tvMovies.getPopular();
  return result.data;
}

// Genres

export async function fetchGenresListInMovie() {
  const result = await ServiceAPI.genres.getListInMovies();
  return result.data;
}
