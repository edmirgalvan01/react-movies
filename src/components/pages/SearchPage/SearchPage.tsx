import { useSearchAll } from "../../../hooks/useSearchMovies";
import { CardGridList } from "../../CardGridList/CardGridList";
import { Header } from "../../Header/Header";
import "./SearchPage.css";

export const SearchPage = () => {
  const { response, setQuery } = useSearchAll();

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
          <h2>No se encontraron resultados</h2>
        </CardGridList>
      </div>
    </>
  );
};
