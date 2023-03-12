import { useDiscoverMovies } from "../../hooks/useDiscoverMovies";
import { ListOfCardsWithTitle } from "../ListOfCards/ListOfCards";
import { MovieCard } from "../MovieCard/MovieCard";
import "./RecommendedMovies.css";

export const RecommendedMovies = () => {
  const { movies } = useDiscoverMovies();

  return (
    <ListOfCardsWithTitle
      title="Recomendados para ti"
      link="/peliculas-recomendadas"
    >
      {movies?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ListOfCardsWithTitle>
  );
};
