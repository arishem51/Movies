import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function FilterAndSortMovie() {
  return (
    <div className="flex-1 flex px-24 py-8 gap-4">
      <Sidebar />
      <Outlet />
    </div>
  );
}
