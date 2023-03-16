import { Link } from "react-router-dom";
import { useGetGenreList } from "../../hooks/useGetGenreList";
import { Genre } from "../../types/Genres";
import "./ListOfGenres.css";

interface Props {
  genres?: Array<Genre>;
}

export const ListOfGenres = ({ genres }: Props) => {
  return (
    <div className="listOfGenres">
      {genres?.map((gen) => (
        <Link key={gen.id} to={`/category/${gen.name}`} className="genreCard">
          {gen.name}
        </Link>
      ))}
    </div>
  );
};
