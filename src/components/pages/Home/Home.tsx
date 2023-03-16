import { RecommendedMovies } from "../../RecommendedMovies/RecommendedMovies";
import { DiscoverNewShows } from "../../DiscoverNewShows/DiscoverNewShows";
import { FilteredMovie } from "../../FilteredMovie/FilteredMovie";
import { ListOfGenres } from "../../ListOfGenres/ListOfGenres";
import { Filters } from "../../Filters/Filters";
import { Header } from "../../Header/Header";

import { useGetGenreList } from "../../../hooks/useGetGenreList";

import "./Home.css";

export const Home = () => {
  const { genres } = useGetGenreList();

  return (
    <div className="homePage">
      <Header />
      <Filters />
      <FilteredMovie />
      <ListOfGenres genres={genres?.genres} />
      <RecommendedMovies />
      <DiscoverNewShows />
    </div>
  );
};
