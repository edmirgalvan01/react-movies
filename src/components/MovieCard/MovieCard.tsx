import { useNavigate } from "react-router-dom";
import { MovieResponseType } from "../../types/Movies";
import "./MovieCard.css";

interface Props {
  movie: MovieResponseType;
}

export const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  const imgSrc = `http://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  const imgAlt = `Imagen aluciva a la pelicula ${movie.title}`;

  const handleClick = () => navigate(`/movie/${movie.id}`);

  return (
    <li className="movieCard" onClick={handleClick}>
      <img src={imgSrc} alt={imgAlt} />
      <strong>{movie.title}</strong>
    </li>
  );
};
