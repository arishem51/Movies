import GenresList from "../GenresList";

export default function Filter() {
  return (
    <div className="flex flex-col shadow rounded-lg border cursor-pointer">
      <h6 className="text-xl font-semibold py-2 px-2 pr-12">Filters</h6>
      <ul>
        <li className="border-t py-2 px-2 pr-12">
          <h6 className="text-base text-slate-500">Genres</h6>
          <GenresList />
        </li>
      </ul>
    </div>
  );
}
