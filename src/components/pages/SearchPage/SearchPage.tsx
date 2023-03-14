import { useSearchMovies } from "../../../hooks/useSearchMovies";
import { CardGridList } from "../../CardGridList/CardGridList";
import { Header } from "../../Header/Header";
import { MovieCard } from "../../MovieCard/MovieCard";
import "./SearchPage.css";

export const SearchPage = () => {
  const { response, setQuery } = useSearchMovies();

  return (
    <>
      <Header />
      <div className="searchPage">
        <input
          type="text"
          placeholder="Avengers, Star Wars..."
          onChange={(event) => setQuery(event.target.value)}
        />
        <CardGridList>
          {response?.results.length === 0 ? (
            <h2>No se encontraron resultados</h2>
          ) : (
            <>
              {response?.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </>
          )}
        </CardGridList>
      </div>
    </>
  );
};
