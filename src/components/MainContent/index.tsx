import Banner from "../Banner";
import TrendingPreviewMovies from "../TrendingPreviewMovies";

export default function MainContent() {
  return (
    <main className="container mx-auto">
      <Banner />
      <TrendingPreviewMovies />
      <TrendingPreviewMovies />
    </main>
  );
}
