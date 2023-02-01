import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ListMovies from "./ListMovies";
import MainContent from "./MainContent";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/">
        <Route index element={<MainContent />} />
        <Route path="movies" element={<ListMovies />} />
      </Route>
    </Routes>
  );
}
