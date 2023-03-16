import { RecommendedMovies } from "../../RecommendedMovies/RecommendedMovies";
import { TrendingFilters } from "../../TrendingFilters/TrendingFilters";
import { DiscoverNewShows } from "../../DiscoverNewShows/DiscoverNewShows";
import { ListOfGenres } from "../../ListOfGenres/ListOfGenres";
import { MainMovie } from "../../MainMovie/MainMovie";
import { Filters } from "../../Filters/Filters";
import { Header } from "../../Header/Header";

import "./Home.css";
import { useGetGenreList } from "../../../hooks/useGetGenreList";

export const Home = () => {
  const { genres } = useGetGenreList();

  return (
    <div className="homePage">
      <Header />
      <Filters />
      <TrendingFilters />
      <MainMovie />
      <ListOfGenres genres={genres?.genres} />
      <RecommendedMovies />
      <DiscoverNewShows />
    </div>
  );
};
