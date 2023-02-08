import React, { useContext } from "react";
import { createContext, PropsWithChildren, useState } from "react";

const Context = createContext<
  | {
      genreId: string;
      setGenreId: React.Dispatch<React.SetStateAction<string>>;
    }
  | string
>("useFilterMovie must be used under FilterMovieContext");

type Props = PropsWithChildren;

export default function FilterMovieContext({ children }: Props) {
  const [genreId, setGenreId] = useState("");
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
