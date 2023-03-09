import { useState, useEffect } from "react";
import type { MovieResponseType, DetailsOfMovieType } from "../types/Movies";
import {
  getLatestMovie,
  getPopularMovies,
  getTrendingMovies,
} from "../services/movies.service";

export const useFilterMainMovie = () => {
  const [filter, setFilter] = useState("popular");

  const [filteredMovie, setFilteredMovie] = useState<
    MovieResponseType | DetailsOfMovieType
  >();

  useEffect(() => {
    if (filter === "popular") {
      getPopularMovies().then((response) =>
        setFilteredMovie(response.results[0])
      );
    }
    if (filter === "trending") {
      getTrendingMovies().then((response) =>
        setFilteredMovie(response.results[0])
      );
    }
    if (filter === "latest") {
      getLatestMovie().then((response) => setFilteredMovie(response));
    }
  }, [filter]);

  return { setFilter, filteredMovie };
};
