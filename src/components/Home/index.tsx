import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function Space() {
  return <div style={{ width: "100%", height: 72 }} />;
}

export default function Home() {
  return (
    <div>
      <Header />
      <Space />
      <Outlet />
      <Footer />
    </div>
  );
}
