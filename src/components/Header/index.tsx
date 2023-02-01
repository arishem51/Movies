import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="py-2 bg-slate-800">
      <Link to="/">Header</Link>
      <Link to="/movies">Movies</Link>
    </div>
  );
}
