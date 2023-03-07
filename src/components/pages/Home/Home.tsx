import { useDiscoverMovies } from "../../../hooks/useDiscoverMovies";
import { useDiscoverShows } from "../../../hooks/useDiscoverShows";
import { MovieCard } from "../../MovieCard/MovieCard";
import { ShowCard } from "../../ShowCard/ShowCard";
import "./Home.css";

export const Home = () => {
  const { movies } = useDiscoverMovies();
  const { tvShows } = useDiscoverShows();

  return (
    <div className="homePage">
      <h1>React Movies TS</h1>
      <ul className="listOfCards">
        <h2>Descubre nuevas peliculas</h2>
        {movies?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      <ul className="listOfCards">
        <h2>Descubre nuevas series</h2>
        {tvShows?.results.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </ul>
    </div>
  );
};
