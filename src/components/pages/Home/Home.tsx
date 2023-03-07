import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../../../consts";
import { ResponseOfMovies } from "../../../types/Movies";
import { ResponseOfShows } from "../../../types/Shows";
import { MovieCard } from "../../MovieCard/MovieCard";
import { ShowCard } from "../../ShowCard/ShowCard";
import "./Home.css";

export const Home = () => {
  const [movies, setMovies] = useState<ResponseOfMovies>();
  const [tvShows, setTvShows] = useState<ResponseOfShows>();

  useEffect(() => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`)
      .then((data) => data.json())
      .then((response) => setMovies(response));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/discover/tv?api_key=${API_KEY}`)
      .then((data) => data.json())
      .then((response) => setTvShows(response));
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
