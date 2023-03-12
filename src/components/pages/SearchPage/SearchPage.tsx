import { CardGridList } from "../../CardGridList/CardGridList";
import { Header } from "../../Header/Header";
import "./SearchPage.css";

export const SearchPage = () => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {};

  return (
    <>
      <Header />
      <div className="searchPage">
        <input
          type="text"
          placeholder="Avengers, Star Wars..."
          onChange={handleChange}
        />
        <CardGridList>
          <h2>No se encontraron resultados</h2>
        </CardGridList>
      </div>
    </>
  );
};
