import { useState } from "react";

const TABS = [
  {
    name: "Today",
    id: "today",
  },
  {
    name: "This Week",
    id: "thisweek",
  },
];

const DATA = new Array(16).fill({
  name: "Wakanda",
  image:
    "https://www.themoviedb.org/t/p/w220_and_h330_face/uLluouDdIqqtB5Yrvdvt8DzAEs6.jpg",
  date: "Nov 09, 2022",
});

export default function Trending() {
  const [tabId, setTabId] = useState(TABS[0].id);
  return (
    <section className="p-4">
      <div className="flex items-center gap-12">
        <h3 className="text-slate-900 font-semibold text-2xl">Trending</h3>
        <div className="tabs">
          {TABS.map((item) => (
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
      <div className="flex gap-6 overflow-x-scroll py-4 bg-slider bg-cover bg-no-repeat">
        {DATA.map((item) => {
          return (
            <div className="cursor-pointer">
              <figure className="w-40 rounded-xl overflow-hidden">
                <img src={item.image} className="w-full" />
              </figure>
              <div>
                <h3 className="text-slate-900 font-bold mt-2">{item.name}</h3>
                <span className="text-stone-800 text-sm">{item.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
