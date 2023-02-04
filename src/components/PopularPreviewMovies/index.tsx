import { useState } from "react";
import useMoviesPopular from "../../service/hook/useMoviesPopular";
import useTVPopular from "../../service/hook/useTVPopular";
import ListPreviewMovies from "../ListPreviewMovies";
import { MovieType } from "../types";
import ListTabsPopular from "./ListTabsPopular";

export default function TrendingPreviewMovies() {
  const [tabId, setTabId] = useState<MovieType>("tv");

  const theatersResponse = useMoviesPopular(tabId);

  const tvResponse = useTVPopular(tabId);

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
