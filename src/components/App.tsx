import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainContent from "./MainContent";
import Movie from "./Movie";
import NotFound from "./NotFound";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";
import UpComing from "./UpComing";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/">
        <Route index element={<MainContent />} />
        <Route path="movie">
          <Route index element={<Movie />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="upcoming" element={<UpComing />} />
          <Route path="now-playing" element={<NowPlaying />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
