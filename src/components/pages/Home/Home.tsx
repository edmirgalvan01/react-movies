import { TrendingFilters } from "../../TrendingFilters/TrendingFilters";
import { ListOfCardsWithTitle } from "../../ListOfCards/ListOfCards";
import { MainMovie } from "../../MainMovie/MainMovie";
import { MovieCard } from "../../MovieCard/MovieCard";
import { ShowCard } from "../../ShowCard/ShowCard";
import { Filters } from "../../Filters/Filters";
import { Header } from "../../Header/Header";

import { useDiscoverMovies } from "../../../hooks/useDiscoverMovies";
import { useDiscoverShows } from "../../../hooks/useDiscoverShows";

import "./Home.css";

export const Home = () => {
  const { movies } = useDiscoverMovies();
  const { tvShows } = useDiscoverShows();

  return (
    <div className="homePage">
      <Header />
      <Filters />
      <TrendingFilters />
      <MainMovie />
      <ListOfCardsWithTitle title="Descubre nuevas peliculas">
        {movies?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ListOfCardsWithTitle>

      <ListOfCardsWithTitle title="Descubre nuevas series">
        {tvShows?.results.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </ListOfCardsWithTitle>
    </div>
  );
};
