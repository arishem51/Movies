import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function FilterAndSortMovie() {
  return (
    <div className=" flex px-56 py-8 gap-4">
      <Sidebar />
      <Outlet />
    </div>
  );
}
