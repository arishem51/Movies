import React, { useContext } from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { usePrefetchGenres } from "../service/hook/Genres.hook";
import { NumOrStr } from "../types";

const Context = createContext<
  | {
      genreId: NumOrStr;
      setGenreId: React.Dispatch<React.SetStateAction<NumOrStr>>;
      isSearch: boolean;
      setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | string
>("useFilterMovie must be used under FilterMovieContext");

type Props = PropsWithChildren;

export default function FilterMovieContext({ children }: Props) {
  usePrefetchGenres();
  const [genreId, setGenreId] = useState<NumOrStr>("");
  const [isSearch, setIsSearch] = useState(false);
  const value = {
    genreId,
    setGenreId,
    isSearch,
    setIsSearch,
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
