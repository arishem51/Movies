import Banner from "../Banner";
import Trending from "../Trending";

export default function MainContent() {
  return (
    <main className="container mx-auto">
      <Banner />
      <Trending />
      <Trending />
    </main>
  );
}
