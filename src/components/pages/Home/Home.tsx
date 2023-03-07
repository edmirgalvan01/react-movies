import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY, API_URL } from "../../../../consts";
import { ResponseOfMovies } from "../../../types/Movies";
import { ResponseOfShows } from "../../../types/Shows";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

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
          <li
            key={movie.id}
            className="movieCard"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              style={{ maxWidth: "200px" }}
              src={`http://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              alt={`Imagen aluciva a la pelicula ${movie.title}`}
            />
            <strong>{movie.title}</strong>
          </li>
        ))}
      </ul>

      <ul className="listOfCards">
        <h2>Descubre nuevas series</h2>
        {tvShows?.results.map((show) => (
          <li
            key={show.id}
            className="movieCard"
            onClick={() => navigate(`/show/${show.id}`)}
          >
            <img
              style={{ maxWidth: "200px" }}
              src={`http://image.tmdb.org/t/p/w500/${show?.poster_path}`}
              alt={`Imagen aluciva a la serie ${show.name}`}
            />
            <strong>{show.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
