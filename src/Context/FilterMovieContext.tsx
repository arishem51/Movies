import React, { useContext } from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { usePrefetchGenres } from "../service/hook/Genres.hook";
import { NumOrStr } from "../types";

type MovieDataProps = { genresFilterId: NumOrStr };

type MovieAPIProps = {
  setGenreFilterId: (newId: NumOrStr) => void;
};

const MovieDataContext = createContext<MovieDataProps>({} as MovieDataProps);

const MovieAPIContext = createContext<MovieAPIProps>({} as MovieAPIProps);

type Props = PropsWithChildren;

export default function FilterMovieContext({ children }: Props) {
  usePrefetchGenres();
  const [genresFilterId, setGenreFilterId] = useState<NumOrStr>("");
  const movieData = {
    genresFilterId,
  };

  const movieAPI = React.useMemo<MovieAPIProps>(() => {
    return {
      setGenreFilterId: (newData) => setGenreFilterId(newData),
    };
  }, []);

  return (
    <MovieDataContext.Provider value={movieData}>
      <MovieAPIContext.Provider value={movieAPI}>
        {children}
      </MovieAPIContext.Provider>
    </MovieDataContext.Provider>
  );
}

export function useFilterMovieData() {
  const value = useContext(MovieDataContext);
  return value;
}

export function useFilterMovieAPI() {
  const value = useContext(MovieAPIContext);
  return value;
}
