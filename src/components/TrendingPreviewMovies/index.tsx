import { useState } from "react";
import ListPreviewMovies from "../ListPreviewMovies";
import { Trending } from "../../types";
import ListTabsTrending from "./ListTabsTrending";
import { useMoviesTrending } from "../../service/hook/Movies.hook";

export default function TrendingPreviewMovies() {
  const [tabId, setTabId] = useState<Trending["time_windown"]>("day");
  const { data, isLoading } = useMoviesTrending({
    time_windown: tabId,
    media_type: "movie",
  });
  return (
    <section className="p-4">
      <div className="flex items-center gap-12 px-6">
        <h3 className="text-slate-900 font-semibold text-2xl">Trending</h3>
        <ListTabsTrending
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
