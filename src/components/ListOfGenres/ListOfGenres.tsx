import { Link } from "react-router-dom";
import { useGetGenreList } from "../../hooks/useGetGenreList";
import "./ListOfGenres.css";

export const ListOfGenres = () => {
  const { genres } = useGetGenreList();

  return (
    <div className="listOfGenres">
      {genres?.genres.map((gen) => (
        <Link key={gen.id} to="/" className="genreCard">
          {gen.name}
        </Link>
      ))}
    </div>
  );
};
