import { IMAGE_POSTER_URL } from "../../constant";
import { Movie } from "../types";

type Props = {
  item: Movie;
};

export default function CardMovie({ item }: Props) {
  return (
    <div className="cursor-pointer">
      <figure className="w-40 rounded-xl overflow-hidden ">
        <img
          src={`${IMAGE_POSTER_URL}${item.poster_path}`}
          className="w-full h-56 object-cover"
        />
      </figure>
      <div>
        <h3 className="text-slate-900 font-bold mt-2 line-clamp-2">
          {item.title}
        </h3>
        <span className="text-stone-800 text-sm">{item.release_date}</span>
      </div>
    </div>
  );
}
