import { Movie } from "../types";
import CardMovie from "./CardMovie";
import { PlaceHolderCardMovie } from "./PlaceholderCard";
type Props = {
  listMovies: Movie[];
  isLoading: boolean;
};

export default function ListMovies({ listMovies, isLoading }: Props) {
  return (
    <div className="flex gap-6 overflow-x-scroll py-2 pt-4 bg-slider bg-contain bg-no-repeat">
      {isLoading || listMovies?.length === 0
        ? new Array(20)
            .fill("_")
            .map((_, index) => <PlaceHolderCardMovie key={index} />)
        : listMovies.map((item) => {
            return <CardMovie key={item.id} item={item} />;
          })}
    </div>
  );
}
