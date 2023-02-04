import { useState } from "react";
import useMoviesTrending from "../../service/hook/useMoviesTrending";
import ListPreviewMovies from "../ListPreviewMovies";
import { TABS_TRENDING } from "../types";
import Tabs from "./Tabs";

export const ListTabs: TABS_TRENDING = [
  {
    name: "Today",
    id: "day",
  },
  {
    name: "This Week",
    id: "week",
  },
];

export default function TrendingPreviewMovies() {
  const [tabId, setTabId] = useState(ListTabs[0].id);
  const { data, isLoading } = useMoviesTrending({
    time_windown: tabId,
    media_type: "movie",
  });
  return (
    <section className="p-4">
      <div className="flex items-center gap-12 px-6">
        <h3 className="text-slate-900 font-semibold text-2xl">Trending</h3>
        <Tabs
          listTabs={ListTabs}
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
