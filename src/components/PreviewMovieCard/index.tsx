import React from "react";
import { IMAGE_PREVIEW_CARD_POSTER_URL } from "../../constant";
import { Movie } from "../../types";

type Props = {
  item: Movie;
  className?: string;
};

export default function CardPreviewMovie({ item, className }: Props) {
  return (
    <div
      className={`cursor-pointer h-80 ${className}`}
      onClick={() => console.log(item)}
    >
      <figure className="w-40 rounded-xl overflow-hidden">
        <img
          src={`${IMAGE_PREVIEW_CARD_POSTER_URL}${item.poster_path}`}
          className="w-full h-56 object-cover"
        />
      </figure>
      <div className="w-40">
        <h3 className="text-slate-900 font-bold mt-2 line-clamp-2">
          {item?.title || item?.name}
        </h3>
        <span className="text-stone-800 text-sm">
          {item?.release_date || item?.first_air_date}
        </span>
      </div>
    </div>
  );
}
