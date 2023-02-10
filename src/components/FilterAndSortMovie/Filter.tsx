import React from "react";
import { useState } from "react";
import { useFilterMovieAPI } from "../../Context/FilterMovieContext";
import { NumOrStr } from "../../types";
import GenresList from "../GenresList";

export default function Filter() {
  const [genreId, setGenreId] = useState<NumOrStr>("");
  const [isOpen, setIsOpen] = useState(false);
  const { setGenreFilterId } = useFilterMovieAPI();

  function handleOpenFilter() {
    setIsOpen(!isOpen);
  }

  function handleSearchClick() {
    setGenreFilterId(genreId);
  }

  return (
    <>
      <div className="flex  flex-col shadow rounded-lg border cursor-pointer w-64">
        <button className="py-2 px-2 pr-12" onClick={handleOpenFilter}>
          <h6 className="text-xl font-semibold text-left">Filters</h6>
        </button>
        {isOpen && (
          <ul>
            <li className="border-t py-2 px-2 pr-12">
              <h6 className="text-base text-slate-500">Genres</h6>
              <GenresList setGenreId={setGenreId} genreId={genreId} />
            </li>
          </ul>
        )}
      </div>
      <button
        disabled={!genreId}
        className="btn btn-primary"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </>
  );
}
