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
    </div>
  );
}
