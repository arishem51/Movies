import Banner from "../Banner";
import PopularPreviewMovies from "../PopularPreviewMovies";
import TrendingPreviewMovies from "../TrendingPreviewMovies";
import React from "react";

export default function MainContent() {
  return (
    <main className="container mx-auto">
      <Banner />
      <TrendingPreviewMovies />
      <PopularPreviewMovies />
    </main>
  );
}
