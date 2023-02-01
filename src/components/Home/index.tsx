import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
