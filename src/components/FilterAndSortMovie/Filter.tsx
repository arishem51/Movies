import { useState } from "react";
import GenresList from "../GenresList";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex flex-col shadow rounded-lg border cursor-pointer">
      <button className="py-2 px-2 pr-12" onClick={handleClick}>
        <h6 className="text-xl font-semibold text-left">Filters</h6>
      </button>
      {isOpen && (
        <ul>
          <li className="border-t py-2 px-2 pr-12">
            <h6 className="text-base text-slate-500">Genres</h6>
            <GenresList />
          </li>
        </ul>
      )}
    </div>
  );
}
