import useLastPathName from "../../hooks/useLastPathName";
import Filter from "./Filter";

const SIDEBAR_HEADING: { [key: string]: string } = {
  movie: "Popular Movies",
  "top-rated": "Top Rated Movies",
  upcoming: "Upcoming Movies",
  "now-playing": "Now playing Movies",
};

export default function Sidebar() {
  const lastPathName = useLastPathName();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-2xl">
        {SIDEBAR_HEADING[lastPathName] || "Movies"}
      </h1>
      <Filter />
      <button className="btn btn-primary">Search</button>
    </div>
  );
}
