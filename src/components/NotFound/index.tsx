import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center font-bold text-3xl">
      Can'not find this page
      <Link className="font-normal text-xl " to="/">
        Go Home
      </Link>
    </div>
  );
}
