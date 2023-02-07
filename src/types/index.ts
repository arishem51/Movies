import { AxiosError } from "axios";

export type Trending = {
  media_type: "all" | "movie" | "tv" | "person";
  time_windown: "day" | "week";
};

export type MovieType = "tv" | "theaters";

type TABS<T> = {
  name: string;
  id: T;
}[];

export type TABS_TRENDING = TABS<Trending["time_windown"]>;

export type TABS_POPLULAR = TABS<MovieType>;

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | string | null;
  release_date?: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
};

export type GenresResponse = {
  genres: { id: string | number; name: string }[];
};

export type ErrorResponse = {
  status_message: string;
  status_code: number;
};

export type QueryError<TData> = AxiosError<TData, ErrorResponse>;
