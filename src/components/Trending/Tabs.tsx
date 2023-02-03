import { ListTabs } from ".";
import { Trending } from "../types";

type Props = {
  listTabs: typeof ListTabs;
  tabId: Trending["time_windown"];
  onChangeTab: (tabId: Trending["time_windown"]) => void;
};
export default function Tabs({ listTabs, tabId, onChangeTab }: Props) {
  return (
    <div className="tabs">
      {listTabs.map((item) => (
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
