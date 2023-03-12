import { ReactNode } from "react";

import type { MovieResponseType } from "../../types/Movies";
import type { ShowResponseType } from "../../types/Shows";

import { MovieCard } from "../MovieCard/MovieCard";
import { ShowCard } from "../ShowCard/ShowCard";

import "./CardGridList.css";

interface Props {
  children: ReactNode;
}

interface MovieProps {
  listOfMovies?: Array<MovieResponseType>;
}

interface ShowProps {
  listOfShows?: Array<ShowResponseType>;
}

export const CardGridList = ({ children }: Props) => {
  return <div className="cardGridList">{children}</div>;
};

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
