import React, { useContext } from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { NumOrStr } from "../types";

const Context = createContext<
  | {
      genreId: NumOrStr;
      setGenreId: React.Dispatch<React.SetStateAction<NumOrStr>>;
    }
  | string
>("useFilterMovie must be used under FilterMovieContext");

type Props = PropsWithChildren;

export default function FilterMovieContext({ children }: Props) {
  const [genreId, setGenreId] = useState<NumOrStr>("");
  const value = {
    genreId,
    setGenreId,
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
