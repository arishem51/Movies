import { TABS_TRENDING, Trending } from "../types";

export const LIST_TABS: TABS_TRENDING = [
  {
    name: "Today",
    id: "day",
  },
  {
    name: "This Week",
    id: "week",
  },
];

type Props<T> = {
  tabId: T;
  onChangeTab: (tabId: T) => void;
};
export default function ListTabsTrending({
  tabId,
  onChangeTab,
}: Props<Trending["time_windown"]>) {
  return (
    <div className="tabs">
      {LIST_TABS.map((item) => (
        <a
          className={`tab tab-bordered ${
            item.id === tabId ? "tab-active" : ""
          }`}
          onClick={() => {
            onChangeTab(item.id);
          }}
          key={item.id}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
