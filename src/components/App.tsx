import React from "react";
import { Routes, Route } from "react-router-dom";
import FilterAndSortMovie from "./FilterAndSortMovie";
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
          <Route element={<FilterAndSortMovie />}>
            <Route index element={<Movie />} />
            <Route path="top-rated" element={<TopRated />} />
            <Route path="upcoming" element={<UpComing />} />
            <Route path="now-playing" element={<NowPlaying />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
