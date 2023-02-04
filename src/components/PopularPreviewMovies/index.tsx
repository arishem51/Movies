import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import ListPreviewMovies from "../ListPreviewMovies";
import { ErrorResponse, MovieResponse, MovieType } from "../types";
import ListTabsPopular from "./ListTabsPopular";

export default function TrendingPreviewMovies() {
  const [tabId, setTabId] = useState<MovieType>("tv");

  const theatersResponse = useQuery<
    MovieResponse,
    AxiosError<MovieResponse, ErrorResponse>
  >(
    ["movies", "popular", "movie"],
    async () => {
      const result = await axios.get(`
    https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=1`);
      return result.data;
    },
    {
      enabled: tabId === "theaters",
    }
  );

  const tvResponse = useQuery<
    MovieResponse,
    AxiosError<MovieResponse, ErrorResponse>
  >(
    ["movies", "popular", "tv"],
    async () => {
      const result = await axios.get(`
  https://api.themoviedb.org/3/tv/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&page=1`);
      return result.data;
    },
    {
      enabled: tabId === "tv",
    }
  );

  const isLoading =
    tabId === "theaters" ? theatersResponse.isLoading : tvResponse.isLoading;
  const data = tabId === "theaters" ? theatersResponse.data : tvResponse.data;

  return (
    <section className="p-4">
      <div className="flex items-center gap-12 px-6">
        <h3 className="text-slate-900 font-semibold text-2xl">
          What's Popular
        </h3>
        <ListTabsPopular
          tabId={tabId}
          onChangeTab={(newTabId) => setTabId(newTabId)}
        />
      </div>
      <ListPreviewMovies
        isLoading={isLoading}
        listMovies={data?.results || []}
      />
    </section>
  );
}
