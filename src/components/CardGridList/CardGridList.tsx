import type { MovieResponseType } from "../../types/Movies";
import type { ShowResponseType } from "../../types/Shows";

import { MovieCard } from "../MovieCard/MovieCard";
import { ShowCard } from "../ShowCard/ShowCard";

import "./CardGridList.css";

interface MovieProps {
  listOfMovies?: Array<MovieResponseType>;
}

interface ShowProps {
  listOfShows?: Array<ShowResponseType>;
}

export const MovieGridList = ({ listOfMovies }: MovieProps) => {
  return (
    <ul className="cardGridList">
      {listOfMovies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export const ShowGridList = ({ listOfShows }: ShowProps) => {
  return (
    <ul className="cardGridList">
      {listOfShows?.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </ul>
  );
};
