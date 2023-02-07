import { IMAGE_CARD_POSTER_URL } from "../../constant";
import { Movie } from "../../types";

type Props = {
  item: Movie;
  className?: string;
};

export default function MovieCard({ item, className }: Props) {
  return (
    <div
      className={`cursor-pointer w-full rounded-md overflow-hidden shadow-md ${className}`}
      onClick={() => console.log(item)}
    >
      <figure className="">
        <img
          src={`${IMAGE_CARD_POSTER_URL}${item.poster_path}`}
          className="w-full h-72 object-cpver"
        />
      </figure>
      <div className="flex flex-col justify-center px-2 pb-2">
        <h3 className="mt-2">Rating should be here</h3>
        <h3 className="text-slate-900 font-bold line-clamp-2 hover:text-sky-500">
          {item?.title || item?.name}
        </h3>
        <span className="text-stone-800 text-sm">
          {item?.release_date || item?.first_air_date}
        </span>
      </div>
    </div>
  );
}
