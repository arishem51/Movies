import React, { useContext } from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { usePrefetchGenres } from "../service/hook/Genres.hook";
import { NumOrStr } from "../types";

const Context = createContext<
  | {
      genresFilterId: NumOrStr;
      setGenreFilterId: React.Dispatch<React.SetStateAction<NumOrStr>>;
    }
  | string
>("useFilterMovie must be used under FilterMovieContext");

type Props = PropsWithChildren;

export default function FilterMovieContext({ children }: Props) {
  usePrefetchGenres();
  const [genresFilterId, setGenreFilterId] = useState<NumOrStr>("");
  const value = {
    genresFilterId,
    setGenreFilterId,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useFilterMovie() {
  const value = useContext(Context);
  if (typeof value === "string") {
    throw new Error(value);
  }
  return value;
}
