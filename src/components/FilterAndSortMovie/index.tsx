import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from "react";

export default function FilterAndSortMovie() {
  return (
    <div className=" flex px-72 py-8 gap-12">
      <Sidebar />
      <Outlet />
    </div>
  );
}
