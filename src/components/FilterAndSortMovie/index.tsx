import React from "react";
import { Outlet } from "react-router-dom";
import FilterMovieContext from "../../Context/FilterMovieContext";
import Sidebar from "./Sidebar";

export default function FilterAndSortMovie() {
  return (
    <div className=" flex px-72 md:px-24 py-8 gap-12">
      <FilterMovieContext>
        <Sidebar />
        <Outlet />
      </FilterMovieContext>
    </div>
  );
}
