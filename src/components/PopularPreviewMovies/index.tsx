import { useState } from "react";
import ListPreviewMovies from "../ListPreviewMovies";
import { MovieType } from "../../types";
import ListTabsPopular from "./ListTabsPopular";
import { useMoviesPopular } from "../../service/hook/Movies.hook";
import { useTvMoviesPopular } from "../../service/hook/TvMovies.hook";
import { useAnimationControls } from "framer-motion";

export default function TrendingPreviewMovies() {
  const [tabId, setTabId] = useState<MovieType>("tv");
  const theatersResponse = useMoviesPopular(tabId);
  const tvResponse = useTvMoviesPopular(tabId);
  const controls = useAnimationControls();

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
          onChangeTab={(newTabId) => {
            controls.start({
              opacity: [1, 0, 0, 1],
              transition: { duration: 1 },
            });
            setTimeout(() => {
              setTabId(newTabId);
            }, 500);
          }}
        />
      </div>
      <ListPreviewMovies
        isLoading={isLoading}
        listMovies={data?.results || []}
        controls={controls}
      />
    </section>
  );
}
