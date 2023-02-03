const POSTER_SIZE = [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original",
] as const;

const IMAGE_SIZE = {
  poster: POSTER_SIZE,
};

export const IMAGE_POSTER_URL = `https://image.tmdb.org/t/p/${IMAGE_SIZE.poster["1"]}`;
