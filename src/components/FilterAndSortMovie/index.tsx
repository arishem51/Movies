import React from "react";
import { Outlet } from "react-router-dom";
import FilterMovieContext from "../../Context/FilterMovieContext";
import Sidebar from "./Sidebar";

export default function FilterAndSortMovie() {
  return (
    <FilterMovieContext>
      <div className=" flex px-72 py-8 gap-12">
        <Sidebar />
        <Outlet />
      </div>
    </FilterMovieContext>
  );
}
