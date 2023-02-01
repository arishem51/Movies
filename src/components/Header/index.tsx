import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="py-4 bg-slate-800 ">
      <nav className="md:container mx-auto flex items-center gap-12">
        <Link
          className="border-2 border-slate-50 p-1 text-xl text-slate-50 font-extrabold"
          to="/"
        >
          Home
        </Link>
        <span className="text-md font-bold text-slate-50 cursor-pointer ">
          Movies
        </span>
      </nav>
    </div>
  );
}
