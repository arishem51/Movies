import { AxiosInstance } from "axios";
import { Trending } from "../../types";

export const MoviesAPI = (axios: AxiosInstance, apiKey: string) => {
  return {
    getPopular: ({ page }: { page: number }) =>
      axios.get(`movie/popular?api_key=${apiKey}&page=${page}`),
    getTopRated: () => axios.get(`movie/top_rated?api_key=${apiKey}&page=1`),
    getTrending: ({ media_type, time_windown }: Trending) =>
      axios.get(`trending/${media_type}/${time_windown}?api_key=${apiKey}`),
  };
};
