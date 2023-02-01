import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">Header</Link>
      <Link to="/movies">Movies</Link>
    </div>
  );
}
