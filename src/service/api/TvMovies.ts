import { AxiosInstance } from "axios";

export const TvMoviesAPI = (axios: AxiosInstance, apiKey: string) => {
  return {
    getPopular: () => axios.get(`tv/popular?api_key=${apiKey}&page=1`),
  };
};
