import { useState } from "react";
import type { MovieResponseType, DetailsOfMovieType } from "../types/Movies";
import {
  getLatestMovie,
  getPopularMovies,
  getTrendingMovies,
} from "../services/movies.service";

export const useFilterMainMovie = () => {
  const [filter, setFilter] = useState("popular");
  const [filteredMovie, setMovie] = useState<
    MovieResponseType | DetailsOfMovieType
  >();

  if (filter === "popular") {
    getPopularMovies().then((response) => setMovie(response.results[0]));
  }
  if (filter === "trending") {
    getTrendingMovies().then((response) => setMovie(response.results[0]));
  }
  if (filter === "latest") {
    getLatestMovie().then((response) => setMovie(response));
  }

  return { setFilter, filteredMovie };
};
