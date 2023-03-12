import { useDiscoverMovies } from "../../../hooks/useDiscoverMovies";
import { MovieGridList } from "../../CardGridList/CardGridList";

import "./RecommendedMoviesPage.css";

export const RecommendedMoviesPage = () => {
  const { movies } = useDiscoverMovies();

  return (
    <div className="recommendedMoviesPage">
      <h1>Peliculas recomendadas</h1>
      <MovieGridList listOfMovies={movies?.results} />
    </div>
  );
};
