import useLastPathName from "../../hooks/useLastPathName";

const SIDEBAR_HEADING: { [key: string]: string } = {
  movie: "Popular Movies",
  "top-rated": "Top Rated Movies",
  upcoming: "Upcoming Movies",
  "now-playing": "Now playing Movies",
};

export default function Sidebar() {
  const lastPathName = useLastPathName();
  return (
    <div>
      <h1 className="font-semibold text-2xl">
        {SIDEBAR_HEADING[lastPathName] || "Movies"}
      </h1>
      <Filter />
    </div>
  );
}

function Filter() {
  return (
    <div className="flex flex-col mt-4">
      <ul className="shadow rounded border py-2 px-2 pr-12 cursor-pointer">
        <h6 className="text-xl font-semibold">Filters</h6>
        <li>
          <div>
            <h6 className="text-base text-slate-500">Generes</h6>
            <div>123123123</div>
          </div>
        </li>
      </ul>
      <button className="btn btn-primary">Search</button>
    </div>
  );
}
