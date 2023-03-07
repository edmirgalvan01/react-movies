import { useEffect, useState } from "react";
import { discoverMovies } from "../../../services/movies.service";
import { discoverShows } from "../../../services/show.service";
import { ResponseOfMovies } from "../../../types/Movies";
import { ResponseOfShows } from "../../../types/Shows";
import { MovieCard } from "../../MovieCard/MovieCard";
import { ShowCard } from "../../ShowCard/ShowCard";
import "./Home.css";

export const Home = () => {
  const [movies, setMovies] = useState<ResponseOfMovies>();
  const [tvShows, setTvShows] = useState<ResponseOfShows>();

  useEffect(() => {
    discoverMovies().then((data) => setMovies(movies));
  }, []);

  useEffect(() => {
    discoverShows().then((data) => setTvShows(data));
  }, []);

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
