import { MovieType, TABS_POPLULAR } from "../../types";

export const LIST_TABS: TABS_POPLULAR = [
  {
    name: "On TV",
    id: "tv",
  },
  {
    name: "On Theaters",
    id: "theaters",
  },
];

type Props<T> = {
  tabId: T;
  onChangeTab: (tabId: T) => void;
};
export default function ListTabsPopular({
  tabId,
  onChangeTab,
}: Props<MovieType>) {
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
