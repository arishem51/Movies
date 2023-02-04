import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ErrorResponse, MovieResponse } from "../../components/types";
import { AxiosError } from "axios";

export default function useMovieTopRated() {
  return useQuery<MovieResponse, AxiosError<ErrorResponse>>(
    ["movies", "top-rated"],
    async () => {
      const result = await axios.get<MovieResponse>(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=1`
      );
      return result.data;
    }
  );
}
