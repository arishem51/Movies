import { useState } from "react";
import useMoviesTrending from "../../service/hook/useMoviesTrending";
import { TABS_TRENDING } from "../types";

const Tabs: TABS_TRENDING = [
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
  const [tabId, setTabId] = useState(Tabs[0].id);
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
        <div className="tabs">
          {Tabs.map((item) => (
            <a
              className={`tab tab-bordered ${
                item.id === tabId ? "tab-active" : ""
              }`}
              onClick={() => {
                setTabId(item.id);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-6 overflow-x-scroll py-4 bg-slider bg-contain bg-no-repeat">
        {data?.results.map((item) => {
          return (
            <div className="cursor-pointer">
              <figure className="w-40 rounded-xl overflow-hidden ">
                <img
                  src={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
                  className="w-full h-56 object-cover"
                />
              </figure>
              <div>
                <h3 className="text-slate-900 font-bold mt-2">{item.title}</h3>
                <span className="text-stone-800 text-sm">
                  {item.release_date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
