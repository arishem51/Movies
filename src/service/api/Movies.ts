import axios from "axios";
import { Trending } from "../../types";

export const MoviesAPI = {
  getPopular: () =>
    axios.get(`
    https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=1`),
  getTopRated: () =>
    axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=1`
    ),
  getTrending: ({ media_type, time_windown }: Trending) =>
    axios.get(
      `https://api.themoviedb.org/3/trending/${media_type}/${time_windown}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    ),
};
