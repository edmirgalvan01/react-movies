import { RecommendedMovies } from "../../RecommendedMovies/RecommendedMovies";
import { TrendingFilters } from "../../TrendingFilters/TrendingFilters";
import { TopRatedMovies } from "../../TopRatedMovies/TopRatedMovies";
import { ListOfGenres } from "../../ListOfGenres/ListOfGenres";
import { MainMovie } from "../../MainMovie/MainMovie";
import { Filters } from "../../Filters/Filters";
import { Header } from "../../Header/Header";

import "./Home.css";

export const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <Filters />
      <TrendingFilters />
      <MainMovie />
      <ListOfGenres />
      <RecommendedMovies />
      <TopRatedMovies />
    </div>
  );
};
