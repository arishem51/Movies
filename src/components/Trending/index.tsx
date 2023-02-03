import { useState } from "react";
import useMoviesTrending from "../../service/hook/useMoviesTrending";
import { TABS_TRENDING } from "../types";
import CardMovie from "./CardMovie";
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

export default function Trending() {
  const [tabId, setTabId] = useState(ListTabs[0].id);
  const { data, isLoading } = useMoviesTrending({
    time_windown: tabId,
    media_type: "movie",
  });
  if (isLoading) {
    return null;
  }
  return (
    <section className="p-4">
      <div className="flex items-center gap-12">
        <h3 className="text-slate-900 font-semibold text-2xl">Trending</h3>
        <Tabs
          listTabs={ListTabs}
          tabId={tabId}
          onChangeTab={(newTabId) => setTabId(newTabId)}
        />
      </div>
      <div className="flex gap-6 overflow-x-scroll py-4 bg-slider bg-contain bg-no-repeat">
        {data?.results.map((item) => {
          return <CardMovie key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}
