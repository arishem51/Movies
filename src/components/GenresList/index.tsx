import React from "react";
import { useGenresList } from "../../service/hook/Genres.hook";
import { NumOrStr } from "../../types";

type Props = {
  genreId: NumOrStr;
  setGenreId: React.Dispatch<React.SetStateAction<NumOrStr>>;
};

export default function GenresList({ genreId, setGenreId }: Props) {
  const { data } = useGenresList();

  if (!data?.genres || data.genres.length === 0) {
    return null;
  }

  function renderItem() {
    return data?.genres.map((item) => (
      <div
        className={`px-3 border rounded-[24px] hover:bg-sky-400 hover:text-slate-50 ${
          +item.id === +genreId ? "bg-sky-400 text-slate-50" : ""
        }`}
        key={item.id}
        onClick={() => setGenreId(+item?.id)}
      >
        <span>{item.name}</span>
      </div>
    ));
  }
  return (
    <div className="flex flex-col items-start gap-2 my-2">{renderItem()}</div>
  );
}
