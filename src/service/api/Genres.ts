import { AxiosInstance } from "axios";
import { GenresResponse } from "../../types";

export const GenresAPI = (axios: AxiosInstance, apiKey: string) => {
  return {
    getListInMovies: () =>
      axios.get<GenresResponse>(`genre/movie/list?api_key=${apiKey}`),
  };
};
