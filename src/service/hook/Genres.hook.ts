import { useQuery } from "@tanstack/react-query";
import { GenresResponse, QueryError } from "../../types";
import { fetchGenresListInMovie } from "../api";

const GenresKey = {
  getListInMovie: ["genres", "movie"],
};

export function useGenresList() {
  return useQuery<GenresResponse, QueryError<GenresResponse>>({
    queryKey: GenresKey.getListInMovie,
    queryFn: () => fetchGenresListInMovie(),
  });
}
