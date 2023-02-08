import React from "react";
import { Outlet } from "react-router-dom";
import { usePrefetchGenres } from "../../service/hook/Genres.hook";
import Sidebar from "./Sidebar";

export default function FilterAndSortMovie() {
  usePrefetchGenres();
  return (
    <div className=" flex px-72 py-8 gap-12">
      <Sidebar />
      <Outlet />
    </div>
  );
}
