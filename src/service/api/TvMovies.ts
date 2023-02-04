import axios from "axios";

export const TvMoviesAPI = {
  getPopular: () =>
    axios.get(`
    https://api.themoviedb.org/3/tv/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=1`),
};
