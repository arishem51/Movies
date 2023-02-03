import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ErrorResponse, MovieResponse, Trending } from "../../components/types";

export default function useMovieTrending({
  time_windown,
  media_type,
}: Trending) {
  return useQuery<MovieResponse, AxiosError<ErrorResponse>>(
    ["movies", "trending", time_windown, media_type],
    async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/trending/${media_type}/${time_windown}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      return result.data;
    }
  );
}
